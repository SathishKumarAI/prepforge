---
qid: ing_cca5148f4e__star__local
question: 'Explain: Scalability — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 343
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:16-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching a real‑time fraud detection service that needed to ingest and process ~2 M events per day across multiple regions. Our existing PostgreSQL cluster was hitting latency spikes during peak hours.

**Task** – I had to design a globally scalable, strongly consistent storage layer that could handle 10× the load while keeping query latency under 50 ms for our analytics pipeline.

**Action** – I chose Cloud Spanner because of its horizontal scalability and built‑in multi‑region replication. First, I modeled the data with a composite primary key (user_id + event_timestamp) to avoid hot spots. Then, I used Spanner’s sharding features by enabling “partitioned DML” for bulk inserts and “distributed transactions” for real‑time lookups. To reduce cost, I set up autoscaling instance configurations and leveraged Cloud Load Balancing to route traffic across zones. I also added a caching layer with Memorystore for read‑heavy queries that were not latency critical.

**Result** – After migration, write throughput increased from 200 k ops/sec to 2 M ops/sec, and average query latency dropped to 30 ms even during peak loads. We reduced infrastructure cost by 18% through autoscaling, and the new architecture supported a 5× growth in user base without code changes. I learned that proper key design and leveraging Spanner’s native sharding are crucial for true global scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
