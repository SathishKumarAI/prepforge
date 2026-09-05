---
qid: ing_2137b5a349__star__local
question: 'Explain: Why a database is not always the right tool for a queue based
  system'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 314
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:54-05:00'
sources: []
---

**Situation:** In my last role at FinTech Inc., we were building a real‑time fraud detection pipeline that had to process millions of transaction events per day with sub‑second latency. The initial design used PostgreSQL rows as a queue: each event was inserted into a “pending_events” table and workers pulled the next row via `SELECT ... FOR UPDATE`.  

**Task:** I needed to redesign the ingestion layer so it could handle peak loads (up to 10 k events/second) without becoming a bottleneck or single point of failure.  

**Action:** I evaluated several queue technologies—RabbitMQ, Kafka, and Redis Streams—and chose Kafka for its partitioned log, high throughput, and built‑in exactly‑once semantics. I refactored the producer to publish each transaction as a JSON record to a topic; consumers subscribed to partitions with parallelism equal to the number of cores, achieving linear scaling. I also added schema registry validation to catch malformed data before it reached downstream services.  

**Result:** Throughput increased from 1 k/s to 12 k/s, and latency dropped from ~250 ms average to <30 ms. The system no longer had a single database lock contention point, and we gained auditability via Kafka’s immutable log. I learned that while databases excel at ACID transactions, queue‑oriented workloads benefit from dedicated messaging systems that natively support horizontal scaling and back‑pressure handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
