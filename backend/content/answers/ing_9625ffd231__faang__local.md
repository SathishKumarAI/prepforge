---
qid: ing_9625ffd231__faang__local
question: 'Explain: Event-Driven Systems — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 499
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:33:10-05:00'
sources: []
---

**Event‑Driven Systems – System Design Interview**

### 1️⃣ Clarify  
*Goal:* Build a scalable, loosely coupled system that reacts to events (e.g., user sign‑up → send welcome email).  
Assumptions: high traffic (~10k req/s), need eventual consistency, durability, and minimal latency. Confirm persistence model (SQL/NoSQL), max message size, SLA on delivery, and failure handling.

### 2️⃣ Approach  
1. **Event source** → publish to a broker (Kafka/Kinesis).  
2. **Topic partitioning** for parallelism; use keys for ordering per user.  
3. **Consumer group** processes events, writes to state store (e.g., DynamoDB).  
4. **Dead‑letter queue** for failed messages.  
5. **Monitoring**: metrics on lag, error rates, and latency.

### 3️⃣ Depth  
- **Broker choice:** Kafka gives strong ordering & replay; Kinesis simpler but limited backpressure control.  
- **Schema registry (Avro/Protobuf):** ensures backward‑compatible evolution.  
- **Idempotent consumers:** dedupe via event IDs to handle replays.  
- **Stateful vs stateless services:** Use stream processing (Kafka Streams) for transformations; pure functions for side effects.  
- **Complexity:**  
  *Time:* O(1) per message ingestion, O(log n) on consumer‑side lookup.  
  *Space:* Linear in number of partitions + retained backlog.

### 4️⃣ Edge Cases  
- **Out‑of‑order events** → use timestamps & windowing.  
- **Backpressure** → broker retention limits; auto‑scaling consumers.  
- **Schema drift** → enforce validation before processing.  
- **System failure** → replay from DLQ, checkpointing.

### 5️⃣ Optimize & Communicate  
- **Batching & compression** reduce network overhead.  
- **Horizontal scaling**: add partitions & consumer instances.  
- **Cost trade‑off:** Kafka cluster size vs. managed services (MSK).  
Explain each decision to the interviewer, citing latency goals and durability needs. This structured narrative showcases problem‑solving, depth, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
