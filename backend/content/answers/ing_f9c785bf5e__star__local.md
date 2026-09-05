---
qid: ing_f9c785bf5e__star__local
question: 'Explain: Message Queue — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 324
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:00-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time analytics dashboard that counted page views per user. The traffic spiked to 30 k requests per second during product launches, and our single Redis instance started throttling, causing inconsistent counts and missed metrics.

**Task:**  
I needed to design a horizontally scalable distributed counter system that kept eventual consistency while handling the load without over‑loading any node or losing events.

**Action:**  
I chose an event‑driven architecture using Apache Kafka as a message queue. Each page view emitted a lightweight JSON event (`user_id`, `timestamp`) to a dedicated topic. I set up multiple stateless consumer groups (four consumers per topic partition) that incremented local in‑memory counters and periodically flushed batches to a sharded MySQL table via bulk inserts. To avoid contention, each consumer used a unique key prefix based on the Kafka partition and employed optimistic locking with `ON DUPLICATE KEY UPDATE`. For real‑time visibility, I exposed a Redis cache that aggregated counts from all shards using Lua scripts for atomic increments, refreshing every 5 seconds.

**Result:**  
The system handled 50 k QPS with <1 ms latency per increment, and the counter accuracy drift stayed under 0.2% over a month of load testing. I learned how to combine Kafka’s durability with sharded relational storage for high throughput while keeping read performance optimal via Redis caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
