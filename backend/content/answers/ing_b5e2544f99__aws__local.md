---
qid: ing_b5e2544f99__aws__local
question: 'Q16: How do you handle long-running agent tasks?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 541
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:27-05:00'
sources: []
---

**Situation & Task**  
At my previous company we launched an AI‑driven recommendation agent that ran nightly batch jobs to ingest 2 TB of user logs and generate personalized models. The tasks often exceeded the default Lambda timeout (15 min), causing failures in our CI pipeline.

**Action**  
I architected a **serverless workflow** using **Amazon Step Functions**, **SQS**, and **AWS Batch**:

1. **Step Functions** orchestrates stateful retries, timeouts, and parallel execution of sub‑tasks.  
2. Each step sends a message to an **SQS FIFO queue**; the queue’s *visibility timeout* is set to 30 min so workers can pause without losing work.  
3. Workers are **ECS Fargate tasks** (or Batch jobs) that run until completion, reporting status back to Step Functions via callback.  
4. We store intermediate checkpoints in **DynamoDB**, enabling *exact‑once* processing and quick resumption after a failure.  
5. CloudWatch metrics feed into an automated **SNS alert** if a task exceeds 90 % of the allocated time.

**Result**  
The new pipeline reduced job failures from **42 % to <2 %** and cut total run time by **35 %** (from 4 h to 2.6 h). Cost dropped 18 % because we avoided unnecessary Lambda warm‑up overhead.

**Reflection & Bar‑raiser cues**  
*Ownership*: I took full responsibility for the end‑to‑end flow, including post‑mortem analysis of every failure.  
*Dive Deep*: We instrumented each step to capture latency and error patterns, then used those insights to tune queue visibility and batch size.  
*Quantified Impact*: 42 % → <2 % failures; 35 % runtime reduction; 18 % cost savings.  
*Learning from Failure*: The first iteration had a hard‑coded timeout that caused data loss. We learned to persist state before exiting, turning an error into a design principle for resilience.  

**Leadership Principles Anchored**: **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
