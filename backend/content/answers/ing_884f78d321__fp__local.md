---
qid: ing_884f78d321__fp__local
question: 'Explain: CS324 - Large Language Models — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 373
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:54:29-05:00'
sources: []
---

**CS 324 – Large Language Models (LLM) – Core Idea**

At its heart, an LLM is a *probabilistic function approximator* that learns to map arbitrary token sequences to a distribution over next tokens. The course tackles why this mapping works at scale: the transformer architecture turns attention into a **self‑normalizing feature extractor**; positional encodings inject order without explicit recurrence; and masked language modeling trains a *conditional* distribution \(P(x_i|x_{<i})\) that captures syntax, semantics, and world knowledge in a single parametric model.

Why must it be so large?  
1. **Capacity vs. Data:** The number of parameters must exceed the effective dimensionality of the language manifold; otherwise the model collapses to over‑simplified priors.  
2. **Implicit Regularization:** Stochastic gradient descent on billions of tokens induces a *bias* toward solutions that generalize, even without explicit regularizers.  

The course connects this to **information bottleneck theory**: training maximizes mutual information \(I(X;Y)\) between input context and next token while minimizing \(I(X;\theta)\), yielding representations that are both expressive and parsimonious.

### Non‑obvious Insight  
Most people think fine‑tuning is a *post‑hoc* step, but the lecture shows it as **adaptive re‑parameterization**: by freezing early layers (capturing universal syntax) and only adjusting the last few attention heads, we effectively perform a *low‑rank update* of the weight matrix that preserves learned priors while specializing to new domains. This explains why fine‑tuned LLMs often outperform training from scratch on small corpora.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
