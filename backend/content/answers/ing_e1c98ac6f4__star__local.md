---
qid: ing_e1c98ac6f4__star__local
question: 'Explain: Isolation — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 413
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:23-05:00'
sources: []
---

**Situation** – At my last role, we were building a real‑time ad‑tech platform on Google Cloud that required a global transaction layer for bidding data. The existing PostgreSQL cluster was hitting high contention and latency spikes during peak traffic, so the engineering team decided to migrate to Cloud Spanner.

**Task** – My job was to ensure strong isolation for millions of concurrent bid updates while keeping read latency below 5 ms across all regions. I had to design a strategy that balanced Spanner’s serializable isolation with performance and cost constraints.

**Action** – First, I mapped out the data model: a sharded `Bid` table keyed by `(CampaignID, Timestamp)` and a global `AccountBalance` table for each advertiser. Using Spanner’s *serializable read‑write* transactions, I implemented optimistic concurrency control with conflict detection on the primary key. To reduce contention, I introduced range partitioning and added a “hotspot” mitigation layer that split high‑volume campaigns into multiple micro‑partitions. For read‑heavy workloads, I enabled **read‑only** transactions at *snapshot* consistency to serve 99th‑percentile latency targets. Finally, I wrote automated scripts in Python with the Spanner client library to monitor deadlock rates and auto‑scale replicas based on real‑time load metrics.

**Result** – After migration, transaction throughput increased from 15 k TPS to 45 k TPS, while read latency dropped from 12 ms to under 4 ms. Conflict rates fell below 0.02%, and we reduced infrastructure costs by 18% through smarter replica placement. I learned that in Spanner, isolation is powerful but only as good as your partitioning strategy; a careful balance of sharding, conflict handling, and read‑only snapshots turns theory into measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
