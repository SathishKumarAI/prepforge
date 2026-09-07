---
qid: ing_2a39283bfa__faang__local
question: 'Q120: Request-level model routing just went mainstream: one production
  router reports frontier quality at roughly 60% lower cost. Design the router. Where
  do the labels come from, and how do you avoid feedback loops?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 475
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:30-05:00'
sources: []
---

**Clarify**

We need a request‑level routing system that chooses a model for each incoming query.  
Assumptions to confirm:  

1. We have multiple candidate models (e.g., LLMs of varying size).  
2. Each model has an observable *frontier quality* metric (accuracy, latency, cost).  
3. Quality labels are derived from real‑time monitoring or offline evaluation.  
4. The router must avoid reinforcing its own predictions (feedback loops).

**Approach**

1. **Label acquisition** – use a *dual‑track* labeling pipeline:  
   - *Online*: per‑request confidence scores + A/B test rollouts.  
   - *Offline*: periodic ground‑truth evaluation on held‑out data.  
2. **Model selector** – maintain a lightweight policy (e.g., bandit or Thompson sampling) that maps request features to the best model based on recent frontier quality and cost estimates.  
3. **Feedback loop guard** – inject random exploration, cap self‑learning rates, and use *delayed* updates so predictions are not immediately reinforced.

**Depth**

- Store per‑model statistics in a distributed KV store (latency ≈ 1 ms).  
- Update frontier quality every 5 min: `Q = α * Q_old + (1−α) * observed_quality`.  
- Policy uses ε‑greedy: with probability ε choose a random model; otherwise pick argmax(quality/cost).  
- Complexity: O(1) routing per request, O(N_models) updates per interval.  

**Edge Cases**

- New models with no data → fall back to default or high‑confidence exploration.  
- Sudden quality drift (e.g., concept shift) → flagged by anomaly detection; triggers forced evaluation.  
- Label noise → use robust statistics (median instead of mean).

**Optimize & Communicate**

To improve cost, incorporate *cost-aware* weighting: `score = Q / C`.  
Explain that random exploration ensures fresh data and prevents the router from becoming a closed loop that only favors historically good models. This design keeps the routing decision lightweight while continuously learning frontier quality at ~60 % lower operational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
