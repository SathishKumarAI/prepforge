---
qid: ing_6566afea1a__aws__local
question: What does disaster recovery mean? — What is Disaster Recovery? | Google
  Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 403
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:14:11-05:00'
sources: []
---

**Disaster Recovery (DR) for a Machine‑Learning pipeline**  
*Leadership Principles: Ownership & Dive Deep.*

> **Situation** – In 2023 I led the migration of our recommendation engine from an on‑prem cluster to Amazon SageMaker and an event‑driven data lake. A single availability zone outage could have taken two weeks of training data, killing a critical promotion campaign that generated $12 M in revenue per quarter.  
> **Task** – Design a DR strategy that guarantees <1 h RTO (Recovery Time Objective) and <5 % data loss while keeping costs below 10 % of the baseline.  
> **Action** – I architected a multi‑region, cross‑account solution:
> * **S3 Cross‑Region Replication** for raw training data (latency <50 ms).
> * **AWS Glue** to automate nightly incremental ETL in the DR region.
> * **Amazon SageMaker Endpoint Auto Scaling** with read replicas in both regions; a Route 53 latency‑based routing policy flips traffic instantly on health check failure.
> * **EC2 Spot Instances + Savings Plans** for training jobs, backed by a 24‑hour backup plan using **AWS Backup** to snapshot model artifacts.
> * Implemented automated failover scripts (Boto3) that run in <30 s and publish metrics to CloudWatch.  
> **Result** – After the first real outage, we recovered the entire pipeline in 45 minutes with only 1.8 % data loss; revenue impact was $0.2 M instead of projected $12 M. Costs increased by just 4 %. The solution earned an internal “Innovation” award and is now the company standard for all ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
