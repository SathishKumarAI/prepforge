---
qid: ing_95883987ae__aws__local
question: 'Explain: Blue-Green Deployment — Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 373
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:49-05:00'
sources: []
---

**Answer – Blue‑Green Deployment (AWS)**  

*Leadership Principles:* **Ownership** + **Dive Deep**. I own the reliability of production ML pipelines and dive deep into every artifact that touches user data.

**Situation / Task**  
In my last role, we had a nightly retraining cycle for a recommendation model that served 2 M users daily. A single faulty deployment could freeze recommendations for hours, costing ~\$120k in lost revenue per day.

**Action**  
I designed a blue‑green strategy using **AWS SageMaker Endpoint Configs**, **CodePipeline**, and **CloudWatch Alarms**:

1. **Create two identical endpoint configurations (blue & green)**.  
2. Deploy the new model to the *inactive* configuration via CodePipeline, running automated unit tests + A/B traffic split (10 % test users) using **AWS Lambda** to adjust weighted routing in the **Elastic Load Balancer**.  
3. Run a **model‑score drift monitor**; if latency > 200 ms or accuracy drop > 2%, rollback automatically by re‑routing all traffic back to blue.  
4. Once metrics stabilize, promote green to production and delete old model.

**Result**  
Rollback rate dropped from 7% to <1%. Deployment time shrank from 3 h to 45 min, cutting downtime cost by **\$95k per month**.  

*Bar‑raiser note:* I showed ownership (end‑to‑end pipeline), deep technical dive (SageMaker + routing logic), quantified impact, and learned from an earlier failure where we lacked automated rollback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
