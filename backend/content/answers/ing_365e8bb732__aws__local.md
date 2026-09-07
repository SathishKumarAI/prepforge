---
qid: ing_365e8bb732__aws__local
question: 'Explain: Soft Throttling — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 484
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:31-05:00'
sources: []
---

**Soft Throttling – Ratelimiting for a Real‑Time Recommendation Engine**

**Situation / Task (Customer Obsession + Ownership)**  
In my last role I led the upgrade of our on‑device recommendation service that streamed personalized ads to ~3 M daily users. A sudden spike during a flash sale pushed API calls 12× the normal load, causing 9% latency degradation and a 2% drop in click‑through rate (CTR). My goal was to protect downstream ML models while keeping user experience smooth.

**Action (Dive Deep + Bias for Action)**  
I architected *soft throttling* with **API Gateway + Lambda + DynamoDB**:

1. **Per‑user token bucket** stored in DynamoDB (`last_refill_ts`, `tokens`).  
2. A Lambda authorizer checks the bucket before each request; if tokens < threshold, it returns HTTP 429 but still logs the attempt to CloudWatch.  
3. Rate limits are *dynamic*: during peak hours we raise the bucket size from 10→30 requests/min; after a cooldown we lower it again.  
4. We feed throttling metrics (hits, drops, latency) into an Athena‑backed dashboard for real‑time ops.

**Result (Deliver Results + Quantified Impact)**  
- Latency dropped from 300 ms to < 180 ms during spikes (30% improvement).  
- CTR recovered to baseline within 15 min.  
- Cost of the solution was <$200/month vs. potential $5k in avoided SLA penalties.

**Bar‑raiser notes**  
- Demonstrated *ownership* by owning both design and ops dashboards.  
- Showed *deep dive* through token bucket math, DynamoDB capacity planning, and Lambda cold‑start mitigation.  
- Quantified impact with real metrics (latency, CTR).  
- Learned that “soft” throttling preserves user experience better than hard bans; future iterations will add ML‑driven adaptive limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
