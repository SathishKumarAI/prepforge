---
qid: ing_6edf99eb94__faang__local
question: 'Explain: Producer Throughput Versus Stored Data — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 532
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:01:33-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain the trade‑off between *producer throughput* and *stored data size* when benchmarking Kafka at ~2 M writes/s on three inexpensive nodes (as LinkedIn did). Key assumptions:  

- Each write is a small record (~200 B).  
- The cluster runs single‑partition topics, no replication.  
- Machines have modest CPU/memory/SSD.  
- We’re measuring end‑to‑end throughput (producer → broker → disk).  

**2️⃣ Approach**  
1. Identify bottlenecks: CPU for serialization, network I/O, disk write latency.  
2. Quantify how much data is persisted per second at target throughput.  
3. Relate storage growth to producer rate and record size.  

**3️⃣ Depth**  
- **Data volume:** 2 M records/s × 200 B ≈ 400 MB/s. Over 1 h → ~1.44 TB, 24 h → ~34.6 TB per broker.  
- **Throughput drivers:** CPU must compress/serialize fast enough; network must sustain >3 Gbps (2 M × 200 B ≈ 400 MB/s). Disk writes are sequential and buffered in Kafka’s log segments, so SSD IOPS isn’t the limiter—write throughput is.  
- **Kafka internals:** Producer batch size (~16 KB) amortizes network round‑trips; broker’s `io.max.bytes.per.read` and `num.io.threads` tune how many bytes are read/written concurrently.  

**4️⃣ Edge Cases**  
- **Burst traffic:** Larger batches improve throughput but increase latency.  
- **Disk fragmentation:** Frequent segment rollover can reduce write speed.  
- **Replication factor >1:** Doubling writes per record inflates stored data and network load.  

**5️⃣ Optimize & Communicate**  
- Tune `batch.size`, `linger.ms` to balance latency vs throughput.  
- Use SSDs with high sequential write bandwidth; avoid HDDs.  
- Scale horizontally: add brokers to distribute partitions, keeping per‑broker write < 1 GB/s to stay within CPU limits.  

Explain that the benchmark shows a linear relationship: higher producer rate → proportionally larger log segments, but storage growth is predictable (≈400 MB/s). This informs capacity planning and cost estimates for large‑scale Kafka deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
