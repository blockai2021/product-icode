import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { HomePage } from "@/components/home-page";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "一码通欧洲，合规促增长",
      "Product iCode Connect 连接欧洲多渠道销售、产品合规、消费者服务及本地社群增长。",
    ),
  component: Index,
});
function Index() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
