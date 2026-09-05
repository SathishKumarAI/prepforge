---
qid: ing_14f38ef3e0__fp__local
question: You have 500k instruction examples of mixed quality and compute budget to
  train on 20k. How do you choose the 20k?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 471
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:49:41-05:00'
sources: []
---

**Why pick 20 k instead of all 500 k?**  
Training a large‑language model is an *optimization over data*; each example contributes a gradient step weighted by its signal‑to‑noise ratio (SNR). If the dataset contains noisy or contradictory instructions, those gradients drift the objective away from the true target distribution, hurting generalization. Thus we want to maximize expected SNR per training step.

**Deriving a principled selector**

1. **Define a utility function**  
   For each example *i*, let \(u_i = \mathbb{E}[\,\Delta L_i\,|\,\text{model}\,]\) be the expected reduction in loss if we train on it.  
   This can be estimated by a cheap proxy: the *gradient norm* of a forward‑backward pass through a small checkpoint or the *perplexity* under a pre‑trained baseline.

2. **Budget constraint**  
   We have a compute budget \(B\) that allows only \(N=20\,000\) examples.  
   The optimal subset maximizes \(\sum_{i\in S} u_i\) subject to \(|S|=N\).

3. **Greedy approximation**  
   Rank all 500 k by estimated \(u_i\), then pick the top \(N\). This is optimal for a linear utility and a cardinality constraint.

4. **Calibration step**  
   To avoid over‑fitting to the proxy, re‑evaluate the top 20 k with a second metric (e.g., human‑rated relevance) and prune outliers.

**Non‑obvious insight**  
Gradient norm is *not* merely a measure of difficulty; it captures both **informativeness** (large gradients mean the model can learn more) and **conflict** (very large negative gradients signal contradictory data). By selecting examples with moderate, positive gradients we implicitly perform *contrastive regularization*, steering the model toward a coherent instruction manifold without explicit human labeling. This balances exploration of new patterns against exploitation of reliable signals, yielding better downstream performance under tight compute budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
