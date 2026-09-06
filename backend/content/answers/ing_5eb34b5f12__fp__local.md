---
qid: ing_5eb34b5f12__fp__local
question: 'Explain: The Database As Queue Anti-Pattern — Code rant: The Database As
  Queue Anti-Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 410
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:56-05:00'
sources: []
---

**The “Database as Queue” anti‑pattern**

*Fundamental problem.*  
When a system needs reliable, ordered message delivery it often turns to a relational database table and polls it for new rows. The code looks simple: *insert → poll → delete*. But the underlying guarantee we actually need is **transactional ordering + durability**.

*Why it fails.*  
A DB row is an atomic record, not a FIFO data structure. Two processes can read the same “next” row concurrently (unless you lock or use `SELECT … FOR UPDATE`), causing lost messages. Retrying deletes after failures introduces race conditions: a consumer may delete before another has seen the row, leading to silent drops. Moreover, the database engine’s log and buffer cache are tuned for OLTP workloads, not for high‑throughput message streams; contention on index pages turns polling into a bottleneck.

*Deeper principle.*  
Queues are *stateful buffers* that guarantee **exactly once** delivery by maintaining per‑consumer cursors. A DB table lacks this cursor abstraction; you must emulate it in application logic, which is error‑prone and hard to scale. The anti‑pattern violates the *principle of least surprise*: developers expect a queue’s semantics (dequeue = consume, no duplicate), but they get database row semantics instead.

*Non‑obvious insight.*  
The real cost isn’t just latency; it’s **consistency drift**. As rows accumulate, index fragmentation forces full scans, slowly eroding the very ordering guarantees you relied on. A proper queue (e.g., Kafka, SQS) stores offsets separately and partitions data, preserving order even under sharding—something a single DB table cannot guarantee without complex, fragile workarounds.

In short, use a true messaging system when you need reliable, ordered delivery; let the database handle persistence, not ordering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
