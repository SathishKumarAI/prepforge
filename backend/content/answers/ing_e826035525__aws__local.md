---
qid: ing_e826035525__aws__local
question: 'Explain: It then gets converted into a lat/long — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 401
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:18-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data‑Science team at a fintech startup, we were asked to expose a “real‑time risk score” API that required converting user‑submitted addresses into GPS coordinates for fraud detection. The existing solution was a slow, in‑house geocoder that stalled our latency SLA (400 ms → 1 s) and cost us ~$30k/month.

**Action**  
I took full ownership: I scoped the problem with *Dive Deep* by profiling the current pipeline, then designed a stateless microservice on **AWS Lambda** triggered by API Gateway. The Lambda uses **Amazon Location Service** (Geocode API) to translate addresses into lat/long, and caches recent results in **DynamoDB Accelerator (DAX)** for sub‑10 ms reads. To meet our 99.9% availability target I deployed the service across two AZs with an ALB and leveraged Lambda’s *Provisioned Concurrency* for burst traffic.

**Result**  
Latency dropped from ~1 s to **350 ms** (70% improvement), cost fell from $30k to **$4k/month**, and we achieved a 99.98% uptime during the first six months of production. The change also reduced our engineering hours by 35 %, freeing the team to focus on new ML features.

**Bar‑raiser takeaways**  
- Demonstrated *Ownership* by leading end‑to‑end redesign.  
- Showed *Dive Deep* with performance profiling and cost analysis.  
- Quantified impact (latency, cost, uptime).  
- Learned from a failed prototype that used an outdated API; pivoted to AWS’s managed service to avoid vendor lock‑in.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
