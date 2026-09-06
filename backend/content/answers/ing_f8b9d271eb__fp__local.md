---
qid: ing_f8b9d271eb__fp__local
question: 'Explain: Scale the metrics that matter to your application'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 350
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:48:30-05:00'
sources: []
---

**Why you should scale the right metrics**

In supervised learning every algorithm is an *optimization* over a loss function \(L(\theta)\).  
The choice of \(L\) is dictated by what you actually care about after deployment—accuracy on
rare classes, latency, monetary cost, or fairness. If you let the model minimize a generic
cross‑entropy, it will ignore that rare event and still look “good” because the loss is dominated
by frequent cases.

Let \(M\) be a metric you truly value (e.g., revenue per prediction).  
Define a *utility* function \(U(\theta)=\mathbb{E}[M(y,\hat y_\theta)]\).  
The training objective should approximate \(\max_{\theta} U(\theta)\), not just fit the data.  
If \(M\) is unscaled, its magnitude can dwarf other terms in a composite loss and drive the
optimizer to over‑emphasize it, potentially harming generalization.

**Non‑obvious insight:**  
When \(M\) is **non‑differentiable** (e.g., AUC), *reparameterizing* the metric as a differentiable
proxy—such as a smoothed hinge or using a surrogate loss derived from its first‑order expansion—lets you
train end‑to‑end while still aligning with the true objective.  
This bridges the gap between theoretical optimality and practical implementation, ensuring that
the metrics you scale are not just artifacts of evaluation but genuine drivers of model behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
