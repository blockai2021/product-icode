import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { ConsumerPage } from "@/components/interactive-demos";
export const Route = createFileRoute("/demo")({
  validateSearch: (search: Record<string, unknown>): { industry?: string } => {
    const value = search["industry"];
    return typeof value === "string" && ["ppe", "electronics", "home", "fashion"].includes(value)
      ? { industry: value }
      : {};
  },
  head: () =>
    pageHead(
      "消费者扫码体验",
      "Product iCode 消费者数字产品页面：产品信息、安全资料、说明书、保修及独立隐私授权。",
    ),
  component: Page,
});
function Page() {
  const { industry } = Route.useSearch();
  return (
    <SiteShell>
      <ConsumerPage industry={industry ?? "electronics"} />
    </SiteShell>
  );
}
