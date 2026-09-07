---
qid: ing_ebe900fd17__aws__local
question: 'Explain: Interview Structure — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 384
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:04-05:00'
sources: []
---

**Situation & Task**  
During my interview for a Senior ML Engineer role at AWS I was asked to design a *mobile‑based recommendation system* that could serve personalized content to millions of users with sub‑second latency.

**Action – Technical Design**  
I scoped the requirements: real‑time inference, 10 M daily active users (DAU), <50 ms latency, and 99.9 % availability.  
1. **Feature Store** – Amazon DynamoDB + AppSync for fast user profile retrieval.  
2. **Model Serving** – SageMaker endpoints behind an Application Load Balancer; autoscaling based on CloudWatch CPU metrics ensures cost‑efficiency during off‑peak hours.  
3. **Edge Caching** – CloudFront with Lambda@Edge pre‑computes top 10 recommendations per region, cutting round‑trip time to the mobile app.  
4. **Observability** – CloudWatch Alarms + XRay trace every request; data fed into an Athena query for post‑mortem analysis.

I ran a **performance simulation** (10 k concurrent users) and achieved 45 ms average latency, 99.7 % success rate—meeting the spec while keeping estimated monthly cost at $12K vs $18K for a monolithic solution.

**Result**  
The interview panel was impressed: I received an immediate offer. My design demonstrated *Ownership* (end‑to‑end responsibility) and *Dive Deep* (metrics‑driven trade‑offs).  

**Bar‑raiser takeaway** – They look for quantified impact, clear ownership, and a willingness to iterate based on data—exactly what my solution showcased.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
