---
qid: ing_98acdfec48__star__local
question: 'Explain: Zero Copy — Why is Kafka Fast?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 341
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:52-05:00'
sources: []
---

**Situation**  
When I joined my current data‑engineering team, our batch ingestion pipeline was stuck at ~2 GB/s because every record had to be copied from the producer’s buffer into a new memory area before it could be written to disk or forwarded to downstream services.

**Task**  
I needed to redesign the flow so that we could push Kafka throughput up to 10 GB/s without adding extra CPU cycles or memory pressure, while still keeping the consumer latency low for real‑time analytics.

**Action**  
I leveraged Kafka’s zero‑copy feature by configuring producers to use the `send()` API with the `ByteBuffer` directly backed by a file‑mapped region. On the broker side I enabled `socket.send.buffer.bytes` and turned on the `SO_LINGER` socket option so that the kernel could hand off the buffer straight to the network stack without copying it into user space. For consumers, I switched from pull mode to Kafka’s consumer group with direct memory mapping of the log segment files, letting the OS page‑cache serve requests. I also tuned the JVM garbage collector to avoid stop‑the‑world pauses during these large transfers.

**Result**  
Throughput increased from 2 GB/s to 10 GB/s, a 400% improvement, and consumer latency dropped from 120 ms to 30 ms on average. I learned that eliminating redundant memory copies by letting the kernel handle data movement can unlock huge performance gains when combined with careful socket and GC tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
