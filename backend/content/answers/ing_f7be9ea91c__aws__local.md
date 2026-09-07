---
qid: ing_f7be9ea91c__aws__local
question: 'Explain: Examples — Event'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 495
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:51-05:00'
sources: []
---

**Situation & Task**  
In my last role I was tasked to deliver a real‑time fraud detection system for a payment platform that processed 10 M transactions/day. The requirement: detect anomalies within 1 s of transaction arrival and trigger a mitigation workflow.

**Action – Design**  
I built an event‑driven pipeline:

| Step | AWS Service | Purpose |
|------|-------------|---------|
| Ingest | **Kinesis Data Streams** (shard per region) | Low‑latency ingestion, auto‑scaling. |
| Feature enrichment | **Lambda + DynamoDB Streams** | Pull customer profile in <10 ms; cache in DAX for 50 % hit rate. |
| Scoring | **SageMaker Endpoint** deployed with **Elastic Inference** | Batch size 1, latency <200 ms, cost‑optimized inference GPU. |
| Decision & remediation | **Step Functions** orchestrates Lambda that writes to **SNS/SQS** for downstream actions (card lock, alert). |

*Scalability*: Kinesis shards auto‑scale based on throughput; SageMaker endpoint autoscaling keeps 99.9 % SLA.  
*Availability*: Multi‑AZ deployment, failover via Route 53 health checks.  
*Cost*: Reserved Instances for Lambda concurrency + spot instances for training; total cost $0.02 per transaction.

**Result**  
Latency dropped from 5 s to <1 s, reducing fraud losses by **23 %** (≈$12M/year). The system handled a 3× traffic spike during peak holiday season without degradation.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end architecture, dove deep into latency budgets, and quantified impact with real financial metrics. After an initial false‑positive surge, I iterated the model, logged failure data in CloudWatch Logs, and achieved a 5 % drop in FP rate—learning that continuous monitoring is as critical as the ML model itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
