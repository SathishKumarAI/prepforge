---
qid: ing_2f923913fb__aws__local
question: 'Explain: They are NOT the same — Concurrency vs Parallelism - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 501
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:13:04-05:00'
sources: []
---

**Situation (S)**  
I led a migration of our recommendation engine from a monolithic Java app to a serverless pipeline on AWS. The team repeatedly conflated *concurrency* and *parallelism*, causing mis‑estimated budgets and SLA breaches.

**Task (T)**  
Demonstrate the technical distinction, quantify its impact, and redesign the architecture so each concept is used appropriately.

**Action (A)**  
1. **Dive Deep into Metrics** – Instrumented the old JVM with `jstat` and collected 30 days of CPU/IO profiles. Found that 70 % of latency spikes were due to *concurrency* limits on a single thread pool, not parallel execution.  
2. **Redesign** –  
   * **Concurrency**: Deployed an **AWS Lambda@Edge** layer that throttles concurrent invocations via API Gateway’s `ConcurrentExecutions` quota and a DynamoDB “lock” table to enforce max 200 active requests per region.  
   * **Parallelism**: Used **Amazon Step Functions** with the `Map` state to spawn up to 1,000 parallel child Lambda functions for batch feature extraction. Each child runs on an **ECS Fargate** task (2 vCPU) to guarantee compute isolation.  
3. **Cost/Scalability Trade‑offs** – The new design reduced peak CPU usage from 85 % to 35 %, cut cold start latency by 40 %, and lowered monthly spend from $12k to $8.5k while maintaining 99.9 % availability.

**Result (R)**  
- **Customer Obsession**: Latency dropped from 1.2 s to 0.7 s, improving conversion by 3 %.  
- **Ownership & Deliver Results**: Delivered the refactor two weeks ahead of schedule and saved $3.5k/month.  
- **Learning from Failure**: Documented a “Concurrency vs Parallelism” playbook that now guides all new ML pipelines.

> *Bar‑raiser cue*: Clear ownership, depth in metrics, quantified business impact, and proactive learning documentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
