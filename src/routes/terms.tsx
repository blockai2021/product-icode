import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { LegalPage } from "@/components/legal-pages";
export const Route = createFileRoute("/terms")({
  head: () => pageHead("服务条款", "Product iCode 网站模拟演示及服务条款草案。"),
  component: Page,
});
function Page() { return <SiteShell><LegalPage kind="terms" /></SiteShell>; }
