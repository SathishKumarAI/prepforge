---
qid: ing_87038ed8f1__fp__local
question: 'Explain: AI Engineering — System Design Academy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 391
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:51:25-05:00'
sources: []
---

**AI Engineering – System Design Academy**

The core problem is *deployment*: a trained model is only useful if it can be served, monitored, and evolved at scale.  
From first principles, any ML pipeline must satisfy three invariants:

| Invariant | Why it holds |
|-----------|--------------|
| **Latency‑throughput trade‑off** | The expected service time \(T\) depends on the model size \(s\), batch size \(b\), and hardware throughput \(\lambda(b)\). Optimal \(b^\*\) minimizes \(T = s/b + \frac{1}{\lambda(b)}\). |
| **Data drift tolerance** | A model’s predictive distribution \(p(y|x;\theta)\) changes as the data generating process evolves. Continuous monitoring of divergence metrics (e.g., KL or Wasserstein distance) is required to trigger retraining, otherwise bias accumulates exponentially. |
| **Cost‑efficiency** | Compute cost per inference \(c = \alpha s + \beta\) must be bounded by budget \(B\). This turns into a convex optimization over model architecture and hardware choice. |

A System Design Academy formalises these invariants into reusable patterns: *model‑as‑service*, *canary rollouts*, *feature store abstraction*, and *automated retraining pipelines*.  
**Non‑obvious insight:** The *shape* of the inference latency curve is governed by the *hardware memory hierarchy*. Even a 10 % reduction in GPU cache miss rate can cut end‑to‑end latency by >30 %, making model size less critical than cache‑friendly data layouts. Thus, AI engineers must think like hardware architects as well as data scientists.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
