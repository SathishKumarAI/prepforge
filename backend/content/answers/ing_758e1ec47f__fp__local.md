---
qid: ing_758e1ec47f__fp__local
question: 'Explain: Conclusion — Smart alerts in ThirdEye, LinkedIn\u2019s real-time
  monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 430
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:15:02-05:00'
sources: []
---

**Why ThirdEye’s “smart alerts” work**

The core problem is *real‑time anomaly detection* on billions of metric streams with a single user‑facing alert per incident.  
If we treat each stream \(x_t\) as a stochastic process, an anomaly occurs when the likelihood under the in‑state model falls below a threshold:

\[
P(x_{t:t+L}\mid \theta_{\text{normal}}) < \tau .
\]

Because raw likelihoods are noisy, ThirdEye first *regularises* them by pooling evidence across correlated metrics (e.g., latency and error rate).  This is equivalent to a Bayesian hierarchical model where shared latent variables capture the common drift; mathematically it shrinks individual likelihoods toward a global mean, reducing variance without biasing detection.

The threshold \(\tau\) is not hand‑tuned.  It is set by solving an **optimization problem** that maximises the *expected utility* of alerts:

\[
\tau^\ast = \arg\max_{\tau} \; \mathbb{E}\big[U(\text{TP},\text{FP})\big] ,
\]

where \(U\) encodes costs (downtime, alert fatigue).  This turns the alert‑generation into a principled *ROC* optimisation that adapts to changing traffic.

**Non‑obvious insight:**  
By modelling *temporal correlation* between metrics rather than treating each time stamp independently, ThirdEye captures subtle precursor patterns (e.g., a spike in request latency followed by an error surge).  This joint inference dramatically lowers false positives and allows the system to generate a single “smart” alert that aggregates evidence across many streams—exactly what LinkedIn’s real‑time monitoring needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
