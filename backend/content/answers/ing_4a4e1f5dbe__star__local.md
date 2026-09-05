---
qid: ing_4a4e1f5dbe__star__local
question: 'Explain: End-to-end Latency — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 386
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:54-05:00'
sources: []
---

**Situation:**  
At my previous company we were evaluating whether our streaming platform could handle a sudden spike in real‑time user events—about 2 million writes per second—using only commodity hardware to keep costs low.

**Task:**  
I needed to design and run an end‑to‑end latency benchmark for Apache Kafka, measuring the round‑trip time from producer to consumer while sustaining that write rate on three inexpensive servers.

**Action:**  
First, I set up a minimal cluster: one broker per machine, 8 GB RAM each, standard SATA SSDs. I wrote a custom producer in Java that sent JSON payloads (≈200 bytes) using the high‑throughput `linger.ms=1` and `batch.size=32k`. On the consumer side, I used Kafka’s native consumer API with a single thread per node to avoid ordering delays. To capture latency, I instrumented both producer and consumer timestamps in the message headers and streamed them into an InfluxDB instance for real‑time dashboards. I tuned broker configs—`num.network.threads=8`, `socket.send.buffer.bytes=1048576`—and monitored GC pauses with Java Flight Recorder to isolate JVM overhead.

**Result:**  
The cluster sustained 2 M writes/s with an average end‑to‑end latency of 12 ms, peak spikes never exceeding 30 ms. The benchmark proved that a cheap, well‑tuned Kafka deployment can meet strict latency SLAs. I learned the critical role of broker threading and GC tuning in high‑throughput scenarios, and documented a reproducible test harness for future capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
