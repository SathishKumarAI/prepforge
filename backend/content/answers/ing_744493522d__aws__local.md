---
qid: ing_744493522d__aws__local
question: 'Explain: Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 494
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:45-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
In my last role I was asked to build a real‑time recommendation engine for an e‑commerce platform that served 2 M active users daily. The existing batch‑based model delivered predictions every 6 hrs, causing stale recommendations and a 12 % drop in conversion during peak traffic.

**Action (Dive Deep + Bias for Action)**  
I redesigned the pipeline to be event‑driven:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Ingestion of click/transaction events | **Amazon Kinesis Data Streams** | Low‑latency, auto‑scaling ingestion. |
| Real‑time feature store | **DynamoDB with TTL** | 1 ms read latency, global tables for multi‑region availability. |
| Model inference | **SageMaker Endpoint (Multi‑Model)** + **AWS Lambda** | Serverless scaling to thousands of concurrent requests; cost per inference ~$0.0003. |
| Feature enrichment & training | **Glue ETL + SageMaker Processing Jobs** | Batch refresh every 30 min, autoscaling on CPU/GPU usage. |

I added a **canary deployment** in SageMaker and used **CloudWatch Alarms** to trigger rollback if latency > 200 ms or error rate > 1%. The system now handles 10× traffic spikes with <95 % of requests served within 150 ms, and the recommendation CTR increased from 3.2 % to 4.8 % (a **+50 % lift**). Costs dropped by 18 % thanks to Lambda’s pay‑per‑use model.

**Result & Learnings**  
- Demonstrated ownership by delivering a production‑ready, fully automated ML system that directly impacted revenue.  
- Dive deep into latency and cost trade‑offs led me to choose DynamoDB over RDS for sub‑ms reads.  
- Learned that continuous monitoring is as critical as model accuracy; the canary approach prevented a potential 5 % conversion loss during rollout.

**Bar‑raiser cues I met**: clear ownership, measurable impact (+50 % CTR), deep technical dive (service choices + trade‑offs), and iterative learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
