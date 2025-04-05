// 国内DNS服务器
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query" // 360安全DNS
];
// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query" // Mullvad(备)
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "aigc-Loyalsoldier": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/blackmatrix7/aigc-loyalsoldier.yaml"
  },
  "aigc-custom": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/aigc-custom.yaml",
    "path": "./ruleset/blackmatrix7/aigc-custom.yaml"
  },
  "au-proxy-custom": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/au-proxy-custom.yaml",
    "path": "./ruleset/custom/au-proxy-custom.yaml"
  },
  "adult-movie-custom": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/adult-movie-custom.yaml",
    "path": "./ruleset/custom/adult-movie-custom.yaml"
  },
  "hk-proxy-custom": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/hk-proxy-custom.yaml",
    "path": "./ruleset/custom/hk-proxy-custom.yaml"
  },
  "hktv-custom": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/hktv-custom.yaml",
    "path": "./ruleset/custom/hktv-custom.yaml"
  },
  "iptool-custom": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/iptool-custom.yaml",
    "path": "./ruleset/custom/iptool-custom.yaml"
  },
  "netflix-custom": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/netflix-custom.yaml",
    "path": "./ruleset/custom/netflix-custom.yaml"
  },
  "sg-proxy-custom": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/sg-proxy-custom.yaml",
    "path": "./ruleset/custom/sg-proxy-custom.yaml"
  },
  "speedtest-custom": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/speedtest-custom.yaml",
    "path": "./ruleset/custom/speedtest-custom.yaml"
  },
  "us-proxy-custom": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/us-proxy-custom.yaml",
    "path": "./ruleset/custom/us-proxy-custom.yaml"
  },
  "proxy-custom": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/rule-custom/proxy-custom.yaml",
    "path": "./ruleset/custom/proxy-custom.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  }
};
// 规则
const rules = [
  // 自定义规则
  "DOMAIN-SUFFIX,googleapis.cn,手动切换", // Google服务
  "DOMAIN-SUFFIX,gstatic.com,手动切换", // Google静态资源
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,手动切换", // Google Play下载服务
  "DOMAIN-SUFFIX,github.io,手动切换", // Github Pages
  "DOMAIN,v2rayse.com,手动切换", // V2rayse节点工具
  // blackmatrix7 规则集
  "RULE-SET,aigc-Loyalsoldier,人工智能",
  // Innovautobot 规则集
  "RULE-SET,aigc-custom,人工智能",
  "RULE-SET,netflix-custom,流媒体",  
  "RULE-SET,hktv-custom,香港电视",
  "RULE-SET,hk-proxy-custom,香港节点",
  "RULE-SET,sg-proxy-custom,新加坡节点",
  "RULE-SET,us-proxy-custom,美国节点",
  "RULE-SET,au-proxy-custom,澳大利亚节点",  
  "RULE-SET,iptool-custom,网络工具",  
  "RULE-SET,speedtest-custom,网络工具",  
  "RULE-SET,adult-movie-custom,成人电影",
  "RULE-SET,proxy-custom,手动切换",
  // Loyalsoldier 规则集
  "RULE-SET,icloud,苹果服务",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,google,谷歌服务",
  "RULE-SET,applications,国内直连",
  "RULE-SET,private,国内直连",
  "RULE-SET,gfw,手动切换",
  "RULE-SET,tld-not-cn,手动切换",
  "RULE-SET,direct,国内直连",
  "RULE-SET,lancidr,国内直连,no-resolve",
  "RULE-SET,cncidr,国内直连,no-resolve",
  "RULE-SET,reject,广告过滤",
  "RULE-SET,proxy,手动切换",
  "RULE-SET,telegramcidr,电报消息,no-resolve",
  // 其他规则
  "GEOIP,LAN,国内直连,no-resolve",
  "GEOIP,CN,国内直连,no-resolve",
  "MATCH,漏网之鱼"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};
// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中的代理组
  // 手动切换、人工智能、流媒体、香港电视、香港节点、新加坡节点、美国节点、澳大利亚节点、IP查询工具、网络工具、成人电影、苹果服务、谷歌服务、电报消息、国内直连、广告过滤、漏网之鱼
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "手动切换",
      "type": "select",
      // "proxies": ["延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "人工智能",
      "type": "select",
      "proxies": ["DIRECT","手动切换","香港自动","台湾自动","日本自动","新加坡自动","美国自动","欧洲自动","REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    },
    {
      ...groupBaseOption,
      "name": "流媒体",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "香港自动","台湾自动","日本自动","新加坡自动","美国自动","欧洲自动","REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/netflix.svg"
    },
    {
      ...groupBaseOption,
      "name": "香港电视",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "香港自动","REJECT"],
      "icon": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/svg/icon_TV.svg"
    },
    {
      ...groupBaseOption,
      "name": "香港节点",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "香港自动","REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/hk.svg"
    },
    {
      ...groupBaseOption,
      "name": "新加坡节点",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "新加坡自动","REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/sg.svg"
    },
    {
      ...groupBaseOption,
      "name": "美国节点",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "美国自动","REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/us.svg"
    },
    {
      ...groupBaseOption,
      "name": "澳大利亚节点",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "澳新自动","REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/au.svg"
    },
    {
      ...groupBaseOption,
      "name": "网络工具",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "亚太自动", "日台新韩自动", "香港自动", "台湾自动", "日本自动", "新加坡自动", "韩国自动", "澳新自动", "美国自动", "加拿大自动", "欧洲自动", "南美自动", "东南亚自动", "REJECT"],
      "icon": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/svg/ip_tool.svg"
    },
    {
      ...groupBaseOption,
      "name": "成人电影",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "亚太自动", "日台新韩自动", "香港自动", "台湾自动", "日本自动", "新加坡自动", "韩国自动", "REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/warp.svg"
    },
    {
      ...groupBaseOption,
      "name": "苹果服务",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "亚太自动", "日台新韩自动", "香港自动", "台湾自动", "日本自动", "新加坡自动", "REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
    },
    {
      ...groupBaseOption,
      "name": "谷歌服务",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "亚太自动", "日台新韩自动", "香港自动", "台湾自动", "日本自动", "新加坡自动", "美国自动", "REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
    },
    {
      ...groupBaseOption,
      "name": "电报消息",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "亚太自动", "日台新韩自动", "香港自动", "台湾自动", "日本自动", "新加坡自动", "美国自动", "REJECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    },
    {
      ...groupBaseOption,
      "name": "延迟选优",
      "type": "url-test",
      "tolerance": 100,
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
    },
    {
      ...groupBaseOption,
      "name": "故障转移",
      "type": "fallback",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg"
    },
    {
      ...groupBaseOption,
      "name": "负载均衡(散列)",
      "type": "load-balance",
      "strategy": "consistent-hashing",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg"
    },
    {
      ...groupBaseOption,
      "name": "负载均衡(轮询)",
      "type": "load-balance",
      "strategy": "round-robin",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg"
    },
    {
      ...groupBaseOption,
      "name": "亚太自动",
      "type": "url-test",
      "include-all": true,
      "filter": "JP|🇯🇵|日本|TW|🇹🇼|台湾|SG|🇸🇬|新加坡|KR|🇰🇷|韩国|HK|🇭🇰|香港|AU|🇦🇺|澳大利亚|NZ|🇳🇿|新西兰|ID|🇮🇩|印尼|印度尼西亚|MY|🇲🇾|马来西亚|TH|🇹🇭|泰国|VN|🇻🇳|越南|PH|🇵🇭|菲律宾",
      "icon": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/svg/asia_pacific.svg"
    },
    {
      ...groupBaseOption,
      "name": "日台新韩自动",
      "type": "url-test",
      "include-all": true,
      "filter": "JP|🇯🇵|日本|TW|🇹🇼|台湾|SG|🇸🇬|新加坡|KR|🇰🇷|韩国",
      "icon": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/svg/asia.svg"
    },
    {
      ...groupBaseOption,
      "name": "香港自动",
      "type": "url-test",
      "include-all": true,
      "filter": "HK|🇭🇰|香港|Hong Kong",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg"
    },
    {
      ...groupBaseOption,
      "name": "台湾自动",
      "type": "url-test",
      "include-all": true,
      "filter": "TW|🇹🇼|台湾|Taiwan",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/tw.svg"
    },
    {
      ...groupBaseOption,
      "name": "日本自动",
      "type": "url-test",
      "include-all": true,
      "filter": "JP|🇯🇵|日本|Japan",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/jp.svg"
    },
    {
      ...groupBaseOption,
      "name": "新加坡自动",
      "type": "url-test",
      "include-all": true,
      "filter": "SG|🇸🇬|新加坡|Singapore",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sg.svg"
    },
    {
      ...groupBaseOption,
      "name": "韩国自动",
      "type": "url-test",
      "include-all": true,
      "filter": "KR|🇰🇷|韩国|Korea",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/kr.svg"
    },
    {
      ...groupBaseOption,
      "name": "澳新自动",
      "type": "url-test",
      "include-all": true,
      "filter": "AU|🇦🇺|澳大利亚|Australia|NZ|🇳🇿|新西兰|New Zealand",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/au.svg"
    },
    {
      ...groupBaseOption,
      "name": "美国自动",
      "type": "url-test",
      "include-all": true,
      "filter": "US|🇺🇸|美国|United States",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/us.svg"
    },
    {
      ...groupBaseOption,
      "name": "加拿大自动",
      "type": "url-test",
      "include-all": true,
      "filter": "CA|🇨🇦|加拿大|Canada",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ca.svg"
    },
    {
      ...groupBaseOption,
      "name": "欧洲自动",
      "type": "url-test",
      "include-all": true,
      "filter": "DE|🇩🇪|德国|Germany|GB|🇬🇧|英国|United Kingdom|FR|🇫🇷|法国|France|IT|🇮🇹|意大利|Italy|ES|🇪🇸|西班牙|Spain|NL|🇳🇱|荷兰|Netherlands|CH|🇨🇭|瑞士|Switzerland",
      "icon": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/svg/europe.svg"
    },
    {
      ...groupBaseOption,
      "name": "南美自动",
      "type": "url-test",
      "include-all": true,
      "filter": "BR|🇧🇷|巴西|Brazil|AR|🇦🇷|阿根廷|Argentina|CL|🇨🇱|智利|Chile|PE|🇵🇪|秘鲁|Peru|CO|🇨🇴|哥伦比亚|Colombia",
      "icon": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/svg/south_america.svg"
    },
    {
      ...groupBaseOption,
      "name": "东南亚自动",
      "type": "url-test",
      "include-all": true,
      "filter": "ID|🇮🇩|印尼|印度尼西亚|Indonesia|MY|🇲🇾|马来西亚|Malaysia|TH|🇹🇭|泰国|Thailand|VN|🇻🇳|越南|Vietnam|PH|🇵🇭|菲律宾|Philippines",
      "icon": "https://raw.githubusercontent.com/shakenny/ClashVergeConfig/main/svg/southeast_asia.svg"
    },
    {
      ...groupBaseOption,
      "name": "广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    },
    {
      ...groupBaseOption,
      "name": "国内直连",
      "type": "select",
      "proxies": ["DIRECT", "手动切换", "延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "全局拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
    },
    {
      ...groupBaseOption,
      "name": "漏网之鱼",
      "type": "select",
      "proxies": ["REJECT", "DIRECT","手动切换"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
    }
  ];


  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}