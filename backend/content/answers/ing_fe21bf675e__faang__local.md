---
qid: ing_fe21bf675e__faang__local
question: How many message queues do you know? — Types of Message Queues
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 583
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:31:01-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for a taxonomy of messaging systems rather than how many you can name. I’ll interpret it as: *“What are the main categories of message queues and their key characteristics?”* I’d confirm whether they want in‑memory vs. distributed, synchronous vs. asynchronous, or just a broad overview.

**Approach**  
1. List high‑level classes (point‑to‑point, publish/subscribe, stream).  
2. For each class, give representative open‑source and commercial products.  
3. Highlight core properties: persistence, ordering, delivery guarantees, scalability, protocol support.

**Depth**  

| Category | Typical Queues | Core Traits | Use‑case Highlights |
|----------|----------------|-------------|---------------------|
| **Point‑to‑point (FIFO)** | RabbitMQ, Amazon SQS, ActiveMQ, Kafka (when used as a queue) | Single consumer per message, durable or transient, at‑least‑once delivery | Task offloading, job queues |
| **Publish/Subscribe** | Apache Pulsar, Redis Streams, Google Pub/Sub, Azure Event Grid | Multiple consumers see each message, fan‑out semantics | Log aggregation, real‑time analytics |
| **Stream Processing / Event Sourcing** | Kafka (log), Kinesis, Flink’s CDC connectors | Ordered log, exactly‑once or at‑least‑once, replayable | Analytics pipelines, stateful streaming |
| **In‑memory / Fast IPC** | ZeroMQ, nanomsg, Redis Pub/Sub | Low latency, no persistence by default | Microservice communication within a host |
| **Hybrid / Serverless** | AWS SQS FIFO + Lambda, Azure Service Bus + Functions | Managed scaling, built‑in retry & dead‑letter queues | Event‑driven architectures |

*Complexity*:  
- Throughput: Kafka (M msgs/s) > RabbitMQ (~10k).  
- Latency: ZeroMQ < 1 µs in‑process; SQS ~30–300 ms.  
- Consistency: FIFO guarantees vs. eventual consistency.

**Edge Cases**  
- **Ordering**: Only queues that expose explicit ordering (SQS FIFO, Kafka partitions) guarantee it.  
- **Exactly‑once**: Requires idempotent consumers or transactional support.  
- **Backpressure**: Some brokers (RabbitMQ) can block producers; others (Kafka) rely on consumer lag metrics.

**Optimize & Communicate**  
I’d wrap up by noting that the “best” queue depends on latency, durability, and scaling needs. I’d also suggest benchmarking with realistic payloads if time allows, and mention monitoring (metrics, logs) as a continuous improvement loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
