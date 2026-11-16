import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { DashboardPage } from "@/components/interactive-demos";
export const Route = createFileRoute("/dashboard")({
  head: () => pageHead("品牌看板", "Product iCode Connect 品牌看板 交互式模拟演示。"),
  component: Page,
});
function Page() {
  return (
    <SiteShell>
      <DashboardPage />
    </SiteShell>
  );
}
