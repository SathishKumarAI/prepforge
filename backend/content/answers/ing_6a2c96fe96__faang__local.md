---
qid: ing_6a2c96fe96__faang__local
question: 'Explain: How to Choose the Number of Topics/Partitions in a Kafka Cluster?
  | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 512
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:51:02-05:00'
sources: []
---

**Clarify**  
The question asks how an engineer decides on the number of *Kafka partitions* (topics are separate entities) that best suit a given workload in a Confluent‑managed cluster.  
Assumptions to confirm:  

| Assumption | Why it matters |
|------------|----------------|
| Workload throughput (messages/second, size) | Determines parallelism needed |
| Consumer group size | Each consumer can read only one partition per group |
| Latency requirements | Too many partitions may increase metadata overhead |
| Topic retention and replay needs | More partitions mean more data to store |
| Cluster capacity (CPU, disk, network) | Partition count should not exceed broker limits |

**Approach**  
1. Estimate *maximum parallel consumers* needed (`C`).  
2. Compute *required throughput per partition* (`T_p = TotalThroughput / C`).  
3. Pick a number of partitions `P` such that each can sustain `T_p` without saturating broker resources.  

**Depth**  
- **Rule‑of‑thumb:** Start with 1–3 partitions per broker, then scale up by the consumer group size (e.g., 10 consumers → 10 partitions).  
- **Use Confluent Control Center metrics** (`PartitionSize`, `UnderReplicatedPartitions`) to verify no bottlenecks.  
- **Apply “ideal throughput” formula:**  
  \[
  P = \left\lceil \frac{\text{TotalThroughput}}{\text{BrokerCapacityPerPartition}}\right\rceil
  \]  
- Complexity: O(1) calculation; trade‑off between parallelism (more partitions) and metadata overhead (fewer).  

**Edge Cases**  
- *Burst traffic*: add extra partitions or use a pre‑warmed “hot” topic.  
- *Small messages*: many tiny partitions can cause high I/O contention.  
- *Consumer lag*: if consumers fall behind, increase partitions to spread load.  

**Optimize & Communicate**  
Iteratively adjust `P` based on real metrics, documenting each change. Present findings in a concise slide deck: current throughput → target partitions → expected impact. Highlight that over‑partitioning hurts performance; under‑partitioning limits scalability. This structured reasoning demonstrates clear problem framing, analytical planning, and data‑driven decision making—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
