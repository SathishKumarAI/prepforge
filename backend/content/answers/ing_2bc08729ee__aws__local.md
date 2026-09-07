---
qid: ing_2bc08729ee__aws__local
question: 'Explain: if I want to be able to — The Many Meanings of Event-Driven Architecture
  \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 365
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:49-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning a legacy batch‑processing pipeline that ingested millions of customer events per day into an ML model for churn prediction. The existing system had 48 h turnaround times and produced stale predictions, hurting our retention metrics (10 % drop in engagement).

**Action**  
1. **Event‑driven design** – I mapped each raw event to a domain event (`CustomerClicked`, `PurchaseMade`) and published them to an **Amazon EventBridge** bus.  
2. **AWS Lambda** functions consumed the events, performed lightweight transformations, and stored them in **DynamoDB** (partition key: user‑id).  
3. **SQS + Step Functions** orchestrated a nightly batch that aggregates events per user, writes a feature vector to **Amazon S3**, triggers an **Amazon SageMaker** training job, and deploys the new model via **Endpoint Autoscaling**.  
4. I added **CloudWatch Alarms** on Lambda errors and SQS visibility timeouts, ensuring quick remediation.

**Result**  
- Prediction latency dropped from 48 h to <30 min.  
- Real‑time churn predictions increased conversion by **12 %**, saving $1.8 M annually.  
- Cost fell 35 % due to serverless compute and S3 lifecycle policies.  

**Learnings & Bar‑raiser cues**  
I took full ownership of the data pipeline, deeply understood event semantics (Dive Deep), and iterated quickly (Bias for Action). The measurable lift in revenue demonstrates impact, while automated monitoring shows my commitment to continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
