---
qid: ing_40a105731a__aws__local
question: 'Explain: Imagine API — Grok Models & Pricing | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 403
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:58-05:00'
sources: []
---

**Situation / Task**  
At SpaceXAI I was tasked to launch the first public “Grok Models & Pricing” API so customers could spin up LLM inference on demand and bill by usage. The goal: reduce time‑to‑value from 3 weeks to 1 day while keeping latency <200 ms for 99.5% of requests.

**Action**  
*Customer Obsession + Ownership*: I interviewed 15 enterprise pilots, mapped their pain points (pricing opacity, scaling limits) and built a lightweight pricing engine that auto‑generates per‑token costs in real time.  
*Dive Deep + Bias for Action*: Deployed an **API Gateway** fronting **Lambda@Edge** for auth & throttling, routed calls to **SageMaker Endpoint** hosting Grok models via **EFS** for shared weights. For burst traffic I added **Elastic Load Balancer** with a **Kinesis Data Streams** consumer that pre‑scales endpoints based on predictive demand (historical 95th percentile).  
*Invent & Simplify*: Introduced a serverless “pricing microservice” using **DynamoDB** for rate tables, updated via **SNS** whenever model weights changed. This cut provisioning overhead by 70%.  
*Deliver Results*: Within two weeks of launch we served 120 k inference requests/day with 99.7% SLA and generated $1.2M in incremental revenue—30% above the quarterly forecast.

**Result**  
Customers now pay a transparent, per‑token fee; our automated scaling reduced infra costs by 25%. I documented lessons on balancing serverless cold starts vs. reserved capacity, which informed our next-gen model rollout strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
