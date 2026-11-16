import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Check, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DemoBadge, QuoteButton, useCopy } from "./site-shell";
import footwear from "@/assets/safety-footwear.jpg";
import electronics from "@/assets/powertool-x200.jpg";
import home from "@/assets/smart-home.jpg";
import fashion from "@/assets/textiles.jpg";

const industries = [
  { key: "ppe", image: footwear, title: ["PPE 安全防护", "Personal protective equipment", "Persönliche Schutzausrüstung"], pain: ["防护等级、使用限制与安全文件分散，跨语言更新难以保持一致。", "Protection ratings, usage limits and safety files are fragmented across languages."], solution: ["以统一产品身份连接防护信息、多语言说明和文件版本；按具体产品协调专业审核。", "Connect protection information, multilingual instructions and document versions, with product-specific specialist review."] },
  { key: "electronics", image: electronics, title: ["消费电子", "Consumer electronics", "Unterhaltungselektronik"], pain: ["多个销售渠道分别维护参数、说明书与保修入口，消费者难以找到本地支持。", "Specifications, manuals and warranty services vary across sales channels."], solution: ["统一数字产品页，公开安全信息，让消费者选择购买渠道并独立登记保修。", "Unify product pages and public safety information, with consumer-selected channels and separate warranty registration."] },
  { key: "home", image: home, title: ["家居消费品", "Home & lifestyle", "Haushalt & Wohnen"], pain: ["材料、维护方法与售后信息不易触达，产品反馈难以回到品牌。", "Material, care and support information is hard to access; feedback rarely reaches the brand."], solution: ["连接材料说明、维护指南与本地服务，提供自愿加入品牌社群的独立入口。", "Connect material information, care guides and local service, with a separate voluntary community option."] },
  { key: "fashion", image: fashion, title: ["服装纺织", "Fashion & textiles", "Mode & Textilien"], pain: ["成分与洗护标签空间有限，生命周期资料需要按行业要求逐步准备。", "Limited label space complicates care information and industry-specific lifecycle data."], solution: ["提供多语言成分与洗护内容，整理可追溯资料，为适用的 DPP 要求逐步准备。", "Provide multilingual composition and care content, organizing traceability data for applicable DPP requirements."] },
] as const;

export function IndustriesPage() {
  const t = useCopy();
  return <>
    <section className="section discovery-intro"><span className="eyebrow">PRODUCT iCODE / INDUSTRIES</span><h1>{t("行业方案", "Industry solutions", "Branchenlösungen")}</h1><p>{t("从行业的真实问题出发，设计产品与欧洲市场的连接。", "Product connections shaped around industry needs.", "Produktverbindungen für branchenspezifische Anforderungen.")}</p><DemoBadge /></section>
    {industries.map((v, i) => <section className="section industry-detail" key={v.key}><img src={v.image} alt={t(v.title[0], v.title[1], v.title[2])} loading="lazy" width={1024} height={1024} /><div><span className="eyebrow">0{i + 1} / {v.key.toUpperCase()}</span><h2>{t(v.title[0], v.title[1], v.title[2])}</h2><h3>{t("行业痛点", "The challenge", "Herausforderung")}</h3><p>{t(v.pain[0], v.pain[1])}</p><h3>{t("我们的方案", "Our approach", "Unser Ansatz")}</h3><p>{t(v.solution[0], v.solution[1])}</p><Button asChild variant="outline"><Link to="/demo" search={{ industry: v.key }}>{t("查看示例产品页", "View example product", "Beispielprodukt ansehen")}<ArrowRight /></Link></Button><small className="density-caption">{t("产品与方案为模拟场景，不代表认证或已接入服务。", "Illustrative products and services; no certification or live integration is claimed.")}</small></div></section>)}
  </>;
}

const cases = [
  { image: electronics, name: ["五金品牌 · 多渠道资料协同", "Hardware brand · Channel coordination"], background: ["面向欧洲销售的五金品牌，计划覆盖 5 个销售渠道。", "A hardware brand planning to sell through five European channels."], problem: ["每个渠道分别维护产品文件，更新容易遗漏。", "Separate document sets make updates difficult to coordinate."], result: ["以统一产品身份组织资料，消费者选择购买渠道后访问对应服务。", "Organize documents around one product identity; consumers select their channel to access relevant services."], before: "5", after: "1", labels: ["原有资料维护入口", "统一产品服务入口", "Separate data entry points", "Unified product entry point"] },
  { image: footwear, name: ["安全防护品牌 · 中德审核协同", "PPE brand · China–Germany review"], background: ["准备进入欧洲市场的安全鞋品牌，需要协调双语产品资料。", "A safety-footwear brand preparing bilingual documentation for Europe."], problem: ["文件版本、责任人与反馈时间线不清晰。", "Document versions, ownership and feedback timelines are unclear."], result: ["在 6 步模拟工作流中明确职责、版本与审核反馈；完成流程不等于获得认证。", "Assign owners, versions and feedback in a six-step demo workflow; completion is not certification."], before: "2", after: "6", labels: ["协作语言", "审核协作步骤", "Working languages", "Review steps"] },
] as const;

export function CasesPage() {
  const t = useCopy();
  return <><section className="section discovery-intro"><span className="eyebrow">PRODUCT iCODE / SCENARIOS</span><h1>{t("客户案例", "Customer scenarios", "Kundenszenarien")}</h1><p>{t("模拟场景示意：以下品牌、效果和数据均为演示设定，非真实客户成果。", "Simulated scenarios: brands, outcomes and figures are illustrative, not actual customer results.", "Simulierte Szenarien, keine tatsächlichen Kundenergebnisse.")}</p><DemoBadge /></section>
    {cases.map((c, i) => <section className="section case-detail" key={c.before}><img src={c.image} alt={t(c.name[0], c.name[1])} width={1024} height={1024} loading="lazy" /><div><span className="eyebrow">SCENARIO 0{i + 1} · {t("模拟场景示意", "SIMULATED")}</span><h2>{t(c.name[0], c.name[1])}</h2>{[["品牌背景", "Brand background", c.background], ["遇到的问题", "The challenge", c.problem], ["使用后的模拟效果", "Illustrative outcome", c.result]].map(([zh, en, copy]) => <div key={String(zh)}><h3>{t(String(zh), String(en))}</h3><p>{Array.isArray(copy) ? t(copy[0] ?? "", copy[1] ?? "") : ""}</p></div>)}<div className="case-numbers"><div><b>{c.before}</b><span>{t(c.labels[0], c.labels[2])}</span></div><ArrowRight /><div><b>{c.after}</b><span>{t(c.labels[1], c.labels[3])}</span></div></div><Button asChild variant="outline"><Link to={i === 0 ? "/channels" : "/compliance"}>{t("打开对应演示", "Explore the demo")}<ArrowRight /></Link></Button></div></section>)}
  </>;
}

const guides = [
  { title: ["DPP 数字产品护照准备清单", "Digital Product Passport preparation checklist", "DPP-Vorbereitungscheckliste"], summary: ["按产品类别梳理适用要求，先整理产品身份、资料来源与更新责任。", "Identify applicable product-specific requirements and organize identity, data sources and ownership."], chapters: [["确认产品类别与适用法规", "Identify category and applicable legislation"], ["产品标识、材料与追溯资料", "Product identity, materials and traceability"], ["访问权限与数据更新责任", "Access and update responsibilities"], ["差距评估与专业审核", "Gap assessment and specialist review"]] },
  { title: ["GS1 Digital Link 入门", "Getting started with GS1 Digital Link", "Einführung in GS1 Digital Link"], summary: ["了解如何将 GS1 产品标识放入网络地址，连接产品信息与服务；不代表 GS1 认证。", "Learn how GS1 identifiers become web addresses connecting product information and services. No GS1 certification is claimed."], chapters: [["GTIN 与产品数字身份", "GTIN and product identity"], ["Digital Link 地址与解析", "Digital Link addresses and resolution"], ["服务入口与购买渠道选择", "Service links and channel selection"], ["标识校验与实施检查", "Identifier validation and implementation checks"]] },
  { title: ["欧盟合规审核流程详解", "Understanding EU compliance review", "EU-Compliance-Prüfung verstehen"], summary: ["区分企业资料准备、专业审核与正式认证，明确中德协作边界。", "Distinguish preparation, specialist review and formal certification, with clear China–Germany responsibilities."], chapters: [["产品分类与资料清单", "Product classification and documents"], ["中国资料准备与版本整理", "Preparation and version control in China"], ["欧洲专业审核与反馈", "European specialist review and feedback"], ["发布维护与变更记录", "Publication, maintenance and change records"]] },
] as const;

export function ResourcesPage() {
  const t = useCopy();
  return <><section className="section discovery-intro"><span className="eyebrow">PRODUCT iCODE / KNOWLEDGE</span><h1>{t("资源中心", "Resource centre", "Wissenszentrum")}</h1><p>{t("指南框架 · 目录与摘要，全文待专业审核后补充。以下内容不构成法律意见。", "Guide outlines and summaries; full articles await specialist review. Not legal advice.", "Leitfadenentwürfe, keine Rechtsberatung.")}</p></section><section className="section guide-grid">{guides.map((g, i) => <article className="guide-card" key={g.title[0]}><BookOpen /><span className="eyebrow">GUIDE 0{i + 1} · {t("框架草案", "OUTLINE")}</span><h2>{t(g.title[0], g.title[1], g.title[2])}</h2><p>{t(g.summary[0], g.summary[1])}</p><h3>{t("目录", "Contents", "Inhalt")}</h3><ol>{g.chapters.map(c => <li key={c[0]}>{t(c[0], c[1])}</li>)}</ol><small className="density-caption">{t("当前提供目录与摘要，无完整指南下载。", "Outline and summary only; no full guide download yet.")}</small></article>)}</section></>;
}

export function CapabilityBar() {
  const t = useCopy();
  return <section className="capability-band"><div className="capability-metrics">{[
    ["100%", "GS1 标准兼容目标", "GS1 compatibility target"],
    ["3", "种语言数字标签示意", "Demo label languages"],
    ["6", "步合规协作演示", "Demo review steps"],
    ["50+", "欧洲渠道触点规划", "Planned European touchpoints"],
  ].map(m => <div key={m[0]}><b>{m[0]}</b><span>{t(m[1] ?? "", m[2] ?? "")}</span></div>)}</div><p>{t("能力规划与模拟指标：100% 为兼容目标，尚未验证；50+ 为触点规划，非已接入渠道、客户数量或认证声明。", "Planning/demo figures: 100% is an unverified compatibility target; 50+ is planned reach, not live integrations, customers or certification.")}</p></section>;
}

export function Testimonials() {
  const t = useCopy();
  return <section className="section testimonials"><div className="section-heading"><div><span className="eyebrow">CONNECTED WORK. CLEARER COLLABORATION.</span><h2>{t("连接之后，协作更清晰", "Connected work. Clearer collaboration.")}</h2></div><DemoBadge /></div><div className="testimonial-grid">{[
    { initials: "王", quote: ["过去为 5 个渠道分别维护产品资料，现在一次扫码全部打通。", "We used to maintain product data for five channels; now one scan connects the experience."], person: ["王经理 · 出口业务负责人 · 五金品牌", "Manager Wang · Export lead · Hardware brand"] },
    { initials: "T", quote: ["合规文件的中德协作第一次有了清晰的流程和时间线。", "China–Germany collaboration on compliance documents finally has a clear process and timeline."], person: ["Thomas · 合规顾问 · 慕尼黑", "Thomas · Compliance consultant · Munich"] },
  ].map(v => <figure className="testimonial-card" key={v.initials}><Quote /><blockquote>{t(v.quote[0] ?? "", v.quote[1] ?? "")}</blockquote><figcaption><span className="testimonial-avatar" aria-hidden="true">{v.initials}</span><div><b>{t(v.person[0] ?? "", v.person[1] ?? "")}</b><small>{t("模拟场景示意 · 非真实客户证言", "Simulated persona · Not a real testimonial")}</small></div></figcaption></figure>)}</div><p className="density-caption">{t("引用与人物为模拟设定；扫码不自动识别购买渠道，需消费者选择或合法订单信息。", "Quotes and personas are fictional. Purchase channels require consumer selection or lawful order context.")}</p></section>;
}

const faq = [
  ["什么是 GS1 Digital Link？", "What is GS1 Digital Link?", "它将 GS1 标识（如 GTIN）嵌入网络地址，连接产品信息和服务。本演示展示架构思路，不代表 GS1 官方认证。", "It embeds GS1 identifiers such as GTIN in web addresses to connect information and services. This demo is not GS1-certified."],
  ["DPP 法规什么时候强制执行？", "When does DPP become mandatory?", "没有适用于所有产品的统一日期。要求随产品类别及相应法规、授权法案逐步生效，应按具体行业核对欧盟正式文本与过渡期。", "There is no single date for all products. Requirements phase in by category and applicable legislation; verify official EU texts and transition periods."],
  ["我们没有 GS1 编码怎么办？", "What if we have no GS1 identifiers?", "先确认现有产品标识，再向所在地区 GS1 组织咨询合规申请；我们不能代替 GS1 分配正式编码。", "Check existing identifiers and consult your local GS1 organization. We cannot issue official GS1 identifiers."],
  ["实施周期多长？", "How long does implementation take?", "根据 SKU 数量、资料完整度、目标市场及审核范围评估。正式周期需要需求确认后报价，不承诺统一上线天数。", "Timing depends on SKU count, documentation, target markets and review scope. Confirm scope before agreeing a schedule."],
  ["数据存储在哪里？", "Where is data stored?", "当前产品演示不提交或保存表单数据；网站访问统计另见隐私政策。正式服务的数据托管地区、保留期限与处理协议需签约前核实。", "Demo forms do not send or save data; website analytics are covered by the privacy policy. Production hosting regions, retention and processing terms need confirmation before contracting."],
  ["支持哪些销售渠道？", "Which channels are supported?", "演示展示 Amazon、eBay、Shopify 及欧洲零售、经销商场景；均为模拟，实际渠道接入需逐项确认，不表示已有合作。", "Amazon, eBay, Shopify, retail and distributor scenarios are illustrative. Each live integration requires confirmation; no partnership is claimed."],
  ["中德团队如何分工？", "How do the China and Germany teams collaborate?", "服务设计中，中国侧整理产品资料与技术内容，德国／欧洲侧协调专业审核与本地服务；具体团队及合作伙伴待核实。", "The service model assigns product data and technical preparation to China, and specialist review/local coordination to Europe. Team and partner details await verification."],
  ["如何开始使用？", "How do we get started?", "先打开产品演示，再预览演示申请。目前申请为模拟，不发送或保存信息；正式联系方式待补充。", "Explore the product demo, then preview a demo request. Requests are simulated and not sent or saved; verified contact details are pending."],
] as const;

export function HomeFAQ() {
  const t = useCopy();
  return <section className="section faq-section"><span className="eyebrow">QUESTIONS, ANSWERED.</span><h2>{t("常见问题", "Frequently asked questions", "Häufige Fragen")}</h2><Accordion type="single" collapsible>{faq.map((q, i) => <AccordionItem value={`faq-${i}`} key={q[0]}><AccordionTrigger>{t(q[0], q[1])}</AccordionTrigger><AccordionContent><p>{t(q[2], q[3])}</p>{i === 4 && <Link to="/privacy" className="text-primary">{t("查看隐私政策草案", "Read the privacy draft")}<ArrowRight size={14} /></Link>}{i === 7 && <Button asChild variant="outline"><Link to="/demo">{t("打开产品演示", "Open product demo")}<ArrowRight /></Link></Button>}</AccordionContent></AccordionItem>)}</Accordion></section>;
}

export function ActionSummary() {
  const t = useCopy();
  return <section className="action-summary"><div><Check /><h2>{t("准备好让产品连接欧洲了吗？", "Ready to connect your products to Europe?", "Bereit, Ihre Produkte mit Europa zu verbinden?")}</h2></div><QuoteButton>{t("获取专属方案", "Get your tailored plan", "Individuellen Plan erhalten")}</QuoteButton></section>;
}