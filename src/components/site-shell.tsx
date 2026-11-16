import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Globe2, Menu, X, Check, ChevronDown, ScanLine, ShieldCheck, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "./brand-logo";
import { SiteMotion } from "./site-motion";
export type Locale = "zh" | "en" | "de";
const LocaleContext = createContext<Locale>("zh");
export function useCopy() {
  const locale = useContext(LocaleContext);
  return (zh: string, en: string, de?: string) =>
    locale === "zh" ? zh : locale === "de" ? (de ?? en) : en;
}
export function DemoBadge() {
  return (
    <span className="demo-badge">
      <span /> DEMO DATA · 模拟演示
    </span>
  );
}
export function QuoteButton({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "outline" | "ghost";
}) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const t = useCopy();
  return (
    <>
      <Button
        variant={variant}
        onClick={() => {
          setSent(false);
          setOpen(true);
        }}
      >
        {children}
        <ArrowUpRight size={16} />
      </Button>
      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <section
            className="quote-modal"
            role="dialog"
            aria-modal="true"
            aria-label="预约产品演示"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="modal-close"
              aria-label="关闭"
              onClick={() => setOpen(false)}
            >
              <X />
            </Button>
            {sent ? (
              <div className="confirmation">
                <Check size={36} />
                <h2>{t("演示申请已预览", "Request previewed", "Anfrage angezeigt")}</h2>
                <p>
                  {t(
                    "这是模拟表单，信息未发送或保存。",
                    "This is a demo form. No information was sent or saved.",
                    "Demo-Formular: Es wurden keine Daten versendet oder gespeichert.",
                  )}
                </p>
              </div>
            ) : (
              <>
                <span className="eyebrow">LET’S CONNECT</span>
                <h2>
                  {t(
                    "开启您的欧洲连接",
                    "Connect your products to Europe",
                    "Verbinden Sie Ihre Produkte mit Europa",
                  )}
                </h2>
                <p>
                  {t(
                    "告诉我们您的需求，预览产品演示申请。",
                    "Tell us about your needs. Preview a demo request.",
                    "Erzählen Sie uns von Ihrem Bedarf.",
                  )}
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <label>
                    {t("姓名", "Name")}
                    <input required name="name" placeholder={t("您的姓名", "Your name")} />
                  </label>
                  <label>
                    {t("工作邮箱", "Work email", "Geschäftliche E-Mail")}
                    <input type="email" required name="email" placeholder="you@company.com" />
                  </label>
                  <label>
                    {t("企业名称", "Company", "Unternehmen")}
                    <input
                      required
                      name="company"
                      placeholder={t("您的品牌或公司", "Your brand or company")}
                    />
                  </label>
                  <label>
                    {t("关注的服务", "Service interest", "Interesse")}
                    <select>
                      <option>Product iCode Connect</option>
                      <option>Digital Identity</option>
                      <option>Compliance Connect</option>
                      <option>Local Growth</option>
                    </select>
                  </label>
                  <small>
                    {t(
                      "模拟表单 · 不发送或存储个人信息",
                      "Demo form · No personal data is sent or stored",
                      "Demo-Formular · Keine Datenspeicherung",
                    )}
                  </small>
                  <Button type="submit">
                    {t("预览演示申请", "Preview request", "Anfrage anzeigen")}
                    <ArrowRight />
                  </Button>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}
const nav = [
  { to: "/channels", zh: "一码多渠道", en: "Channels", de: "Vertriebskanäle", icon: ScanLine, desc: "统一产品身份，连接销售触点。", enDesc: "One identity across sales touchpoints." },
  { to: "/compliance", zh: "欧洲合规", en: "Compliance", de: "Compliance", icon: ShieldCheck, desc: "产品资料与专业审核有序协同。", enDesc: "Coordinate product data and review." },
  { to: "/growth", zh: "本地增长", en: "Local growth", de: "Lokales Wachstum", icon: Users, desc: "以服务连接欧洲本地社群。", enDesc: "Connect local communities through service." },
  { to: "/dashboard", zh: "品牌看板", en: "Brand dashboard", de: "Dashboard", icon: BarChart3, desc: "查看产品连接与品牌互动数据。", enDesc: "View product and engagement demo data." },
] as const;
const discoveryNav = [
  { to: "/industries", zh: "行业方案", en: "Industries", de: "Branchen" },
  { to: "/cases", zh: "客户案例", en: "Cases", de: "Szenarien" },
  { to: "/resources", zh: "资源中心", en: "Resources", de: "Wissen" },
  { to: "/about", zh: "关于我们", en: "About us", de: "Über uns" },
] as const;
export function SiteShell({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const [menu, setMenu] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !solutionsRef.current?.contains(event.target)) setSolutionsOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  const path = useLocation().pathname;
  return (
    <LocaleContext.Provider value={locale}>
      <header className="site-header">
        <div className="utility-bar"><div className="utility-inner">
          <span className="gs1-badge" title={locale === "zh" ? "架构示意，非 GS1 官方认证" : "Architecture demo, not GS1 certification"}>GS1 Digital Link · {locale === "zh" ? "架构示意" : "DEMO"}</span>
          <span className="utility-mission">{locale === "zh" ? "服务中国品牌出海欧洲" : locale === "de" ? "Chinesische Marken mit Europa verbinden" : "Connecting Chinese brands to Europe"}</span>
          <span className="utility-phone">{locale === "zh" ? "欧洲电话：待核实" : locale === "de" ? "EU-Telefon: noch unbestätigt" : "Europe phone: pending verification"}</span>
          <label className="utility-language"><Globe2 size={13} /><select aria-label="语言 / Language" value={locale} onChange={(e) => setLocale(e.target.value as Locale)}><option value="zh">中文</option><option value="en">EN</option><option value="de">DE</option></select></label>
        </div></div>
        <div className="header-inner">
          <Link to="/" className="brand">
            <span>
              <BrandLogo />
              <small>CONNECT PRODUCTS. CONNECT EUROPE.</small>
            </span>
          </Link>
          <nav className={menu ? "main-nav is-open" : "main-nav"} aria-label="主导航">
            <div className="solutions-nav" ref={solutionsRef} onPointerEnter={(event) => {
              if (event.pointerType === "mouse" && window.matchMedia("(min-width: 1101px)").matches) setSolutionsOpen(true);
            }} onPointerLeave={(event) => {
              if (event.pointerType === "mouse" && window.matchMedia("(min-width: 1101px)").matches) setSolutionsOpen(false);
            }} onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setSolutionsOpen(false);
            }} onKeyDown={(event) => {
              if (event.key === "Escape") { setSolutionsOpen(false); solutionsRef.current?.querySelector("button")?.focus(); }
            }}>
              <Button variant="ghost" aria-expanded={solutionsOpen} aria-controls="solutions-links" onClick={() => setSolutionsOpen((open) => !open)} className={nav.some(n => n.to === path) ? "solutions-trigger active" : "solutions-trigger"}>{locale === "zh" ? "解决方案" : locale === "de" ? "Lösungen" : "Solutions"}<ChevronDown size={14} /></Button>
              {solutionsOpen && <div id="solutions-links" className="solutions-dropdown">
                <div className="solution-grid">{nav.map(n => <Link key={n.to} to={n.to} onClick={() => { setMenu(false); setSolutionsOpen(false); }} className={n.to === "/compliance" ? "solution-link solution-highlight" : "solution-link"}><n.icon /><span><b>{n[locale]}</b><small>{locale === "zh" ? n.desc : n.enDesc}</small><em>{locale === "zh" ? "了解更多" : locale === "de" ? "Mehr erfahren" : "Learn more"}<ArrowRight size={13} /></em></span></Link>)}</div>
                <div className="solution-promotion"><span>{locale === "zh" ? "不确定从哪里开始？5 分钟在线 Demo" : locale === "de" ? "Wo anfangen? 5-Minuten-Demo" : "Where to start? A 5-minute demo"}</span><Button asChild variant="link"><Link to="/demo" onClick={() => { setMenu(false); setSolutionsOpen(false); }}>{locale === "zh" ? "打开体验" : locale === "de" ? "Demo öffnen" : "Open demo"}<ArrowRight size={14} /></Link></Button></div>
              </div>}
            </div>
            {discoveryNav.map(n => <Link key={n.to} to={n.to} className={path === n.to ? "active" : ""} onClick={() => { setMenu(false); setSolutionsOpen(false); }}>{n[locale]}</Link>)}
            <div className="mobile-nav-cta"><QuoteButton>{locale === "zh" ? "预约演示" : locale === "de" ? "Demo buchen" : "Book a demo"}</QuoteButton><small>{locale === "zh" ? "欧洲联系电话待核实补充" : "Europe phone: pending verification"}</small></div>
          </nav>
          <div className="header-actions">
            <Button asChild variant="outline" className="header-demo"><Link to="/demo">{locale === "zh" ? "查看演示" : locale === "de" ? "Demo ansehen" : "View demo"}<ArrowRight size={14} /></Link></Button>
            <QuoteButton>
              {locale === "zh" ? "预约演示" : locale === "de" ? "Demo buchen" : "Book a demo"}
            </QuoteButton>
            <Button
              className="mobile-menu"
              variant="ghost"
              size="icon"
              aria-label="菜单"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      <main>{children}<SiteMotion /></main>
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand"><Link to="/" className="brand"><BrandLogo /></Link><p>One Code. Every Channel.<br />Local Growth.</p><span>中国 × 德国 · 连接欧洲</span></div>
          <div><h3>{locale === "zh" ? "解决方案" : "Solutions"}</h3>{nav.map(n => <Link to={n.to} key={n.to}>{n[locale]}</Link>)}<Link to="/demo">{locale === "zh" ? "产品演示" : "Product demo"}<ArrowUpRight size={13} /></Link></div>
           <div><h3>{locale === "zh" ? "公司" : "Company"}</h3>{discoveryNav.map(n => <Link to={n.to} key={n.to}>{n[locale]}</Link>)}<Link to="/contact">{locale === "zh" ? "联系我们" : "Contact us"}</Link><QuoteButton variant="ghost">{locale === "zh" ? "预约演示" : "Book a demo"}</QuoteButton></div>
          <div><h3>{locale === "zh" ? "法务与信任" : "Legal & trust"}</h3><Link to="/privacy">隐私政策 / Privacy Policy</Link><Link to="/impressum">Impressum</Link><Link to="/terms">服务条款 / Terms</Link><small>{locale === "zh" ? "法定信息待核实补充" : "Legal details pending verification"}</small></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Product iCode. All rights reserved.</span>
          <span>所有数据、产品及网络为模拟场景，非实际认证或合作声明。</span>
          <span>中国 × 德国 · 连接欧洲</span>
        </div>
      </footer>
    </LocaleContext.Provider>
  );
}
export function PageHeading({
  eyebrow,
  zh,
  en,
  de,
  description,
}: {
  eyebrow: string;
  zh: string;
  en: string;
  de?: string;
  description: string;
}) {
  const t = useCopy();
  return (
    <div className="page-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{t(zh, en, de)}</h1>
      <p>{description}</p>
      <DemoBadge />
    </div>
  );
}
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Product iCode` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Product iCode` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
