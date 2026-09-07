---
qid: ing_afddb83572__faang__local
question: 'Explain: Three Consumers — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 557
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:32:20-05:00'
sources: []
---

**Clarify**

You’re asking how LinkedIn demonstrated that a low‑cost cluster can sustain ~2 M writes/second in Kafka, and what the key take‑aways are for production deployments.

*Assumptions I’d confirm:*  
- “Cheap” machines mean commodity x86 servers (e.g., 8–16 cores, 64 GB RAM).  
- Writes are idempotent, small messages (<1 KB), no compaction.  
- The benchmark uses LinkedIn’s own tooling (Kafka‑producer library + consumer groups).

**Approach**

1. **Cluster layout** – 3 brokers, each with a single data disk (SSD) and a dedicated NIC.  
2. **Producer strategy** – 8 parallel producer threads per broker, each using the same topic partition.  
3. **Consumer validation** – Two consumers: one that reads every message to verify ordering, another that counts throughput.  
4. **Metrics collection** – Latency (p99), error rate, disk I/O, network usage.

**Depth**

- Each broker runs Kafka 2.x with default configs tuned for high write throughput: `min.insync.replicas=1`, `replication.factor=3` (so each write hits all 3).  
- Producers set `linger.ms=0`, `batch.size=32k`, and enable *idempotence* to avoid duplicates.  
- Throughput per broker ≈ 666 K writes/sec; aggregated ≈ 2 M.  
- Disk I/O: ~250 MB/s per broker, well below SSD limits (~500 MB/s).  
- Network: 1 Gbps link saturates at ~125 MB/s per broker, still under capacity.

**Edge Cases**

- **Disk bottleneck:** larger messages (>4 KB) would hit SSD limits.  
- **Replication lag:** if a broker fails, the cluster can’t sustain the same rate until the follower catches up.  
- **Consumer lag:** if consumers aren’t keeping pace, the backlog grows and may trigger back‑pressure.

**Optimize & Communicate**

- For higher rates, add more partitions (horizontal scaling) or upgrade to NVMe disks.  
- Use *exactly‑once* semantics for critical data paths.  
- Present results in a slide deck: write rate vs. latency curve, resource utilization heatmap, and a risk matrix for failure scenarios.

In summary, LinkedIn proved that with commodity hardware, proper producer tuning, and a minimal replication factor, Kafka can handle 2 M writes/sec—an excellent baseline for designing scalable data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
