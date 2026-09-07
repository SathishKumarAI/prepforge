---
qid: ing_cff8dac8c6__aws__local
question: 'Explain: Job Schedules — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 444
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:08-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built a **distributed job scheduler** for an ad‑tech platform that needed to run > 10 k batch jobs nightly while guaranteeing SLA of 99.9 % availability and < 5 min turnaround.

**Action**  
*Ownership & Dive Deep*: I scoped requirements, identified failure modes (node churn, data skew, back‑pressure), and designed a **leaderless architecture** using Amazon DynamoDB for job metadata + Amazon SQS FIFO queues per worker pool.  
*AWS services*:  
- **DynamoDB** (partition key = job_id) – fast, fully managed, auto‑scales;  
- **SQS FIFO** – preserves order, deduplication, throttles burst traffic;  
- **Lambda + ECS Fargate** workers – serverless scaling to 10× peak load with cost ≈ $0.0000167 per invocation;  
- **CloudWatch + XRay** for observability and automated retry logic.

*Bias for Action*: I prototyped a “heartbeat” mechanism that removes stalled jobs after 30 s, preventing deadlocks.  

**Result**  
Deployment reduced job failure rate from 3.5 % to < 0.2 % (≈ 95 % improvement) and cut average latency by 40 %. Cost savings were $12k/month vs the legacy on‑prem cluster. I documented a run‑book, trained ops, and set up automated rollback for any metric drift.

**Bar‑raiser takeaways**  
- Demonstrated **ownership** of end‑to‑end reliability.  
- Showed **dive deep** by modeling failure scenarios and tuning DynamoDB read/write capacities.  
- Quantified impact (latency, SLA, cost) and iterated from a failed pilot that taught me to add idempotent retries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
