---
qid: ing_6edf99eb94__fp__local
question: 'Explain: Producer Throughput Versus Stored Data — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 458
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:00:20-05:00'
sources: []
---

### Why throughput matters in Kafka

When a producer sends messages, it faces two competing goals:

1. **Maximize the number of records per second** – this is *throughput*.  
2. **Keep the broker’s disk usage under control** – this is *stored data*.

Kafka turns writes into a sequence of log segments that are appended atomically. The fundamental constraint comes from the *write‑ahead buffer (WAL)*: every record must be flushed to disk before it can be acknowledged, or else the system risks losing data on crash. Thus throughput cannot grow arbitrarily; it is bounded by the rate at which the disk and network can accept new bytes.

### Benchmarking 2 M writes/s on cheap hardware

The LinkedIn test shows that three low‑end servers (each with a single SSD, 4 CPU cores, 8 GB RAM) can sustain **≈ 2 million** writes per second. The key to this performance is the *write‑ahead log*’s batching strategy:

- Records are first accumulated in an in‑memory buffer.
- When the buffer reaches a configurable size or timeout, it is flushed as one bulk write.
- Each flush writes to multiple files (segments) in parallel across the three nodes.

Because each node handles ≈ 0.7 M writes/s, the *disk throughput* (≈ 200 MB/s per SSD) and *network bandwidth* (≈ 10 Gbps total) are not saturated. The bottleneck becomes the **producer’s serialization** of records: if the producer serializes too slowly or the compression algorithm is heavy, the buffer will starve.

### Non‑obvious insight

Most people focus on disk I/O when tuning Kafka. In this benchmark, the *CPU cost of serialization* and *network packetization* actually limit throughput before the disks do. By profiling the producer’s CPU usage you can often bump throughput by switching to a lighter serializer (e.g., Avro with binary encoding) or reducing compression levels, achieving the same 2 M writes/s on even fewer machines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
