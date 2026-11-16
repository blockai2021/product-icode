import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { AboutPage } from "@/components/company-pages";
export const Route = createFileRoute("/about")({
  head: () => pageHead("关于 Product iCode", "中德协作服务设计、产品数字身份与欧洲市场视角。"),
  component: Page,
});
function Page() { return <SiteShell><AboutPage /></SiteShell>; }
