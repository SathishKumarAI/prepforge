---
qid: ing_4e379203f7__fp__local
question: 'Explain: SMS Processor — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 430
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:51:46-05:00'
sources: []
---

### Why an **SMS Processor** Must Be a Queue‑First Service

At its core the system receives *messages* (user requests) and delivers *notifications* (SMS).  
The fundamental problem is **throughput vs reliability**: we must send millions of SMS in seconds, yet guarantee each one reaches the carrier exactly once.

1. **Decouple producers from consumers** – put every inbound request into a durable message queue.  
   - Queue guarantees persistence and at‑least‑once delivery.  
   - Producers never block; they just enqueue.
2. **Work‑queue scaling** – workers poll the queue, each worker is stateless.  
   - This satisfies the *law of large numbers*: as we add workers, latency drops linearly until the carrier becomes the bottleneck.
3. **Idempotent sending** – store a *deduplication key* (user+timestamp) in a fast cache.  
   - Guarantees idempotence, turning at‑least‑once into exactly‑once without extra coordination.

### Deeper Principle: *Information Bottleneck*

The SMS carrier is the bottleneck channel with limited bandwidth. By pushing all variability (arrival spikes, retries) onto the queue, we compress the input stream to match the output capacity—an instance of the **information bottleneck** principle: keep only what matters for the target distribution (successful delivery).

### Non‑Obvious Insight

Most designs ignore *carrier backpressure*.  
If a carrier rejects messages, the worker should **decrement its own concurrency** and **slow down the queue rate** using token buckets. This dynamic throttling keeps the system stable under sudden carrier outages, which a static “fixed number of workers” design cannot handle.

In short: queue → stateless workers → idempotent send + adaptive backpressure = scalable, reliable SMS notification service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
