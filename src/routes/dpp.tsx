import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, pageHead } from "@/components/site-shell";
import { DppPage } from "@/components/dpp-page";

export const Route = createFileRoute("/dpp")({
  head: () => {
    const head = pageHead("Digital Product Passport (DPP) Solutions", "Explore Product Ident DPP for structured product data, digital product passports, supply-chain information and lifecycle management.");
    return { ...head, meta: [...head.meta, { property: "og:url", content: "https://product-icode.lovable.app/dpp" }], links: [{ rel: "canonical", href: "https://product-icode.lovable.app/dpp" }] };
  },
  component: Page,
});

function Page() { return <SiteShell><DppPage /></SiteShell>; }