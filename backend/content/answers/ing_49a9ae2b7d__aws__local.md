---
qid: ing_49a9ae2b7d__aws__local
question: 'Explain: Why Systems Become Unreliable — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 473
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:57-05:00'
sources: []
---

**Situation & Task**  
In a recent project I led the migration of our fraud‑detection ML pipeline from an on‑prem cluster to AWS. After launch, production latency spiked and batch jobs failed intermittently—customers were flagging legitimate transactions as fraudulent.

**Action**  
1. **Dive Deep into Metrics** – Collected CloudWatch logs for every component (SageMaker endpoint, Lambda trigger, RDS queue). Identified that 27 % of inference requests timed out at the SageMaker endpoint due to CPU contention and 12 % of batch jobs hit the RDS read‑replica connection limit.  
2. **Redesign with AWS Services** –  
   * **SageMaker Endpoints** → switched from `ml.m5.large` to an autoscaling `ml.c5.xlarge` fleet with a warm pool; added **EFS** for shared model artifacts to reduce load‑time per instance.  
   * **Batch Processing** → replaced RDS read replicas with **DynamoDB Global Tables** (partitioned by country) and used **SQS FIFO queues** to guarantee ordering and throttling.  
   * Added **AWS X-Ray** tracing across Lambda, SageMaker, and DynamoDB to surface bottlenecks in real time.  
3. **Bias for Action & Ownership** – Implemented a canary deployment that rolled out the new architecture to 5 % of traffic, monitored with CloudWatch alarms, then scaled to full production once latency dropped below 200 ms.

**Result**  
- Latency fell from 1.2 s to **<250 ms** (95th percentile).  
- Batch failure rate dropped from 12 % to <0.5 %.  
- Customer complaints decreased by **35 %**, and revenue loss due to false positives was reduced by **$120k/month**.

**Learning & Bar‑Raiser Insight**  
I realized that the root cause was hidden in the orchestration layer, not the ML model itself—an example of *Dive Deep*. By owning the whole stack, I turned a reliability issue into a data‑driven optimization, aligning with Amazon’s *Customer Obsession* and *Ownership* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
