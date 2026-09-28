// Interaction QA: header, mega menu, search, quick view, bag, product, gallery, mobile menu.
import { chromium } from "playwright";
const out = process.argv[2] || "/tmp/claude-0/qa";
const B = "http://localhost:3000";
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const errs = [];
const watch = (page) => {
  page.on("console", (m) => m.type() === "error" && !/Failed to load resource|ERR_TUNNEL|403/.test(m.text()) && errs.push(m.text()));
  page.on("pageerror", (e) => errs.push("PAGEERROR " + e.message));
};
const shot = (page, n) => page.screenshot({ path: `${out}/flow-${n}.png` });

// Desktop
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  watch(page);
  await page.goto(B + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(900);
  await shot(page, "d1-header-scrolled");
  await page.getByRole("button", { name: "shop", exact: true }).hover();
  await page.waitForTimeout(800);
  await shot(page, "d2-megamenu");
  await page.mouse.move(700, 850);
  await page.waitForTimeout(600);
  await page.getByRole("button", { name: "Search" }).first().click();
  await page.waitForTimeout(700);
  await page.keyboard.type("kimono");
  await page.waitForTimeout(500);
  await shot(page, "d3-search");
  console.log("search results", await page.locator('[aria-label="Search"] li').count());
  await page.keyboard.press("Escape");
  await page.waitForTimeout(600);
  await page.goto(B + "/shop", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await shot(page, "d4-shop");
  const card = page.locator("article").first();
  await card.hover();
  await page.waitForTimeout(700);
  await card.getByRole("button", { name: /Quick view/ }).first().click();
  await page.waitForTimeout(1000);
  await shot(page, "d5-quickview");
  await page.getByRole("button", { name: "Add to bag" }).click();
  await page.waitForTimeout(1000);
  await shot(page, "d6-bag");
  console.log("bag label", await page.getByRole("button", { name: /^Bag,/ }).getAttribute("aria-label"));
  await page.getByRole("button", { name: "Increase quantity" }).first().click();
  await page.waitForTimeout(400);
  console.log("bag label after +", await page.getByRole("button", { name: /^Bag,/ }).getAttribute("aria-label"));
  await page.getByRole("link", { name: "Checkout" }).click();
  await page.waitForTimeout(1500);
  await shot(page, "d7-checkout");
  await page.goto(B + "/products/kimono-royal-bordo-gold", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await shot(page, "d8-product");
  await page.getByRole("button", { name: /Open photo 1/ }).click();
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "Next" }).click();
  await page.waitForTimeout(800);
  await shot(page, "d9-gallery");
  await page.keyboard.press("Escape");
  // Keyboard: tab focus visible
  await page.goto(B + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1600);
  for (let i = 0; i < 3; i++) await page.keyboard.press("Tab");
  await shot(page, "d10-focus");
  // Links: all internal hrefs resolve
  const hrefs = new Set();
  for (const p of ["/", "/shop", "/about", "/collections", "/products/conjunto-royal-orange"]) {
    await page.goto(B + p);
    (await page.$$eval("a[href^='/']", (as) => as.map((a) => a.getAttribute("href")))).forEach((h) => hrefs.add(h.split("#")[0] || "/"));
  }
  const bad = [];
  for (const h of hrefs) {
    const r = await page.request.get(B + h);
    if (r.status() >= 400) bad.push(`${h} ${r.status()}`);
  }
  console.log("internal links", hrefs.size, "broken", bad);
  await ctx.close();
}
// Mobile
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  watch(page);
  await page.goto(B + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await shot(page, "m1-hero");
  await page.getByRole("button", { name: "Menu" }).click();
  await page.waitForTimeout(1000);
  await shot(page, "m2-menu");
  await page.getByRole("button", { name: "Close" }).first().click();
  await page.waitForTimeout(700);
  await page.goto(B + "/products/conjunto-royal-orange", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await shot(page, "m3-product");
  await page.getByRole("button", { name: "Add to bag" }).click();
  await page.waitForTimeout(1000);
  await shot(page, "m4-bag");
  await page.goto(B + "/shop/kimonos", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await shot(page, "m5-category");
  await ctx.close();
}
// Tablet
{
  const ctx = await browser.newContext({ viewport: { width: 834, height: 1112 } });
  const page = await ctx.newPage();
  watch(page);
  await page.goto(B + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await shot(page, "t1-hero");
  console.log("tablet overflow", await page.evaluate(() => document.documentElement.scrollWidth - innerWidth));
  await ctx.close();
}
console.log("console errors", [...new Set(errs)]);
await browser.close();
