---
qid: ing_3decd42c20__fp__local
question: 'Explain: The browser DNS caching issue — Why DNS Based Global Server Load
  Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 386
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:16:10-05:00'
sources: []
---

**Why DNS‑Based GSLB Fails**

The core problem GSLB solves is *where* a client should be directed so that latency and server load stay optimal. A naïve solution is to encode the best location in the IP returned by DNS. This seems elegant: DNS is ubiquitous, stateless, and cheap.

However, DNS is fundamentally a **caching** system with a fixed Time‑to‑Live (TTL). Once a resolver stores an answer, it will not query the authoritative server again until TTL expires—often minutes or hours. If load shifts abruptly (e.g., a surge to the US East cluster), clients still receive stale IPs until their caches expire. In practice:

1. **Latency drift** – A client may hit a distant data center because its cached DNS entry points there, incurring high RTT.
2. **Load imbalance** – Servers that are already overloaded keep receiving traffic; new servers remain under‑utilised.
3. **Inconsistent global state** – Different ISPs and recursive resolvers have different cache lifetimes, so the “global” view of traffic is fragmented.

The deeper principle at play is *information freshness*. DNS provides a static snapshot of a dynamic system. Optimisation requires timely feedback; with long TTLs, the optimisation loop stalls. A non‑obvious insight: **the caching mechanism itself introduces a *causality lag* that turns an otherwise optimal load‑balancing policy into a suboptimal one**. To truly balance load globally, you need mechanisms (e.g., Anycast, real‑time health checks, or application‑layer routing) that respect the rapid dynamics of traffic and server capacity, rather than relying on DNS’s static cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
