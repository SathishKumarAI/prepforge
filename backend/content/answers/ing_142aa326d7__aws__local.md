---
qid: ing_142aa326d7__aws__local
question: 'Explain: Implement "top-k most frequent search queries" over a large query
  log, then tell me what breaks when the log becomes an unbounded stream across many
  machines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 378
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:31-05:00'
sources: []
---

**Situation / Task (Customer Obsession & Ownership)**  
When I was tasked to surface the *top‑k most frequent search queries* from a 100 GB query log for our recommendation engine, I had to deliver an answer that could be refreshed in real time while keeping latency < 200 ms.

**Action (Dive Deep & Deliver Results)**  
I designed a two‑stage pipeline on **AWS Kinesis Data Streams** + **Lambda**.  
1. Each record is hashed into 256 buckets and sent to a **Kinesis Firehose** that writes to an **S3 partitioned by hour**.  
2. A scheduled Lambda aggregates each bucket with **Redis (Amazon ElastiCache)**, keeping a running count per query. The top‑k list is stored in DynamoDB for O(1) reads.

When the log becomes an *unbounded stream across many machines*, this design breaks because:
- **Stateful aggregation** in Redis requires sharding; without consistent hashing we lose counts.
- **S3 partitioning** no longer guarantees order, leading to duplicate or missing entries.
- The Lambda’s per‑batch window cannot guarantee exactly‑once semantics when records arrive out of order.

**Result (Quantified Impact & Learning)**  
The solution reduced query‑list latency from 12 s to 150 ms and served a 30% increase in traffic without extra cost. From the failure, I learned that *exactly‑once processing* is essential for unbounded streams; next time I’ll incorporate **Kinesis Data Analytics** with stateful operators or use **Apache Flink on EMR** to guarantee correctness at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
