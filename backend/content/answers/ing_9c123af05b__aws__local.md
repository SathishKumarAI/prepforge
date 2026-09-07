---
qid: ing_9c123af05b__aws__local
question: 'Explain: This can work for a small project — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 512
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:43-05:00'
sources: []
---

**Situation & Task**  
I was tasked with launching an internal “Python ML Starter” course for 120 junior data scientists in Q3 2024. The goal: reduce onboarding time from **8 weeks to 2 weeks** while keeping error rates below 5 % on the first project.

**Action – Technical Design**  
* **Infrastructure** – Built a serverless learning platform with **AWS Amplify** (frontend) + **API Gateway + Lambda** (backend). Each lesson stored in **S3**; student progress tracked via **DynamoDB**.  
* **ML Sandbox** – Provisioned a **managed SageMaker Studio** notebook per cohort, auto‑scaling to 0–10 GB GPU instances (p2.xlarge) with spot pricing, capped at $1.20/hr.  
* **Analytics & Feedback** – Integrated **Amazon CloudWatch + QuickSight** dashboards that surface quiz scores and time‑to‑completion in real time; alerts trigger when metrics drift >10 %.  

*Key trade‑offs:*  
- *Scalability*: Serverless removes capacity planning, but Lambda’s 15‑min timeout required breaking long data‑prep steps into smaller jobs.  
- *Availability*: Multi‑AZ S3 and DynamoDB guarantee 99.99 % uptime; SageMaker Studio uses built‑in HA.  
- *Cost*: Spot instances saved ~35 % vs on‑demand, while Amplify’s free tier covered 90 % of frontend traffic.

**Result**  
* Onboarding time dropped from **8 to 2 weeks** (75 % reduction).  
* First‑project error rate fell to **3.7 %**, below the 5 % threshold.  
* Total infrastructure cost: **$3,200/month** versus an estimated $10,500 if a traditional VM farm was used.

**Reflection & Ownership**  
I *owned* the project end‑to‑end, from requirements gathering to post‑launch A/B testing of quiz formats. The iterative data loop (CloudWatch → QuickSight → course tweaks) exemplifies **Dive Deep** and **Bias for Action**. Learning from a failed attempt with on‑prem GPUs taught me to prioritize elasticity, directly influencing the cost savings above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
