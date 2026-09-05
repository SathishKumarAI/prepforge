---
qid: ing_8725d1fd6f__star__local
question: 'Explain: Uber Driver Allocation - Design Problem — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 376
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:44-05:00'
sources: []
---

**Situation** – In early 2023 I joined the Uber Mobility Ops team to tackle a surge in rider demand during peak hours. Our existing rule‑based allocation was causing long wait times (average 8 min) and low driver utilization (~60 %).  

**Task** – Design an end‑to‑end machine learning system that predicts each driver’s likelihood to accept a request, then matches riders to the most suitable drivers within a 5‑minute horizon while maximizing revenue and minimizing idle time.  

**Action** – I built a two‑stage pipeline:  
1) *Acceptance model* using XGBoost on features such as distance to rider, current trip duration, driver rating, and real‑time traffic. We trained on 10 M labeled rides, achieving 0.87 AUC.  
2) *Matching optimizer* implemented as a linear programming problem in Google OR‑Tools, incorporating the acceptance probabilities as weights and adding constraints for maximum detour distance (≤12 km). I deployed the model via Kubernetes, exposing an inference API that returns top‑10 driver candidates per request. Continuous A/B testing fed back feature importance to refine the model.  

**Result** – After 6 weeks of rollout, average rider wait time dropped from 8 min to 3.2 min (60 % reduction), driver utilization rose to 78 %, and revenue per mile increased by 12 %. I learned that blending probabilistic acceptance models with optimization constraints yields scalable, real‑time allocation that directly improves both customer experience and operator efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
