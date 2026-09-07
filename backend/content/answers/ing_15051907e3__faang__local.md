---
qid: ing_15051907e3__faang__local
question: 'Explain: ALiBi (Attention with Linear Biases) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 470
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:31:59-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *ALiBi*—a positional‑encoding technique used in large language models (LLMs). Confirm that the audience knows the basics of self‑attention and why position matters; assume they’re familiar with transformers but not necessarily with ALiBi’s specifics.

---

**Approach**  
1. Define what positional bias is in transformers.  
2. Show how ALiBi replaces learned embeddings with a linear bias added to attention scores.  
3. Explain the math: bias = slope × distance, slope derived from layer index.  
4. Highlight advantages (no extra parameters, O(1) memory, better generalization to longer contexts).  

---

**Depth**  
- **Attention formula:** `score_{i,j} = (Q_i·K_j)/√d + b_{ij}` where `b_{ij} = -α_l * |i-j|`.  
- **Slope α_l**: computed as `2^{-(l+1)}` or via a closed‑form that matches GPT‑3/4.  
- Each layer gets a distinct slope, enabling the model to learn “how far back” it should attend.  
- No positional embeddings → zero extra memory; training is identical except for bias term.  
- Complexity remains `O(n²)` per layer but with negligible constant overhead.

---

**Edge Cases**  
- Extremely long sequences: linear bias may saturate, requiring clipping or rescaling.  
- Models pre‑trained without ALiBi: fine‑tuning can be unstable if the new bias pattern conflicts with learned weights.  
- Testing: compare perplexity on out‑of‑distribution lengths; check attention heatmaps for expected monotonic decay.

---

**Optimize & Communicate**  
Mention that ALiBi is a drop‑in replacement, so you’d simply modify the attention scoring function and retrain or fine‑tune. Stress its benefits in deployment: fewer parameters, faster inference on long contexts, and improved extrapolation. Conclude with a quick trade‑off note—while memory‑savings are great, some models may still prefer learned embeddings for tasks needing absolute positional precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
