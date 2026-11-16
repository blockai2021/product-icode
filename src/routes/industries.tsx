import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { IndustriesPage } from "@/components/discovery-pages";
export const Route = createFileRoute("/industries")({
  head: () => pageHead("行业方案", "Product iCode PPE、消费电子、家居与服装纺织行业方案及模拟产品页面。"),
  component: Page,
});
function Page() { return <SiteShell><IndustriesPage /></SiteShell>; }