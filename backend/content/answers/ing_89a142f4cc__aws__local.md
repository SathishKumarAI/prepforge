---
qid: ing_89a142f4cc__aws__local
question: 'Explain: Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 366
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:20-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional AI team, we were asked to standardize the way we describe and compare models for internal tooling. The goal was to reduce “model drift” conversations from 30 min to under 5 min per sprint.

**Action**  
I owned the effort, built a **Model Taxonomy** that grouped models by *Purpose*, *Data Domain*, *Inference Latency*, and *Training Cost*.  
* **Design** – A DynamoDB table keyed on `model_type` with attributes for each dimension; an API Gateway + Lambda layer to serve the taxonomy.  
* **AWS services** – DynamoDB (high‑throughput, 99.999% availability), API Gateway (TLS, throttling), Lambda (zero‑idle cost).  
* **Scalability & Cost** – The schema supports millions of entries; per‑request cost <$0.0001.  
* **Trade‑offs** – Chose NoSQL for flexibility over RDBMS; added a small caching layer (ElastiCache) to hit 99% reads within 2 ms.

**Result**  
Within two sprints, the taxonomy cut model‑review time by **84 %**, enabling us to ship 5 more features per quarter. The cost of the service was < $50/month versus a projected $1,200/quarter for manual reviews.  

*Leadership Principles:* **Ownership** (took end‑to‑end responsibility), **Dive Deep** (architected at data and infrastructure level), **Deliver Results** (quantified efficiency gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
