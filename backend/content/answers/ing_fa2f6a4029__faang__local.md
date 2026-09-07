---
qid: ing_fa2f6a4029__faang__local
question: 'Explain: Consistency vs Availability — 10 System Design Tradeoffs You Cannot
  Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 524
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:21:24-05:00'
sources: []
---

**Consistency vs Availability – 10 Must‑Know Trade‑Offs**

| # | Situation | Why it matters | Typical trade‑off |
|---|-----------|----------------|--------------------|
| 1 | **Financial transactions** | Every debit must match a credit. | *Strong consistency* → low availability (locks, synchronous commits). |
| 2 | **E‑commerce cart** | Users expect real‑time stock counts. | Prefer *eventual consistency* to keep the site highly available. |
| 3 | **Social media feeds** | Freshness vs. latency. | Use *read‑repair* or *hinted handoff*: slight staleness for high write throughput. |
| 4 | **IoT sensor data** | Millions of writes, occasional read lag acceptable. | *Eventual consistency* with quorum reads to keep sensors online. |
| 5 | **Global CDN** | Users worldwide need low‑latency access. | *Eventually consistent caches*; use version tags for conflict resolution. |
| 6 | **Real‑time gaming** | State must be synchronized across players. | Opt for *strong consistency* on critical state, *eventual* elsewhere. |
| 7 | **Analytics pipelines** | Batch jobs tolerate stale data. | Eventual consistency + materialized views; high availability is key. |
| 8 | **Content moderation** | Moderation decisions must propagate quickly. | Strong consistency for policy updates, eventual for user content. |
| 9 | **Multi‑region DB replication** | Latency vs. correctness. | *Read‑skew* avoidance → strong consistency; otherwise use quorum reads/writes. |
|10 | **Microservices communication** | Service calls must be reliable. | Use idempotent operations + eventual consistency for side effects. |

### How to decide
1. **Identify the critical invariant** (e.g., balance never goes negative).  
2. **Quantify read/write load and latency budget.**  
3. **Apply CAP: choose between C or A based on invariant importance.**  
4. **Layered consistency:** expose a strongly consistent API for core ops, fall back to eventual for bulk reads.

### Takeaway
You can’t build a “one‑size‑fits‑all” system; pick the right balance per feature and document it. This clarity is what FAANG interviewers look for in your design answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
