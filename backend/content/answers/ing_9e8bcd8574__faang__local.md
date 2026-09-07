---
qid: ing_9e8bcd8574__faang__local
question: 'Explain: Uber Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 432
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:52:31-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of the machine‑learning stack that powers Uber’s core services (surge pricing, ETA prediction, driver‑passenger matching, fraud detection). Confirm whether they’re after *algorithmic ideas* or *system‑level design* and which sub‑domains (computer vision, reinforcement learning, etc.) to highlight.

**Approach**  
1. Map the end‑to‑end flow: data ingestion → feature engineering → model training → serving → monitoring.  
2. Pick two flagship pipelines (surge pricing & ETA) and describe the ML techniques used.  
3. Mention cross‑cutting concerns: scalability, latency, A/B testing, bias mitigation.

**Depth**  
- **Surge Pricing:** Gradient‑boosted decision trees (XGBoost) on aggregated demand/supply features; online learning with bandit algorithms to adapt in real time.  
- **ETA Prediction:** Sequence models—LSTM/Transformer on GPS trajectories plus graph‑based routing features; Bayesian calibration for uncertainty estimates.  
- **Matching & Dispatch:** Reinforcement‑learning agents (DDPG/PPO) that optimize multi‑objective rewards (wait time, driver earnings).  
- **Fraud Detection:** Ensemble of one‑class SVMs and autoencoders on behavioral graphs, with graph neural nets for ride‑network anomalies.

**Edge Cases**  
- Cold starts (new cities or drivers).  
- Adversarial manipulation of fare data.  
- Latency spikes during major events (holidays, sports).

**Optimize & Communicate**  
Suggest A/B‑driven online learning loops to reduce model drift, use Kubernetes + TensorRT for inference latency < 20 ms, and implement feature flagging for rapid rollback. Conclude by emphasizing the need for robust monitoring dashboards that surface bias metrics and SLA violations, ensuring the system scales to millions of concurrent requests while staying ethically sound.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
