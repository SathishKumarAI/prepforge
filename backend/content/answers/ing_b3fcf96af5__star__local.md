---
qid: ing_b3fcf96af5__star__local
question: 'Explain: Distributed Systems and Messaging — Top 6 Cases to Apply Idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 379
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:53-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we built a real‑time fraud‑alert service that ingested millions of transactions per day via Kafka. A few weeks after launch the system started double‑processing certain alerts, causing duplicate SMS messages to customers and inflating our messaging costs by 12 %.  

**Task** – I had to guarantee that every alert message was processed exactly once, even when producers retried or brokers duplicated records, without adding significant latency or breaking the existing pipeline.  

**Action** – First, I added a lightweight idempotency key (transaction‑ID + timestamp) to each Kafka record and stored it in an in‑memory Redis cache with a 24 h TTL. The consumer checks the cache before processing; if the key exists, the message is skipped. I also refactored the downstream microservice to use optimistic locking on a PostgreSQL table that records processed IDs, so even if two consumers hit the same record concurrently only one commits. To handle eventual consistency, I added a scheduled job that reconciles the cache with the database every hour. Finally, I instrumented Prometheus metrics for “duplicate attempts” and set an alert when spikes exceed 0.5 %.  

**Result** – Duplicate alerts dropped from 8 % to <0.01 %, cutting SMS costs by $18k/month. Throughput increased by ~15 % because the consumer no longer had to retry failed records. I learned that idempotency is most effective when combined with a fast cache, database locking, and continuous monitoring—essentially turning a fragile distributed system into a resilient, cost‑efficient service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
