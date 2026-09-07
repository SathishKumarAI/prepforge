---
qid: ing_602d33da70__aws__local
question: 'Explain: F8: Eval runner queue saturation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 501
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:03:13-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the **Eval Runner** pipeline for a large AI‑model training platform. The nightly batch of 3 000 evaluation jobs began to hit queue saturation, causing 35 % of pipelines to time‑out and a 12 % drop in model release velocity.

**Task (T)**  
I was tasked with redesigning the gated CI/CD flow so that every new commit could be evaluated within 30 minutes while keeping cost < $200/day.

**Action (A)**  

1. **Dive Deep into Metrics** – Collected per‑job latency, queue depth, and resource utilisation from CloudWatch Logs.  
2. **Design a Scalable Queue** – Switched to an **Amazon SQS FIFO** with message groups keyed by model version; added **SQS Long Polling** (20 s) to reduce empty receives.  
3. **Dynamic Compute Scaling** – Deployed **ECS Fargate Spot** tasks behind an **Application Load Balancer** that triggers new tasks when the queue depth exceeds 500 messages. Spot pricing cut compute cost by 40 %.  
4. **Gated CI/CD Hook** – Integrated a **GitHub Action** that waits for the *Eval* stage to finish via the SQS `VisibilityTimeout`. If any job fails, the PR is automatically blocked and an SNS notification sent.  

5. **Cost & Availability Optimisation** – Used **AWS Cost Explorer** alerts; set up **Auto Scaling policies** with a cooldown of 2 min to avoid thrashing.

**Result (R)**  
Queue saturation dropped from 90 % to < 10 %. End‑to‑end evaluation time fell from 1 h 30 min to 18 min, boosting release velocity by **28 %**. Daily cost stayed under $180 while maintaining 99.9 % availability.

> **Leadership Principles**: *Ownership* (took full responsibility for the pipeline), *Dive Deep* (root‑cause analysis and metric‑driven decisions), *Bias for Action* (implemented spot scaling quickly).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
