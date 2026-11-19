import { Battery, FileText, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dppDemo } from "@/lib/dpp-demo";
import batteryAsset from "@/assets/dpp-battery.webp.asset.json";
import { useCopy } from "./site-shell";

export function DppBadge() {
  const t = useCopy();
  return <span className="dpp-badge">DEMO DATA · {t("模拟数据", "Illustrative data", "Demodaten")}</span>;
}

export function DppDemo({ compact = false }: { compact?: boolean }) {
  const t = useCopy();
  const icons = [Battery, FileText, History];
  return <div className={`dpp-passport ${compact ? "dpp-passport-compact" : ""}`}>
    <div className="dpp-passport-top"><span>{t("工业电池护照", "Industrial Battery Passport", "Industriebatteriepass")}</span><DppBadge /></div>
    <div className="dpp-passport-product">
      <img src={batteryAsset.url} alt={t("工业电池示例图片", "Illustrative industrial battery", "Beispiel einer Industriebatterie")} width={1200} height={800} />
      <div><span className="eyebrow">PRODUCT IDENT DPP</span><h3>{t(...dppDemo.product)}</h3><p>{dppDemo.identifier}</p><small>{t(...dppDemo.manufacturer)} · {t("数据版本", "Data Version", "Datenversion")} {dppDemo.version}</small></div>
    </div>
    <Tabs defaultValue="product">
      <TabsList className="dpp-tabs" aria-label={t("护照数据", "Passport data", "Passdaten")}>{dppDemo.tabs.map((tab, i) => {
        const Icon = icons[i] ?? Battery;
        return <TabsTrigger value={tab.id} key={tab.id}><Icon size={15} />{t(...tab.title)}</TabsTrigger>;
      })}</TabsList>
      {dppDemo.tabs.map(tab => <TabsContent key={tab.id} value={tab.id} className="dpp-tab-content"><dl className="dpp-data-list">{(compact ? tab.rows.filter((_, i) => i < 4 || i === 5) : tab.rows).map(row => <div key={row.label[1]}><dt>{t(...row.label)}</dt><dd>{t(...row.value)}</dd></div>)}</dl></TabsContent>)}
    </Tabs>
    <p className="dpp-disclaimer">{t(...dppDemo.disclaimer)}</p>
  </div>;
}