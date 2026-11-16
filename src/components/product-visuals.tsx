import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowUpRight,
  ShieldCheck,
  ShoppingBag,
  Headphones,
  Users,
  ChevronRight,
  BookOpen,
  Globe2,
  ScanLine,
  Check,
  Package,
  Layers3,
  FileCheck2,
  Database,
  LockKeyhole,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import product from "@/assets/powertool-x200.jpg";
import { useCopy } from "./site-shell";
import { BrandLogo } from "./brand-logo";
import { channels, channelServices, type Channel } from "@/lib/product-demo";
export { product };
const nodes = [
  {
    icon: ShieldCheck,
    title: "EU Compliance",
    sub: "欧盟合规",
    cls: "compliance-node",
    to: "/compliance",
  },
  {
    icon: ShoppingBag,
    title: "Sales Channels",
    sub: "多渠道销售",
    cls: "sales-node",
    to: "/channels",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    sub: "客户售后",
    cls: "service-node",
    to: "/demo",
  },
  {
    icon: Users,
    title: "Local Community",
    sub: "欧洲本地社群",
    cls: "community-node",
    to: "/growth",
  },
] as const;
export function ProductPhone({
  compact = false,
  channel = "品牌独立站",
}: {
  compact?: boolean;
  channel?: Channel;
}) {
  const t = useCopy();
  return (
    <div className={compact ? "phone compact-phone" : "phone"}>
      <span className="phone-scan-beam" aria-hidden="true" />
      <div className="phone-island" />
      <div className="phone-top">
        <span>9:41</span>
        <span>••• ▰</span>
      </div>
      <div className="phone-brand">
        <BrandLogo className="phone-brand-logo" /> <Globe2 size={12} />
      </div>
      <div className="phone-product">
        <img src={product} alt="PowerTool X200 无绳电钻" width={1024} height={1024} />
      </div>
      <div className="phone-body">
        <span className="phone-kicker">SMART TOOLS. BETTER LIVING.</span>
        <h3>PowerTool X200</h3>
        <p>18V Cordless Drill · Model X200</p>
        <span className="verified">
          <Check size={10} />
          {t("产品数字身份已连接", "Digital identity connected", "Digitale Identität verbunden")}
        </span>
        <div className="phone-service">
          <ShieldCheck />
          <span>{t("安全与合规", "Safety & Compliance", "Sicherheit & Compliance")}</span>
          <ChevronRight />
        </div>
        <div className="phone-service">
          <BookOpen />
          <span>{t("电子使用说明书", "Digital Manual", "Digitale Anleitung")}</span>
          <ChevronRight />
        </div>
        <div className="phone-service">
          <Headphones />
          <span>{t("保修与品牌支持", "Warranty & Support", "Garantie & Support")}</span>
          <ChevronRight />
        </div>
        {!compact && (
          <div className="phone-service">
            <Users />
            <span>{t("加入本地社群", "Local Community", "Lokale Community")}</span>
            <ChevronRight />
          </div>
        )}
        <div className="phone-cta">
          {channel === "品牌独立站"
            ? t("探索您的产品服务", "Explore product services", "Produktservices entdecken")
            : channel}{" "}
          <ArrowUpRight size={11} />
        </div>
        <div className="phone-bottom">Powered by Product iCode Connect</div>
      </div>
    </div>
  );
}
export function EcosystemVisual() {
  const t = useCopy();
  return (
    <div className="ecosystem-visual">
      <div className="visual-grid" />
      <div className="visual-heading">
        <span className="status-dot" /> PRODUCT iCODE CONNECT{" "}
        <span className="visual-live">LIVE DEMO</span>
      </div>
      <svg className="ecosystem-lines" viewBox="0 0 650 450" aria-hidden="true">
        <path d="M155 245 H235 Q255 245 255 215 V200 H285" />
        <path d="M370 200 H417 V92 H475 M417 200 V170 H475 M417 200 V253 H475 M417 253 V337 H475" />
        <circle r="3">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M155 245 H235 Q255 245 255 215 V200 H285"
          />
        </circle>
      </svg>
      <div className="physical-product">
        <img src={product} alt="电钻与带二维码的产品包装" width={1024} height={1024} />
        <div className="qr-tile scan-qr">
          <QRCodeSVG value="https://id.gs1.org/01/09506000134352" size={40} />
          <ScanLine size={14} />
        </div>
        <span>{t("一个实体产品", "ONE PRODUCT", "EIN PRODUKT")}</span>
      </div>
      <div className="hero-phone">
        <ProductPhone compact />
      </div>
      <div className="ecosystem-nodes">
        {nodes.map((n) => (
          <Link to={n.to} className={`ecosystem-node ${n.cls}`} key={n.title}>
            <span className="node-icon">
              <n.icon size={19} />
            </span>
            <span>
              <b>{n.title}</b>
              <small>{t(n.sub, n.title)}</small>
            </span>
            <ArrowUpRight size={12} />
          </Link>
        ))}
      </div>
      <div className="visual-caption">
        <span>ONE PRODUCT</span>
        <ChevronRight />
        <span>ONE CODE</span>
        <ChevronRight />
        <strong>MULTIPLE SERVICES</strong>
      </div>
      <div className="visual-footnote">示例产品及业务连接 · 非已上线集成</div>
    </div>
  );
}
export function ChannelNetwork() {
  const [selected, setSelected] = useState("Amazon");
  const t = useCopy();
  const options = ["Amazon", "MediaMarkt", "eBay", "Shopify", "欧洲线下零售", "本地经销商"];
  return (
    <div className="network-wrap">
      <span className="illustrative-badge">Illustrative Demo · 场景示意</span>
      <div className="network-diagram">
        <svg viewBox="0 0 800 430" className="network-lines" aria-hidden="true">
          <path d="M400 100 V165 M180 115 L330 190 M620 115 L470 190 M155 255 H330 M645 255 H470 M220 370 L350 290 M580 370 L450 290" />
        </svg>
        <div className="network-qr">
          <QRCodeSVG size={34} value="https://id.gs1.org/01/09506000134352" />
          <span>
            GS1 Digital Link<small>GTIN · 产品包装二维码</small>
          </span>
        </div>
        <div className="network-center">
          <img className="brand-icon network-brand-icon" src="/brand/product-icode/04_Icon_Only.png" alt="" width={638} height={608} />
          <strong>
            Product iCode <span>Connect</span>
          </strong>
          <small>GTIN / Product Identity</small>
          <div>
            Channel Mapping · Product Information
            <br />
            Digital Label · Service Routing
          </div>
        </div>
        {options.map((o, i) => (
          <Button
            variant="outline"
            className={`channel-node channel-position-${i} ${selected === o ? "selected" : ""}`}
            key={o}
            onClick={() => setSelected(o)}
          >
            {i < 4 ? (
              <span className={`channel-wordmark mark-${i}`}>{o}</span>
            ) : (
              <>
                <ShoppingBag />
                {o}
              </>
            )}
          </Button>
        ))}
      </div>
      <div className="network-detail">
        <span className="status-dot" />
        <b>{selected}</b>
        <span>
          {t(
            "产品信息映射 · 数字标签 · 消费者服务入口",
            "Product mapping · Digital label · Consumer services",
          )}
        </span>

      </div>
      <div className="line-legend">
        <span>商品主数据</span>
        <span>渠道信息</span>
        <span>消费者服务入口</span>
      </div>
    </div>
  );
}
export function ChannelExperience() {
  const [channel, setChannel] = useState<Channel>("Amazon");
  return (
    <div className="channel-experience">
      <div className="segmented">
        {channels.map((c) => (
          <Button
            key={c}
            variant="ghost"
            className={channel === c ? "selected" : ""}
            onClick={() => setChannel(c)}
          >
            {c}
          </Button>
        ))}
      </div>
      <div className="experience-body">
        <ProductPhone channel={channel} />
        <div className="experience-info">
          <span className="eyebrow">ONE CODE. RELEVANT SERVICES.</span>
          <h3>{channel} 客户页面</h3>
          <p>同一产品身份，提供与购买渠道相关的服务信息。</p>
          {channelServices(channel).map((s) => (
            <div className="feature-check" key={s}>
              <Check />
              {s}
            </div>
          ))}
          <div className="info-note">
            <ShieldCheck />
            消费者自行选择购买渠道，或经合法取得的订单上下文进入。静态二维码不会自动识别真实购买平台。
          </div>
        </div>
      </div>
    </div>
  );
}
export function DataLayers() {
  return (
    <div className="data-layers">
      <div className="identity-layer">
        <Database />
        <span>
          <b>产品数字身份</b>
          <small>GTIN / 型号 / 批次 / 序列号</small>
        </span>
      </div>
      <div className="layer-grid">
        {[
          "产品基本信息",
          "安全与合规文件",
          "多语言使用说明",
          "包装与标签信息",
          "生命周期数据",
          "审核及版本记录",
        ].map((v, i) => (
          <div key={v}>
            {i % 2 ? <FileCheck2 /> : <Layers3 />}
            {v}
          </div>
        ))}
      </div>
      <div className="access-layer">
        {["消费者公开信息", "经授权的商业伙伴", "品牌内部管理资料"].map((v, i) => (
          <span key={v}>
            {i ? <LockKeyhole /> : <Globe2 />}
            {v}
          </span>
        ))}
      </div>
      <p>权限分层 · 文件版本追踪 · 数据来源可溯源</p>
    </div>
  );
}
