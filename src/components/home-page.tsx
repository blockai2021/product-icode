import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Users,
  Globe2,
  Headphones,
  Check,
  Footprints,
  Monitor,
  House,
  Shirt,
  ChevronRight,
  FileCheck2,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopy, QuoteButton, DemoBadge } from "./site-shell";
import { EcosystemVisual, ChannelNetwork, ProductPhone, product } from "./product-visuals";
import footwear from "@/assets/safety-footwear.jpg";
import smartHome from "@/assets/smart-home.jpg";
import textiles from "@/assets/textiles.jpg";
import { packages, workflow, owners } from "@/lib/product-demo";
import { GrowthWheel, AnalyticsPanel, TeamArchitecture } from "./interactive-demos";
import { CapabilityBar, Testimonials, HomeFAQ, ActionSummary } from "./discovery-pages";
const features = [
  {
    icon: ScanLine,
    num: "01",
    title: "一码，多渠道",
    en: "One code. Every channel.",
    desc: "统一产品数字身份，连接欧洲线上与线下销售渠道。",
    to: "/channels",
  },
  {
    icon: ShieldCheck,
    num: "02",
    title: "合规，有序协同",
    en: "Compliance, connected.",
    desc: "产品资料、数字标签与审核流程，中德团队高效协作。",
    to: "/compliance",
  },
  {
    icon: Headphones,
    num: "03",
    title: "服务，直达消费者",
    en: "Service beyond the sale.",
    desc: "从使用说明到保修售后，让产品服务触手可及。",
    to: "/demo",
  },
  {
    icon: Users,
    num: "04",
    title: "增长，扎根本地",
    en: "Growth, built locally.",
    desc: "连接欧洲本地社群，让每一次互动建立长期关系。",
    to: "/growth",
  },
] as const;
export function HomePage() {
  const t = useCopy();
  return (
    <>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="hero-eyebrow">
              <span className="status-dot" />
              {t(
                "为中国品牌，连接欧洲市场",
                "BUILT FOR BRANDS. CONNECTED TO EUROPE.",
                "FÜR MARKEN. MIT EUROPA VERBUNDEN.",
              )}
            </span>
            <h1>
              {t("一码通欧洲，", "One Code.", "Ein Code.")}
              <br />
              <span>{t("合规促增长", "Every Channel.", "Alle Kanäle.")}</span>
            </h1>
            <p className="hero-tagline">One Code. Every Channel. Local Growth.</p>
            <p className="hero-description">
              {t(
                "通过一个二维码，连接欧洲销售渠道、产品合规、消费者服务与本地社群。让中国品牌不止进入欧洲，更在欧洲持续增长。",
                "Connect European sales channels, product compliance, consumer services and local communities through one product code. Enter Europe. Grow locally.",
                "Verbinden Sie Vertriebskanäle, Produkt-Compliance, Verbraucherservices und lokale Communities mit einem Produktcode.",
              )}
            </p>
            <div className="hero-buttons">
              <Button size="lg" onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
              }}>{t("获取专属方案", "Get your tailored plan", "Individuellen Plan erhalten")}<ArrowRight /></Button>
              <Button asChild variant="outline" size="lg"><Link to="/demo"><ScanLine />{t("查看 3 分钟演示", "View 3-minute demo", "3-Minuten-Demo ansehen")}</Link></Button>
            </div>
            <div className="hero-proof">
              <span>
                <ShieldCheck size={14} />
                GS1 Digital Link 架构
              </span>
              <i />
              <span>
                <Globe2 size={14} />
                {t(
                  "中德协同 · 欧洲本地视角",
                  "China–Germany · European perspective",
                  "China–Deutschland · Europäische Perspektive",
                )}
              </span>
            </div>
          </div>
          <EcosystemVisual />
        </div>
        <div className="channel-band">
          <span>
            {t(
              "一个数字身份，连接每一个触点",
              "ONE IDENTITY. EVERY TOUCHPOINT.",
              "EINE IDENTITÄT. JEDER KONTAKTPUNKT.",
            )}
          </span>
          <div className="channel-logos">
            <b className="amazon-logo">
              amazon<span>⌣</span>
            </b>
            <b className="mediamarkt-logo">MediaMarkt</b>
            <b className="ebay-logo">
              <i>e</i>
              <i>b</i>
              <i>a</i>
              <i>y</i>
            </b>
            <b className="shopify-logo">
              <ShoppingBag />
              shopify
            </b>
            <span>
              <House />
              {t("欧洲线下零售", "European retail", "Europäischer Einzelhandel")}
            </span>
            <span>
              <Users />
              {t("本地经销商", "Local distributors", "Lokale Händler")}
            </span>
          </div>
          <span className="illustrative-badge">Illustrative Demo · 场景示意</span>
        </div>
      </section>
      <CapabilityBar />
      <section className="section capabilities">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ONE PLATFORM. MORE POSSIBILITIES.</span>
            <h2>
              {t(
                "不只是二维码，是产品的欧洲连接中心",
                "More than a QR code. Your European connection.",
                "Mehr als ein QR-Code. Ihre Verbindung zu Europa.",
              )}
            </h2>
          </div>
          <p>
            {t(
              "从产品数据到消费者关系，\n四大能力，一体连接。",
              "From product data to consumer relationships.\nFour capabilities. One connection.",
            )}
          </p>
        </div>
        <div className="feature-grid">
          {features.map((f) => (
            <Link to={f.to} className="feature-card" key={f.num}>
              <div className="feature-top">
                <span className="feature-icon">
                  <f.icon />
                </span>
                <span>{f.num}</span>
              </div>
              <h3>{t(f.title, f.en)}</h3>
              <p>{t(f.desc, f.en)}</p>
              <span className="feature-link">
                {t("探索解决方案", "Explore solution", "Lösung entdecken")}
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Testimonials />
      <section className="section split-section network-section">
        <div className="section-copy">
          <span className="eyebrow">01 / ONE CODE, MULTIPLE CHANNELS</span>
          <h2>
            {t(
              "一个产品数字身份，\n连接整个欧洲销售网络",
              "One product identity.\nEvery European channel.",
              "Eine Produktidentität.\nAlle europäischen Kanäle.",
            )}
          </h2>
          <p>
            无需为每个渠道重复搭建产品服务。以 GS1 Digital Link
            为基础，统一管理产品信息、数字标签与消费者服务入口。
          </p>
          <div className="feature-check">
            <Check />
            统一 GTIN 与产品主数据
          </div>
          <div className="feature-check">
            <Check />
            多渠道信息映射与服务路由
          </div>
          <div className="feature-check">
            <Check />
            消费者自主选择购买渠道
          </div>
          <Button asChild variant="link">
            <Link to="/channels">
              探索一码多渠道
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <ChannelNetwork />
      </section>
      <section className="section compliance-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / EU COMPLIANCE & DIGITAL PRODUCT PASSPORT</span>
            <h2>
              {t(
                "让欧洲产品合规信息管理更简单",
                "European compliance, clearly coordinated.",
                "EU-Compliance klar koordiniert.",
              )}
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/compliance">
              查看合规工作流
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <p className="section-intro">
          中国准备产品资料，欧洲协调专业审核。每一步都有明确责任，每一次更新都有迹可循。
        </p>
        <div className="workflow-strip home-workflow">
          {workflow.map((s, i) => (
            <div key={s} className="workflow-step">
              <span className={i < 2 ? "step-number china" : "step-number"}>0{i + 1}</span>
              <h4>{s}</h4>
              <small>{owners[i]}</small>
              {i < 5 && <ChevronRight className="workflow-arrow" />}
            </div>
          ))}
        </div>
        <div className="compliance-note">
          <ShieldCheck />
          <span>GS1 Digital Link · 多语言数字标签 · 文件版本与权限管理</span>
          <small>DPP 根据具体行业法规逐步支持，不代表已满足所有行业正式要求。</small>
        </div>
      </section>
      <section className="section split-section consumer-section">
        <div className="consumer-visual">
          <div className="scan-label">
            <ScanLine />
            <span>
              SCAN. CONNECT. EXPLORE.<small>一次扫码，服务随行。</small>
            </span>
          </div>
          <ProductPhone />
          <div className="consumer-floating">
            <ShieldCheck />
            <div>
              <b>安全信息，公开可访问</b>
              <small>无需注册 · 以消费者为中心</small>
            </div>
            <Check />
          </div>
        </div>
        <div className="section-copy">
          <span className="eyebrow">03 / CONSUMER ENGAGEMENT</span>
          <h2>
            {t(
              "从一个二维码开始，\n让服务不止于购买",
              "One scan.\nService beyond the sale.",
              "Ein Scan.\nService über den Kauf hinaus.",
            )}
          </h2>
          <p>
            消费者需要的产品信息、电子说明书、保修与售后，都在一个品牌产品页面。用便捷服务，让每次购买成为长期关系的起点。
          </p>
          <div className="service-pills">
            <span>
              <BookIcon />
              电子说明书
            </span>
            <span>
              <ShieldCheck />
              安全与合规
            </span>
            <span>
              <Headphones />
              保修与售后
            </span>
            <span>
              <Users />
              自愿加入社群
            </span>
          </div>
          <Button asChild>
            <Link to="/demo">
              打开消费者扫码体验
              <ArrowRight />
            </Link>
          </Button>
          <small className="privacy-caption">
            基础安全信息无需注册；保修登记与营销订阅独立授权。
          </small>
        </div>
      </section>
      <section className="section growth-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">04 / LOCAL COMMUNITY & GROWTH</span>
            <h2>
              {t(
                "不仅连接产品，更连接欧洲消费者",
                "Connect products. Build local relationships.",
                "Produkte verbinden. Lokale Beziehungen aufbauen.",
              )}
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/growth">
              探索本地增长
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="growth-home-grid">
          <GrowthWheel sequencePrefix="G" />
          <div>
            <h3>把一次扫码，变成持续的品牌连接</h3>
            <p>从产品服务到自愿加入社群，从本地互动到复购与反馈，以真实用户关系建立可持续增长。</p>
            <AnalyticsPanel compact />
            <DemoBadge />
          </div>
        </div>
      </section>
      <section className="section team-section">
        <div className="center-heading">
          <span className="eyebrow">CHINA × GERMANY. CONNECTED BY DESIGN.</span>
          <h2>
            {t(
              "中国制造优势，德国专业服务，欧洲本地增长",
              "Chinese expertise. German service. European growth.",
              "Chinesische Expertise. Deutscher Service. Europäisches Wachstum.",
            )}
          </h2>
          <p>懂中国供应链，也懂欧洲市场。让产品资料、专业审核与本地反馈，在同一个体系内协同。</p>
        </div>
        <TeamArchitecture />
      </section>
      <section className="section industry-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">BUILT FOR YOUR INDUSTRY</span>
            <h2>
              {t(
                "不同行业，一样高效的连接",
                "Different industries. One connected platform.",
                "Viele Branchen. Eine Plattform.",
              )}
            </h2>
          </div>
          <span className="muted-label">行业产品页面 · 模拟场景</span>
        </div>
        <div className="industry-grid">
          {[
            {
              image: footwear,
              zh: "安全鞋与个人防护装备",
              en: "Safety Footwear & PPE",
              desc: "防护等级 · 使用说明 · 安全文件",
              key: "ppe",
            },
            {
              image: product,
              zh: "消费电子",
              en: "Consumer Electronics",
              desc: "产品参数 · 保修登记 · 本地支持",
              key: "electronics",
            },
            {
              image: smartHome,
              zh: "家居消费品",
              en: "Home & Lifestyle",
              desc: "材料信息 · 产品维护 · 品牌社群",
              key: "home",
            },
            {
              image: textiles,
              zh: "服装及纺织品",
              en: "Fashion & Textiles",
              desc: "成分标签 · 洗护说明 · 生命周期",
              key: "fashion",
            },
          ].map((v) => (
            <Link to="/demo" search={{ industry: v.key }} className="industry-card" key={v.key}>
              <div className={`industry-art industry-${v.key}`}>
                <img src={v.image} alt={v.zh} width={1024} height={1024} loading="lazy" />
                <ArrowUpRight size={19} />
              </div>
              <small>{v.en}</small>
              <h3>{t(v.zh, v.en)}</h3>
              <p>{v.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <HomeFAQ />
      <section className="section pricing-section" id="pricing">
        <div className="center-heading">
          <span className="eyebrow">A CONNECTION THAT GROWS WITH YOU</span>
          <h2>
            {t(
              "从产品数字身份，到欧洲本地增长",
              "From digital identity to local growth.",
              "Von digitaler Identität zu lokalem Wachstum.",
            )}
          </h2>
          <p>按品牌、产品及市场需求定制，选择适合您的连接方式。</p>
        </div>
        <div className="pricing-grid">
          {packages.map((p, i) => (
            <div className={`pricing-card ${i === 1 ? "featured" : ""}`} key={p.name}>
              {i === 1 && <span className="package-label">推荐</span>}
              <span className="package-icon">
                {i === 0 ? <ScanLine /> : i === 1 ? <ShieldCheck /> : <Users />}
              </span>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <p className="package-scale">{t(["适合起步阶段、少量 SKU 的品牌", "适合多 SKU 成长期品牌", "适合全品类成熟品牌"][i] ?? "", ["For early-stage brands with a small product range", "For growing, multi-SKU brands", "For established, full-range brands"][i] ?? "")}</p>
              <div className="quote-price">
                {t("定制报价", "Custom quote")} <small>{t("按产品范围与目标市场评估", "Based on product scope and target markets")}</small>
              </div>
              {p.features.map((f) => (
                <div className="feature-check" key={f}>
                  <Check />
                  {f}
                </div>
              ))}
              <QuoteButton variant={i === 1 ? "default" : "outline"}>获取报价</QuoteButton>
            </div>
          ))}
        </div>
      </section>
      <section className="closing-section">
        <div>
          <span className="eyebrow">YOUR NEXT CHAPTER IN EUROPE</span>
          <h2>
            {t(
              "让您的产品，连接欧洲的更多可能",
              "Connect your products to more possibilities.",
              "Verbinden Sie Ihre Produkte mit neuen Möglichkeiten.",
            )}
          </h2>
          <p>一个二维码，一个连接中心，一条持续增长的路径。</p>
        </div>
        <div>
          <Button asChild size="lg">
            <Link to="/demo">
              体验产品 Demo
              <ArrowRight />
            </Link>
          </Button>
          <QuoteButton variant="outline">与我们聊聊</QuoteButton>
        </div>
      </section>
      <ActionSummary />
    </>
  );
}
function BookIcon() {
  return <FileCheck2 />;
}
