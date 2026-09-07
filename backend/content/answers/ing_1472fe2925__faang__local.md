---
qid: ing_1472fe2925__faang__local
question: 'Explain: The Confluent Developer Newsletter — How to Choose the Number
  of Topics/Partitions in a Kafka Cluster? | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 461
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:47-05:00'
sources: []
---

**Clarify**  
You’re asking how to decide *how many* Kafka topics and partitions an application needs so it scales, stays performant, and remains maintainable. I’ll assume we have a production cluster with multiple producers/consumers, a mix of throughput & latency requirements, and that the data model is already defined.

**Approach**  
1. Start with **throughput**: compute expected messages/sec and per‑partition capacity.  
2. Consider **consumer parallelism**: one thread per partition → max consumers = partitions.  
3. Factor in **fault tolerance**: replication factor + desired availability (e.g., 5% downtime).  
4. Look at **latency & ordering**: fewer partitions keep ordering but limit concurrency; more partitions improve throughput but risk out‑of‑order delivery across topics.

**Depth**  
- **Topic sizing**: A single logical stream usually maps to one topic; split when data semantics differ (e.g., different schemas or retention policies).  
- **Partition count formula**:  
  ```
  #partitions = ceil( (max_messages_per_sec * avg_msg_size) / (partition_throughput) )
  ```  
  Typical partition throughput ≈ 1‑2 MB/s on SSD.  
- **Consumer side**: Launch `n` consumer threads; each handles one partition. If consumers < partitions, some will be idle.  
- **Replication & recovery**: With RF=3 and 10% disk failure probability, choose partitions so that at least two replicas remain online during a leader failover.

**Edge Cases**  
- *Burst traffic*: use auto‑scaling or increase partitions temporarily.  
- *Under‑partitioned cluster*: producers starve; consumers idle.  
- *Over‑partitioning*: excessive metadata overhead and GC pressure on brokers.

**Optimize & Communicate**  
Iteratively adjust partition counts based on real metrics (broker CPU, disk I/O, consumer lag). Document the rationale in architecture diagrams and maintain a “partition policy” that ties business KPIs to Kafka configuration. This keeps decisions auditable and future‑proof.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
