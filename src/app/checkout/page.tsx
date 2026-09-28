import type { Metadata } from "next";
import { CheckoutSummary } from "@/components/commerce/CheckoutSummary";

export const metadata: Metadata = { title: "Checkout", robots: { index: false } };

export default function Checkout() {
  return <CheckoutSummary />;
}
