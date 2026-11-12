import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { GrowthPage } from "@/components/interactive-demos";
export const Route = createFileRoute("/growth")({
  head: () =>
    pageHead("欧洲本地社群增长", "Product iCode Connect 欧洲本地社群增长 交互式模拟演示。"),
  component: Page,
});
function Page() {
  return (
    <SiteShell>
      <GrowthPage />
    </SiteShell>
  );
}
