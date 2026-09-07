---
qid: ing_e11c22bcac__aws__local
question: 'Explain: Job Execution Table — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 388
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:27-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a **Distributed Job Execution Table** for an ML pipeline that needed to run hundreds of training jobs daily across multiple GPU clusters while guaranteeing SLA‑compliant completion and cost efficiency.

**Action**  
*Anchored on *Customer Obsession* (understand user latency & budget) and *Ownership* (own the end‑to‑end flow). I designed a **declarative job manifest** stored in **Amazon DynamoDB** with time‑based TTL for automatic cleanup.  
*Use **AWS Step Functions** as the orchestrator; each state triggers an **ECS Fargate task** or **AWS Batch** job, allowing fine‑grained retries and parallelism.  
*For scheduling, I leveraged a **Quartz‑style scheduler** implemented in a Lambda that polls DynamoDB for jobs with `next_run_time <= now`, writes to an SQS queue, and triggers the Step Function.  
*To guarantee high availability, I run the scheduler on **multiple Availability Zones** behind an ALB; all state is replicated via DynamoDB global tables.  
*Cost control: use Spot Instances for training tasks, with a fallback to On‑Demand if spot pricing spikes, monitored by CloudWatch metrics.  

**Result**  
Reduced job latency from 12 h to **3 h** (90% faster) and cut infrastructure spend by **35 %** in the first quarter. The system handled 5× more jobs with <1% failure rate. I documented a post‑mortem on a missed SLA, learned to add circuit‑breaker logic, and iterated the design—demonstrating *Dive Deep* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
