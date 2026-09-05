---
qid: ing_50c2b697bb__star__local
question: 'Explain: Kafka in 30 seconds — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 324
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:41-05:00'
sources: []
---

**Situation:**  
At a fast‑growth startup, our data pipeline was choking on the surge of telemetry events—over 1.5 M writes per second during peak hours—and we had to keep costs low because we were running on three modest EC2 t3.medium instances.

**Task:**  
I needed to prove that Kafka could handle the load while staying under budget, and deliver a reliable, scalable ingestion layer for downstream analytics.

**Action:**  
I started by configuring a minimal cluster: one broker per machine, using 64 MiB heap and disabling unneeded plugins. I tuned producer settings—batch size 1 MB, linger.ms = 5 ms, compression.gzip—to maximize throughput. On the brokers, I enabled log.roll.hours = 24 and set segment.bytes to 2 GB to reduce disk churn. To keep latency low, I added a single partition per topic and used idempotent producers. I then wrote a custom benchmark harness in Go that simulated 30 k concurrent writers, each sending 64‑byte messages, and logged round‑trip latency and error rates.

**Result:**  
The cluster sustained 2.1 M writes/sec with an average end‑to‑end latency of 12 ms and <0.01% dropped records—well above our SLA. The cost stayed under $200/month. I learned that careful tuning of batch sizes, compression, and partitioning can unlock Kafka’s full potential even on inexpensive hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
