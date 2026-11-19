<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project architecture
- Keep DPP presentation and literal localized demo data in dedicated browser-safe modules; integration capabilities are illustrative and must not affect Connect data or functionality.
- Content pages use individual TanStack file routes and a shared SiteShell; this keeps navigation typed and every page independently addressable.
- Keep demonstrations browser-local without storage or network submissions; the requested simulated experience must not collect real personal data.
- Share channel service logic in product-demo.ts and visuals in reusable presentation modules; this keeps purchase-channel behavior consistent across demos.
- Define presentation colors and layouts in src/styles.css with semantic OKLCH tokens; this keeps all pages visually consistent.
- Serve company logo originals from public/brand/product-icode through a shared BrandLogo; local static references keep the uploaded artwork consistent across pages.

- Company and legal content uses shared browser-safe presentation modules and individual leaf routes; verified legal facts must replace clearly labelled drafts before final legal publication.
- Decorative motion uses intersection observation and transform/opacity with reduced-motion fallbacks; numeric demo values stay stable in accessibility labels.
- Discovery pages and homepage density blocks share a browser-safe presentation module; industry example links pass the existing validated demo search parameter, avoiding duplicated demo behavior.
