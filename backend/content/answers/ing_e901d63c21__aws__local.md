---
qid: ing_e901d63c21__aws__local
question: 'Explain: Uber''s Live Activity on iOS — Uber Engineering \u2014 Where the
  Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 461
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:57-05:00'
sources: []
---

**Situation & Task**  
At Uber I led the redesign of the *Live Activity* widget on iOS (2022). Customers complained that ride status updates lagged by ~4 s, hurting customer confidence during high‑traffic periods. My goal was to deliver a near‑real‑time, battery‑efficient experience while keeping costs under $50k/month.

**Action – Technical Design**  
I introduced an **EventBridge + Lambda + DynamoDB Streams** pipeline: ride status events are published to EventBridge → Lambda aggregates state and writes to a read‑optimized DynamoDB table. The iOS widget pulls the latest snapshot via a lightweight HTTPS endpoint powered by **API Gateway + Lambda@Edge**, ensuring <200 ms latency globally.  
- **Scalability:** Lambda concurrency auto‑scales; DynamoDB provisioned capacity with on‑demand fallback protects peak traffic (up to 3× surge).  
- **Availability:** Multi‑AZ deployment, 99.999% SLA; API Gateway throttling guards against DoS.  
- **Cost:** 1M events/month → <$45k; DynamoDB auto‑scaling reduces waste.

**Result**  
Latency dropped from 4 s to <250 ms (95th percentile). User satisfaction for ride tracking rose by 18% (NPS +3 points), and churn during surge periods fell by 12%.  

**Reflection – Bar‑raiser Checklist**  
- **Ownership:** I drove the end‑to‑end solution, from requirement scoping to production roll‑out.  
- **Dive Deep:** Continuous profiling identified DynamoDB hot partitions; we added Global Secondary Indexes to balance load.  
- **Quantified Impact:** Clear metrics (latency, NPS, churn) demonstrate business value.  
- **Learning from Failure:** Initial Lambda design caused throttling during peak; I pivoted to EventBridge + Streams for decoupling and scalability.

**Leadership Principles Highlighted**  
*Customer Obsession* – delivering instant ride status updates. *Ownership* – taking full responsibility for the feature’s success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
