---
qid: ing_8fb6836943__star__local
question: 'Explain: If it''s a one-way, if it''s a — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 386
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:17-05:00'
sources: []
---

**Situation**  
In my last role at a mid‑size ride‑hailing startup, our real‑time route planner was stuck on a static shortest‑path algorithm. As traffic peaks grew, users reported delays of up to 8 % over the estimated arrival time.

**Task**  
I had to design an adaptive machine‑learning component that could predict travel times in near‑real‑time and adjust routes accordingly, all while keeping latency under 200 ms for each request.

**Action**  
I built a two‑stage system: first, a lightweight gradient‑boosted tree model (XGBoost) trained on historic GPS traces, weather, and event data to predict segment travel times. Second, I wrapped the predictions in a reinforcement‑learning policy network that chose alternative paths based on predicted delays and user preferences. The models were served via a TensorFlow Serving cluster behind an Envoy proxy; we used GPU‑accelerated inference for the policy net and cached predictions per road segment to avoid recomputation. We also added a fallback rule‑based system to guarantee service during model outages.

**Result**  
After deployment, average ETA accuracy improved from 92 % to 98 %, reducing user complaints by 35 %. Latency stayed below 180 ms on 95 % of requests. I learned how to balance complex ML models with strict real‑time constraints and the importance of a graceful degradation path in production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
