---
qid: ing_ab07f0db45__fp__local
question: 'Explain: Database/Storage — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 362
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:09:12-05:00'
sources: []
---

**Why a notification system needs its own storage layer**

The core problem is *event persistence with eventual delivery*.  
When an event (e.g., “user X liked post Y”) occurs we must guarantee that every interested subscriber receives it **once, in order, and as quickly as possible**, even if the recipient’s device is offline.  

1. **Persistence → reliability** – Without durable storage a message can be lost when the producer or consumer crashes.  
2. **Ordering → semantics** – Many applications require monotonicity (e.g., chat). Storing events in a log that preserves append‑only order gives us this guarantee.  
3. **Scalability → horizontal partitioning** – A single table quickly becomes a bottleneck; sharding by user or topic turns the problem into independent streams, each with its own write throughput and retention policy.

**Deep principle: causality in distributed systems**

At the heart of any notification service is *causal consistency*. Each consumer must see events in the same causal order that produced them. This is enforced by a log‑structured store (e.g., Kafka, Pulsar) where each partition is an immutable sequence. The “offset” per subscriber acts as a lightweight pointer into this causal chain.

**Non‑obvious insight**

Most designs treat storage and delivery as separate layers. In reality, the *delivery state* can be encoded directly in the log: append a “delivery marker” for each consumer. This eliminates a second write to a separate “ack table”, reduces latency, and keeps all semantics (ordering, durability) within a single append‑only structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
