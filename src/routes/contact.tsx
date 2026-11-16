import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { ContactPage } from "@/components/company-pages";
export const Route = createFileRoute("/contact")({
  head: () => pageHead("联系 Product iCode", "预览 Product iCode 演示申请，查看联系信息状态。"),
  component: Page,
});
function Page() { return <SiteShell><ContactPage /></SiteShell>; }
