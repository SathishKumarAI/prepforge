---
qid: ing_b74f5001d3__faang__local
question: 'Explain: Producer Throughput — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 463
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:09-05:00'
sources: []
---

**Clarify**  
You’re asking how LinkedIn achieved > 2 M writes/sec on three low‑cost Kafka brokers.  
Assumptions: single‑topic, no compression, default replication factor, standard lib client, and “cheap” means ~\$300 servers.

**Approach**  
1. Profile the write path (producer → broker → disk).  
2. Tune network, OS, JVM, and Kafka config.  
3. Scale horizontally only where needed (i.e., 3 nodes).

**Depth**  
- **Producer side:** use asynchronous batching (`linger.ms=100`, `batch.size=32 KB`) to hit ~8 kB per record, set `acks=1` to avoid round‑trips, and enable `compression.type=lz4`.  
- **Broker side:** enable `socket.send.buffer.bytes`, `receive.buffer.bytes`, and `max.connections`. Set `num.network.threads=3` (one per core) and `num.io.threads=8`. Turn on `log.segment.bytes=1 GB` to reduce metadata churn.  
- **Disk:** use SSDs with 4× read/write heads; set `io.preallocate=true`, `flush.messages=1000`.  
- **JVM/Tuning:** high‑throughput GC (`-XX:+UseG1GC`, heap ~8 GB), disable jdk logging, enable JMX.  

With these knobs, each broker handles ~700k ops/sec; three together exceed 2M writes/s.

**Edge Cases**  
- High latency bursts can overflow batch buffers → back‑pressure.  
- Disk I/O saturation if segment size too small.  
- Network packet loss triggers retries, reducing throughput.

**Optimize & Communicate**  
Iterate with a lightweight load generator; log per‑partition metrics (latency, write rate). Use `kafka-run-class kafka.tools.JmxTool` to verify thread counts and buffer sizes. Conclude by stressing that the key is *coordinated* tuning across producer, broker, and storage layers, not just “cheap hardware.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
