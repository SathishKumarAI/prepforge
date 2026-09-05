---
qid: ing_25870e0be2__star__local
question: 'Explain: Replicating this test — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 413
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:50-05:00'
sources: []
---

**Situation:**  
During my last internship at a fintech startup, we needed to prove that our event‑driven architecture could handle the peak load of 2 million trades per second. The product team insisted on a real‑world benchmark similar to LinkedIn’s “Apache Kafka: 2 Million Writes Per Second” demo, but we only had three inexpensive Raspberry Pi 4s (1 GB RAM) in our lab.

**Task:**  
Design and run a reproducible test that would hit 2 M writes/sec across those machines while collecting latency and throughput metrics for comparison against the LinkedIn benchmark.

**Action:**  
I built a lightweight Kafka cluster on the Pis using Confluent’s open‑source distribution, tuned `kafka.server.Config` to reduce log retention (`log.retention.hours=1`) and increase batch size (`batch.size=65536`). For producers I wrote a Go program that leveraged the Sarama library, set `linger.ms=5`, and used 32 parallel goroutines per node. To emulate LinkedIn’s “cheap machines” I disabled GPU acceleration, ran each Pi in a Docker container with limited CPU shares (0.75), and monitored using Prometheus exporters on every node. The test script ramped from 10 k to 2 M writes/sec over 5 minutes while recording `producer_latency_ms` and `broker_request_rate`.

**Result:**  
We achieved an average of 1.9 M writes/sec with a median latency of 12 ms, matching the LinkedIn target within 5 %. The exercise taught me how to balance batch size, linger time, and CPU allocation for high‑throughput Kafka workloads on constrained hardware, and it became a reusable benchmark suite for future capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
