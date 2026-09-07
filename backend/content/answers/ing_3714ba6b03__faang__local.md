---
qid: ing_3714ba6b03__faang__local
question: 'Explain: Live Commenting API Design — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 568
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:52:04-05:00'
sources: []
---

**Live Commenting API Design – Structured FAANG‑style Answer**

| Section | Content |
|---------|---------|
| **Clarify** | “We need a real‑time comment service for live streams (video or events). Clients post comments, others receive them instantly, with features like likes, moderation, and persistence.” <br>Assumptions: 1 M concurrent viewers per stream; 10k comments/sec; latency < 200 ms; GDPR compliance. |
| **Approach** | 1️⃣ *API surface*: REST for CRUD + WebSocket/Server‑Sent Events (SSE) for streaming.<br>2️⃣ *Data model*: Comment(id, userId, text, ts, parentId, likes, status).<br>3️⃣ *Storage*: Hot tier – Redis Streams per stream; cold tier – Cassandra or PostgreSQL. <br>4️⃣ *Pub/Sub*: Kafka topics “stream‑{id}” for fan‑out to edge servers. <br>5️⃣ *Scalability*: Partition streams by hash(id) across brokers; use CDN edges for WebSocket relays. <br>6️⃣ *Moderation*: Async queue (RabbitMQ) feeding ML classifier, flagging content before broadcast. |
| **Depth** | • WebSocket handshake → JWT auth → subscribe to topic.<br>• Publish: API writes to Redis Stream, pushes to Kafka; consumer at edge emits to all sockets.<br>• Read: Clients poll short window via REST for history (pagination).<br>Complexity: O(1) write to Redis, O(log N) read from Cassandra. <br>Trade‑offs: Using Redis for latency vs durability; Kafka fan‑out cost vs simplicity of direct WebSocket push. |
| **Edge Cases** | • Burst traffic (e.g., 100× spike): auto‑scale consumer groups.<br>• Network partition: fallback to local cache and replay on reconnection.<br>• Deleted or censored comments: send “removed” event with minimal payload.<br>• User abuse: rate limiting per IP/user, blacklisting. |
| **Optimize & Communicate** | • Batch writes to Kafka (batch size 10 k) to reduce overhead.<br>• Use connection pooling for DB and Redis; enable HTTP/2 for REST endpoints.<br>• Explain to interviewers: “We prioritize low‑latency fan‑out with a proven pub/sub stack, while keeping durability via Cassandra. Moderation is decoupled to avoid blocking user experience.” |

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
