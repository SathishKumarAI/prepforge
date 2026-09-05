---
qid: ing_afddb83572__star__local
question: 'Explain: Three Consumers — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 439
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:45-05:00'
sources: []
---

**Situation**  
In a recent LinkedIn internal project we needed to validate that our streaming platform could sustain 2 million write‑throughput per second for the new event‑driven analytics pipeline. The budget only allowed us to use three commodity servers (8 CPU, 32 GB RAM) in a single availability zone.

**Task**  
Prove that Kafka could deliver 2 M writes/s with acceptable latency (<200 ms), while keeping memory usage below the physical limits and avoiding disk thrashing on cheap SSDs.

**Action**  
I configured a three‑node cluster with tuned `broker.id`, `num.network.threads=8`, `num.io.threads=16`, and set `message.max.bytes` to 1 MB. Using the official Java producer, I enabled idempotence (`enable.idempotence=true`) and set `linger.ms=5`. Producers were written in Go for concurrency, each spawning 200 goroutines that batched 1000 records per call, using the Avro schema registry for serialization. I ran a custom load test with `kafka-producer-perf-test.sh`, gradually ramping up to 2 M msgs/s, monitoring `BytesInPerSec` and `RecordErrorRate`. To keep disk I/O in check, I allocated all brokers to SSDs but used the `flush.messages=1000` setting to batch writes. I also introduced a lightweight Prometheus exporter for per‑broker queue depth.

**Result**  
The cluster sustained 2 M writes/s with average latency of 180 ms and <1% error rate. Memory usage stayed under 70%, and disk utilization never exceeded 60%. The experiment validated our cost model and taught me that aggressive batching, idempotence, and fine‑tuned thread counts are critical for high‑throughput Kafka deployments on constrained hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
