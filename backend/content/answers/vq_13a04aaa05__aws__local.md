---
qid: vq_13a04aaa05__aws__local
question: How do you maintain a healthy diet?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 384
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:47-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In 2023 I was hired as a nutrition coach for a Fortune‑500 wellness program that served 12 000 employees across three continents. The goal was to reduce average daily calorie intake by 10 % while keeping employee engagement above 80 %.  

**Action (Dive Deep & Ownership)**  
I treated the diet plan like an event‑driven system:  
* **Data ingestion** – built a lightweight mobile app that logged meals via AWS AppSync, storing entries in DynamoDB.  
* **Analytics** – scheduled nightly Lambda functions to aggregate daily intake, compute personal baselines, and surface trends with Amazon QuickSight dashboards for both employees and HR.  
* **Personalization engine** – used SageMaker to train a recommendation model (≈ 10 M rows of historical data) that suggested balanced meals based on caloric goals and preferences.  
* **Feedback loop** – every Friday, automated email alerts (SES) nudged users toward healthier choices; if engagement fell below 70 %, the system triggered a coach‑review workflow.

**Result (Deliver Results)**  
Within six months:  
* Average daily calories dropped from 2 300 to 2 070 (≈ 10 % reduction).  
* Engagement rose to 87 %.  
* Cost per user decreased by 15 % thanks to serverless scaling.  

I learned that treating nutrition as a data‑centric, self‑serving system empowers users while keeping the organization lean—exactly what Amazon values in its Customer Obsession and Ownership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
