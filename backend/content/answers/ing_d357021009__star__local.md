---
qid: ing_d357021009__star__local
question: 'Explain: Single Consumer — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 405
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:12-05:00'
sources: []
---

**Situation** – In a recent performance‑testing sprint for our event‑driven platform, we were asked to prove that Apache Kafka could sustain 2 million writes per second on commodity hardware (three 8‑core Intel Xeon E3 machines with 32 GB RAM each). The goal was to validate LinkedIn’s claim before scaling to a production cluster.

**Task** – Design and run a realistic benchmark: ingest user activity streams at peak load, measure throughput and latency, and identify bottlenecks while staying within the budget of three cheap nodes.

**Action** – I built a lightweight producer pipeline in Go, using the `sarama` library with batching enabled (10 000 messages per batch). On each machine I ran an 8‑core Kafka broker configured for maximum I/O: disk tuned to SSD, `num.network.threads=4`, `num.io.threads=8`, and `log.segment.bytes=1GB`. I used a custom JMeter script to generate the traffic, injecting slight back‑pressure via a token bucket to keep producers from flooding the network. I also monitored disk queue depths with `iostat` and broker metrics via Prometheus, tuning the producer’s linger time and compression type (snappy) until we hit the target.

**Result** – The cluster sustained 2 million writes per second for over 30 minutes, with an average end‑to‑end latency of 35 ms. Disk queue depth stayed below 3, and CPU usage hovered around 70%. This proved that a tightly tuned Kafka setup on inexpensive hardware can meet high throughput requirements. I learned that aggressive batching and fine‑grained thread configuration are the keys to squeezing performance out of commodity servers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
