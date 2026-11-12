import { createContext, useContext, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Globe2, Menu, X, Check, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  { to: "/channels", zh: "一码多渠道", en: "Channels", de: "Vertriebskanäle" },
  { to: "/compliance", zh: "欧洲合规", en: "Compliance", de: "Compliance" },
  { to: "/growth", zh: "本地增长", en: "Local growth", de: "Lokales Wachstum" },
  { to: "/dashboard", zh: "品牌管理", en: "Dashboard", de: "Dashboard" },
] as const;
export function SiteShell({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const [menu, setMenu] = useState(false);
  const path = useLocation().pathname;
  return (
    <LocaleContext.Provider value={locale}>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-symbol">
              <ScanLine size={25} />
            </span>
            <span>
              Product <b>iCode</b>
              <small>CONNECT PRODUCTS. CONNECT EUROPE.</small>
            </span>
          </Link>
          <nav className={menu ? "main-nav is-open" : "main-nav"} aria-label="主导航">
            <Link to="/" className={path === "/" ? "active" : ""} onClick={() => setMenu(false)}>
              {locale === "zh" ? "首页" : locale === "de" ? "Start" : "Overview"}
            </Link>
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={path === n.to ? "active" : ""}
                onClick={() => setMenu(false)}
              >
                {n[locale]}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Globe2 size={15} />
            <select
              aria-label="语言 / Language"
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </select>
            <QuoteButton>
              {locale === "zh" ? "预约演示" : locale === "de" ? "Demo buchen" : "Book a demo"}
            </QuoteButton>
            <Button
              className="mobile-menu"
              variant="ghost"
              size="icon"
              aria-label="菜单"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-top">
          <Link to="/" className="brand">
            <span className="brand-symbol">
              <ScanLine />
            </span>
            <span>
              Product <b>iCode</b>
            </span>
          </Link>
          <p>One Code. Every Channel. Local Growth.</p>
          <div>
            <Link to="/demo">
              产品 Demo <ArrowUpRight size={14} />
            </Link>
            <Link to="/compliance">合规与数据</Link>
            <QuoteButton variant="ghost">联系我们</QuoteButton>
          </div>
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
