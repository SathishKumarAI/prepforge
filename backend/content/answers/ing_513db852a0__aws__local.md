---
qid: ing_513db852a0__aws__local
question: 'Explain: Job Table — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 508
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:52-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous firm we had a monolithic batch engine that ran 200+ nightly jobs. A single node failure would bring the entire pipeline down and delay downstream analytics by up to 6 hrs—an unacceptable lag for our ad‑tech customers. I was tasked with designing a *distributed job scheduler* that could guarantee **99.9 % uptime** and scale to 10,000 concurrent jobs.

**Action (A)**  
I broke the problem into three layers:  
1. **Job Registry** – DynamoDB table (`job_id`, `cron_expr`, `payload`, `state`) with TTL for expired jobs.  
2. **Orchestration Engine** – a fleet of ECS Fargate tasks, each pulling ready jobs via a short‑lived SQS queue (visibility timeout 30 s).  
3. **Execution Workers** – AWS Lambda functions triggered by the engine; they run containers in ECR and report success/failure back to DynamoDB.

To meet *Availability* I enabled DynamoDB auto‑scaling, used Multi‑AZ RDS for audit logs, and set up CloudWatch alarms that trigger a Step Function fallback. For *Scalability*, the SQS queue can burst to 100k messages; Lambda concurrency is capped at 1,000 per region but we use reserved concurrency to avoid cold starts.

**Result (R)**  
After deployment:  
* Job failure rate dropped from **8 %** to **0.4 %**.  
* Mean time to recover (MTTR) fell from 6 hrs to **12 min**.  
* Cost decreased by **22 %** thanks to Fargate spot usage and Lambda’s pay‑per‑invocation model.

**Leadership Principles Highlighted**  
- **Ownership** – I drove the end‑to‑end solution, including post‑mortem analyses for every failure.  
- **Dive Deep** – I profiled each component (DynamoDB latency, Lambda execution time) to tune capacity and spot pricing thresholds.  

**Bar‑raiser takeaways**  
*Quantified impact*, *deep technical justification*, and a clear learning loop from the initial monolith failures were critical for success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
