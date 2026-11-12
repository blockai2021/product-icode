import { describe, it, expect } from "vitest";
import { demoPolicy, channelServices, packages } from "@/lib/product-demo";
describe("Product iCode demo boundaries", () => {
  it("basic safety information needs no registration", () =>
    expect(demoPolicy.safetyRequiresRegistration).toBe(false));
  it("warranty does not imply marketing consent", () =>
    expect(demoPolicy.warrantyImpliesMarketingConsent).toBe(false));
  it("scanning does not imply marketing consent", () =>
    expect(demoPolicy.scansImplyMarketingConsent).toBe(false));
  it("static codes do not identify real purchase channels", () =>
    expect(demoPolicy.automaticChannelIdentification).toBe(false));
  it("does not claim all-industry formal DPP compliance", () =>
    expect(demoPolicy.universalDppCompliance).toBe(false));
  it("eBay directs consumers to the order seller", () =>
    expect(channelServices("eBay")).toContain("联系订单卖家"));
  it("does not publish unapproved package prices", () =>
    expect(packages.every((p) => !("price" in p))).toBe(true));
});
