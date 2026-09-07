---
qid: ing_b6fb431481__aws__local
question: 'Explain: User Categories — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 432
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:46-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a data‑science team that built a recommendation engine for a multi‑platform social network (Facebook + Instagram). The business asked us to segment users into *content*, *interaction* and *growth* categories so the ML pipeline could tailor feed ranking per persona.  

**Action**  
1. **Feature engineering**: I wrote Spark jobs on EMR to aggregate 3 TB of clickstream logs, producing a feature set (daily posts, likes, time‑spent).  
2. **Modeling & evaluation**: Using SageMaker we trained a LightGBM model that classified users with 92 % precision and 88 % recall; the lift in engagement was +14 %.  
3. **Deployment**: The pipeline is containerised (ECS) and served via API Gateway, scaling to 50k requests/sec with <10 ms latency.  
4. **Observability**: CloudWatch dashboards track drift; we auto‑retrain every 24 h, cutting churn by 3 %.  

**Result**  
The segmentation reduced irrelevant content pushes by 27 %, increasing average session time from 5.2 min to 6.1 min and ad revenue per user by $0.12/month.

**Leadership Principles**  
- **Customer Obsession** – we measured real‑world engagement to validate the impact.  
- **Ownership & Dive Deep** – I owned the end‑to‑end stack, from data ingestion to model monitoring, and performed root‑cause analysis when drift occurred.  

Bar‑raisers look for clear ownership, depth in technical choices (EMR vs Athena, SageMaker vs custom), quantified business outcomes, and a learning loop that turns failure into improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
