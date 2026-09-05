---
qid: ing_1108c04f60__fp__local
question: 'Explain: How to detect concept drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 468
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:42:03-05:00'
sources: []
---

**Concept drift** is the phenomenon that the joint distribution \(P(X,Y)\) of input features \(X\) and target \(Y\) changes over time in a way that a model trained on past data no longer captures the current relationship.  
From an optimization viewpoint, training minimizes empirical risk
\[
R_{\text{train}} = \frac1n \sum_{i=1}^n L(f_\theta(x_i),y_i).
\]
When \(P_{\text{test}}\neq P_{\text{train}}\), the expected loss under the test distribution,
\(R_{\text{test}}=\mathbb E_{(X,Y)\sim P_{\text{test}}}[L(\cdot)]\),
increases. The fundamental problem is that we cannot observe \(P_{\text{test}}\) directly; we only see a stream of new samples.

**Detection strategy**

1. **Statistical monitoring** – compute a test statistic (e.g., Kolmogorov–Smirnov distance, KL divergence, or Hellinger distance) between the feature distribution of a sliding window and that of a reference window.  
2. **Performance degradation** – track a rolling metric (accuracy, AUC, log‑loss). A statistically significant drop signals drift.  
3. **Ensemble voting** – maintain multiple models trained on successive windows; disagreement among them indicates change.

If the statistic exceeds a calibrated threshold (e.g., via Hoeffding’s inequality or bootstrap confidence), declare drift.

**Addressing it**

- **Retraining**: replace or fine‑tune the model with recent data.  
- **Incremental learning**: update parameters online (e.g., stochastic gradient descent) while weighting newer samples more heavily.  
- **Adaptive ensembles**: weight models by their recent performance, discarding stale ones.

A non‑obvious insight: *drift detection is inherently a change‑point problem in probability space; thus, the optimal detector maximizes the likelihood ratio between pre‑ and post‑drift distributions.* This links drift detection to sequential hypothesis testing rather than ad hoc thresholds, enabling principled false‑alarm control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
