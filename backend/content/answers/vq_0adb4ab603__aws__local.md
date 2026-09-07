---
qid: vq_0adb4ab603__aws__local
question: Fig. 2 –How to answer a coding question?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 512
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:11-05:00'
sources: []
---

**Situation & Task**  
I was interviewing for an ML Engineer role at AWS and the interviewer presented a white‑board problem (Fig. 2) asking me to design a real‑time recommendation pipeline that scales to millions of users while keeping latency < 100 ms.  

**Action**  
1. **Clarify requirements** – I asked about data freshness, feature set, model type, and SLA for failure.  
2. **High‑level architecture**  
   - **Data ingestion**: Kinesis Data Streams → Lambda → S3 (raw) + DynamoDB (feature store).  
   - **Feature engineering**: Glue ETL jobs to enrich with user/item metadata; results cached in ElastiCache Redis for sub‑ms access.  
   - **Model inference**: SageMaker Endpoint deployed behind an Application Load Balancer, autoscaled based on CloudWatch metrics. I chose a *LightGBM* model (fast) and wrapped it in a container to reduce cold start.  
   - **Result delivery**: API Gateway → Lambda that queries Redis + SageMaker, aggregates top‑N, returns JSON.  
3. **Scalability & Availability** – Multi‑AZ deployment for Kinesis, DynamoDB global tables, Auto Scaling groups with health checks; use of Spot Instances for training to cut cost 30 %.  
4. **Cost trade‑offs** – I compared SageMaker real‑time endpoints vs. batch transform + CloudFront edge caching; settled on the endpoint because latency < 100 ms is non‑negotiable, even if it costs ~20 % more than batch.  

**Result**  
Implemented in 4 sprints: served 2 M daily active users with 95 % SLA, reduced recommendation latency from 350 ms to 70 ms, and cut inference cost by 18 % through spot usage.  

> **Leadership Principles**  
- *Ownership*: Took end‑to‑end responsibility for design, implementation, and monitoring.  
- *Dive Deep*: Quantified every component’s performance; iterated on model choice after profiling latency bottlenecks.  

Bar‑raiser notes: I showed ownership by driving the project to production, dove deep into metrics to justify architectural choices, quantified impact with real numbers, and reflected on a failed earlier attempt where we over‑engineered feature storage—learned to keep it simple and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
