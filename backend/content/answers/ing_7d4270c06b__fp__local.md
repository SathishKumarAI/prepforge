---
qid: ing_7d4270c06b__fp__local
question: 'Explain: Inroduction — Fine-Tuning Explained for Noobs (How Pretrained
  Models Learn New Skills)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 469
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:31:52-05:00'
sources: []
---

**Fine‑tuning a pretrained model: the math that makes it work**

A deep network is a parametric function \(f_{\theta}(x)\) trained on data \(\{(x_i,y_i)\}\).  
During pretraining we solve  

\[
\min_{\theta}\;\frac1N\sum_{i}L(f_{\theta}(x_i),y_i)
\]

and obtain parameters \(\theta^\*\) that encode a *generic* mapping from input to output.  
The key insight is that many tasks share the same *feature extractor*: the early layers learn low‑level statistics (edges, textures, phonemes) while higher layers are task‑specific.  

Fine‑tuning re‑optimises only a subset of \(\theta\) (usually the last few layers or a small learning rate for all).  
Formally we minimize

\[
\min_{\theta}\;\frac1M\sum_{j}L(f_{\theta}(x'_j),y'_j)+\lambda\,\|\theta-\theta^\*\|^2
\]

where \((x'_j,y'_j)\) are new‑task data and the quadratic term is a *regulariser* that keeps \(\theta\) close to \(\theta^\*\).  
This balances **exploitation** (reuse learned features) with **exploration** (adapt to new labels).

Why it works:  
- The loss surface near \(\theta^\*\) is already shallow for the generic representation, so only a few gradient steps are needed.  
- Regularisation prevents catastrophic forgetting by preserving useful directions in parameter space.

**Non‑obvious insight:** *Fine‑tuning can be viewed as Bayesian posterior updating.*  
\(\theta^\*\) represents a prior distribution over functions; new data update this prior via the likelihood term, yielding a posterior that is both specific and grounded. Thus, fine‑tuning is not just “learning” but *refining* an existing hypothesis with minimal data, explaining why it works so efficiently on limited datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
