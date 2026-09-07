---
qid: ing_36fd3431b9__faang__local
question: 'Explain: Push Notification Service — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 440
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:51:55-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a push‑notification service for WhatsApp that reliably delivers messages to millions of devices, handling high write/read throughput, offline queuing, and minimal latency. Assume: • Android/iOS clients using Firebase/APNs; • Messages are JSON payloads; • Service must scale globally with low failure rate (<0.01 %).  

**2️⃣ Approach**  
1. **Client registration & token store** – Map `userId → deviceToken(s)` in a distributed key‑value DB (e.g., DynamoDB).  
2. **Message ingestion API** – Accepts `(sender, receiver, payload)`, writes to an append‑only log (Kafka topic).  
3. **Consumer workers** – Pull from Kafka, resolve tokens, batch send via platform SDKs (push service adapters).  
4. **Delivery state & retries** – Persist delivery status in a lightweight DB; use exponential backoff for failures.  
5. **Offline queue** – Store pending messages per device until token refresh or next sync.  

**3️⃣ Depth**  
- *Latency*: Batching reduces per‑request overhead; async push APIs keep API <50 ms.  
- *Throughput*: Kafka partitions → 10k+ msgs/sec, workers scale horizontally.  
- *Consistency*: Token store is eventually consistent; last‑write wins for token updates.  
- *Failure handling*: Circuit breakers on push adapters; fallback to SMS/Email if critical.  

**4️⃣ Edge Cases**  
- Device token rotation → immediate cache eviction.  
- Network partitions → message replay from Kafka log.  
- Users with many devices → dedupe identical payloads.  

**5️⃣ Optimize & Communicate**  
Future improvements: use server‑push WebSocket for high‑priority messages, shard token store by region to reduce latency, implement real‑time analytics on delivery metrics. I’d explain each trade‑off (e.g., batching vs. latency) and how the system meets SLAs while remaining cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
