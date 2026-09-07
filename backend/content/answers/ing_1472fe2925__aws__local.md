---
qid: ing_1472fe2925__aws__local
question: 'Explain: The Confluent Developer Newsletter — How to Choose the Number
  of Topics/Partitions in a Kafka Cluster? | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 437
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:14-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led a cross‑functional team that migrated our on‑prem event hub to an AWS Managed Streaming for Apache Kafka (MSK) cluster to support real‑time fraud detection. The key challenge was deciding how many topics and partitions would deliver the throughput needed by 1 M daily transactions while keeping latency under 50 ms.

**Action**  
I applied **Customer Obsession** and **Dive Deep**:  
*Collected baseline metrics* – average message size (2 KB), current throughput (30 k msgs/s) and peak load (120 k msgs/s).  
*Modelled Kafka’s partition math*: `max partitions = brokers × 1000` to stay within MSK limits.  
*Simulated workloads* in a test cluster: 10, 20, 40, 80 partitions per topic, measuring consumer lag and broker CPU.  
*Chose a two‑topic strategy*: “transactions” (1 k partitions) for raw events, “alerts” (200 partitions) for processed fraud signals.  
*Implemented auto‑scaling* with CloudWatch alarms on partition utilization >70% → add 5 partitions; <30% → remove 5.

**Result**  
- Throughput rose from **30 k to 150 k msgs/s** without increasing brokers.  
- Consumer lag dropped from 1.2 s to **<50 ms**, meeting SLA.  
- Cost saved by avoiding an extra broker: $0.12 M/yr.  
- Post‑deployment, we hit a **30% reduction in false positives** thanks to timely alerts.

**Reflection & Learning**  
The experiment taught me that partitioning is not just about raw capacity; it’s a lever for latency and cost. I documented the decision logic in our architecture repo, enabling future teams to iterate faster. This experience reinforced that *ownership* means owning both performance and operational economics from design through production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
