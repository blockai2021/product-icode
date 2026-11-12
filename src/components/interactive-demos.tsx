import footwear from "@/assets/safety-footwear.jpg";
import smartHome from "@/assets/smart-home.jpg";
import textiles from "@/assets/textiles.jpg";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ScanLine,
  ShieldCheck,
  Users,
  ShoppingBag,
  Headphones,
  MessageSquare,
  RotateCcw,
  Heart,
  MapPin,
  Globe2,
  Database,
  FileCheck2,
  Building2,
  X,
  LockKeyhole,
  Download,
  BookOpen,
  Mail,
  Wrench,
  Package,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading, DemoBadge, useCopy } from "./site-shell";
import { product, ChannelNetwork, ChannelExperience, DataLayers } from "./product-visuals";
import {
  channels,
  channelServices,
  workflow,
  owners,
  growthSteps,
  type Channel,
} from "@/lib/product-demo";
const growthIcons = [
  ShoppingBag,
  ScanLine,
  Headphones,
  Users,
  MessageSquare,
  Heart,
  RotateCcw,
  MessageSquare,
];
const explanations = [
  "从一次真实购买开始品牌旅程。",
  "公开产品页面，无需登录访问基础信息。",
  "提供说明书、安全信息与品牌售后。",
  "用户主动选择加入，单独取得授权。",
  "本地活动、产品交流与品牌互动。",
  "服务体验推动自愿推荐与品牌忠诚。",
  "持续关系带来再次购买的可能。",
  "用户自愿反馈，帮助品牌改善产品。",
];
export function GrowthWheel() {
  const [active, setActive] = useState(3);
  return (
    <div className="growth-wheel">
      <svg viewBox="0 0 460 440" aria-hidden="true">
        <circle cx="230" cy="205" r="145" />
        <path d="M225 60 l12 -1 -5 11 M375 199 l1 12 -11 -5 M235 350 l-12 1 5 -11 M85 211 l-1 -12 11 5" />
      </svg>
      <div className="wheel-center">
        <span className="feature-icon">
          <Users />
        </span>
        <strong>Product iCode</strong>
        <b>Local Growth Engine</b>
        <small>以服务连接，以信任增长</small>
      </div>
      {growthSteps.map((s, i) => {
        const Icon = growthIcons[i] ?? ShoppingBag;
        return (
          <Button
            key={s}
            variant="ghost"
            className={`wheel-node wheel-${i} ${active === i ? "selected" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span>
              <Icon size={18} />
            </span>
            <b>{s}</b>
          </Button>
        );
      })}
      <div className="wheel-description">
        <span>
          0{active + 1} / {growthSteps[active]}
        </span>
        <p>{explanations[active]}</p>
      </div>
    </div>
  );
}
const countries = [
  { name: "Germany", zh: "德国", desc: "品牌消费者社群", x: 52, y: 40 },
  { name: "France", zh: "法国", desc: "本地经销商与品牌活动", x: 36, y: 57 },
  { name: "Netherlands", zh: "荷兰", desc: "行业合作伙伴", x: 43, y: 31 },
  { name: "Italy", zh: "意大利", desc: "维修与服务网络", x: 64, y: 68 },
  { name: "Spain", zh: "西班牙", desc: "消费者互动活动", x: 22, y: 77 },
];
export function EuropeNetwork() {
  const [active, setActive] = useState(
    countries[0] ?? { name: "Germany", zh: "德国", desc: "品牌消费者社群", x: 52, y: 40 },
  );
  return (
    <div className="europe-network">
      <div className="europe-map">
        <svg viewBox="0 0 600 440" aria-label="欧洲区域抽象地图">
          <path d="M290 35l35 10 20 65 35 15 32-28 34 5 11 49-45 31 10 47-25 33 45 68-13 15-25-35-26-33-11-36-45-7-20 38-40-8-22 40-54-9-30-31-12-38 48-19 8-30 51-29 3-37 39-22-14-36z" />
          <path d="M180 77l22-18 16 29-8 38 18 31-25 12-31-19 6-28z M348 22l30-12 6 59-13 31-22-12z M202 277l-37 10-22 65-63-6-6-36 39-22 3-32 42-20z" />
          <path
            className="map-connection"
            d="M310 176 L215 250 M310 176 L261 136 M310 176 L385 300 M310 176 L134 337"
          />
        </svg>
        {countries.map((c) => (
          <Button
            variant="ghost"
            className={`map-pin pin-${c.name} ${active.name === c.name ? "selected" : ""}`}
            key={c.name}
            onClick={() => setActive(c)}
          >
            <span />
            <b>{c.name}</b>
          </Button>
        ))}
      </div>
      <div className="map-detail">
        <span className="eyebrow">FUTURE OPERATING SCENARIO</span>
        <h3>
          <MapPin />
          {active.zh} · {active.name}
        </h3>
        <h4>{active.desc}</h4>
        <p>
          以产品服务为入口，探索品牌与本地用户及专业服务网络的连接机会。用户参与社群与活动均需自愿授权。
        </p>
        <div className="info-note">
          未来可支持的运营场景示意；不代表已在该国设立团队或建立合作网络。
        </div>
      </div>
    </div>
  );
}
const monthData = [
  25, 38, 30, 52, 45, 70, 62, 78, 60, 90, 81, 110, 94, 124, 115, 139, 128, 157, 148, 170, 159, 189,
  174, 211, 200, 225, 212, 244,
];
export function AnalyticsPanel({ compact = false }: { compact?: boolean }) {
  const [period, setPeriod] = useState("30");
  const ratio = period === "7" ? 0.28 : period === "90" ? 2.7 : 1;
  return (
    <div className={compact ? "analytics-panel compact-analytics" : "analytics-panel"}>
      <div className="panel-heading">
        <h3>
          <BarIcon />
          品牌增长概览
        </h3>
        <div>
          <DemoBadge />
          <select
            aria-label="统计时间范围"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="7">最近 7 天</option>
            <option value="30">最近 30 天</option>
            <option value="90">最近 90 天</option>
          </select>
        </div>
      </div>
      <div className="metrics-grid">
        {[
          { name: "QR Scans", zh: "扫码次数", v: 12846, up: "18.6%" },
          { name: "Product Page Visits", zh: "产品页面访问", v: 10328, up: "12.4%" },
          { name: "Warranty Registrations", zh: "保修登记", v: 864, up: "8.2%" },
          { name: "Community Opt-ins", zh: "自愿加入社群", v: 428, up: "24.1%" },
        ].map((m) => (
          <div key={m.name}>
            <span>
              {m.zh}
              <small>{m.name}</small>
            </span>
            <strong>{Math.round(m.v * ratio).toLocaleString("en-US")}</strong>
            <b>
              ↗ {m.up}
              <small> vs 上期</small>
            </b>
          </div>
        ))}
      </div>
      <div className="analytics-chart">
        <div className="chart-title">
          <b>扫码与产品访问趋势</b>
          <span>
            <i />
            扫码次数 <i />
            页面访问
          </span>
        </div>
        <div className="chart-area">
          <div className="chart-y">
            <span>15k</span>
            <span>10k</span>
            <span>5k</span>
            <span>0</span>
          </div>
          <svg viewBox="0 0 700 200" preserveAspectRatio="none" aria-label="模拟扫码与访问折线图">
            <defs>
              <linearGradient
                id={compact ? "fill-compact" : "fill-full"}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="var(--primary)" stopOpacity=".14" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[25, 75, 125, 175].map((y) => (
              <path key={y} className="grid-line" d={`M0 ${y}H700`} />
            ))}
            <path
              className="area-fill"
              fill={`url(#${compact ? "fill-compact" : "fill-full"})`}
              d={`M0 190 ${monthData.map((v, i) => `L${i * 25} ${185 - v * 0.6}`).join(" ")} L675 200 L0 200Z`}
            />
            <polyline
              className="scan-line"
              points={monthData.map((v, i) => `${i * 25},${185 - v * 0.6}`).join(" ")}
            />
            <polyline
              className="visit-line"
              points={monthData.map((v, i) => `${i * 25},${190 - v * 0.45}`).join(" ")}
            />
          </svg>
        </div>
        <div className="chart-x">
          <span>11月 01日</span>
          <span>11月 07日</span>
          <span>11月 14日</span>
          <span>11月 21日</span>
          <span>11月 30日</span>
        </div>
      </div>
      {!compact && (
        <div className="secondary-metrics">
          <div>
            <h4>渠道互动分布</h4>
            {channels.map((c, i) => (
              <div className="bar-row" key={c}>
                <span>{c}</span>
                <div>
                  <i className={`bar-width-${i}`} />
                </div>
                <b>{[42, 26, 18, 14][i]}%</b>
              </div>
            ))}
          </div>
          <div>
            <h4>隐私同意状态</h4>
            <div className="consent-stat">
              <Users />
              <strong>{Math.round(428 * ratio)}</strong>
              <span>主动授权加入社群</span>
            </div>
            <p>
              未授权用户不进入营销名单。
              <br />
              扫码、保修登记与营销同意分别统计。
            </p>
            <div className="feature-check">
              <ShieldCheck />
              授权分离 · 可随时撤回
            </div>
          </div>
          <div>
            <h4>更多互动指标</h4>
            <dl>
              <dt>活动报名</dt>
              <dd>{Math.round(156 * ratio)}</dd>
              <dt>渠道互动</dt>
              <dd>{Math.round(3280 * ratio)}</dd>
              <dt>回访用户</dt>
              <dd>{Math.round(2104 * ratio)}</dd>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
function BarIcon() {
  return <Database size={18} />;
}
export function TeamArchitecture() {
  return (
    <div className="team-architecture">
      <div className="team-column">
        <span className="team-country">
          CN <span>中国团队</span>
        </span>
        <h3>产品与技术的坚实基础</h3>
        {["制造商与品牌客户沟通", "供应链数据准备", "软件开发与技术实施", "产品资料收集与整理"].map(
          (s) => (
            <div className="feature-check" key={s}>
              <Check />
              {s}
            </div>
          ),
        )}
      </div>
      <div className="team-platform">
        <ScanLine />
        <h3>Product iCode Connect</h3>
        <div>产品数字身份 · GS1 Digital Link</div>
        <div>数据审核工作流 · 多渠道内容管理</div>
        <div>CRM 与营销工具连接场景</div>
        <span>← 数据协同 · 审核反馈 · 市场数据回流 →</span>
      </div>
      <div className="team-column">
        <span className="team-country eu">
          DE / EU <span>德国与欧洲团队</span>
        </span>
        <h3>专业服务与本地视角</h3>
        {[
          "欧盟合规支持与专业伙伴协调",
          "包装与标签实施协调",
          "本地客服及合作服务商场景",
          "行业社群与本地市场运营",
        ].map((s) => (
          <div className="feature-check" key={s}>
            <Check />
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
export function ChannelsPage() {
  return (
    <div className="page-container">
      <PageHeading
        eyebrow="ONE CODE. EVERY CHANNEL."
        zh="一个产品身份，连接每一个渠道"
        en="One identity. Every channel."
        de="Eine Identität. Alle Kanäle."
        description="基于 GS1 Digital Link 的统一产品数字身份，为不同渠道提供一致的产品信息与相关服务。"
      />
      <ChannelNetwork />
      <div className="subheading">
        <h2>同一个二维码，不同的渠道体验</h2>
        <p>选择购买渠道，查看消费者可访问的服务。</p>
      </div>
      <ChannelExperience />
    </div>
  );
}
export function CompliancePage() {
  const [step, setStep] = useState(2);
  const [status, setStatus] = useState("In Review");
  const [doc, setDoc] = useState("X200 产品主数据.xlsx");
  const docs = [
    "X200 产品主数据.xlsx",
    "检测报告与证书.pdf",
    "多语言使用说明.pdf",
    "包装 Artwork.pdf",
    "GS1 产品标识记录.pdf",
  ];
  return (
    <div className="page-container">
      <PageHeading
        eyebrow="EU COMPLIANCE · CHINA–GERMANY WORKFLOW"
        zh="从产品资料，到有序的合规协同"
        en="Product data. Coordinated compliance."
        de="Produktdaten. Koordinierte Compliance."
        description="明确责任、管理版本、记录审核。此演示不是法律意见或正式产品认证。"
      />
      <div className="workflow-strip interactive-workflow">
        {workflow.map((s, i) => (
          <Button
            variant="ghost"
            key={s}
            className={step === i ? "selected" : ""}
            onClick={() => setStep(i)}
          >
            <span className="step-number">0{i + 1}</span>
            <h4>{s}</h4>
            <small>{owners[i]}</small>
          </Button>
        ))}
      </div>
      <div className="compliance-workspace">
        <aside>
          <h3>产品资料</h3>
          <span className="muted-label">PowerTool X200 · Demo</span>
          {docs.map((s) => (
            <Button
              variant="ghost"
              className={doc === s ? "selected" : ""}
              key={s}
              onClick={() => setDoc(s)}
            >
              <FileCheck2 />
              {s}
            </Button>
          ))}
        </aside>
        <div className="review-panel">
          <div className="panel-heading">
            <h3>{workflow[step]}</h3>
            <span className={`status-chip status-${status.replaceAll(" ", "-")}`}>{status}</span>
          </div>
          <p>责任方：{owners[step]}</p>
          <div className="document-preview">
            <FileCheck2 size={44} />
            <h3>{doc}</h3>
            <p>版本 v1.2 · 来源：中国制造商 · 更新时间：2026-11-10</p>
            <div className="review-checks">
              {[
                "法规适用性分析",
                "信息完整性核查",
                "专业法律审核协调",
                "GS1 标识检查",
                "多语言内容管理",
              ].map((s) => (
                <div key={s}>
                  <Check />
                  {s}
                  <span>模拟审核项</span>
                </div>
              ))}
            </div>
          </div>
          <label className="status-control">
            模拟审核状态
            <select
              aria-label="审核状态"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {["Pending", "In Review", "Revision Required", "Approved", "Published"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <small>状态切换仅演示流程，不代表实际完成专业审核或合规批准。</small>
        </div>
      </div>
      <div className="subheading">
        <h2>有结构的数据，有边界的访问</h2>
        <p>公开信息、授权伙伴资料与品牌内部资料分层管理。</p>
      </div>
      <DataLayers />
      <div className="info-note">
        <ShieldCheck />
        DPP 准备能力根据具体产品行业法规逐步支持，不能替代正式的法规适用性判断或专业审查。
      </div>
      <TeamArchitecture />
    </div>
  );
}
export function GrowthPage() {
  return (
    <div className="page-container">
      <PageHeading
        eyebrow="LOCAL COMMUNITY. SUSTAINABLE GROWTH."
        zh="让每一次连接，生长为长期关系"
        en="Turn product connections into lasting relationships."
        de="Aus Produktkontakten werden langfristige Beziehungen."
        description="以产品服务为起点，通过自愿参与的社群、本地活动与反馈，探索品牌在欧洲的持续增长。"
      />
      <div className="growth-page-top">
        <GrowthWheel />
        <div>
          <h2>以服务建立信任，以授权连接社群</h2>
          <p>
            不是把每个扫码用户变成营销线索，而是在产品服务之后，为用户提供主动加入品牌关系的机会。
          </p>
          <div className="feature-check">
            <Check />
            加入社群前单独征求用户同意
          </div>
          <div className="feature-check">
            <Check />
            保修登记不附带营销订阅
          </div>
          <div className="feature-check">
            <Check />
            隐私授权可独立管理与撤回
          </div>
          <div className="info-note">
            <ShieldCheck />
            未来场景 · 非已建立的合作网络或增长保证
          </div>
        </div>
      </div>
      <div className="subheading">
        <h2>欧洲本地社群网络</h2>
        <p>选择国家，查看未来可支持的运营场景。</p>
      </div>
      <EuropeNetwork />
      <div className="subheading">
        <h2>看见服务与增长的每次连接</h2>
        <DemoBadge />
      </div>
      <AnalyticsPanel />
    </div>
  );
}
export function DashboardPage() {
  const [filter, setFilter] = useState("全部");
  const [detail, setDetail] = useState<string | null>(null);
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <span className="workspace-name">
          <Building2 />
          EU Brand Workspace<small>DEMO WORKSPACE</small>
        </span>
        <Button variant="secondary">
          <Database />
          数据概览
        </Button>
        <Link to="/compliance">
          <FileCheck2 />
          合规工作流
        </Link>
        <Link to="/channels">
          <ShoppingBag />
          销售渠道
        </Link>
        <Link to="/growth">
          <Users />
          社群与增长
        </Link>
        <div className="sidebar-bottom">
          <ShieldCheck />
          演示环境<small>不连接真实数据或用户</small>
        </div>
      </aside>
      <div className="dashboard-main">
        <div className="dashboard-title">
          <div>
            <span className="eyebrow">BRAND WORKSPACE</span>
            <h1>品牌数据概览</h1>
            <p>欢迎回来，看看您的产品在欧洲的连接。</p>
          </div>
          <DemoBadge />
        </div>
        <AnalyticsPanel />
        <div className="product-table">
          <div className="panel-heading">
            <h3>产品数字身份</h3>
            <label>
              <Filter size={14} />
              <select
                aria-label="产品状态筛选"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>全部</option>
                <option>Published</option>
                <option>In Review</option>
              </select>
            </label>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>产品 / 型号</th>
                  <th>数字身份 · GTIN</th>
                  <th>状态</th>
                  <th>语言</th>
                  <th>扫码次数</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "PowerTool X200",
                    gtin: "09506000134352",
                    status: "Published",
                    scans: "8,420",
                  },
                  {
                    name: "SmartHome S100",
                    gtin: "09506000134369",
                    status: "In Review",
                    scans: "2,836",
                  },
                  {
                    name: "SafetyPro P300",
                    gtin: "09506000134376",
                    status: "Published",
                    scans: "1,590",
                  },
                ]
                  .filter((p) => filter === "全部" || filter === p.status)
                  .map((p) => (
                    <tr key={p.name}>
                      <td>
                        <Package />
                        {p.name}
                      </td>
                      <td>{p.gtin}</td>
                      <td>
                        <span className={`status-chip status-${p.status.replaceAll(" ", "-")}`}>
                          {p.status}
                        </span>
                      </td>
                      <td>DE / EN / ZH</td>
                      <td>{p.scans}</td>
                      <td>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`查看 ${p.name}`}
                          onClick={() => setDetail(p.name)}
                        >
                          <ArrowUpRight />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {detail && (
          <div className="info-note product-detail">
            <Package />
            <div>
              <b>{detail} · 模拟产品详情</b>
              <p>产品主数据 v1.2 · 公开数字标签 · 3 种语言 · 文件权限分层</p>
              <Button asChild variant="link">
                <Link
                  to="/demo"
                  search={{
                    industry:
                      detail === "SafetyPro P300"
                        ? "ppe"
                        : detail === "SmartHome S100"
                          ? "home"
                          : "electronics",
                  }}
                >
                  查看消费者页面
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="关闭产品详情"
              onClick={() => setDetail(null)}
            >
              <X />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
export function ConsumerPage({ industry }: { industry: string }) {
  const [channel, setChannel] = useState<Channel>("品牌独立站");
  const [section, setSection] = useState("产品信息");
  const [marketing, setMarketing] = useState(false);
  const [community, setCommunity] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [language, setLanguage] = useState("DE");
  const [message, setMessage] = useState("");
  const t = useCopy();
  const name =
    industry === "ppe"
      ? "SafetyPro P300"
      : industry === "fashion"
        ? "Everyday Textile T100"
        : industry === "home"
          ? "SmartHome S100"
          : "PowerTool X200";
  const sections = [
    "产品信息",
    "安全与合规",
    "电子说明书",
    "保修与支持",
    "销售渠道",
    "本地社群",
    "活动与权益",
    "隐私设置",
  ];
  return (
    <div className="page-container consumer-demo">
      <PageHeading
        eyebrow="SCAN. CONNECT. EXPLORE."
        zh="消费者的产品服务，从这里开始"
        en="Your product. Every service. One place."
        de="Ihr Produkt. Jeder Service. Ein Ort."
        description="模拟扫码后的品牌产品页面。公开安全信息无需注册；保修、社群与营销授权独立管理。"
      />
      <div className="consumer-app">
        <div className="consumer-app-top">
          <span>
            <ScanLine />
            Product iCode Connect
          </span>
          <select
            aria-label="产品页面语言"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>DE</option>
            <option>EN</option>
            <option>中文</option>
          </select>
        </div>
        <div className="consumer-product-header">
          <div className={`consumer-product-image industry-${industry}`}>
            <img
              src={
                industry === "electronics"
                  ? product
                  : industry === "ppe"
                    ? footwear
                    : industry === "fashion"
                      ? textiles
                      : smartHome
              }
              alt={name}
              width={1024}
              height={1024}
            />
          </div>
          <div>
            <DemoBadge />
            <span className="eyebrow">YOUR CONNECTED PRODUCT</span>
            <h2>{name}</h2>
            <p>
              {language === "DE"
                ? "Produktinformationen & Markenservice"
                : language === "EN"
                  ? "Product information & brand services"
                  : "产品信息与品牌服务"}
            </p>
            <span className="verified">
              <Check />
              GTIN · 09506000134352 · 示例数字身份
            </span>
            <label className="purchase-channel">
              {language === "DE"
                ? "Wo haben Sie gekauft?"
                : language === "EN"
                  ? "Where did you purchase?"
                  : "您在哪个渠道购买？"}
              <select
                aria-label="购买渠道"
                value={channel}
                onChange={(e) => setChannel(e.target.value as Channel)}
              >
                {channels.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <small>由您自行选择；二维码不自动识别购买渠道。</small>
          </div>
        </div>
        <div className="consumer-app-body">
          <nav aria-label="产品服务">
            {sections.map((s, i) => {
              const Icon =
                [
                  Package,
                  ShieldCheck,
                  BookOpen,
                  Headphones,
                  ShoppingBag,
                  Users,
                  Heart,
                  LockKeyhole,
                ][i] ?? Package;
              return (
                <Button
                  key={s}
                  variant="ghost"
                  className={section === s ? "selected" : ""}
                  onClick={() => {
                    setSection(s);
                    setMessage("");
                  }}
                >
                  <Icon />
                  {s}
                  <ChevronRight />
                </Button>
              );
            })}
          </nav>
          <div className="consumer-service-content">
            <h3>{section}</h3>
            {section === "产品信息" ? (
              <>
                <p>{name} 提供日常使用的可靠体验。此产品及参数为模拟数据。</p>
                <dl>
                  <dt>型号</dt>
                  <dd>{name.split(" ").at(-1)}</dd>
                  <dt>产品类别</dt>
                  <dd>
                    {industry === "electronics"
                      ? "18V 无绳电钻"
                      : industry === "ppe"
                        ? "个人防护装备"
                        : industry === "fashion"
                          ? "纺织品"
                          : "家居消费品"}
                  </dd>
                  <dt>产品版本</dt>
                  <dd>v1.2 / 2026</dd>
                  <dt>可访问服务</dt>
                  <dd>{channelServices(channel).join("、")}</dd>
                </dl>
              </>
            ) : section === "安全与合规" ? (
              <>
                <div className="info-note">
                  <ShieldCheck />
                  公开安全信息 · 无需账户或登记
                </div>
                <h4>使用前的重要信息</h4>
                <ul>
                  <li>使用前阅读完整产品说明与安全警示。</li>
                  <li>遵守适用的使用场景及防护要求。</li>
                  <li>发现损坏请停止使用并联系品牌支持。</li>
                </ul>
                <p>合规文件：示例安全资料 v1.2 · 非正式认证文件。</p>
                <Button
                  variant="outline"
                  onClick={() =>
                    setMessage(
                      "示例安全资料：来源为品牌产品数据；版本 v1.2。本演示不提供真实认证文件。",
                    )
                  }
                >
                  <FileCheck2 />
                  查看安全资料
                </Button>
              </>
            ) : section === "电子说明书" ? (
              <>
                <BookOpen size={36} />
                <h4>{name} · Digital Manual</h4>
                <p>选择语言阅读示例使用说明，产品操作与维护信息公开可见。</p>
                <Button
                  variant="outline"
                  onClick={() =>
                    setMessage(
                      `${language} 使用说明：1. 检查产品完整性。2. 按安全说明操作。3. 使用后清洁并妥善存放。仅示例内容。`,
                    )
                  }
                >
                  <BookOpen />
                  打开 {language} 说明书
                </Button>
              </>
            ) : section === "保修与支持" ? (
              <>
                <p>保修登记与营销授权分离，登记不要求订阅营销邮件。</p>
                {registered ? (
                  <div className="info-note">
                    <Check />
                    模拟保修已登记；营销订阅保持{marketing ? "已授权" : "未授权"}
                    。没有发送或保存个人信息。
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setRegistered(true);
                    }}
                  >
                    <label>
                      邮箱
                      <input type="email" required placeholder="you@example.com" />
                    </label>
                    <label>
                      产品序列号
                      <input required placeholder="X200-DE-0001" />
                    </label>
                    <Button type="submit">
                      模拟保修登记
                      <ArrowRight />
                    </Button>
                  </form>
                )}
                <h4>{channel} 售后指引</h4>
                <p>订单退换及卖家服务请联系实际购买渠道；品牌产品支持可独立访问。</p>
                <Button
                  variant="outline"
                  onClick={() =>
                    setMessage(
                      "品牌支持示例：请准备型号、产品问题与实际订单信息。本演示不会建立真实服务工单。",
                    )
                  }
                >
                  <Headphones />
                  品牌支持
                </Button>
              </>
            ) : section === "销售渠道" ? (
              <>
                <p>查看对应渠道的产品服务，不跳转到虚构的销售链接。</p>
                {channels.map((c) => (
                  <Button
                    key={c}
                    variant={channel === c ? "secondary" : "outline"}
                    onClick={() => setChannel(c)}
                  >
                    {c}
                    <ArrowUpRight />
                  </Button>
                ))}
                <div className="info-note">
                  {channel}：{channelServices(channel).join(" · ")}
                </div>
              </>
            ) : section === "本地社群" ? (
              <>
                <Users size={36} />
                <h4>德国品牌用户社群 · 未来运营场景</h4>
                <p>交流产品使用心得，参与本地活动。这里不是已经建立的实际社群。</p>
                <label className="consent-checkbox">
                  <input
                    type="checkbox"
                    checked={community}
                    onChange={(e) => setCommunity(e.target.checked)}
                  />
                  我自愿加入品牌社群，并同意对应的社群数据使用。
                </label>
                <Button
                  disabled={!community}
                  onClick={() => setMessage("模拟社群加入成功。没有向任何真实社群发送信息。")}
                >
                  模拟加入社群
                  <ArrowRight />
                </Button>
              </>
            ) : section === "活动与权益" ? (
              <>
                <h4>Berlin Product Workshop · Demo</h4>
                <p>未来活动场景：产品维护与使用交流。非真实活动公告。</p>
                <Button
                  variant="outline"
                  onClick={() => setMessage("活动报名预览：这是未来活动场景，当前不接受真实报名。")}
                >
                  <Users />
                  查看活动报名
                </Button>
              </>
            ) : (
              <>
                <p>您可以独立管理授权。未授权的扫码用户不会自动进入营销名单。</p>
                <label className="consent-checkbox">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  自愿订阅品牌营销邮件（可随时取消）
                </label>
                <label className="consent-checkbox">
                  <input
                    type="checkbox"
                    checked={community}
                    onChange={(e) => setCommunity(e.target.checked)}
                  />
                  自愿加入品牌本地社群
                </label>
                <div className="info-note">
                  <ShieldCheck />
                  保修状态：{registered ? "已模拟登记" : "未登记"} · 营销：
                  {marketing ? "已授权" : "未授权"} · 社群：{community ? "已授权" : "未授权"}
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setMarketing(false);
                    setCommunity(false);
                    setMessage("已撤回营销及社群授权，保修登记状态不受影响。");
                  }}
                >
                  撤回可选授权
                </Button>
              </>
            )}
            {message && (
              <div className="info-note" role="status">
                <Check />
                {message}
              </div>
            )}
          </div>
        </div>
        <div className="consumer-app-footer">
          Powered by Product iCode Connect · Demo Data · 不发送或保存信息
        </div>
      </div>
    </div>
  );
}
