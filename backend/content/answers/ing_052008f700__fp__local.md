---
qid: ing_052008f700__fp__local
question: What goes wrong when you validate a model on time-ordered data, and how
  do you do it properly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 396
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:16:36-05:00'
sources: []
---

When you shuffle a dataset before training, you implicitly assume **exchangeability**: every sample is an independent draw from the same distribution.  
In time‑series or any chronologically ordered data this assumption is violated because future observations depend on past ones (autocorrelation) and the underlying process may drift.  

If you validate on randomly sampled points, the model can *peek* at patterns that only appear later in time: it learns to exploit temporal correlations that will not be present when it predicts truly ahead of its training horizon.  
This is a form of **information leakage**—the validation set contains information that the model could never realistically access during deployment.

The correct approach stems from the principle of *causal inference*: we can only learn from past and predict future, never vice versa.  

1. **Chronological split**: Use an initial contiguous block for training, a later block for validation, and a final block for testing.  
2. **Rolling (walk‑forward) cross‑validation**: Train on the first *k* periods, validate on the next period; repeat sliding the window forward.  

Both preserve the directionality of time, guard against leakage, and provide realistic estimates of out‑of‑sample performance.  

> **Non‑obvious insight:** Even with a chronological split, if your model contains lagged features that span beyond the training horizon, you can still leak future information. Always ensure that any engineered feature depends only on data available up to (and including) the current time step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
