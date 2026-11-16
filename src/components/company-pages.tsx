import { Link } from "@tanstack/react-router";
import { ArrowRight, ScanLine, Languages, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteButton, useCopy, DemoBadge } from "./site-shell";
import { TeamArchitecture } from "./interactive-demos";

export function AboutPage() {
  const t = useCopy();
  return <>
    <section className="company-intro section">
      <span className="eyebrow">PRODUCT iCODE · CHINA × GERMANY</span>
      <h1>Product iCode</h1>
      <h2>{t("懂中国供应链，也懂欧洲市场", "Understanding Chinese supply chains and European markets", "Chinesische Lieferketten. Europäische Märkte.")}</h2>
      <p>{t("以产品数字身份为起点，连接资料准备、欧洲专业审核协调与消费者服务。让中国品牌的欧洲旅程，有清晰的协作路径。", "Starting with product identity, we connect data preparation, European review coordination and consumer services—a clear collaboration path for Chinese brands.")}</p>
      <QuoteButton>{t("预约演示", "Book a demo", "Demo buchen")}</QuoteButton>
    </section>
    <section className="section company-section">
      <span className="eyebrow">TWO PERSPECTIVES. ONE CONNECTION.</span>
      <h2>{t("中德协同，让产品与市场之间少一道距离", "China–Germany collaboration, closer to the market")}</h2>
      <p>{t("以下展示中德双团队的职责分工与服务设计，具体人员、办公地址及合作伙伴信息待核实公布。", "The following illustrates our China–Germany service model. Named staff, office addresses and partners await verification.")}</p>
      <DemoBadge />
      <TeamArchitecture />
    </section>
    <section className="section company-section">
      <span className="eyebrow">WHY PRODUCT iCODE</span>
      <h2>{t("产品理解与本地视角，在同一个体系", "Product knowledge meets a local perspective")}</h2>
      <div className="company-pillars">
        <article><ScanLine /><h3>GS1 Digital Link</h3><p>{t("统一产品身份与服务入口，强调标识、数据来源与访问边界；不表示 GS1 官方认证。", "Unified identity and service entry points, with clear data sources and access boundaries. No GS1 certification is claimed.")}</p></article>
        <article><ShieldCheck /><h3>{t("欧洲专业协同", "European review coordination")}</h3><p>{t("按产品行业与市场需求协调专业合规支持，伙伴网络为服务设计示意，不代表已建立合作。", "Coordinate specialist support by industry and market. Partner networks illustrate the service model, not established partnerships.")}</p></article>
        <article><Languages /><h3>{t("中德双语服务设计", "Chinese–German service design")}</h3><p>{t("连接供应链资料、标签内容与欧洲反馈，减少跨语言协作中的信息断层。", "Connect supply-chain documents, label content and European feedback across languages.")}</p></article>
      </div>
    </section>
    <section className="section company-section company-locations">
      <span className="eyebrow">CHINA × GERMANY / EUROPE</span>
      <h2>{t("两地视角，一起连接欧洲", "Two perspectives, connected to Europe")}</h2>
      <div className="company-pillars">
        <article><MapPin /><h3>{t("中国", "China")}</h3><p>{t("产品资料与技术协作。具体办公地点及团队名单待补充。", "Product data and technical coordination. Office location and team details pending.")}</p></article>
        <article><MapPin /><h3>{t("德国 / 欧洲", "Germany / Europe")}</h3><p>{t("专业审核与本地服务协调。具体办公地点及团队名单待补充。", "Specialist review and local service coordination. Office location and team details pending.")}</p></article>
      </div>
    </section>
    <section className="closing-section"><div><span className="eyebrow">LET’S CONNECT</span><h2>{t("聊聊您的欧洲计划", "Let’s discuss your European plans")}</h2></div><QuoteButton>{t("预约演示", "Book a demo")}</QuoteButton></section>
  </>;
}

export function ContactPage() {
  const t = useCopy();
  return <div className="page-container company-contact">
    <span className="eyebrow">CONTACT PRODUCT iCODE</span>
    <h1>{t("联系我们", "Contact us", "Kontakt")}</h1>
    <p>{t("从产品数字身份，到欧洲本地服务，一起讨论适合您的连接方式。", "From product identity to local European services, let’s discuss the right connection for your brand.")}</p>
    <div className="info-note">{t("当前仅提供模拟演示申请，不发送或保存信息。正式联系邮箱、电话与公司地址待核实补充，请勿填写真实个人信息。", "Demo requests only: no information is sent or saved. Verified email, phone and business address are pending. Do not enter real personal data.")}</div>
    <div className="company-contact-actions"><QuoteButton>{t("预览演示申请", "Preview demo request")}</QuoteButton><Button asChild variant="outline"><Link to="/demo">{t("查看产品演示", "View product demo")}<ArrowRight /></Link></Button></div>
    <Link to="/impressum" className="company-legal-link">Impressum · {t("法定信息（待补充）", "Legal information (pending)")}</Link>
  </div>;
}