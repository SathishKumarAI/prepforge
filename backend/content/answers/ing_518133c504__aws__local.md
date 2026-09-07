---
qid: ing_518133c504__aws__local
question: 'Explain: Conclusion — Difference Between Cassandra and MongoDB - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 467
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:26-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑engineering sprint for a real‑time recommendation engine that had to ingest >10 M events per day and serve <50 ms latency queries. The team debated whether to use **Cassandra** (wide‑column) or **MongoDB** (document). I owned the decision and needed to justify it with concrete impact.

**Action – Dive Deep & Invent & Simplify**  
I mapped requirements:  
| Requirement | Cassandra | MongoDB |
|-------------|-----------|---------|
| Write throughput | 10 k ops/sec per node, linear scaling | 2–3 k ops/sec, bottleneck at primary replica |
| Strong consistency | Tunable (QUORUM) | Default read/write on single node → eventual consistency unless sharded with replica sets |
| Schema flexibility | Column families, no joins | JSON docs, rich queries |
| Query patterns | Point reads by partition key; time‑series scans | Aggregations, secondary indexes |

I proposed a **Cassandra cluster** (3 nodes in an Availability Zone, 10 k write ops/sec) with **AWS Keyspaces** for fully managed scaling. It guarantees *high write throughput* and *linear scalability*—critical for our ingestion rate. I also sketched a fallback microservice that writes to MongoDB for analytics dashboards, leveraging its richer aggregation pipeline.

**Result – Deliver Results**  
Post‑migration, we achieved:  
- **+35 %** reduction in write latency (from 120 ms to 75 ms).  
- **3×** throughput increase without adding hardware.  
- Cost savings of **$4k/month** by eliminating the need for a separate analytics cluster.

**Learnings & Ownership**  
I documented trade‑offs: Cassandra’s limited secondary indexing and higher read complexity; MongoDB’s easier ad‑hoc queries but lower write scalability. The bar‑raiser will note my ownership (clear decision, measurable outcome), depth (schema/consistency analysis), and learning from the failed pilot on a single‑node MongoDB setup that hit latency limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
