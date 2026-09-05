---
qid: ing_145873f59b__fp__local
question: 'Explain: Notification flow — Smart alerts in ThirdEye, LinkedIn\u2019s
  real-time monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 418
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:48:35-05:00'
sources: []
---

**Why a “smart alert” must be a *probabilistic causal cascade* rather than a rule‑based flag**

At its core, ThirdEye monitors billions of metrics that drift jointly under non‑stationary workloads. A naive threshold would fire on every spike, drowning operators in noise; a hard rule would miss subtle dependencies.  
The system therefore casts alerting as *online inference*: for each metric \(x_t\) we maintain a Bayesian posterior over its latent state \(\theta_t\). An event is declared when the probability that \(\theta_t\) has crossed an anomaly boundary exceeds a calibrated threshold.  

**Notification flow**

1. **Data ingestion & feature extraction** – raw counters are normalized, seasonality removed and fed into a lightweight streaming model (e.g., Kalman filter or Gaussian Process).  
2. **Probabilistic inference** – the model updates \(\Pr(\theta_t | x_{1:t})\) incrementally; if the posterior mass outside the nominal region > \(p_{\text{alert}}\), an *alert candidate* is generated.  
3. **Causal enrichment** – the candidate is cross‑checked against a learned dependency graph (e.g., Bayesian network). Only if the joint likelihood of the candidate and its parent anomalies exceeds a second threshold does it become a *smart alert*.  
4. **Notification & context delivery** – the alert packet carries causal chain, confidence score, and suggested remedial actions, then pushes to the LinkedIn ops console via WebSocket.  

**Non‑obvious insight:** The *causal enrichment* step turns an alert from a binary flag into a *probabilistic evidence bundle*. By requiring joint plausibility, ThirdEye suppresses “blow‑ups” of marginally anomalous metrics that would otherwise trigger cascades, while still delivering high‑impact alerts with minimal latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
