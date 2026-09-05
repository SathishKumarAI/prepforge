---
qid: ing_8c9e064e74__star__local
question: 'Explain: This is especially effective with a CDN — What Is A CDN? How Does
  It Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 347
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:01-05:00'
sources: []
---

**Situation** – While launching our real‑time fraud detection platform, we had to serve a global user base with sub‑100 ms latency for the feature extraction API that fed into a lightweight XGBoost model. The initial deployment on a single data center caused 35% of requests to time out during peak hours.

**Task** – Reduce inference latency and increase availability across continents while keeping cost under $5k/month.

**Action** – I introduced a Content Delivery Network (CDN) as an edge cache for the static feature set and model artefacts. Using Cloudflare Workers, we proxied API calls to regional origins; the CDN stored serialized feature vectors in KV storage so that subsequent requests hit the edge instead of the origin. We also configured a “stale‑while‑revalidate” policy to keep stale data fresh without blocking traffic. The CDN automatically handled TLS termination and DDoS protection, freeing our backend to focus on inference.

**Result** – Latency dropped from 350 ms to 75 ms globally, and the request failure rate fell below 0.1%. Traffic was balanced across 15 edge nodes, cutting origin load by 60% and keeping costs within budget. I learned that a CDN can be leveraged not just for static assets but as a low‑latency cache layer for ML feature pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
