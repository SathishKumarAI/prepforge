---
qid: ing_0f8622850c__star__local
question: 'Explain: What a CDN Does — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 354
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:22-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with launching a new recommendation engine that served real‑time personalized content to millions of users worldwide. Our initial prototype delivered model predictions from a single data center, and latency spikes during peak hours caused a 12 % drop in conversion rates.

**Task:**  
I needed to reduce end‑to‑end response time below 200 ms for 95 % of requests while keeping infrastructure costs under the quarterly budget.

**Action:**  
I designed a multi‑region CDN strategy:  
1. Deployed the inference API behind a Kubernetes cluster in three edge regions (US, EU, APAC).  
2. Configured an HTTP/2‑enabled reverse proxy that cached static model artifacts and warmed up GPU containers on demand.  
3. Integrated a content‑based routing layer that used GeoIP to route users to the nearest edge node, falling back to the origin if cache miss exceeded 50 ms.  
4. Implemented health checks and auto‑scaling via Prometheus metrics so the CDN could spin up additional replicas during traffic spikes.

**Result:**  
Latency dropped from an average of 1.2 s to 140 ms for 98 % of users, lifting conversions by 9 %. Operational costs fell by 18 % because edge caching reduced origin load. I learned that a well‑orchestrated CDN can turn a globally distributed ML service into a low‑latency product without over‑provisioning central resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
