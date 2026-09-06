---
qid: ing_b74f5001d3__fp__local
question: 'Explain: Producer Throughput — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 441
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:33:35-05:00'
sources: []
---

**Why a “cheap” cluster can hit 2 M writes/s**

The core problem is *information‑to‑wire* conversion: each record must be serialized, sent over the network, written to disk and acknowledged.  
1. **Serialization cost** – Kafka’s binary format (Avro/JSON) is almost lossless; it turns a Java object into ~100 bytes in microseconds.  
2. **Transport cost** – A single TCP round‑trip for 1 kB takes ≈0.5 ms on a local LAN. Sending many records in one batch amortizes this latency: the *batch size* is the lever that turns per‑record latency into throughput.  
3. **Disk cost** – Modern SSDs write 2–4 GB/s; Kafka appends to a log, so seeks are negligible. The bottleneck shifts from I/O to CPU‑bound compression and checksum calculations.

The benchmark exploits this shift: three inexpensive servers (≈8 core/32 GB) each run one broker; producers batch 1 kB records into 64 kB packets, compress with LZ4 (10× speed), and use asynchronous I/O. The cluster’s *log compaction* is turned off, so writes are pure appends.

**Deeper principle:** *Throughput = (Batch size × Producer rate) / Latency*. By increasing batch size, you reduce the number of TCP handshakes per byte, turning a latency‑bounded system into a bandwidth‑bounded one.  

**Non‑obvious insight:** The limiting factor is not the network or disk but the *producer’s thread scheduling* on cheap CPUs. A single producer thread can saturate 2 M writes/s because CPU time is spent almost entirely in serialization/compression, which is highly cache‑friendly. Thus, scaling producers (rather than brokers) yields linear throughput until the broker’s I/O becomes the bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
