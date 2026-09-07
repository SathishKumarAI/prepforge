---
qid: ing_b76fbf7f7e__faang__local
question: 'Explain: How Pub/Sub Works — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 611
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:28-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise system‑design explanation of Google Cloud Pub/Sub (or any publish–subscribe messaging service). I’ll confirm that they’re after the core flow, scalability guarantees, and key trade‑offs rather than an implementation detail.

**Approach**  
1. Outline the actors: *Publisher*, *Topic*, *Subscription*, *Subscriber*.  
2. Describe message life‑cycle: publish → topic storage → pull/push to subscriptions → ack/nack.  
3. Highlight scaling primitives: sharding topics, load‑balancing pulls, flow control, retry & dead‑letter queues.  
4. Mention guarantees (at least once, ordering optional).  
5. End with typical use cases and failure scenarios.

**Depth**  
- **Publishers** write to a *topic* via an authenticated RPC; the system assigns a monotonically increasing offset per partition (shard).  
- The topic stores messages in a replicated log; partitions allow parallel ingestion up to several GB/s per shard.  
- A **subscription** is a logical consumer view of that topic. Two delivery modes:  
  *Pull* – subscriber polls `Pull()` with flow‑control limits; the service holds an in‑memory buffer per subscription, returning up to `maxMessages`.  
  *Push* – service sends HTTP(S) POSTs to a configurable endpoint; retries use exponential backoff and deduplication by message ID.  
- **Acknowledgement**: after processing, subscriber calls `Ack()` or the push webhook returns 200. If not acked within `ackDeadline`, the message is redelivered (at‑least‑once). Dead‑letter topics capture messages that exceed retry limits.  
- **Ordering**: optional per‑partition ordering; otherwise parallelism wins.  
- **Scalability**: each partition can be served by multiple workers; autoscaling on queue depth keeps latency low. Data is stored in regional multi‑AZ clusters for durability (≥99.9999 % SLA).  

**Edge Cases**  
- Burst publishes exceeding write capacity → backpressure via client‑side throttling.  
- Subscriber failure: push retries may cause duplicate deliveries; idempotent processing needed.  
- Ordering violation when multiple partitions are used without a key.  
- Long‑running messages risk exceeding `ackDeadline`; use `ModifyAckDeadline()`.

**Optimize & Communicate**  
I’d stress that Pub/Sub trades strict ordering for horizontal scalability and low latency, making it ideal for event streams (e.g., telemetry, logs). If ordering is critical, we can enforce a single partition or add an application‑level sequencer. In production, monitoring queue depth, retry rates, and dead‑letter counts guides auto‑scaling policies. This narrative shows clear problem framing, design logic, complexity awareness, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
