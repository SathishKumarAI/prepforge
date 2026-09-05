---
qid: ing_e788795065__star__local
question: 'Explain: Append-only (mostly) — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 354
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:36-05:00'
sources: []
---

**Situation**  
At my last company we built a real‑time fraud detection platform that ingested millions of transaction events per day from our payment gateway. The analytics engine needed instant visibility into the latest data while keeping a durable audit trail.

**Task**  
I was tasked with designing a storage layer that could handle high write throughput, preserve every event (append‑only), and allow ad‑hoc search across both current and historical records using Elastic Search.

**Action**  
I set up a Kafka cluster to buffer incoming events, then wrote a lightweight Logstash pipeline that parsed each JSON payload and indexed it into Elasticsearch. Each document was immutable; we used a “transaction_id” as the primary key and appended new fields with timestamps instead of updating existing docs. To keep the index size manageable, I configured daily rollover indices and set up ILM policies to move older shards to cold storage after 30 days. We leveraged Elasticsearch’s bulk API for 500‑event batches, which cut write latency from ~200 ms to <50 ms per batch.

**Result**  
The system handled a peak of 5 million events/day with <0.1 % indexing errors and delivered search queries in under 120 ms on average. By keeping the data append‑only we avoided costly update operations and maintained a complete audit trail, which was critical for regulatory compliance. I learned that combining Kafka’s buffering with Elasticsearch’s bulk ingestion and ILM can deliver both performance and durability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
