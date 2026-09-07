---
qid: ing_71361cd1bb__aws__local
question: 'Explain: System Design: Content Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 395
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:33-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to build an internal CDN for our machine‑learning model artifacts that needed **99.9 % availability** and sub‑100 ms latency for 10⁶ daily requests.

**Action**  
*Customer Obsession & Ownership*: I mapped user journeys, identified peak traffic (≈4 k req/s) and defined SLAs.  
*Dive Deep & Bias for Action*: Chose **Amazon CloudFront + S3** for edge caching; used **AWS Lambda@Edge** to generate signed URLs on‑the‑fly, ensuring data security without a custom auth layer.  
Implemented a **multi‑region replication strategy** (US‑East 1 & EU‑West 2) with Route 53 latency routing, guaranteeing high availability across continents.  
*Invent & Simplify*: Replaced our monolithic cache invalidation script with an event‑driven **SNS → SQS → Lambda** pipeline that auto‑purges stale objects within 5 minutes of model updates.

**Result**  
- Latency dropped from 350 ms to 85 ms (−76 %) for global users.  
- Uptime hit **99.97 %**, exceeding the SLA by 0.07 %.  
- Operational cost reduced by **32 %** through automatic cache purging and region‑specific pricing.

**Reflection**  
The first deployment had a misconfigured cache key, causing stale model versions to serve for 12 hours. I instituted automated regression tests on cache keys and added a “canary” request path to catch such regressions early. This experience reinforced that true ownership means anticipating failure points and building safeguards before they surface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
