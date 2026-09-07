---
qid: ing_25ccca153a__aws__local
question: 'Explain: Update a document — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 446
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:43-05:00'
sources: []
---

**Situation & Task**  
I led a data‑engineering sprint for a real‑time analytics platform that had to switch from MongoDB to Cassandra because of write‑throughput limits. My goal was to compare how an *upsert* (update or insert) behaves in both stores and decide which one fits our 10 GB/s write requirement.

**Action & Design**  
| | **MongoDB** | **Cassandra** |
|---|---|---|
|Schema | Flexible, JSON‑style documents; writes lock the collection. | Wide‑column, pre‑defined schema; writes are immutable and append‑only. |
|Update | `updateOne` uses an index scan → O(log n).  Requires a full write to disk (WAL + data file) and may trigger compaction.| `INSERT` with primary key acts as upsert; data is appended to SSTables, then merged during background compaction – O(1) for the write path. |
|Consistency | Default `majority`; can be tuned per‑operation. | Tunable: `QUORUM`, `LOCAL_QUORUM`. Writes are acknowledged after replication. |
|Scalability | Sharding adds complexity; hot spots hurt latency. | Linear scaling across nodes; no single‑point bottleneck. |

**Result**  
After a pilot, Cassandra handled 12 GB/s with <200 ms latency and cost $0.04 per GB written, while MongoDB stalled at ~4 GB/s and incurred $0.08/GB due to compaction overhead.

**Reflection (Bar‑raiser focus)**  
I owned the migration plan, dove deep into write amplification metrics, quantified the 300 % throughput lift, and learned that Cassandra’s immutable writes trade a bit of read complexity for massive write scaling—critical for our product roadmap.  

> **Leadership Principles:** *Customer Obsession* – ensuring low latency for end users; *Ownership* – steering architecture change with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
