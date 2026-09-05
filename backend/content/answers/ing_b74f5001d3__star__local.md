---
qid: ing_b74f5001d3__star__local
question: 'Explain: Producer Throughput — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 344
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:38-05:00'
sources: []
---

**Situation** – At a startup we had to ingest telemetry from 30 k IoT devices in real time. The existing Kafka cluster on three low‑cost Ubuntu boxes was throttling at ~250k writes/sec, far below the required 2 M/s for our analytics pipeline.

**Task** – I needed to prove that Kafka could sustain 2 million producer writes per second on commodity hardware while keeping latency under 50 ms and data loss below 0.01%.

**Action** – First, I re‑configured Zookeeper to use a single node with 4 GB RAM, tuned the broker’s `num.network.threads` to 12 and `num.io.threads` to 24, and increased `queued.max.requests` to 5000. On the producer side I used a batch size of 32 KB, linger time of 5 ms, and enabled idempotence. I also switched from default compression to Snappy, which cut CPU usage by ~30%. Finally, I ran YCSB with 100 concurrent producers, each writing 200 kB records, and monitored throughput via Kafka’s JMX metrics.

**Result** – The cluster reached 2.1 M writes/sec consistently, latency stayed below 45 ms, and no record was lost (error rate <0.001%). I documented the configuration as a benchmark guide that helped scale the system to 10× traffic with minimal hardware upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
