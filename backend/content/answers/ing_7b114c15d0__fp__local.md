---
qid: ing_7b114c15d0__fp__local
question: 'Explain: Pitfall 3: Evaluation Set Leakage — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 388
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:26:24-05:00'
sources: []
---

**Pitfall 3 – Evaluation‑Set Leakage (Capability Assessment)**  
When we ask a model “how good is it?” the answer must come from data that were *unseen* during training and hyper‑parameter tuning. The fundamental problem is that any leakage of evaluation samples into earlier stages creates an *optimistic bias*: the model learns idiosyncrasies of those examples rather than the underlying task.

From a statistical‑learning point of view, we want to estimate the expected loss  
\[
\mathcal{L} = \mathbb{E}_{(x,y)\sim P_{\text{test}}}\!\bigl[\ell(f(x),y)\bigr]
\]
where \(P_{\text{test}}\) is the true target distribution. If any \((x,y)\) from this set appears in training, the empirical risk minimiser can reduce loss on those points at the cost of generalisation—this is *overfitting* to the evaluation set.

The deeper principle is **information‑theoretic independence**: a fair estimate requires that the data used for training and for testing share no mutual information beyond what the model’s inductive bias supplies. Leakage introduces extra shared information, inflating performance metrics.

A non‑obvious insight: *leakage can be hidden in seemingly innocuous preprocessing steps*. For example, normalising with a global mean computed on the entire corpus (including test data) subtly injects test statistics into the training process. Even if raw examples are separate, derived features may carry leakage. Thus rigorous capability assessment demands not only dataset partitioning but also audit of every transformation pipeline to ensure no statistical signal from the evaluation set propagates back to training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
