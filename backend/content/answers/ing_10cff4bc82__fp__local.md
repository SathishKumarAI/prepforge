---
qid: ing_10cff4bc82__fp__local
question: 'Explain: Making Fable Cheaper Than Opus — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 469
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:41:32-05:00'
sources: []
---

**Why a “fable”‑style transformer can beat the classic “opus” in cost**

At its core, training a language model is an **optimization problem over probability distributions**: we adjust parameters so that the predictive distribution \(P_{\theta}(y|x)\) maximizes likelihood on data. The *cost* comes from two sources:

1. **Compute per update** – number of floating‑point operations (FLOPs) in each forward/backward pass.
2. **Data volume needed for convergence** – how many tokens we must see before the loss plateaus.

A standard transformer (“opus”) uses a **dense attention matrix** \(A\in \mathbb{R}^{n\times n}\). Its FLOPs scale as \(O(n^{2})\) per layer, where \(n\) is sequence length. Even with aggressive sparsity tricks, the quadratic term dominates for long contexts.

The *fable* architecture replaces dense attention with a **hierarchical, low‑rank decomposition**:

- Split the token stream into *chunks* of size \(c\).
- Compute full self‑attention within each chunk (\(O(c^{2})\)).
- Inter‑chunk communication is mediated by a *global sketch* (e.g., random projections or gated summaries) that costs only \(O(n)\).

Thus, total FLOPs become \(O((n/c)c^{2} + n) = O(nc + n)\). Choosing \(c \ll n\) yields a **linear‑time** model. From an information‑theoretic view, the sketch preserves sufficient mutual information for global coherence while discarding redundant pairwise interactions that contribute little to predictive power.

**Non‑obvious insight:** The sketch need not be learned; a *fixed random projection* suffices because the downstream layers can recover context via attention over the sketch. This eliminates an entire training stage (learning inter‑chunk weights), shaving both memory and compute without sacrificing accuracy. Hence, fable models are cheaper than opus not by clever engineering alone but by re‑examining which interactions truly matter for language modeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
