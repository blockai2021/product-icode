export const channels = ["Amazon", "MediaMarkt", "eBay", "品牌独立站"] as const;
export type Channel = (typeof channels)[number];
export function channelServices(channel: Channel) {
  return channel === "Amazon"
    ? ["产品说明书", "保修登记", "Amazon 订单售后指引"]
    : channel === "MediaMarkt"
      ? ["产品说明书", "MediaMarkt 售后指引", "品牌支持"]
      : channel === "eBay"
        ? ["产品说明书", "联系订单卖家", "品牌售后支持"]
        : ["产品说明书", "保修登记", "品牌会员", "自愿营销订阅"];
}
export const demoPolicy = {
  safetyRequiresRegistration: false,
  warrantyImpliesMarketingConsent: false,
  scansImplyMarketingConsent: false,
  automaticChannelIdentification: false,
  universalDppCompliance: false,
};
export const packages = [
  {
    name: "Digital Identity",
    summary: "从一个产品数字身份开始",
    features: [
      "统一二维码与 GS1 Digital Link",
      "多语言数字产品页面",
      "产品信息与数字标签",
      "基础消费者服务入口",
    ],
  },
  {
    name: "Compliance Connect",
    summary: "让合规信息有序协同",
    features: [
      "包含 Digital Identity 全部功能",
      "合规文件与版本管理",
      "中德审核与批准工作流",
      "包装实施支持与 DPP 准备",
    ],
  },
  {
    name: "Local Growth",
    summary: "让每次连接创造长期价值",
    features: [
      "包含 Compliance Connect 全部功能",
      "消费者关系与自愿社群加入",
      "本地活动与会员权益",
      "渠道互动与增长数据分析",
    ],
  },
];
export const workflow = [
  "中国制造商上传资料",
  "Product iCode 数据整理",
  "欧洲专业审核",
  "品牌批准",
  "数字标签发布",
  "持续信息更新",
];
export const owners = [
  "中国团队 / 客户",
  "中国团队",
  "欧洲团队 / 专业伙伴",
  "品牌客户",
  "Product iCode",
  "中德团队",
];
export const growthSteps = [
  "购买产品",
  "扫码访问",
  "产品服务",
  "自愿加入社群",
  "本地互动",
  "忠诚与推荐",
  "复购",
  "产品反馈",
];
