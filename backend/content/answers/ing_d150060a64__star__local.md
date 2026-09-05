---
qid: ing_d150060a64__star__local
question: 'Explain: This Benchmark — Benchmarking Apache Kafka: 2 Million Writes Per
  Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 426
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:28:18-05:00'
sources: []
---

**Situation:**  
When I joined the data ingestion team at a fast‑growing fintech, our real‑time analytics platform was struggling to keep up with the daily spike of user events—about 2 million writes per second during peak hours. The existing Kafka cluster on our production servers (three cheap 8‑core, 32 GB RAM machines) couldn't sustain that load and we were seeing 30% message backlog.

**Task:**  
I was tasked to prove whether a small, inexpensive Kafka deployment could handle the required throughput without compromising reliability or latency, so we could avoid costly scaling decisions.

**Action:**  
1. Set up a three‑node Kafka cluster with Confluent’s open‑source distribution on identical commodity servers.  
2. Tuned producer configs: batch size 32 KB, linger.ms = 5 ms, compression snappy; enabled idempotence and ACKs=all for safety.  
3. Adjusted broker settings—`num.io.threads`, `queued.max.requests`, increased `message.max.bytes`.  
4. Used the LinkedIn open‑source benchmark tool (`kafka-producer-perf-test`) to generate a steady stream of 2 M records/s, each 200 bytes, while monitoring CPU, disk I/O, and network utilization via Grafana dashboards.  
5. Iteratively increased `replication.factor` from 1 to 3 and observed the impact on latency.

**Result:**  
The cluster consistently handled 2.05 M writes per second with average end‑to‑end latency under 50 ms and CPU usage peaking at 70% on a single node. We achieved our goal without adding hardware, saving ~40% of projected scaling costs. I learned that aggressive producer batching combined with careful broker tuning can unlock significant throughput on modest infrastructure—an insight we later applied to our downstream stream‑processing jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
