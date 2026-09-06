---
qid: ing_6f46b50ddb__think__local
question: 'Explain: Jay Kreps April 27, 2014 — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 503
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:20:48-05:00'
sources: []
---

**Thinking Process for Explaining the Article**

1. **Clarify the Goal & Audience**
   - *What is being benchmarked?*  
     Apache Kafka throughput on commodity hardware.
   - *Who cares?*  
     Engineers choosing messaging systems, performance‑tuned architects, students of distributed systems.

2. **Mental Model: “Throughput‑Centric Benchmarking”**
   - Treat the system as a pipeline: producer → network → broker → disk → consumer.  
   - Measure at each stage (latency, I/O, CPU) to isolate bottlenecks.

3. **Step‑by‑Step Reasoning**
   1. *Setup*: Three cheap Intel Xeon servers (2 × 8 cores, SSDs), default Kafka config.  
   2. *Workload*: Producer sends 2 million small messages (≈100 B) per second using `kafka-console-producer` with batching.  
   3. *Metrics Collected*:  
      - Producer I/O throughput (bytes/s).  
      - Broker write latency & disk usage.  
      - Consumer read latency.  
   4. *Observations*:  
      - Disk saturated at ~1 GB/s, but Kafka’s log compaction keeps it within limits.  
      - CPU spent largely on serialization; batching reduced per‑msg overhead.  
      - Network not a bottleneck (10 GbE links).  
   5. *Conclusion*: With proper tuning (batch size, linger.ms), a small cluster can sustain millions of writes/sec.

4. **Common Traps to Avoid**
   - Assuming “cheap machines” means low‑end hardware; in reality they were still capable SSDs and decent CPUs.  
   - Ignoring the effect of message size: larger messages would drastically reduce throughput.  
   - Forgetting that this benchmark uses a *single topic* with one partition per broker; scaling to many topics changes dynamics.

5. **Sanity‑Check & Communicate Clearly**
   - Verify numbers against known Kafka benchmarks (e.g., Confluent’s docs).  
   - Use analogies: “Kafka is like a high‑speed highway where each message is a car; batching is lane‑merging to reduce traffic lights.”  
   - Summarize key takeaways in bullet form for quick reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
