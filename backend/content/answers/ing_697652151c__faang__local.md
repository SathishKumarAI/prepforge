---
qid: ing_697652151c__faang__local
question: Ready to build? — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 444
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:48:40-05:00'
sources: []
---

**Clarify**  
The interview asks whether you’re ready to build an ML system for Uber’s “Digital‑to‑Physical” platform (e.g., ride matching, ETA prediction). Confirm assumptions: data volume (~10M trips/day), latency (<200 ms per request), high availability (99.9%), and compliance with privacy laws. Ask if the goal is batch training, online learning, or both.

**Approach**  
1. **Data pipeline** – ingest real‑time trip logs, historical GPS traces, weather, traffic.  
2. **Feature store** – precompute static features (driver rating, vehicle type) and streaming features (current queue length).  
3. **Modeling** – use a gradient‑boosted tree for ETA; a neural net for demand forecasting.  
4. **Training** – nightly batch with A/B‑tested hyperparameters; online drift detection to trigger retraining.  
5. **Serving** – deploy via gRPC on Kubernetes, cache predictions in Redis for sub‑ms latency.  
6. **Monitoring** – track MAPE, latency histograms, and model confidence; alert if performance degrades.

**Depth**  
- *Complexity*: Training O(N log N) per epoch; inference O(1).  
- *Trade‑offs*: GBMs are faster to train but less flexible than deep nets; choose based on feature cardinality.  
- *Scalability*: Use sharded feature store, model versioning with Canary releases.

**Edge Cases**  
- Sudden traffic spikes (e.g., events) → fallback to simple heuristic.  
- Missing sensor data → impute or use fallback models.  
- Privacy violations → enforce differential privacy on user features.

**Optimize & Communicate**  
Start with a minimal viable model, measure ROI, then iterate. Explain decisions in terms of latency budgets, cost per inference, and business impact (e.g., reducing wait time by 10 % increases revenue). This narrative shows structured thinking, technical depth, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
