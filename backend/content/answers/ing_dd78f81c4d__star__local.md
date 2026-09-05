---
qid: ing_dd78f81c4d__star__local
question: 'Explain: Durability — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 351
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:09-05:00'
sources: []
---

**Situation**  
At my previous company we were building a recommendation engine that ingested user interaction logs in real time and updated a model store in PostgreSQL. A recent audit showed that after a power outage half of the latest training batches had disappeared, causing the production service to serve stale recommendations.

**Task**  
I needed to redesign the ingestion pipeline so that every batch commit was durable—guaranteed to survive crashes—and compliant with ACID semantics, without adding prohibitive latency for our 50 k events per second stream.

**Action**  
I introduced a two‑phase commit using PostgreSQL’s write‑ahead log and wrapped each batch in an explicit transaction. To keep throughput high, I staged writes in a Kafka topic that acted as a durable buffer; the consumer would batch records into a single transaction, ensuring atomicity. I also added a “write‑back” checkpoint table that recorded the last successful offset, allowing graceful recovery. For isolation I used SERIALIZABLE mode on the transaction to avoid write skew between concurrent training jobs.

**Result**  
After deployment, our failure‑correction tests showed 100 % durability of batches during simulated outages. Latency increased by only 12 ms per event, keeping SLA under 200 ms. The model freshness improved by 18 %, boosting recommendation click‑through rate from 3.1 % to 3.7 %. I learned that combining Kafka’s durability with database ACID guarantees can yield robust ML pipelines without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
