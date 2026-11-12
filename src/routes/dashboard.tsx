import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { DashboardPage } from "@/components/interactive-demos";
export const Route = createFileRoute("/dashboard")({
  head: () => pageHead("品牌管理后台", "Product iCode Connect 品牌管理后台 交互式模拟演示。"),
  component: Page,
});
function Page() {
  return (
    <SiteShell>
      <DashboardPage />
    </SiteShell>
  );
}
