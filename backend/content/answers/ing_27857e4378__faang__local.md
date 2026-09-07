---
qid: ing_27857e4378__faang__local
question: What is the difference between message queues and pub/sub messaging?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 463
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:15:37-05:00'
sources: []
---

**Clarify**

The interviewer asks how *message queues* (point‑to‑point) differ from *pub/sub* (publish‑subscribe).  
Assumptions: both are asynchronous messaging patterns used in distributed systems; we’re focusing on semantics, delivery guarantees, and typical use cases.

**Approach**

1. List core characteristics of each pattern.  
2. Highlight differences in routing, durability, consumer model, ordering, and scaling.  
3. Provide examples (e.g., RabbitMQ vs. Kafka).  
4. Touch on trade‑offs and when to choose one over the other.

**Depth**

| Feature | Message Queue | Pub/Sub |
|---------|---------------|--------|
| **Routing** | Direct: one producer → one consumer (or a pool). | Fan‑out: one publisher → many subscribers. |
| **Consumer Model** | Competing consumers; load‑balanced. | Independent consumers; each receives all relevant messages. |
| **Delivery Semantics** | Usually at‑least‑once, often exactly‑once with ack. | At‑least‑once by default; can be configured for once‑only streams (Kafka). |
| **Ordering** | Strict per queue (FIFO or priority). | Ordering guaranteed only within a partition/topic stream. |
| **Durability** | Persisted until consumer processes and acknowledges. | Persisted as long as retention policy allows; subscribers can replay. |
| **Typical Use Cases** | Task queues, work distribution, request/response. | Event sourcing, log aggregation, real‑time dashboards. |

**Edge Cases**

- Queue overload → dead‑letter queues; pub/sub lag → consumer backpressure.  
- Mixed patterns: a queue feeding into a topic for downstream analytics.

**Optimize & Communicate**

Explain that choosing *queue* gives you simple load balancing and guaranteed single processing, ideal for work pipelines. Choosing *pub/sub* offers decoupling and real‑time fan‑out, but requires careful handling of consumer state and replay semantics. Conclude with a quick recommendation: use queues for deterministic task execution; use pub/sub when multiple services need the same event stream.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
