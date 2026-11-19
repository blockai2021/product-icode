export type DppCopy = readonly [zh: string, en: string, de: string];
export type DppRow = { label: DppCopy; value: DppCopy };
const text = (zh: string, en: string, de: string): DppCopy => [zh, en, de];
export const dppDemo = {
  identifier: "DEMO-BAT-001",
  version: "V1.0",
  verification: "NOT_VERIFIED",
  product: text("工业电池 — 示例", "Industrial Battery — Demo", "Industriebatterie — Demo"),
  manufacturer: text("示例制造商", "Example Manufacturer", "Beispielhersteller"),
  disclaimer: text("仅为模拟数据，不是合规认证。", "Illustrative demo data. Not a compliance certification.", "Illustrative Demodaten. Keine Compliance-Zertifizierung."),
  tabs: [
    { id: "product", title: text("产品信息", "Product Information", "Produktinformationen"), rows: [
      { label: text("产品名称", "Product Name", "Produktname"), value: text("工业电池 — 示例", "Industrial Battery — Demo", "Industriebatterie — Demo") },
      { label: text("产品标识", "Product Identifier", "Produktkennung"), value: text("DEMO-BAT-001", "DEMO-BAT-001", "DEMO-BAT-001") },
      { label: text("制造商", "Manufacturer", "Hersteller"), value: text("示例制造商", "Example Manufacturer", "Beispielhersteller") },
      { label: text("产品类别", "Product Category", "Produktkategorie"), value: text("工业电池", "Industrial Battery", "Industriebatterie") },
      { label: text("示例型号", "Example Model", "Beispielmodell"), value: text("BAT-EXAMPLE-01", "BAT-EXAMPLE-01", "BAT-EXAMPLE-01") },
      { label: text("数据版本", "Data Version", "Datenversion"), value: text("V1.0", "V1.0", "V1.0") },
    ] },
    { id: "compliance", title: text("法规相关数据", "Compliance Data", "Regulatorische Daten"), rows: [
      { label: text("法规参考", "Regulation Reference", "Verordnungsreferenz"), value: text("欧盟电池法规 (EU) 2023/1542", "EU Batteries Regulation 2023/1542", "EU-Batterieverordnung 2023/1542") },
      { label: text("数据映射", "Data Mapping", "Datenzuordnung"), value: text("示例字段映射", "Example Data Mapping", "Beispielhafte Feldzuordnung") },
      { label: text("支持性文档", "Supporting Documentation", "Begleitdokumentation"), value: text("仅为文档示意，非正式证明", "Illustrative Supporting Documentation", "Illustrative Begleitdokumentation") },
      { label: text("数据核验", "Data Verification", "Datenprüfung"), value: text("未核验", "Not verified", "Nicht verifiziert") },
    ] },
    { id: "lifecycle", title: text("生命周期", "Lifecycle", "Lebenszyklus"), rows: [
      { label: text("制造事件", "Manufacturing Event", "Herstellungsereignis"), value: text("示例记录", "Example record", "Beispieldatensatz") },
      { label: text("维护信息", "Maintenance Information", "Wartungsinformationen"), value: text("示例记录", "Example record", "Beispieldatensatz") },
      { label: text("生命周期终结信息", "End-of-Life Information", "Informationen zum Lebensende"), value: text("示例指导", "Example guidance", "Beispielhafte Hinweise") },
      { label: text("版本记录", "Version History", "Versionsverlauf"), value: text("V1.0", "V1.0", "V1.0") },
    ] },
  ],
} as const;

export const dppChallenges = [
  { icon: "data", name: "Fragmented Product Data", title: text("产品数据分散", "Fragmented Product Data", "Verteilte Produktdaten"), description: text("将不同来源的产品信息组织为一致结构。", "Organize information from different sources into a consistent structure.", "Informationen aus verschiedenen Quellen einheitlich strukturieren.") },
  { icon: "supply", name: "Supply Chain Collaboration", title: text("供应链协作", "Supply Chain Collaboration", "Zusammenarbeit in der Lieferkette"), description: text("明确供应商与相关主体的数据责任。", "Clarify data responsibilities across suppliers and stakeholders.", "Datenverantwortung von Lieferanten und Beteiligten klären.") },
  { icon: "regulation", name: "Regulatory Complexity", title: text("法规要求复杂", "Regulatory Complexity", "Komplexe regulatorische Anforderungen"), description: text("按产品类别评估适用的数据要求。", "Assess applicable data requirements by product category.", "Anwendbare Datenanforderungen je Produktkategorie bewerten.") },
  { icon: "lifecycle", name: "Lifecycle Data Updates", title: text("生命周期数据更新", "Lifecycle Data Updates", "Datenpflege im Lebenszyklus"), description: text("让信息更新与版本记录有序衔接。", "Coordinate ongoing updates and version records.", "Laufende Aktualisierungen und Versionen koordinieren.") },
  { icon: "access", name: "Controlled Data Access", title: text("受控数据访问", "Controlled Data Access", "Kontrollierter Datenzugriff"), description: text("区分公开信息与经授权访问的数据。", "Distinguish public information from authorized-access data.", "Öffentliche Informationen und zugriffsbeschränkte Daten unterscheiden.") },
] as const;

export const dppCapabilities = [
  { icon: "identity", name: "Digital Identity", title: text("产品数字身份", "Digital Identity", "Digitale Produktidentität"), description: text("组织产品标识、产品编码及数字护照入口，为不同产品层级建立可识别的数据关联。", "Structure product identifiers and digital passport entry points across relevant product levels.", "Produktkennungen und digitale Passzugänge über relevante Produktebenen hinweg strukturieren.") },
  { icon: "data", name: "Data Management", title: text("产品数据管理", "Data Management", "Produktdatenmanagement"), description: text("组织产品、材料、供应商、证明资料和相关数据，形成可持续维护的信息结构。", "Organize product, material, supplier and supporting documentation data in a maintainable structure.", "Produkt-, Material-, Lieferanten- und Begleitdaten in einer pflegbaren Struktur organisieren.") },
  { icon: "regulation", name: "Compliance Mapping", title: text("法规数据映射", "Compliance Mapping", "Zuordnung regulatorischer Daten"), description: text("按照适用行业和法规要求，将现有产品数据与数字护照字段需求进行匹配。", "Map existing product information to applicable sector-specific DPP data requirements.", "Vorhandene Produktinformationen den anwendbaren branchenspezifischen DPP-Anforderungen zuordnen.") },
  { icon: "access", name: "Access Control", title: text("数据访问权限", "Access Control", "Datenzugriffsrechte"), description: text("规划公开信息、受限数据和不同角色的访问范围。", "Define access requirements for public information, restricted data and authorized stakeholders.", "Zugriffsanforderungen für öffentliche Informationen, beschränkte Daten und berechtigte Beteiligte planen.") },
  { icon: "integration", name: "Interoperability", title: text("系统互操作", "Interoperability", "Interoperabilität"), description: text("探索与 ERP、PLM、PIM 及供应链数据系统的标准化连接。", "Explore integration scenarios involving ERP, PLM, PIM and supply-chain information systems.", "Integrationsszenarien mit ERP, PLM, PIM und Lieferkettensystemen untersuchen.") },
  { icon: "lifecycle", name: "Lifecycle Updates", title: text("产品生命周期管理", "Lifecycle Updates", "Lebenszyklusmanagement"), description: text("规划产品信息更新、版本记录以及相关生命周期事件的数据管理方式。", "Support structured updates, version history and relevant lifecycle data events.", "Strukturierte Aktualisierungen, Versionsverläufe und relevante Lebenszyklusereignisse planen.") },
] as const;

export const dppWorkflow = [
  { title: text("企业数据源", "Data Sources", "Unternehmensdatenquellen"), detail: "ERP / PLM / PIM / Supplier Data", description: text("产品主数据、材料、供应商资料及支持性文档。", "Product master data, materials, supplier information and supporting documents.", "Produktstammdaten, Materialien, Lieferantendaten und Begleitdokumente.") },
  { title: text("Product Ident DPP", "Product Ident DPP", "Product Ident DPP"), detail: "Structure / Map / Version / Access", description: text("数据整理、法规字段映射、版本与权限设计。", "Data structuring, regulatory mapping, version management and access design.", "Datenstrukturierung, regulatorische Zuordnung, Versionen und Zugriffsplanung.") },
  { title: text("数字产品护照", "Digital Product Passport", "Digitaler Produktpass"), detail: "Structured Data / Digital Identity", description: text("形成结构化的护照信息与经授权的访问入口。", "Structured passport information and authorized access points.", "Strukturierte Passinformationen und autorisierte Zugänge.") },
  { title: text("相关主体", "Stakeholders", "Beteiligte"), detail: "Consumers / Authorities / Partners", description: text("消费者、主管机构与经授权伙伴按适用规则访问。", "Consumers, authorities and authorized partners access data under applicable rules.", "Verbraucher, Behörden und berechtigte Partner greifen nach geltenden Regeln zu.") },
] as const;

export const dppIndustries = [
  { id: "battery", title: "Battery Passport", localized: text("电池护照", "Battery Passport", "Batteriepass"), description: text("面向相关电池产品的数字护照数据准备、产品信息组织和生命周期数据场景。", "Explore battery passport data preparation and lifecycle information scenarios under the EU Batteries Regulation.", "Datenvorbereitung und Lebenszyklusinformationen für Batteriepass-Szenarien nach der EU-Batterieverordnung."), reference: "Regulation (EU) 2023/1542", detail: text("先评估电池类别、适用范围与实施日期，再定义数据字段、责任主体及核验流程。", "Assess battery category, applicability and implementation dates before defining fields, responsibilities and verification.", "Batteriekategorie, Anwendungsbereich und Fristen prüfen, bevor Datenfelder, Verantwortlichkeiten und Prüfungen festgelegt werden.") },
  { id: "textile", title: "Textile & Apparel DPP", localized: text("纺织品与服装 DPP", "Textile & Apparel DPP", "DPP für Textilien und Bekleidung"), description: text("探索纺织品数字护照的数据结构、材料信息、可持续性与供应链透明度要求。", "Prepare product and supply-chain data for evolving textile DPP requirements.", "Produkt- und Lieferkettendaten für sich entwickelnde Textil-DPP-Anforderungen vorbereiten."), reference: "ESPR (EU) 2024/1781", detail: text("具体行业要求尚待确定；材料、供应链及可持续性字段需以适用的产品专属规则为准。", "Sector-specific requirements are to be determined; material, supply-chain and sustainability fields depend on applicable product-specific rules.", "Branchenspezifische Anforderungen sind noch festzulegen; Material-, Lieferketten- und Nachhaltigkeitsfelder richten sich nach den anwendbaren produktspezifischen Regeln.") },
  { id: "materials", title: "Industrial Materials", localized: text("工业材料", "Industrial Materials", "Industriematerialien"), description: text("探索工业材料的来源、材料属性、供应链追溯与循环经济数据管理场景。", "Explore material traceability, product data and circularity information use cases.", "Herkunft, Materialeigenschaften, Rückverfolgbarkeit und Kreislaufdaten untersuchen."), reference: "ESPR framework", detail: text("需按适用的产品专属规则评估；此处仅展示来源、属性、追溯和循环信息的方案方向。", "Subject to applicable product-specific rules; these are illustrative approaches to origin, properties, traceability and circularity data.", "Abhängig von anwendbaren produktspezifischen Regeln; dargestellt werden Ansätze für Herkunft, Eigenschaften, Rückverfolgbarkeit und Kreislaufdaten.") },
] as const;

export const dppFaq = [
  { question: text("什么是数字产品护照？", "What is a Digital Product Passport?", "Was ist ein digitaler Produktpass?"), answer: text("数字产品护照按照适用法规和技术要求，以结构化方式提供产品相关信息。具体义务因产品类别而异。", "A Digital Product Passport is a structured means of providing product-related information according to applicable regulatory and technical requirements. Specific obligations vary by product category.", "Ein digitaler Produktpass stellt produktbezogene Informationen gemäß anwendbaren regulatorischen und technischen Anforderungen strukturiert bereit. Die konkreten Pflichten unterscheiden sich je Produktkategorie.") },
  { question: text("DPP 只是一个二维码吗？", "Is DPP just a QR code?", "Ist ein DPP nur ein QR-Code?"), answer: text("不是。二维码或其他数据载体可以提供访问入口，而 DPP 还涉及产品标识、信息要求、数据管理与访问规则。", "No. A QR code or another data carrier may provide access, while a DPP also involves relevant product identifiers, information requirements, data management and access rules.", "Nein. Ein QR-Code oder anderer Datenträger kann den Zugang ermöglichen. Ein DPP umfasst auch Produktkennungen, Informationsanforderungen, Datenmanagement und Zugriffsregeln.") },
  { question: text("不使用 Connect，也能使用 Product Ident DPP 吗？", "Can Product Ident DPP be used without Connect?", "Kann Product Ident DPP ohne Connect genutzt werden?"), answer: text("可以。Product Ident DPP 定位为独立解决方案，与 Connect 的集成是可选项。两者可分别采购，Connect 也可按需求接入第三方 DPP 来源。", "Yes. Product Ident DPP is designed as an independent solution. Integration with Connect is optional. Both products can be purchased separately; Connect can also integrate third-party DPP sources.", "Ja. Product Ident DPP ist als eigenständige Lösung konzipiert. Die Integration mit Connect ist optional. Beide Produkte sind separat erhältlich; Connect kann auch DPP-Quellen Dritter einbinden.") },
  { question: text("可以集成现有 ERP、PLM 或 PIM 系统吗？", "Can existing ERP, PLM or PIM systems be integrated?", "Können bestehende ERP-, PLM- oder PIM-Systeme integriert werden?"), answer: text("集成取决于客户系统、可用接口及约定实施范围。具体连接能力必须先评估；本页不承诺已完成 API 接入或自动同步。", "Integration depends on the customer's systems, available interfaces and the agreed implementation scope. Specific connectivity must be assessed; no completed API integration or automatic synchronization is promised here.", "Die Integration hängt von Kundensystemen, verfügbaren Schnittstellen und dem vereinbarten Umfang ab. Konkrete Verbindungen sind zu prüfen; abgeschlossene API-Anbindungen oder automatische Synchronisation werden hier nicht zugesichert.") },
  { question: text("已获得认证或连接欧盟 DPP Registry 吗？", "Is Product Ident DPP already certified or connected to the EU DPP Registry?", "Ist Product Ident DPP bereits zertifiziert oder mit dem EU-DPP-Register verbunden?"), answer: text("本演示页面不声称获得任何此类认证或完成官方 Registry 对接。未来的集成或认证状态必须独立核实。", "No such certification or official registry connection is claimed on this demonstration page. Any future integration or certification status must be verified independently.", "Diese Demoseite behauptet keine solche Zertifizierung oder offizielle Registeranbindung. Künftige Integrations- oder Zertifizierungsstände müssen unabhängig geprüft werden.") },
  { question: text("可以支持不同行业吗？", "Can the platform support different industries?", "Kann die Plattform verschiedene Branchen unterstützen?"), answer: text("方案可根据行业需求调整，但强制 DPP 数据与实施要求取决于适用的行业专属规则。正式实施前需逐项确认法规时间与要求。", "The solution approach can be adapted to industry needs, but mandatory DPP data and implementation requirements depend on the applicable sector-specific rules. Regulatory dates and obligations must be confirmed before implementation.", "Der Lösungsansatz lässt sich an Branchen anpassen. Verbindliche DPP-Daten und Umsetzungspflichten hängen jedoch von den geltenden branchenspezifischen Regeln ab. Fristen und Pflichten sind vor der Umsetzung zu bestätigen.") },
] as const;