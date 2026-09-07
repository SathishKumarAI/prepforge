---
qid: ing_65784035b1__faang__local
question: 'Explain: Delayed or Scheduled Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 521
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:40:18-05:00'
sources: []
---

**Delayed / Scheduled Queue – Message Queue**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | The question asks for a design that supports *delayed* or *scheduled* message delivery (e.g., “send email in 5 min”). Assumptions: <br>• Messages are lightweight (JSON). <br>• Latency tolerance ≈ seconds. <br>• Throughput can be millions per day. |
| **Approach** | 1️⃣ Store messages with a *delivery timestamp*. 2️⃣ Use a priority‑queue index keyed by that timestamp. 3️⃣ A background worker polls the queue for items whose time ≤ now and pushes them to the consumer broker (e.g., Kafka). 4️⃣ Persist state in a durable store (Redis + RDBMS or DynamoDB) so workers can recover after failure. |
| **Depth** | • **Data model:** `Message(id, payload, deliver_at)` stored in a sorted set (Redis ZSET) for O(log N) insert/remove. <br>• **Worker logic:** poll every 1 s; fetch all ≤ now (`ZRANGEBYSCORE`). Push to consumer queue via RPC or publish‑subscribe. <br>• **Scalability:** sharding by hash of `id`; each shard runs its own worker. <br>• **Complexity:** Insert O(log N), pop O(k log N) for k messages ready. |
| **Edge Cases** | • Clock drift: use NTP; store absolute epoch. <br>• Message loss on crash: persistence + idempotent push to consumer. <br>• High‑volume bursts: back‑pressure by limiting batch size, or switch to a log‑based system (Kafka) for bursty traffic. |
| **Optimize & Communicate** | • For sub‑second latency, use in‑memory priority queues with periodic persistence. <br>• Expose an API `schedule(msg, delay)` that calculates `deliver_at = now + delay`. <br>• Explain trade‑offs: Redis gives low latency but limited durability; a DB gives durability at cost of higher latency. <br>• Conclude by noting this pattern is essentially “delayed‑push” and can be built on top of any pub/sub system, making it reusable across services. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
