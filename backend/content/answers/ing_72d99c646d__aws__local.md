---
qid: ing_72d99c646d__aws__local
question: 'Explain: Coordinator — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 395
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:19-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of our on‑prem batch ML pipeline that was stuck in a single‑node scheduler (Cron + Airflow). The queue grew to > 10 k jobs/day and latency hit 3 hrs, hurting model freshness for downstream recommendation services.

**Action**  
I architected a *distributed job scheduler* using **Amazon ECS + Fargate**, **AWS Step Functions**, and **EventBridge**.  
1. **Ingestion:** EventBridge captures job metadata (dataset version, target model) and triggers a Step Function workflow.  
2. **Orchestration:** The state machine dynamically spawns parallel ECS tasks per data shard, leveraging *ECS task placement strategies* for even load distribution.  
3. **Resilience:** Each task writes its status to DynamoDB; Step Functions auto‑retry on transient failures and dead‑letter queue jobs that exceed 5 attempts.  
4. **Observability:** CloudWatch metrics + X-Ray traces surface bottlenecks, while an SNS topic alerts ops when job latency > 30 min.

**Result**  
- Reduced average end‑to‑end latency from 3 hrs to **15 min** (80 % cut).  
- Increased throughput by **4×**, enabling daily retraining of 12 ML models instead of 3.  
- Cost stayed within budget because Fargate scales on demand and we avoided overprovisioning EC2 instances.

**Reflection / Learning**  
I owned the migration, dug deep into AWS pricing tiers to optimize cost/latency trade‑offs, and iterated quickly—publishing a post‑mortem that informed future data‑pipeline decisions. This showcases **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
