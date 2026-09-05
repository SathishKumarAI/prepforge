---
qid: ing_ae3c1f6017__star__local
question: 'Explain: Offline Message Handling — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 377
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:42-05:00'
sources: []
---

**Situation** – In a recent project at a messaging startup, our real‑time chat service had a spike in traffic during nightly maintenance windows. Users were dropping out of the app, and the message queue would back up to over 500 K unsent messages before throttling kicked in.

**Task** – I was asked to design an offline message handling subsystem that could guarantee delivery once users came back online, keep latency under 300 ms for active chats, and reduce server cost by at least 30%.

**Action** – I introduced a two‑tier storage model: (1) a Redis cache for “hot” messages with TTL 5 min to serve instant re‑connects; (2) an Amazon S3 + DynamoDB archive for older batches. Messages were tagged with a sequence number and pushed into a Kafka topic per user. A background worker pulled from the topic, persisted to S3, and updated the DynamoDB index with last delivered offset. On reconnection, the client fetched any missing offsets via a lightweight REST call, re‑playing them in order. We also implemented exponential backoff for retrying failed deliveries and used WebSocket heartbeats to detect offline status early.

**Result** – The new system cut unsent message backlog from 500 K to under 5 K within the first week of rollout, dropped average delivery latency from 1.2 s to 180 ms, and reduced infrastructure spend by ~35%. I learned that a hybrid in‑memory + persistent approach balances speed with reliability, and that careful offset tracking is key for eventual consistency in chat apps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
