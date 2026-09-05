---
qid: ing_7760ef620e__star__local
question: 'Explain: Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 365
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:38-05:00'
sources: []
---

**Situation**  
At my previous company we built a recommendation engine that served millions of users. By the end of 2023 our training pipeline was stuck in a single data store; each model update required scanning 15 GB of user interaction logs, which slowed nightly retraining from 4 hours to almost a day.

**Task**  
I had to redesign the ingestion layer so that we could train models in parallel and keep latency under two minutes for real‑time inference while still supporting batch updates on fresh data.

**Action**  
I introduced horizontal sharding across three PostgreSQL instances. Using consistent hashing on user ID, I split the interaction table into 12 shards, each with its own WAL archive. I added a lightweight Kafka topic per shard to stream new events directly to the corresponding database, bypassing the monolithic read replica. For model training, I built a Spark job that fetched only the relevant shards in parallel, aggregated them on‑the‑fly, and trained separate sub‑models that were later ensembled. This kept write throughput at 5k TPS and reduced shard contention by 80 %. I also implemented a monitoring dashboard to auto‑scale shards when traffic spiked.

**Result**  
Batch retraining time dropped from 4 hours to 45 minutes, and real‑time inference latency improved from 350 ms to under 200 ms. The sharded architecture scaled to 30 GB of data without additional hardware costs. I learned that careful shard key selection combined with a streaming pipeline can turn a monolithic bottleneck into an elastic system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
