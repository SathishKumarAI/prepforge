---
qid: ing_27e31e19f9__faang__local
question: You are swapping the model behind a live feature. Walk me through shadow,
  canary and A/B. When do you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 421
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:16:20-05:00'
sources: []
---

**Clarify**

You’re asked to explain *shadow*, *canary* and *A/B* deployments for a live ML feature.  
Assumptions: the model is already production‑ready, traffic can be split or duplicated, we have monitoring/alerting in place.

---

**Approach**

1. **Shadow (aka replay)** – run the new model on real traffic but never serve its predictions to users; compare outputs with the current model.  
2. **Canary** – route a small percentage of live traffic to the new model, gradually increasing that slice while monitoring key metrics.  
3. **A/B (split testing)** – simultaneously expose two models to distinct user groups and measure business‑critical outcomes.

---

**Depth**

- *Shadow*: ideal for debugging correctness, latency, and data drift before any user impact. Complexity: minimal routing changes; cost: running two inference pipelines.  
- *Canary*: reduces risk by exposing a controlled cohort; useful when latency or SLA concerns exist. Requires traffic‑splitting infrastructure (e.g., Envoy header weight).  
- *A/B*: best for validating business value (conversion, revenue) and user experience differences. Needs robust attribution logic to avoid cross‑contamination.

---

**Edge Cases**

- Shadow fails if the new model’s inference path differs in resource usage; monitor GPU/CPU spikes.  
- Canary can cause churn if users see inconsistent behavior; keep routing weight small initially.  
- A/B suffers from confounding variables—ensure randomization and sufficient sample size.

---

**Optimize & Communicate**

- Start with shadow to catch bugs, then deploy a canary for safety, finally run an A/B test for business metrics.  
- Present the pipeline in a diagram, emphasize monitoring thresholds, rollback triggers, and the cost‑benefit trade‑offs of each strategy.  

This structure shows clear reasoning, technical depth, and practical deployment considerations—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
