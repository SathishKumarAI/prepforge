---
qid: ing_84d89f1988__aws__local
question: 'Explain: Aggregate a group by tag — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 564
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:27-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a real‑time analytics dashboard for a media company that tags every article with multiple keywords. The goal: “Show the number of articles per tag in the last 24 hrs” at <1 s latency, with >99.9 % availability and <$5K/month cost.

**Action (Technical Design)**  
| | **Cassandra** | **MongoDB** |
|---|---|---|
|Schema | Tag‑first table (`tag_id, ts, count`) with a TTL of 24 h; secondary index on `ts`. | Single collection `articles` with array field `tags`; use `$unwind + $group`. |
|Aggregation | Pre‑aggregated counters via lightweight transactions (LWT) or Cassandra’s `COUNT(*)` on the tag table. | On‑demand aggregation in the query pipeline; no pre‑compute. |
|Scalability | Linear write scaling (wide‑row, low contention). Reads are O(1) per tag. | Sharded collection: reads must scan all shards → higher latency as data grows. |
|Availability | Tuned to 3 replicas, QUORUM writes – ensures eventual consistency with minimal staleness (<10 ms). | Multi‑primary sharding; strong consistency requires read/write quorum, increasing write latency. |
|Cost | ~0.03 $ per GB/month + minimal query cost (CQL is free). | ~$0.12 $ per GB/month + $1–$2 per 100K reads for aggregation pipelines. |

**Result**  
Using Cassandra, we served >10M tags with 95 % of queries <200 ms and spent <$3k/month. MongoDB would have cost ~>$7k/month and hit 650 ms latency at peak load.

**Reflection (Leadership Principles)**  
- **Ownership & Deliver Results:** I owned the full stack, benchmarked both stacks, and delivered a solution that met SLA and budget.  
- **Dive Deep & Bias for Action:** I dissected query plans, measured write amplification, and chose pre‑aggregation in Cassandra to avoid costly map–reduce on MongoDB.

**Bar‑raiser cue** – The candidate should demonstrate ownership of metrics, deep understanding of trade‑offs (write vs read latency, consistency), and a clear learning loop: “If we had more real‑time needs, we’d shift to materialized views; if cost were less critical, MongoDB’s flexible schema would shine.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
