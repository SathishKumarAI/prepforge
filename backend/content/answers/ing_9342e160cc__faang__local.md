---
qid: ing_9342e160cc__faang__local
question: Why Scale by √d_k? — Llm Internals
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 485
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:46-05:00'
sources: []
---

**Why do we scale the dot‑product attention by √dₖ in transformer models?**

| Step | What I’d say |
|------|--------------|
| **Clarify** | The question asks why the dot product between query and key vectors is divided by √dₖ (the dimensionality of the key). I’ll confirm that we’re talking about scaled‑dot‑product attention, where `softmax(QKᵀ / √dₖ)` is used. |
| **Approach** | Explain the two effects: 1) magnitude growth with dimension, 2) softmax sensitivity to large inputs. Then show how scaling keeps logits in a numerically stable range. |
| **Depth** | • For dₖ‑dimensional unit vectors, E[Q·K] ≈ 0 and Var(Q·K)=dₖ. Thus the dot product’s standard deviation grows as √dₖ. <br>• Without scaling, logits would have variance ≈ dₖ, pushing softmax into its saturated regime (near‑one or near‑zero probabilities). <br>• Dividing by √dₖ normalises the distribution to unit variance, keeping the softmax output in a useful range and preventing vanishing/exploding gradients. <br>• Empirically, this stabilises training across depths and batch sizes; it also matches the intuition that each head should contribute roughly equally regardless of dₖ. |
| **Edge cases** | • Very small dₖ (e.g., 1) makes scaling unnecessary but harmless.<br>• Extremely large dₖ could still lead to numerical overflow before division, so we clip or use float‑32/float‑16 carefully. <br>• If you omit scaling, you’d see loss spikes and attention maps collapsing to a single token. |
| **Optimize & communicate** | Mention that alternative scalings (e.g., 1/dₖ) were tried but led to under‑sharp distributions; √dₖ is the sweet spot derived from Gaussian assumptions. Conclude by highlighting how this simple factor enables deep, multi‑head attention layers to train efficiently. |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
