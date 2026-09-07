---
qid: ing_b3f17aee1b__faang__local
question: 'Explain: A model was pretrained at 8k context. You need 128k. What are
  your options? Explain position interpolation and YaRN.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 518
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:27-05:00'
sources: []
---

**Clarify**  
We have a transformer that was trained on an 8 k‑token context window. The task now requires handling up to **128 k tokens** in a single forward pass. We must decide how to adapt the model without retraining from scratch.

**Approach**  
1. **Extend positional embeddings** – add new positions (e.g., by linear interpolation).  
2. **Use a longer‑context architecture** – e.g., *YaRN* (Yarn: A Recurrent Network), which stitches multiple local transformers with cross‑attention to preserve global coherence.

**Depth**  

| Option | How it works | Complexity | Trade‑offs |
|--------|--------------|------------|------------|
| **Positional interpolation** | Train the model up to 8 k, then generate a new embedding matrix of size 128 k×d. Interpolate existing embeddings (e.g., linear or cubic) for unseen positions. During inference, use these embeddings; no weight change. | O(128 k·d) memory; inference cost unchanged. | May degrade performance on very long ranges because embeddings are extrapolated; no extra training data. |
| **YaRN** | Replace the standard self‑attention with a *Yarn* block: each token attends only to its local window, plus a “routing” mechanism that aggregates information from distant tokens via learned keys/values. The model can be fine‑tuned on longer sequences while reusing most weights. | Slightly higher per‑token cost (extra routing heads), but linear scaling with sequence length. | Requires additional training on long data; more hyperparameters to tune. |

**Edge Cases**  
- Interpolation fails if the model relies heavily on absolute positional patterns beyond 8 k.  
- YaRN may struggle with very sparse dependencies that cross multiple local windows; need enough fine‑tuning examples.

**Optimize & Communicate**  
Start with interpolation for a quick sanity check (fast, no extra compute). If perplexity degrades, move to YaRN and fine‑tune on 32–64 k samples first, then scale up. Explain that interpolation preserves the learned representation while enabling longer contexts; YaRN provides a principled architecture to handle truly long dependencies without blowing up memory or time. This two‑step plan balances speed, cost, and quality—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
