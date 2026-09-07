---
qid: ing_62d05bcdcf__aws__local
question: 'Explain: 94: Break Into Serverless Architecture — Serverless Architecture
  - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 438
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:45-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I was tasked to migrate a monolithic recommendation engine that served millions of users per day to a more elastic architecture. The existing service hit capacity limits during peak holidays and incurred high idle costs.

**Action (A)**  
I broke the system into **serverless micro‑services**:  
- **Event ingestion** – Amazon Kinesis Firehose streams raw click data to S3, then triggers an **AWS Lambda** function.  
- **Feature enrichment** – Lambda reads from DynamoDB, enriches with user profile data, and writes back to a new S3 bucket.  
- **Model inference** – A second Lambda invokes a pre‑trained SageMaker endpoint (TensorFlow model) for real‑time scoring; results are stored in an Amazon RDS Aurora Serverless DB.  
- **A/B testing & analytics** – AWS Step Functions orchestrate the workflow, while CloudWatch metrics feed into QuickSight dashboards.

I applied **“Invent & Simplify”** by eliminating manual batch jobs and “Ownership” by owning the full data‑pipeline from ingestion to scoring. I also used **AWS Cost Explorer** to model cost: pre‑serverless it was $15k/month; post‑migration, usage costs dropped 48% while latency improved from 1.2 s to 350 ms.

**Result (R)**  
The new architecture handled a 300 % traffic surge during Black Friday with zero downtime, and the recommendation accuracy improved by 7 % (AUC). I documented lessons learned—e.g., Lambda timeout misconfigurations caused 5 % of cold starts—and introduced automated health checks to avoid recurrence.

**Bar‑raiser takeaways**  
- Demonstrated *ownership* of end‑to‑end solution.  
- Deep dive into performance metrics and cost trade‑offs.  
- Quantified impact (cost savings, latency, accuracy).  
- Reflected on failure points and instituted preventive controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
