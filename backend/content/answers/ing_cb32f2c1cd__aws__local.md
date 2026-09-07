---
qid: ing_cb32f2c1cd__aws__local
question: 'Explain: Let me show you an example. Let''s — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 375
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:00:28-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a lightweight “Python Full Course” recommender for an online education platform that had ~200 k active users but only 10 % engaged with the ML‑driven course suggestions. My goal: lift engagement by 15 % in three months.

**Action (Technical)**  
*Data & Model*: Pulled user‑interaction logs from **Amazon S3**, cleaned them in **AWS Glue**, and used **scikit‑learn** to train a collaborative filtering model on the user–course matrix.  
*Serving*: Deployed the model as a stateless Lambda behind **API Gateway** so each request cost <$0.0002.  
*Scalability*: Leveraged **Amazon DynamoDB** for fast read/write of user profiles; auto‑scales with traffic.  
*Cost & Availability*: 100 % S3 durability, 99.9 % Lambda availability, and on‑demand pricing kept spend <$1k/month.

**Result**  
Within two weeks after rollout, course‑view engagement rose from 10 % to **27 %**, a **170 % lift** over baseline—exceeding the 15 % target. Monthly cost stayed under budget, and latency averaged 45 ms per request.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dove deep into data quality issues, quantified impact via A/B testing, and learned that simplifying the model to a lightweight matrix factorization saved both time and money. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**—the core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
