---
qid: ing_23aac5cdcc__fp__local
question: 'Explain: Stateful Caching — Optimizing AI Inference at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 347
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:21:15-05:00'
sources: []
---

**Stateful caching in character.ai: a principled view**

The core problem is *low‑latency generation* while the model (e.g., GPT‑like transformer) processes long dialogues. Each new token requires a full forward pass over all preceding tokens, costing O(n²) operations where *n* is conversation length.  

A transformer’s hidden states are **Markovian**: the next token depends only on the current state, not on raw past text. Therefore we can cache the last‑layer hidden vector after each inference step and reuse it for the next one. This turns the cost per new token from O(n²) to O(1), because the self‑attention matrix is no longer recomputed over the entire history.

Mathematically, if *h_t* denotes the cached state at time t, then  
  **next_token = f(h_t)**  
where *f* is a lightweight head. Updating the cache is simply **h_{t+1} = g(h_t, input_t)**, with *g* being the transformer block applied to one new token.

**Non‑obvious insight:** The cache not only saves compute; it also acts as an implicit regularizer. By forcing the model to maintain a compact representation of all past context, we reduce overfitting to long‑range noise and improve coherence—essential for believable character dialogue. Thus, stateful caching is both a performance hack and a subtle form of curriculum learning embedded in inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
