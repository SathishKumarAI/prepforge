---
qid: ing_1adc8c01d4__faang__local
question: 'Explain: Lock on messages and manual handling of the complexity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 420
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:47:35-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to *lock* messages in a distributed ML pipeline (e.g., data ingestion or inference queue) and manually manage the resulting complexity—ensuring at‑least‑once delivery without duplicates while keeping throughput high.

**Approach**  
1. Treat each message as a unit of work with an idempotent handler.  
2. Use a *lock table* (DB row, Redis key, or Kafka offset commit) to claim ownership.  
3. Release the lock only after successful processing; otherwise, trigger a retry or dead‑letter queue.

**Depth**  
- **Lock acquisition**: `SETNX` in Redis with TTL guarantees exclusive access; fallback to DB row lock if persistence is needed.  
- **Idempotency**: Store processed message ids in a Bloom filter or hash set; before handling, check presence to skip duplicates.  
- **Failure paths**: If processing fails, delete the lock and re‑queue; on TTL expiry, another worker can claim it.  
- **Complexity**: O(1) lock ops; space for idempotency store grows with throughput but can be bounded by sliding window or LRU eviction.

**Edge cases**  
- Network partitions causing stale locks → use TTL + heartbeats.  
- High contention on a single key → sharded lock keys.  
- Clock drift between workers → use monotonic timers for TTL.

**Optimize & Communicate**  
Explain trade‑offs: tighter TTL reduces duplicate work but risks missing retries; longer TTL increases risk of stale claims. Show that this pattern scales to thousands of messages per second while keeping duplicates below 1%. Conclude with how monitoring metrics (lock contention, retry rate) guide dynamic tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
