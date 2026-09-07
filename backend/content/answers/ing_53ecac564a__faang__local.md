---
qid: ing_53ecac564a__faang__local
question: 'Explain: Event Driven Architecture — Eventdrivenarchitecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 444
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:59:24-05:00'
sources: []
---

**Event‑Driven Architecture (EDA)**  
*In a nutshell:* A distributed system where components communicate by publishing and subscribing to discrete *events*—immutable messages that describe state changes or actions.

---

### 1️⃣ Clarify
> **Problem:** How does an application coordinate multiple services without tight coupling?  
> **Assumptions to confirm:**
- Services need asynchronous, decoupled communication.  
- Events are idempotent and persisted for replay.  
- System tolerates eventual consistency.

### 2️⃣ Approach
1. **Event Producer** publishes a domain event (e.g., `OrderCreated`).  
2. **Message broker** (Kafka, RabbitMQ) stores the event in a log or queue.  
3. **Event Consumers** subscribe to relevant topics and react (update inventory, send email).  
4. Optional *Saga* pattern for long‑running transactions.

### 3️⃣ Depth
- **Data model:** JSON/Avro schema; versioned to avoid breaking changes.  
- **Broker guarantees:** at least once delivery; ordering per key if required.  
- **Scalability:** Horizontal scaling of consumers via partitioning.  
- **Fault tolerance:** Consumers track offsets; replay on failure.  
- **Complexity:** O(1) publish time, consumer latency depends on processing logic.

### 4️⃣ Edge Cases
- Duplicate events → idempotent handlers.  
- Schema drift → backward‑compatible evolution or schema registry.  
- Slow consumers → backpressure via bounded queues.  
- Service downtime → message retention policies.

### 5️⃣ Optimize & Communicate
- **Batching** for high throughput; compress payloads to reduce bandwidth.  
- Use *dead‑letter queues* for irrecoverable failures.  
- Monitor lag metrics and set alerts.  
When explaining, start with the problem, walk through the flow diagramically, highlight trade‑offs (e.g., eventual consistency vs. strict ACID), and finish by summarizing how EDA solves decoupling while maintaining reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
