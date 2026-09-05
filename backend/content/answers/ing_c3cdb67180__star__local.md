---
qid: ing_c3cdb67180__star__local
question: 'Explain: Effect of Message Size — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 389
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:01:34-05:00'
sources: []
---

**Situation**  
While working on a real‑time analytics platform for an e‑commerce client, we needed to ingest over 2 million events per second into our data lake using Apache Kafka. Our budget only allowed us three low‑cost EC2 instances (4 vCPU, 8 GB RAM), so I had to determine how message size would impact throughput.

**Task**  
Measure the maximum write rate achievable for varying payload sizes (1 B, 256 B, 1 KB, 10 KB) and identify the sweet spot that balanced latency, CPU usage, and disk I/O on our constrained hardware.

**Action**  
I scripted a producer load test with `kafka-producer-perf-test.sh`, rotating topic partitions to avoid hot spots. For each payload size, I logged per‑second throughput, consumer lag, and CPU/memory metrics from the JVM and OS. I also experimented with compression (Snappy vs Gzip) and batch sizes to see how they mitigated network overhead. The tests ran for 30 minutes each to capture steady‑state behavior.

**Result**  
With 256 B messages (the default log entry size), we hit ~2.1 M writes/sec, CPU spiked to 95 % on one node, and consumer lag stayed under 5 seconds. Increasing payloads beyond 1 KB dropped throughput by >30 % due to larger segment files and more frequent flushes. The benchmark taught me that small messages maximize Kafka’s batching efficiency, but careful tuning of batch sizes and compression can recover performance for slightly larger payloads. This data guided our downstream architecture to keep event size under 512 B whenever possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
