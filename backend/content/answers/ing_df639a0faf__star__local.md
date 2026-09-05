---
qid: ing_df639a0faf__star__local
question: 'Explain: Consumer Throughput — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 403
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:34-05:00'
sources: []
---

**Situation:**  
At LinkedIn we were preparing a new real‑time analytics pipeline and needed to prove that our Kafka deployment could sustain two million writes per second on commodity hardware before moving to production. The test environment consisted of three inexpensive Intel Xeon E5‑2620 v3 servers, each with 8 cores and 16 GB RAM.

**Task:**  
Design a benchmark that would stress the broker cluster and accurately measure consumer throughput while keeping the test realistic for our live traffic patterns.

**Action:**  
I scripted a producer workload in Java using Kafka’s `ProducerRecord` API, setting `batch.size=1MB`, `linger.ms=5`, and enabling Snappy compression to reduce network load. I launched 48 parallel producer threads per broker, each writing a 256‑byte JSON record. On the consumer side, I used the high‑level consumer with manual offset commits, set `fetch.max.bytes=10MB`, and increased `max.poll.records` to 500. To avoid GC pauses I tuned the JVM with G1GC flags (`-XX:+UseG1GC -Xmx12g`). I also monitored broker log segments and used JMX metrics to identify bottlenecks.

**Result:**  
The cluster sustained 2,100,000 writes per second for 30 minutes without dropping messages or exceeding disk latency thresholds. The benchmark validated our configuration strategy, taught us that compression + batching were the biggest throughput gains, and gave us confidence to scale out to a production‑grade cluster with minimal cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
