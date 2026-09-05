---
qid: ing_2f0f83e21b__star__local
question: 'Explain: Hybrid — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 377
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:29-05:00'
sources: []
---

**Situation**  
When I joined the fraud‑detection team, our real‑time alert pipeline was hitting a bottleneck: we needed to ingest millions of transaction events per day while keeping latency under 100 ms for downstream ML models. The existing MySQL store couldn’t scale horizontally and suffered from slow joins.

**Task**  
I had to design a hybrid data layer that could handle high write throughput, provide near‑real‑time read access for the scoring engine, and still allow batch analytics on historical data without rewriting our entire pipeline.

**Action**  
I chose Apache Cassandra as the primary store because of its tunable consistency and linear scalability. I defined a wide‑row schema with composite keys (user_id | event_timestamp) to enable efficient range queries for user histories. To keep read latency low, I added an in‑memory cache layer using Redis that mirrored the latest 24 hours of events. For batch analytics, I set up Cassandra’s built‑in CDC to stream changes into Kafka, where Spark Structured Streaming pulled data and persisted it into a Hadoop‑based data lake for offline model training. I also implemented dynamic read repair and hinted handoff to ensure fault tolerance.

**Result**  
The hybrid architecture cut ingestion latency from 350 ms to 80 ms, increased write throughput by 5×, and allowed the ML models to access up-to-date user profiles with <10 ms lookups. The CDC pipeline processed 2 M events/day into Spark in under an hour, enabling nightly model retraining. I learned that combining Cassandra’s horizontal scalability with caching and streaming can bridge real‑time needs and batch analytics without sacrificing consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
