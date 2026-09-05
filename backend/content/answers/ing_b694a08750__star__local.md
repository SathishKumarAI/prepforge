---
qid: ing_b694a08750__star__local
question: 'Explain: Make Processing Safe to Repeat — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 351
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:18-05:00'
sources: []
---

**Situation:**  
At a SaaS analytics platform I was tasked with integrating a third‑party payment processor that sent event notifications via webhooks (charge succeeded, refunded, etc.). Our initial implementation stored each webhook payload in a raw queue and processed it once, but we started seeing duplicate events during load spikes—leading to double‑charging customers.

**Task:**  
Redesign the webhook ingestion pipeline so that processing is idempotent and safe to repeat, ensuring no customer was charged twice while keeping latency under 200 ms for high‑volume periods.

**Action:**  
I added a lightweight “deduplication” layer: each webhook payload carries a unique event ID. Upon receipt, the worker first checks a Redis set with a TTL of 24 h; if the ID exists, it discards the message immediately. If not, it atomically inserts the ID into the set and forwards the payload to an AWS SQS queue for downstream workers. In the consumer, I wrapped business logic in a database transaction that uses the event ID as a unique constraint on a `webhook_events` table; if the insert fails due to duplicate key, the transaction rolls back and the worker exits gracefully. Finally, I implemented exponential back‑off retries for transient failures.

**Result:**  
Duplicate processing dropped from ~12 % during peak traffic to <0.1 %. Customer disputes fell by 95 %, and overall latency stayed within our SLA. I learned that coupling lightweight in‑memory deduplication with database constraints gives robust safety without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
