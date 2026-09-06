---
qid: ing_a2fb395add__fp__local
question: 'Explain: Why the multiple A record solution doesn’t work with GSLB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 416
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:17-05:00'
sources: []
---

In the DNS layer, an *A* record is simply a mapping from name to IPv4 address.  
When a zone contains several identical A records, the resolver returns them in the order it receives them—often shuffled by the authoritative server—to achieve round‑robin load distribution.  

Global Server Load Balancing (GSLB) must do more than just split traffic: it has to **decide** which IP is *currently* the best target for a given client, based on real‑time health, proximity, or policy.  
The DNS protocol offers no mechanism for such dynamic decision‑making:

| Fundamental requirement | What round‑robin A gives | GSLB needs |
|--------------------------|-------------------------|------------|
| **Per‑client routing** | Same list to every resolver | Route each request individually |
| **Health awareness**   | Static list, never updated | Drop unhealthy nodes instantly |
| **Geographic bias**    | None                    | Prefer nearest or lowest latency node |

Because a DNS reply is immutable once sent, the only way to “choose” an IP at query time is for the authoritative server itself to compute it. With plain A records, that computation cannot be expressed; the resolver simply receives whatever was pre‑configured.  

**Non‑obvious insight:** Even if you were to update the set of A records via dynamic DNS every few seconds, caches (TTL 60 s or more) would still deliver stale addresses for clients that hit a caching resolver. GSLB therefore relies on *specialized* DNS records (e.g., CNAME with Geo‑DNS extensions) or application‑layer load balancers that can inspect the request and return an appropriate IP in real time, something round‑robin A cannot emulate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
