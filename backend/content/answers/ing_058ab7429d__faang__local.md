---
qid: ing_058ab7429d__faang__local
question: 'Explain: Networking: The big one — Uncovering Kafka\u2019s Hidden Infrastructure
  Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 509
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:57:07-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how hidden infrastructure costs in Apache Kafka can be uncovered during a network‑centric audit. I’ll assume we’re looking at a production cluster with multiple brokers, producers/consumers, and an external monitoring stack (e.g., Prometheus). The goal is to identify cost drivers that aren’t obvious from raw billing—like under‑provisioned disks or idle network bandwidth.

**Approach**  
1. **Collect metrics** – Kafka’s JMX exposes `BytesInPerSec`, `BytesOutPerSec`, `UnderReplicatedPartitions`, etc.  
2. **Correlate with cloud usage** – Map these counters to AWS/ECS/VM metrics (EBS IOPS, ENI throughput).  
3. **Identify anomalies** – Look for bursts in network I/O that aren’t matched by CPU or disk activity; spot brokers with high `UnderReplicatedPartitions` which cause extra replication traffic.  
4. **Simulate workloads** – Use a lightweight producer to generate synthetic traffic and measure how broker resources scale.

**Depth**  
- *Network cost*: Each 1 Gbps ENI costs ~$0.10/hr; if brokers sit on 100 Mbps but consume 80 Mbps during spikes, you’re paying for unused headroom.  
- *Disk cost*: Provisioned IOPS vs. actual usage; Kafka’s write‑ahead log can cause sustained high I/O even with low throughput.  
- *Replication overhead*: A 3‑node cluster replicates every message three times; if data is rarely read, replication traffic still accrues network and storage costs.

**Edge Cases**  
- High churn of partitions → constant rebalancing increases traffic.  
- Misconfigured `replication.factor` leading to many under‑replicated nodes.  
- Over‑provisioned EBS volumes that never hit IOPS limits.

**Optimize & Communicate**  
Recommend auto‑scaling ENIs based on `BytesOutPerSec`, down‑size EBS volumes when IOPS < 50% for >24 hrs, and adjust `replication.factor` per data criticality. Present findings in a dashboard that links metric anomalies to billable units, so stakeholders see the direct ROI of tuning. This structured, metrics‑driven approach aligns with FAANG’s emphasis on measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
