---
qid: ing_d51ead6770__think__local
question: 'Explain: AI Infrastructure Design — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 429
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:00:37-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Scope*: Focus on high‑level architecture for an ML platform (data ingestion, feature store, training, serving).  
- *Assumptions*: Team size, budget constraints, latency targets, data volume, compliance needs.

**2️⃣ Adopt a layered mental model**  
1. **Data Layer** – ingestion → storage → preprocessing.  
2. **Feature & Model Layer** – feature store, model registry, training pipelines.  
3. **Serving Layer** – inference endpoints, caching, monitoring.  
4. **Operational Layer** – CI/CD, security, observability.

**3️⃣ Step‑by‑step reasoning**  
- Start with *data flow*: how raw data arrives (batch vs stream), where it lands (S3/Blob), and how it's cleaned.  
- Move to *feature management*: decide between on‑the‑fly vs precomputed features; pick a feature store.  
- Design the *training pipeline*: model versioning, hyper‑parameter search, distributed training options.  
- Sketch *serving*: low‑latency endpoints (e.g., gRPC), autoscaling, request routing.  
- Add *ops* layers: metrics, logs, alerts, role‑based access.

**4️⃣ Avoid common traps**  
- Don’t ignore **data quality**; a robust pipeline is cheaper than debugging later.  
- Beware of “one‑size‑fits‑all” storage – choose cold vs hot tiers wisely.  
- Skip over *security* in early sketches; integrate IAM, encryption from the start.  

**5️⃣ Sanity‑check & communicate**  
- Verify that each layer satisfies the constraints (latency, cost).  
- Present a diagram: show data ingress → feature store → training → model registry → serving → user API.  
- Walk through an example request path to demonstrate latency budgets and failure handling.

This structured approach lets you build a coherent ML infrastructure design in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
