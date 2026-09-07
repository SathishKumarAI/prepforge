---
qid: vq_28aa5735fe__aws__local
question: What does the five-number summary mean in Statistics?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 406
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:03-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles – Ownership, Dive Deep)**  
When I joined the analytics team at a fintech startup, we were asked to explain the five‑number summary to stakeholders who had never worked with statistical summaries before. My goal was to deliver a clear, data‑driven explanation that would help them make better risk decisions.

**Action (Bias for Action, Invent & Simplify)**  
I first mapped each statistic to a business metric:  
1️⃣ *Minimum* → worst‑case loss per transaction.  
2️⃣ *First Quartile (Q1)* → 25 % of transactions below this threshold.  
3️⃣ *Median* → typical daily exposure.  
4️⃣ *Third Quartile (Q3)* → upper quartile risk.  
5️⃣ *Maximum* → extreme outlier that could trigger a policy review.  

I created an interactive dashboard on **Amazon QuickSight** and automated the calculation pipeline with **AWS Glue** jobs scheduled by **EventBridge**, storing raw logs in **S3** and metadata in **Glue Data Catalog**. This architecture scales to millions of daily records, offers 99.99 % availability via multi‑AZ deployments, and keeps costs under $1K/month.

**Result (Deliver Results)**  
Within two weeks, the risk team used the dashboard to adjust limits, reducing potential losses by 12 % during a high‑volatility period. The KPI was a 0.6 log‑likelihood improvement in our loss distribution model—directly tied to the five‑number summary’s clarity.

**Reflection (Learn from Failure)**  
Initially I over‑engineered the pipeline, causing lag on peak loads. After reviewing CloudWatch metrics, I simplified by moving heavy transformations into **AWS Lambda**, cutting latency by 70 % and saving $300/month.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
