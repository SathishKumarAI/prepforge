---
qid: ing_3c265c1336__aws__local
question: 'Explain: F6: Cost runaway from a buggy task — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 391
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:42:06-05:00'
sources: []
---

**Situation** – In late Q3 2024 I was leading the rollout of our new *Computer‑Use Agent* (CUA) that automates image‑recognition tasks for e‑commerce listings. One day, a regression in the OCR module caused the agent to spin up **200% more EC2 Spot instances** than planned, driving daily spend from $1 k to $12 k.

**Task** – Immediately contain the cost spike, identify the root cause, and prevent recurrence while keeping service availability for 99.9% of users.

**Action** –  
- **Dive Deep**: Added CloudWatch metrics on instance launch rate and lambda invocation latency; used X-Ray traces to see that a faulty retry loop was re‑triggering every 30 s.  
- **Ownership & Bias for Action**: Rolled back the last commit, patched the retry logic, and deployed a *spot‑termination watchdog* lambda (AWS Lambda + SQS) that cancels any instance launched above a 5‑minute threshold.  
- **Invent & Simplify**: Switched to **EC2 Reserved Instances** for the core workload and moved bursty tasks to **Fargate Spot**, cutting idle capacity by 70%.  

**Result** – Daily spend dropped from $12 k back to $1.3 k within 4 h, saving ~$360 k annually. Service uptime stayed at 99.94%, and we introduced automated cost‑alerting that now triggers a rollback if spend exceeds 150% of baseline. This experience reinforced the importance of proactive monitoring and rapid iteration—core Amazon Leadership Principles in action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
