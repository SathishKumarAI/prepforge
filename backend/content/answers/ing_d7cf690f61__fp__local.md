---
qid: ing_d7cf690f61__fp__local
question: A chat assistant re-sends a long conversation history on every turn. How
  do you avoid recomputing all of it, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 494
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:39:18-05:00'
sources: []
---

**Why the problem arises**

A language model (LM) is a function  
\(f: \mathcal{X}\rightarrow\mathcal{Y}\) that maps an *input sequence* to an output token.  
If every turn you concatenate the entire dialogue, you feed **the same prefix repeatedly**.  
Because transformers process tokens in parallel, re‑encoding that prefix costs \(O(L^2)\) time per turn, where \(L\) is the length of the history.

**The principled fix**

1. **Cache the hidden states of the fixed prefix**.  
   The transformer’s attention matrix for a token depends only on the *relative* positions, not on how many times you feed it.  
   Compute \(\mathbf{H}_{\text{prefix}}\) once and reuse it; subsequent turns need to compute only the new tokens’ states.

2. **Use incremental decoding**.  
   Keep the past key–value tensors (`past_key_values`) in a cache (as OpenAI’s `cache` argument does).  
   On each turn, append new tokens and update the cache with \(O(k)\) work per token (\(k\) = hidden dimension), independent of the history length.

3. **Avoid redundant attention**.  
   For very long histories, drop or compress older turns (e.g., summary tokens) so that the effective sequence remains bounded.

**Pitfalls**

- **Memory blow‑up**: caching key–value pairs for thousands of tokens can exceed GPU RAM; use mixed precision or offload to CPU.
- **Stale context**: if you truncate history, the LM may lose essential cues; ensure a sliding window that preserves all relevant dialogue acts.
- **Alignment errors**: when appending new turns, the positional embeddings must continue monotonically; otherwise the model misinterprets relative positions.

**Non‑obvious insight**

The *only* thing that truly changes between turns is the *new tokens*, not the past. By treating the prefix as a static “context window” and updating only its tail, you turn an \(O(L^2)\) operation into linear time in the number of new tokens—exactly what large‑scale chat systems need to stay responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
