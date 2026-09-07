---
qid: ing_16ef3a2195__faang__local
question: 'Explain: Asynchronous Request-Reply — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 673
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:37:45-05:00'
sources: []
---

**Clarify**  
You’re asking for the six most common asynchronous request‑reply patterns used in cloud‑based message‑oriented middleware (e.g., Pub/Sub, Kafka). I’ll assume we’re talking about stateless services that need decoupled communication and eventual consistency.

**Approach**  
I’ll list each pattern with a short definition, typical use case, and the key techs involved. Then I’ll highlight trade‑offs and when to pick one over another.

| Pattern | Core Idea | Typical Tech | When to Use |
|---------|-----------|--------------|-------------|
| **1️⃣ Request–Reply via Correlation ID** | Client sends request message; broker routes reply back using a correlation ID stored in headers. | Kafka, RabbitMQ RPC, gRPC‑based pub/sub. | Low latency, tight coupling but still decoupled transport. |
| **2️⃣ Publish‑Subscribe with Reply Topics** | Service publishes request to a topic; consumer processes and publishes result to a dedicated reply topic (often per client). | Cloud Pub/Sub, SNS/SQS fan‑out. | Multiple consumers, high scalability. |
| **3️⃣ Request–Response via Temporary Queues** | Client creates a transient reply queue; broker routes response there. | AMQP temp queues, Azure Service Bus sessions. | Short‑lived interactions, fine‑grained isolation. |
| **4️⃣ Long‑Polling / Callback URL** | Client sends request with callback endpoint; service invokes HTTP(S) callback when ready. | Webhooks, serverless functions. | Operations that may take minutes/hours or need to trigger downstream services. |
| **5️⃣ Saga Pattern (Compensating Transactions)** | Sequence of local transactions; each step publishes an event; on failure, compensations are triggered. | Event sourcing, Kafka streams. | Distributed business processes requiring eventual consistency. |
| **6️⃣ Correlated Streams / Windowing** | Messages carry a key; consumer groups aggregate by that key over time windows to produce a reply. | Kinesis Streams, Flink/Beam. | Analytics or batch‑style request‑reply where aggregation is needed. |

**Depth**  
- *Correlation ID* guarantees exactly‑once delivery if the broker supports idempotence; complexity is O(1) per message.  
- *Temporary queues* add overhead for queue creation but isolate traffic, reducing cross‑tenant bleed.  
- *Saga* introduces eventual consistency and requires a robust event store; latency grows with saga depth.

**Edge Cases**  
- Network partitions can orphan requests; retry policies or dead‑letter queues are essential.  
- Large payloads may exceed broker limits—use object storage references instead.  
- Clock drift can break correlation if timestamps are used for timeouts.

**Optimize & Communicate**  
I’d recommend starting with the simplest (correlation ID) and only moving to sagas when you need multi‑service orchestration. Document timeout windows, idempotence guarantees, and monitoring metrics (latency, error rates). This structured approach shows clear trade‑offs and keeps the system maintainable—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
