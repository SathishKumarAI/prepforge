---
qid: ing_bb560baeca__fp__local
question: 'Explain: Dynamic targeting — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 451
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:42:08-05:00'
sources: []
---

### Why “Pub/Sub” Must Exist  

In any distributed system, a producer often needs to broadcast an event to **many** consumers without knowing who they are or how many will listen at any moment.  
If the producer had to keep a list of every subscriber, adding or removing one would require a *synchronization* step that breaks scalability and introduces latency.  

The fundamental problem is: *how can we decouple “who” from “what” so that each side can evolve independently?*  
Information‑theoretic optimality says we should send only the event once, then let every interested party retrieve it at their own pace. That yields a **publish/subscribe** abstraction:

| Component | Role | What it stores |
|-----------|------|----------------|
| Publisher | Emits events | Event payload + metadata |
| Subscriber | Requests events | Subscription pattern (topic, filter) |
| Broker | Routes & buffers | Queues per topic, delivery guarantees |

The broker is the *mediator* that implements a **queue‑per‑topic** policy. Each subscriber pulls from its own queue; thus the publisher never blocks on downstream consumers.  

### Dynamic Targeting in AWS Pub/Sub  

AWS’s implementation (SNS + SQS) lets a publisher send to an SNS topic once, and each subscribed SQS queue receives a copy.  
Subscribers can be added or removed at any time—no restart required. The broker guarantees at‑least‑once delivery; if you need exactly‑once semantics, you layer idempotency in the consumer.

### Non‑obvious Insight  

Most people view Pub/Sub as “broadcast”. In reality it is *dynamic routing*—the broker decides **which** queue gets a message based on subscription filters. That means you can implement fine‑grained targeting (e.g., only send “payment” events to billing queues) without changing the publisher code, simply by adjusting filter rules. This decoupling is what makes Pub/Sub the backbone of event‑driven architectures and the key reason it scales from a few dozen to millions of subscribers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
