---
qid: ing_78a94b7d1c__aws__local
question: 'Explain: DocumentDB lets you pick your read consistency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 476
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:04-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a compliance‑heavy reporting platform from an on‑premise MongoDB cluster to **Amazon DocumentDB (with MongoDB compatibility)**. The business required that every downstream analytics job read *exactly* the most recent data without stale reads, yet we also had to keep latency under 100 ms for ad‑hoc queries.

**Action**  
I designed a two‑tier read strategy using DocumentDB’s *read consistency* options:

| Consistency | Use Case | Latency | Cost |
|-------------|----------|---------|------|
| **Strong** (default) | Critical audit tables – 99.9 % freshness | ~200 ms (replica lag < 50 ms) | Full replica set cost |
| **Eventual** | Historical logs – acceptable eventual consistency | ~80 ms | Replica group cost savings |

I implemented a *read‑through cache* in Amazon ElastiCache for Redis to surface the most frequently accessed, eventually consistent documents. For strong‑consistency reads I routed traffic through an Application Load Balancer that directed queries to the primary replica.

**Result**  
The migration cut query latency by **40 %** (from 320 ms to 192 ms) while guaranteeing audit‑trail freshness, and reduced operational cost by **18 %** by using a smaller read replica pool for non‑critical reads. Quarterly compliance reviews confirmed zero stale‑read incidents.

---

### Leadership Principles Anchored
- **Customer Obsession** – ensured data accuracy for auditors.
- **Ownership & Dive Deep** – selected consistency levels, tuned replica sets, and built the caching layer to meet SLA targets.

### Bar‑Raiser Expectations Met
- **Quantified Impact** – clear latency and cost metrics.  
- **Depth** – explained trade‑offs between strong vs eventual consistency, replication lag, and cache hit ratios.  
- **Learning from Failure** – after an initial outage caused by a misconfigured replica, I introduced automated health checks and cross‑region failover to eliminate the recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
