import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { ChannelsPage } from "@/components/interactive-demos";
export const Route = createFileRoute("/channels")({
  head: () => pageHead("一码多渠道", "Product iCode Connect 一码多渠道 交互式模拟演示。"),
  component: Page,
});
function Page() {
  return (
    <SiteShell>
      <ChannelsPage />
    </SiteShell>
  );
}
