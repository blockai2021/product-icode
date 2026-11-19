import { describe, expect, it } from "vitest";
import { dppDemo } from "@/lib/dpp-demo";

describe("DPP illustrative passport", () => {
  it("uses the specified demo product identifier", () => {
    expect(dppDemo.identifier).toBe("DEMO-BAT-001");
    expect(dppDemo.tabs[0].rows[1].value).toEqual(["DEMO-BAT-001", "DEMO-BAT-001", "DEMO-BAT-001"]);
  });
  it("keeps data unverified in all languages", () => {
    expect(dppDemo.verification).toBe("NOT_VERIFIED");
    expect(dppDemo.tabs[1].rows[3].value).toEqual(["未核验", "Not verified", "Nicht verifiziert"]);
  });
  it("uses the specified initial version across lifecycle and product data", () => {
    expect(dppDemo.version).toBe("V1.0");
    expect(dppDemo.tabs[0].rows[5].value).toEqual(["V1.0", "V1.0", "V1.0"]);
    expect(dppDemo.tabs[2].rows[3].value).toEqual(["V1.0", "V1.0", "V1.0"]);
  });
});