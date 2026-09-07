---
qid: ing_968c16740a__aws__local
question: Is there any over-reliance between services?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 419
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:24-05:00'
sources: []
---

**Situation / Task**  
While migrating a fraud‑detection pipeline to AWS, I discovered the team was tightly coupling SageMaker training jobs with Lambda functions that pulled data from S3, RDS and DynamoDB. Every change in one service forced redeploys of the others—an over‑reliance that threatened uptime and cost predictability.

**Action**  
1. **Decoupled** the data layer by moving ingestion to a *Kinesis Data Streams* buffer and storing raw events in an *S3 event‑driven* lifecycle.  
2. Created a *Step Functions* workflow that orchestrates: (a) Kinesis → Glue ETL → S3, (b) SageMaker training triggered via the **AWS SDK**, and (c) model deployment to **ECR** behind an **API Gateway**.  
3. Added **Amazon EventBridge** rules so each service publishes status events; downstream services subscribe independently.  
4. Instrumented metrics in CloudWatch (training duration, Lambda error rates) and set up a *Cost Explorer* report.

**Result**  
- Reduced deployment time from 2 hrs to <30 min (∼75% faster).  
- Cut operational cost by 28 % by eliminating unnecessary Lambda invocations.  
- Achieved 99.95 % availability for the fraud model API with independent scaling of each component.

**Reflection**  
Ownership: I owned the end‑to‑end pipeline and drove cross‑team alignment.  
Dive Deep: By instrumenting every step, I quantified bottlenecks and iterated quickly.  
Learning: The initial coupling taught me that *service independence* is a scalability “bar‑raiser” – it protects against cascading failures and enables cost‑efficient scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
