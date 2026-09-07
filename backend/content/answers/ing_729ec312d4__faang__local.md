---
qid: ing_729ec312d4__faang__local
question: 'Explain: Summary — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 434
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:10:12-05:00'
sources: []
---

**Summary – CDN System Design**

| Step | What I’ll Cover |
|------|-----------------|
| **Clarify** | “We need a system that serves web content (HTML, images, JS) globally with low latency and high availability.” <br>Assumptions: *Read‑heavy traffic, static assets, request rate in millions/sec, minimal write churn.* |
| **Approach** | 1. **Edge Layer** – deploy caching nodes near ISPs (CDN edge).<br>2. **Origin** – central storage (object store + origin servers).<br>3. **Routing** – DNS/Anycast to nearest edge; health‑checks for failover.<br>4. **Cache Invalidation** – versioned URLs or purge API. |
| **Depth** | • **Edge Node Design**: in-memory cache + local disk, LRU eviction, support HTTP/2 multiplexing.<br>• **Consistency**: eventual; use ETag/If‑None‑Match for revalidation.<br>• **Scalability**: auto‑scale edge groups based on request latency metrics. <br>• **Complexity**: O(1) lookup per request; cache hit ratio drives traffic off origin. |
| **Edge Cases** | • Sudden traffic spike → edge auto‑scaling, fallback to origin.<br>• Content updates during a burst → purge propagates via push or TTL expiration.<br>• Edge node failure → Anycast reroutes to healthy neighbor. |
| **Optimize & Communicate** | Highlight that we can reduce latency by >80% and origin load by 90%. Mention trade‑offs: higher cache hit costs vs. lower origin cost; consistency guarantees vs. freshness. Conclude with metrics (latency, cache hit ratio, availability SLA). |

This structured response demonstrates clear problem framing, a solid design plan, technical depth, edge‑case awareness, and concise communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
