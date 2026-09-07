---
qid: ing_058ab7429d__aws__local
question: 'Explain: Networking: The big one — Uncovering Kafka\u2019s Hidden Infrastructure
  Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 426
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:38:09-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a cross‑functional team to migrate an on‑prem Kafka cluster to Amazon MSK, I discovered that the hidden network egress and inter‑AZ traffic were eroding our projected $4 M annual budget. The goal was to reduce infrastructure spend by 30% while maintaining throughput of 1 Tbps.

**Action (A)**  
I performed a **Dive Deep** audit: captured broker metrics, VPC flow logs, and Kafka’s *kafka‑metrics* JMX exporter data. I mapped each producer/consumer path, identified cross‑region replication and unnecessary public internet hops. Using AWS Cost Explorer and the **AWS Compute Optimizer**, I modeled cost scenarios.

I redesigned the topology:
- Moved all brokers into a single Availability Zone per region (leveraging MSK’s *broker count* scaling) to eliminate inter‑AZ egress.
- Enabled **VPC Endpoints for Kinesis Data Streams** to pull logs directly into S3, removing public IP traffic.
- Switched to **Kafka Connect with Amazon Glue** for data ingestion, eliminating the need for a separate EC2 connector fleet.

**Result (R)**  
Post‑migration, network egress dropped from $1.8 M to $0.6 M per year— a 66% reduction. Throughput remained at 1 Tbps with <0.5 ms latency spikes. The team also implemented a **Cost‑Alert** dashboard in CloudWatch that now auto‑scales MSK brokers based on real‑time traffic, preventing future over‑provisioning.

**Leadership Principles Reflected**  
- *Customer Obsession*: Delivered a cost‑efficient solution for the business while keeping performance high.  
- *Ownership & Bias for Action*: Took full responsibility for uncovering hidden costs and executed a rapid redesign that saved millions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
