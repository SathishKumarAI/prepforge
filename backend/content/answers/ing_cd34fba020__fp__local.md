---
qid: ing_cd34fba020__fp__local
question: How does prompt caching work, and how should it change the way you structure
  prompts?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 410
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:16:40-05:00'
sources: []
---

Prompt caching is a **lazy‑evaluation** strategy for transformer inference that exploits the fact that every token generation re‑runs the same forward pass on the *entire* prompt plus the newly produced tokens.  

1. **Fundamental problem** – In autoregressive models, each next‑token probability requires a full self‑attention over all previous positions. For long prompts this is \(O(L^2)\) per token, where \(L\) grows as generation proceeds.  
2. **Why it must work that way** – The transformer’s attention weights depend only on the keys/values derived from past tokens; once a key/value pair is computed for position *i*, it never changes during subsequent steps. Therefore we can pre‑compute and store these key/value tensors (the “cache”).  
3. **Deeper principle** – This is an instance of **dynamic programming**: reuse intermediate results to avoid exponential recomputation, analogous to memoisation in algorithm design.  
4. **Practical effect on prompt structure** – Break the prompt into *static* and *dynamic* parts. Static text (e.g., system instructions) should be tokenised once; dynamic content (user queries or context that changes per request) should be appended after the cache is built so it does not invalidate cached keys.  
5. **Non‑obvious insight** – Even when using prompt caching, you can still achieve *semantic* efficiency by grouping highly correlated tokens together: tokens that rarely interact across attention heads can share a smaller cache segment, reducing memory bandwidth without sacrificing correctness.

In short, treat the prompt as a two‑tiered input: pre‑compute static keys/values once and only re‑compute for the truly dynamic suffix. This yields linear‑time generation while preserving model fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
