---
qid: ing_6edf99eb94__star__local
question: 'Explain: Producer Throughput Versus Stored Data — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 415
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:05-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with proving that our event‑driven architecture could handle the projected 2 M writes/sec for real‑time fraud alerts, but we only had three mid‑range servers (8 GB RAM, 4 vCPU) in our dev environment.

**Task:**  
I needed to benchmark producer throughput against the amount of data actually persisted in Kafka—identifying the bottleneck between send rate and disk write capacity—and deliver a plan to scale cost‑effectively.

**Action:**  
1. Built a lightweight Go producer using `kafka-go`, configured with max batch size 32 KiB, linger.ms = 5 ms, and compression gzip.  
2. Ran the test with the Confluent Benchmark tool (`kafka-producer-perf-test`) for 30 min, logging both `producer-byte-rate` and `log-flush-rate`.  
3. Monitored broker logs to capture `LogFlushMs` and used `sar -b` to see disk I/O saturation.  
4. Adjusted the number of partitions (from 8 to 32) and increased the replication factor to 2, then re‑benchmarked.

**Result:**  
We achieved 1.9 M writes/sec with an average message size of 250 B—producing ~475 MB/s of compressed data—while disk flushes remained below 200 ms. The throughput plateaued when the log buffer hit 1 GB, confirming that disk I/O was the limiting factor. Learned that partition count and batch sizing are critical knobs; also realized that cheap hardware can meet high write rates if tuned correctly, but scaling to 3 M/sec would require adding a fourth node or upgrading SSDs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
