---
qid: ing_c3cdb67180__fp__local
question: 'Explain: Effect of Message Size — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 375
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:58:29-05:00'
sources: []
---

**Why Message Size Matters in Kafka Throughput**

Kafka’s throughput is bounded by two orthogonal bottlenecks: *network I/O* and *disk I/O*.  
For a fixed number of writes per second, the amount of data that must be transferred grows linearly with message size. Consequently:

1. **Network Saturation** – Each record carries a 12‑byte header plus payload; larger messages push more bytes through the NIC before the broker can acknowledge. In a “cheap” machine cluster, the 10 GbE link is often the first to hit its ceiling.

2. **Disk Bandwidth & Seek Overhead** – Kafka writes sequentially, but every record adds metadata (offset, timestamp) and triggers a log‑segment roll when size thresholds are met. Large messages inflate segment sizes, increasing write amplification and reducing effective throughput because the disk must handle more bytes per seek.

3. **Memory Footprint & GC** – Producers buffer messages in memory; bigger payloads raise heap usage, leading to more frequent garbage collections that stall producer threads.

*Non‑obvious insight:* **Chunking small records into a single large record can actually hurt throughput**. Although it reduces header overhead, the single write becomes a heavy disk operation and increases latency for consumers that must deserialize a huge blob. The optimal point is where the combined cost of headers and I/O matches the underlying NIC/disk limits—typically around 1–2 KB per message on commodity hardware.

Thus, benchmark curves show a steep drop in writes‑per‑second as payload size grows beyond this sweet spot, illustrating how Kafka’s design tightly couples message granularity to system resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
