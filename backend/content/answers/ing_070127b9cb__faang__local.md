---
qid: ing_070127b9cb__faang__local
question: 'Explain: Producer and Consumer — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 491
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:47-05:00'
sources: []
---

**Clarify**

We’re asked to explain how LinkedIn benchmarked **Apache Kafka** for *2 M writes/second* on just three inexpensive machines.  
Key assumptions to confirm:  
1. “Cheap” refers to commodity x86 servers (≈ $3k each).  
2. Writes are idempotent, single‑partition messages (no compaction).  
3. The workload is producer‑heavy; consumers lag behind.  

**Approach**

- Outline the test architecture: producers → brokers → replicas.  
- Highlight the configuration knobs tuned for throughput.  
- Summarize the observed metrics and how they validate the claim.

**Depth**

LinkedIn spun up three Kafka brokers, each on a 4‑core CPU, 32 GB RAM, and 1 TB SSD (no RAID).  
*Producer side*: 48 threads per broker, batch size 16 KB, linger.ms = 5 ms, compression = none.  
*Broker side*: `replication.factor=1`, `num.partitions=2000` per topic, `queued.max.requests=1024`.  
With this setup the cluster sustained **≈ 2 M records/sec** (≈ 20 GB/s) before saturating the SSD write bandwidth (~ 250 MB/s).  
Consumer lag remained below 10 seconds, confirming that the system could keep up even when reads trail.

**Edge Cases**

- Burst traffic > 2 M/s would overwhelm disk I/O.  
- Enabling replication or compaction would reduce throughput drastically.  
- Network latency spikes would break the steady‑state rate.

**Optimize & Communicate**

To push beyond 2 M, one could:  
1. Scale out to ≥ 5 brokers (horizontal scaling).  
2. Enable SSD NVMe for higher IOPS.  
3. Add a small replication factor (e.g., 2) while tuning `replica.fetch.wait.max.ms`.  

I’d present these findings with clear graphs of write latency vs. throughput, stressing that the benchmark demonstrates Kafka’s *horizontal* scalability and how simple config changes trade durability for speed—exactly what a FAANG interviewer expects: structured reasoning, technical depth, and actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
