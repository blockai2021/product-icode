import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { ResourcesPage } from "@/components/discovery-pages";
export const Route = createFileRoute("/resources")({
  head: () => pageHead("资源中心", "Product iCode DPP 准备清单、GS1 Digital Link 与欧盟合规审核指南框架和摘要。"),
  component: Page,
});
function Page() { return <SiteShell><ResourcesPage /></SiteShell>; }