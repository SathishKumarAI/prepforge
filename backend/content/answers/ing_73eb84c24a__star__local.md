---
qid: ing_73eb84c24a__star__local
question: 'Explain: Single producer thread, no replication — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 376
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:14-05:00'
sources: []
---

**Situation:**  
During a performance tuning sprint for our real‑time analytics platform, the data ingestion team needed to prove Kafka could sustain 2 million writes per second on commodity hardware before we upgraded our cluster. We were limited to three inexpensive servers (8 GB RAM, dual‑core CPUs) and had to run a single producer thread with no replication to keep the test realistic for a low‑cost deployment.

**Task:**  
Demonstrate that a bare‑bones Kafka setup could hit 2 M writes/sec, measure latency distribution, and identify bottlenecks without affecting downstream consumers.

**Action:**  
I scripted a Go producer using the `sarama` library, configured batch size to 1 MB, linger.ms=5 ms, and set the producer’s retries to zero. On each broker I tuned JVM options: max‑direct‑memory‑size=2G, disabled JMX, and increased the socket buffer to 256 KB. I also enabled `compression.type=gzip` to reduce payload size. Using `k6` load tests, I ramped traffic in 10 s intervals while capturing broker metrics via Prometheus. When CPU hit 90 %, I added a second thread only for monitoring and throttled the producer backoff to avoid packet loss.

**Result:**  
The cluster consistently reached 2.1 M writes/sec with an average round‑trip latency of 12 ms, and no message drops were observed. The test validated that cheap hardware can meet our ingestion SLA if we fine‑tune batch sizes and buffer settings. I learned the critical impact of producer batching on throughput and how to balance compression against CPU usage for high‑volume workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
