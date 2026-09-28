import { chromium } from "playwright";
const out = process.argv[2] || "/tmp/claude-0/qa";
const pages = (process.argv[3] || "/").split(",");
const vps = { desktop: { width: 1440, height: 900 }, tablet: { width: 834, height: 1112 }, mobile: { width: 390, height: 844 } };
const which = (process.argv[4] || "desktop,mobile").split(",");
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
for (const name of which) {
  const ctx = await browser.newContext({ viewport: vps[name], deviceScaleFactor: 1, hasTouch: name === "mobile", isMobile: name === "mobile" });
  const page = await ctx.newPage();
  const errs = [];
  page.on("console", (m) => m.type() === "error" && !/Failed to load resource|ERR_TUNNEL|403/.test(m.text()) && errs.push(m.text()));
  page.on("pageerror", (e) => errs.push("PAGEERROR " + e.message));
  for (const p of pages) {
    await page.goto("http://localhost:3000" + p, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2200);
    await page.screenshot({ path: `${out}/${name}${p.replace(/[\/?=]/g, "_") || "_home"}-fold.png` });
    const h = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < h; y += 400) { await page.evaluate((y) => window.scrollTo(0, y), y); await page.waitForTimeout(120); }
    await page.waitForTimeout(1500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${out}/${name}${p.replace(/[\/?=]/g, "_") || "_home"}-full.png`, fullPage: true });
    if (process.env.SEG) {
      const seg = vps[name].height * 2;
      for (let y = 0, k = 0; y < h; y += seg, k++) {
        await page.screenshot({ path: `${out}/${name}${p.replace(/[\/?=]/g, "_")}-seg${String(k).padStart(2, "0")}.png`, fullPage: true, clip: { x: 0, y, width: vps[name].width, height: Math.min(seg, h - y) } });
      }
    }
    const ov = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    console.log(name, p, "height", h, "hOverflow", ov);
  }
  if (errs.length) console.log("ERRORS", name, [...new Set(errs)].slice(0, 10));
  await ctx.close();
}
await browser.close();
