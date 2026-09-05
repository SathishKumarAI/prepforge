---
qid: ing_8d36b689ad__star__local
question: 'Explain: Topics — Benchmarking Apache Kafka: 2 Million Writes Per Second
  (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 397
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:06-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating a real‑time analytics pipeline to Kafka. The product team demanded that the cluster support at least 2 million writes per second while keeping hardware costs low—only three commodity servers (8 CPU, 64 GB RAM) were available for the benchmark.

**Task:**  
I had to prove that such throughput was achievable on those machines and identify the configuration knobs that mattered most, all within a two‑week sprint before the rollout deadline.

**Action:**  
I set up a three‑node Kafka cluster on bare‑metal servers with the latest 3.7 release, tuned Zookeeper for minimal latency (client session timeout 30 s), and used RocksDB as the log store to reduce disk I/O. I scripted producer workloads in Go using the Sarama library, sending 64‑byte JSON messages at a steady rate while varying batch size, linger.ms, and compression codec. Parallel consumer groups verified data integrity. To avoid network bottlenecks I ran all nodes on a single 10 Gbps switch and monitored throughput with Grafana dashboards linked to JMX metrics.

**Result:**  
The cluster consistently hit 2.1 million writes per second at 64‑byte payloads, with average latency under 5 ms. We also discovered that enabling `socket.send.buffer.bytes=262144` and setting `replication.factor=3` kept the system stable. The experiment saved the company roughly $30k in hardware by proving that a small, well‑tuned cluster could meet our high‑volume requirements. I learned how fine‑grained Kafka tuning directly translates to real‑world cost savings and performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
