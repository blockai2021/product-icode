import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { CasesPage } from "@/components/discovery-pages";
export const Route = createFileRoute("/cases")({
  head: () => pageHead("客户案例 · 模拟场景", "Product iCode 多渠道与中德合规协同模拟案例，非真实客户成果。"),
  component: Page,
});
function Page() { return <SiteShell><CasesPage /></SiteShell>; }