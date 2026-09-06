---
qid: ing_c0c77e6b09__fp__local
question: What are the root causes of hallucination, and what actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 538
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:35-05:00'
sources: []
---

### Why do large language models “hallucinate”?

At their core a model is an **interpolator** on a learned distribution \(P_{\text{model}}(x|c)\) of text given context \(c\).  
The training objective (cross‑entropy or likelihood) only guarantees that the *expected* log‑probability of the training data is maximized. It does **not** enforce that every generated token lies in the support of the true distribution \(P_{\text{true}}(x|c)\). When the model encounters a prompt far from its training manifold, it must extrapolate; the nearest high‑probability region may correspond to an unrelated but plausible pattern, producing a *hallucination*.

Two root causes emerge:

1. **Distribution mismatch** – The model’s internal distribution is a coarse approximation of the true world. Any deviation amplifies when conditioned on novel prompts.  
2. **Reward‑free generation** – Standard decoding (greedy or beam) selects tokens maximizing \(P_{\text{model}}\), not fidelity to external knowledge.

### What actually mitigates hallucination?

| Technique | Principle | Effect |
|-----------|-----------|--------|
| **Reinforcement Learning with a factuality reward** | Optimizes for an auxiliary objective that penalises divergence from verified sources. | Drives the policy toward regions where \(P_{\text{true}}\) is high. |
| **Retrieval‑augmented generation (RAG)** | Injects retrieved evidence into the context, effectively conditioning on \(P_{\text{true}}(x|c,\text{evidence})\). | Anchors the model to concrete facts, shrinking the extrapolation space. |
| **Calibration & temperature tuning** | Adjusts entropy of token distribution; a higher temperature spreads probability mass, reducing over‑confident but incorrect peaks. | Lowers the chance that the model locks onto spurious high‑probability tokens. |

#### Non‑obvious insight

*Hallucinations are not merely “errors” but **mode collapses** caused by the model’s failure to represent low‑probability yet correct modes.* By explicitly encouraging diversity in training (e.g., via **entropy regularization**) or by exposing the model to *counterexamples* during fine‑tuning, we can widen its internal support set. This reduces the temptation to collapse onto a single plausible but incorrect mode when faced with novel prompts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
