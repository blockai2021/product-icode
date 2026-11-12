import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { CompliancePage } from "@/components/interactive-demos";
export const Route = createFileRoute("/compliance")({
  head: () => pageHead("中德合规协同", "Product iCode Connect 中德合规协同 交互式模拟演示。"),
  component: Page,
});
function Page() {
  return (
    <SiteShell>
      <CompliancePage />
    </SiteShell>
  );
}
