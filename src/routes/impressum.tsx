import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { LegalPage } from "@/components/legal-pages";
export const Route = createFileRoute("/impressum")({
  head: () => pageHead("Impressum 德国法定信息", "Product iCode 法定实体披露草案与待核实信息。"),
  component: Page,
});
function Page() { return <SiteShell><LegalPage kind="impressum" /></SiteShell>; }
