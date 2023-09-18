/**
 * Map "product-slug" to GitHub username(s) of PCX team.
 * @important "product-slug" keys must match `content/*` subdirectory names.
 * @note Products are gathered from these DevDocs & do not necessarily map to internal product names.
 * Products w/o any GitHub username(s) will ping `haleycode` for assignment.
 * This PCX OWNERSHIP mapping is used for:
 *   - the "issues.opened" event to assign GitHub Issues to PCX member
 *   - the "pull_request.opened" event to request review(s) instead of CODEOWNERS usage
 */
export const OWNERS: Record<string, string[]> = {
  "1.1.1.1": ["RebeccaTamachiro"],
  analytics: ["angelampcosta"],
  api: ["ranbel"],
  "api-shield": ["patriciasantaana"],
  "argo-smart-routing": ["dcpena"],
  "automatic-platform-optimization": ["dcpena"],
  bots: ["patriciasantaana"],
  "browser-rendering": ["deadlypants1973"],
  byoip: ["patriciasantaana"],
  cache: ["angelampcosta"],
  "china-network": ["pedrosousa"],
  "client-ip-geolocation": ["pedrosousa"],
  "cloudflare-for-platforms": ["jason-cf"],
  "cloudflare-one": ["ranbel"],
  constellation: ["deadlypants1973"],
  d1: ["Maddy-Cloudflare"],
  "data-localization": ["angelampcosta"],
  "ddos-protection": ["pedrosousa"],
  "dmarc-management": ["marciocloudflare"],
  dns: ["RebeccaTamachiro"],
  "durable-objects": ["Maddy-Cloudflare"],
  "email-routing": ["deadlypants1973"],
  "email-security": ["marciocloudflare"],
  firewall: ["pedrosousa"],
  fundamentals: ["jason-cf"],
  "health-checks": ["RebeccaTamachiro"],
  images: ["dcpena"],
  "learning-paths": ["kodster28"],
  kv: ["Maddy-Cloudflare"],
  "load-balancing": ["RebeccaTamachiro"],
  logs: ["angelampcosta"],
  "magic-firewall": ["marciocloudflare"],
  "magic-network-monitoring": ["marciocloudflare"],
  "magic-transit": ["marciocloudflare"],
  "magic-wan": ["marciocloudflare"],
  "network-error-logging": ["dcpena"],
  "network-interconnect": ["dcpena"],
  notifications: ["patriciasantaana"],
  "page-shield": ["pedrosousa"],
  pages: ["deadlypants1973"],
  "privacy-gateway": ["kodster28"],
  "pub-sub": ["dcpena", "Maddy-Cloudflare"],
  queues: ["Maddy-Cloudflare"],
  r2: ["dcpena"],
  radar: ["haleycode"],
  railgun: ["haleycode"],
  "randomness-beacon": ["kodster28"],
  "reference-architecture": ["haleycode"],
  registrar: ["jason-cf"],
  rules: ["pedrosousa"],
  "ruleset-engine": ["pedrosousa"],
  "security-center": ["jason-cf"],
  spectrum: ["angelampcosta"],
  speed: ["angelampcosta"],
  ssl: ["RebeccaTamachiro"],
  stream: ["dcpena"],
  "style-guide": ["haleycode"],
  support: ["jedecf"],
  tenant: ["kodster28"],
  terraform: ["ranbel"],
  "time-services": ["kodster28"],
  turnstile: ["patriciasantaana"],
  "version-management": ["kodster28"],
  waf: ["pedrosousa"],
  "waiting-room": ["angelampcosta"],
  "warp-client": ["haleycode"],
  web3: ["kodster28"],
  workers: ["deadlypants1973"],
  zaraz: ["haleycode"],
};

export const REVIEWERS: Record<string, string[]> = {
  analytics: ["jherre", "bharatnc", "victor-perov", "jimhawkridge", "46bit", "soheiokamoto", "tlozoot"],
  d1: ["elithrar", "rozenmd"],
  "data-localization": ["soheiokamoto", "tlozoot"],
  radar: ["meddulla", "G4brym"],
  logs: ["jherre", "bharatnc", "victor-perov", "soheiokamoto", "tlozoot"],
  pages: ["WalshyDev"],
  "pub-sub": ["CharlieBurnett", "elithrar"],
  queues: ["CharlieBurnett", "elithrar"],
  support: ["shanecloudflare", "zeinjaber", "rprice74", "ngayerie"],
  turnstile: ["migueldemoura", "punkeel", "worenga"],
  "waiting-room": ["aolache"],
};
