---
qid: ing_fe21bf675e__fp__local
question: How many message queues do you know? — Types of Message Queues
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 557
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:00:16-05:00'
sources: []
---

### From the Core Problem to a Taxonomy of Message Queues

When a system must **decouple producers from consumers**, it faces two fundamental constraints:

1. **Consistency** – every message must be processed once and only once, even if a consumer crashes.
2. **Scalability & Latency** – messages should arrive quickly while the system tolerates spikes.

These constraints immediately give rise to three orthogonal axes:

| Axis | What it controls | Typical design choice |
|------|------------------|-----------------------|
| **Storage** | In‑memory vs persistent | RAM‑based queues (e.g., *Redis* lists) for low latency; disk‑backed queues (*RabbitMQ*, *Kafka*) for durability. |
| **Topology** | Point‑to‑point, publish/subscribe, or stream | Simple FIFO brokers (*ActiveMQ*), fan‑out topics (*Pub/Sub*), or partitioned streams (*Kafka Streams*). |
| **Ordering & Priority** | Strict FIFO vs priority or time‑based delivery | Single‑queue FIFO, multi‑priority queues (*Amazon SQS* with delay queues), or event time ordering in stream processors. |

From these axes we can enumerate the main families:

1. **In‑memory point‑to‑point** – fast but volatile (Redis lists, ZeroMQ).  
2. **Disk‑based point‑to‑point** – durable, often with at‑least‑once semantics (RabbitMQ, ActiveMQ).  
3. **Publish/Subscribe brokers** – fan‑out to many consumers (Kafka, Google Pub/Sub).  
4. **Stream processors** – partitioned, time‑ordered streams for event‑time analytics (Kafka Streams, Flink).  
5. **Priority & delayed queues** – order by urgency or scheduled time (Amazon SQS FIFO + delay, Azure Service Bus with dead‑lettering).  

#### Non‑obvious insight
Most people equate “queue” with a simple FIFO buffer. In reality, a queue is an *information‑theoretic* abstraction: it buffers uncertainty until a consumer can resolve it. The choice of storage and ordering thus directly controls the **entropy** of the system—persistent queues reduce entropy by preserving state across failures, while in‑memory queues increase throughput at the cost of higher information loss risk.

---  
**Word count:** ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
