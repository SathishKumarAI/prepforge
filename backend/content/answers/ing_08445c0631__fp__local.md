---
qid: ing_08445c0631__fp__local
question: 'Explain: Alert preview — Smart alerts in ThirdEye, LinkedIn\u2019s real-time
  monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 482
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:23:16-05:00'
sources: []
---

**Smart Alerts in ThirdEye (LinkedIn’s real‑time monitoring platform)**  

ThirdEye addresses the *alert‑churn problem*: in a high‑velocity data pipeline, every anomalous datapoint could trigger an alert, yet only a tiny fraction truly require human intervention. The core objective is to **minimize expected cost**  
\[
C = \sum_{t} \bigl( c_{\text{miss}}\,P(\text{miss}\mid t) + c_{\text{false}}\,
P(\text{false}\mid t)\bigr),
\]  
where \(c_{\text{miss}}\) and \(c_{\text{false}}\) are domain‑specific costs.  

1. **Modeling the anomaly score**: For each metric, ThirdEye learns a probabilistic density \(p(x_t \mid \theta_t)\) using online Gaussian processes or autoregressive models that capture seasonal trends.  
2. **Adaptive thresholding**: Instead of a fixed percentile, it sets a dynamic threshold \(\tau_t\) solving  
   \[
   \tau_t = \arg\min_{\tau} \bigl(c_{\text{miss}}\Pr(x_t > \tau \mid p)+c_{\text{false}}\Pr(x_t \le\tau \mid p)\bigr),
   \]  
   effectively performing a Bayesian decision rule that changes with data drift.  
3. **Alert preview (contextual framing)**: The system attaches the *posterior* probability of an event being actionable, the expected downstream impact (e.g., number of users affected), and a short causal explanation derived from feature importance.  

**Non‑obvious insight:**  
Most alerts treat *precision* as the sole metric; ThirdEye’s formulation shows that **optimizing for expected cost naturally trades off precision against recall**. A high‑cost false positive can be tolerated if it dramatically reduces costly missed incidents, leading to a *non‑monotonic* relationship between threshold and performance—something overlooked by conventional ROC‑based tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
