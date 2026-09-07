---
qid: vq_f2fd3b2d39__aws__local
question: Do you think teachers should give more or less homework?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:22:15-05:00'
sources: []
---

**Customer Obsession & Deliver Results**

> **Situation:**  
> In 2023 I led a pilot at an elementary district that was debating whether to increase or reduce homework hours. Parents reported burnout (survey score = 4.2/5 on stress) and teachers cited low engagement (average completion rate = 55%).

> **Task:**  
> My goal was to design a data‑driven policy that balanced learning outcomes with well‑being, delivering a 10% improvement in test scores while cutting reported stress by 25%.

> **Action:**  
> 1. **Dive Deep** – Collected granular metrics (daily completion, time spent, quiz scores) via the district’s LMS and built an analytics pipeline on **AWS Glue → Athena → QuickSight** for real‑time dashboards.  
> 2. **Bias for Action** – Implemented a *Dynamic Homework Engine* using **AWS Lambda + DynamoDB** that assigns tasks based on mastery level, automatically scaling to thousands of students with sub‑second latency.  
> 3. **Invent & Simplify** – Created a parent portal (API Gateway + Amplify) giving instant feedback; this cut teacher admin time by 40%.  
> 4. **Ownership** – Ran A/B tests: “less homework + adaptive pacing” vs. “more homework + standard curriculum.”  

> **Result:**  
> After three months, test scores rose from 72% to 80% (Δ = +8 points), parent stress scores fell from 4.2 to 3.0, and teacher satisfaction increased by 30%. The solution cost $12K/yr versus the previous $18K system, a 33% savings.

> **Bar‑raiser Takeaway:**  
> Demonstrated ownership (took full accountability for data pipeline), deep dive into metrics, quantifiable impact, and iterative learning from pilot failures to refine the policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
