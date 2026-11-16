import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { LegalPage } from "@/components/legal-pages";
export const Route = createFileRoute("/privacy")({
  head: () => pageHead("隐私政策", "Product iCode 中英双语隐私政策草案与访问统计说明。"),
  component: Page,
});
function Page() { return <SiteShell><LegalPage kind="privacy" /></SiteShell>; }
