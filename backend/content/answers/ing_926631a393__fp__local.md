---
qid: ing_926631a393__fp__local
question: 'Explain: Detection flow — Smart alerts in ThirdEye, LinkedIn\u2019s real-time
  monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 465
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:16:35-05:00'
sources: []
---

**Detection Flow in ThirdEye’s Smart Alerts**

1. **Signal Acquisition**  
   Raw metrics (latency, error‑rate, throughput) arrive as a high‑velocity stream. The first principle is *information preservation*: every datum must be timestamped and keyed so that later inference can respect temporal order.

2. **Feature Engineering on the Fly**  
   From each metric we compute *statistical signatures*—mean, variance, percentiles—over sliding windows. These are not arbitrary; they correspond to sufficient statistics for a Gaussian‑like likelihood under the null hypothesis of normal operation. By keeping the feature set minimal, we avoid the curse of dimensionality and keep latency low.

3. **Model Inference (Anomaly Detection)**  
   A lightweight probabilistic model (e.g., Bayesian online changepoint detection) evaluates the likelihood that current observations deviate from learned priors. The key insight: *anomalies are events that reduce predictive entropy*—the system quantifies this reduction and flags it.

4. **Alert Ranking & Causality Graph**  
   Detected anomalies are propagated to a directed acyclic graph of dependencies (service → component → metric). Using Bayesian inference on the graph, ThirdEye assigns an *impact score* to each alert, prioritizing those that explain many downstream anomalies. This ranking is grounded in *information flow*: alerts with higher mutual information with system health receive higher priority.

5. **Smart Notification**  
   Finally, the platform throttles notifications using a reinforcement‑learning policy that balances false positives against missed incidents, learning from human feedback to adjust sensitivity over time.

---

### Non‑obvious Insight

Most alert systems treat each metric in isolation. ThirdEye’s *graph‑based causal ranking* leverages the fact that anomalies propagate along dependency edges; by modeling this propagation probabilistically, it can infer root causes with fewer false alarms—an optimization that would be invisible if you only looked at per‑metric statistics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
