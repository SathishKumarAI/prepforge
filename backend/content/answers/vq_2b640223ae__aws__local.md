---
qid: vq_2b640223ae__aws__local
question: Do you live alone or with others? How does it feel?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 469
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:38-05:00'
sources: []
---

**S – Situation**  
When I moved from a shared apartment to an independent home at 28, I was suddenly responsible for every decision—budgeting, maintenance, and even my own “service level agreement” with myself.

**T – Task**  
I had to transition from a collaborative living environment to full ownership while keeping my quality of life high. My goal was to maintain or improve my productivity (measured by hours spent on professional development) and reduce stress (tracked via a weekly mood log).

**A – Action**  
1. **Ownership & Customer Obsession** – I treated my home as an “Amazon customer.” I set up a *Home‑Ops* dashboard in AWS CloudWatch, logging utility usage, maintenance requests, and daily energy consumption.  
2. **Dive Deep & Invent & Simplify** – Using Amazon RDS for the database of chores and S3 for static documentation, I automated reminders (SNS + Lambda) that sent me push notifications when a bill was due or a filter needed changing.  
3. **Bias for Action** – Within 48 h of moving, I re‑architected my weekly schedule: 2 hrs for learning, 1 hr for self‑maintenance, and 30 min buffer for unexpected tasks.

**R – Result**  
- Productivity increased by **18%** (from 15 to 18 hrs/week on skill building).  
- Stress scores dropped from an average of 7/10 to 4/10.  
- Utility costs were trimmed by **12%** through proactive monitoring and scheduling.

**Learnings & Bar‑raiser Notes**  
*Ownership*: I assumed full responsibility for both living and learning outcomes.  
*Dive Deep*: The data pipeline (CloudWatch → Lambda → SNS) gave me actionable insights.  
*Quantified Impact*: Clear, measurable improvements in productivity and cost.  
*Failure Reflection*: Early on, my notification system was too noisy; after iterating, I tuned thresholds to avoid alert fatigue—an example of learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
