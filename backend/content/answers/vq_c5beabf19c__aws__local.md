---
qid: vq_c5beabf19c__aws__local
question: Do you follow a specific fitness routine?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 404
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:13:30-05:00'
sources: []
---

**Situation (S)** – When I joined my previous company, the engineering team was struggling to keep developers engaged in their personal well‑being. We had a **30 % drop in productivity** during peak sprint periods, and surveys showed only **12 %** of staff reported regular exercise.

**Task (T)** – As the lead for the “Wellness” sub‑team, I owned the challenge: design an internal fitness program that could be adopted by 70 % of engineers within six months while keeping costs under $0.50 per user/month.

**Action (A)**  
1. **Customer Obsession + Ownership** – I interviewed 120 employees to surface pain points, uncovering three key requirements: *flexibility*, *social motivation*, and *data feedback*.  
2. Built a lightweight web app on **AWS Amplify + DynamoDB** that syncs with wearables (Fitbit/Apple Health).  
3. Integrated **Amazon Pinpoint** for push notifications and **SNS** for team challenges, keeping latency <200 ms.  
4. Implemented a serverless analytics pipeline (**Lambda → SQS → Kinesis → Redshift**) to track engagement in real time.  
5. Deployed with **Auto Scaling Groups** and **ALB**, guaranteeing 99.9 % availability; the total cost stayed at $0.35/user/month.

**Result (R)** – Adoption hit **74 %** within four months, productivity increased by **18 %**, and employee‑reported stress dropped from 48 % to 23 %. The system now supports 5,000+ users with zero downtime, proving that a data‑driven, customer‑centric approach can deliver measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
