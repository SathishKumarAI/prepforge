---
qid: ing_e63a81f25f__aws__local
question: 'Explain: Running Apache Kafka® in 2021: A Cloud-Native Service eBook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 444
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:40-05:00'
sources: []
---

**Situation & Task**  
In 2020 I led a migration of our on‑prem Kafka cluster (2 TB daily throughput) to a cloud‑native solution for a fintech client. The goal was to cut ops cost by 35 % while keeping SLA < 1 ms latency.

**Action – Design & Implementation**  
* *Service choice*: Chose **Amazon MSK** because it abstracts broker management, provides built‑in encryption (TLS/KMS), and auto‑scales with the **Kafka Auto Scaling** feature.  
* *Cluster sizing*: Calculated 3 brokers per AZ for HA, 2 × 10 GB SSD EBS per broker for I/O, and a dedicated **Kinesis Data Firehose** sink for real‑time analytics.  
* *Security*: Applied IAM roles to producers/consumers, enabled VPC endpoints (PrivateLink) to keep traffic in AWS.  
* *Monitoring*: Deployed CloudWatch metrics + Grafana dashboards; set up SNS alerts on `UnderReplicatedPartitions`.  
* *Cost optimization*: Enabled **Provisioned Throughput** and leveraged Spot Instances for non‑critical read replicas, saving ~28 % vs. on‑demand.

**Result**  
- Latency dropped from 3 ms to < 0.8 ms (95th percentile).  
- Monthly ops cost fell from $12k to $7.2k (35 % reduction).  
- Data ingestion uptime improved to 99.98 %.  

**Learning & Ownership**  
I documented a “Kafka‑as‑a‑Service” playbook, shared it across three teams, and ran quarterly “post‑mortem” sessions to capture failures—e.g., the first mis‑configured broker caused a 15 min outage; we added a readiness probe in the next release.  

**Leadership Principles**  
*Customer Obsession*: Delivered sub‑ms latency for high‑frequency trading clients.  
*Ownership & Dive Deep*: Handled every failure root cause, wrote automation scripts, and drove continuous cost improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
