---
qid: ing_ff7a97ffd0__think__local
question: 'Explain: Prefix Caching — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 445
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:52:31-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What* is “prefix caching” in the context of language‑model inference?  
   - Assume we’re dealing with transformer models (e.g., GPT) where each token’s hidden states can be reused.  
   - We’ll focus on short‑term (in‑session) reuse, not long‑term memory.

**2. Adopt a mental model: “Cache as a lookup table for intermediate activations”**  
   - View the transformer as a stack of layers; each layer processes tokens sequentially.  
   - The cache stores the *key/value* pairs produced by earlier tokens so later ones can retrieve them without recomputation.

**3. Step‑by‑step reasoning**  
   1. When generating token *t₁*, compute its hidden states → store as key/value in layer caches.  
   2. For token *t₂*, the model re‑uses *t₁*’s cached activations instead of recomputing them, saving FLOPs.  
   3. The “prefix” refers to all preceding tokens; caching their outputs lets us treat the prefix as a fixed context block.  
   4. Only new tokens beyond the cache boundary trigger fresh computation.

**4. Common traps to avoid**  
   - Confusing *token‑level* caching with *attention‑head* caching.  
   - Forgetting that cached values must be reshaped or sliced correctly for each layer’s attention matrix.  
   - Assuming caching eliminates all overhead; it still requires memory bandwidth and may not help if the prefix is very short.

**5. Sanity‑check & communicate clearly**  
   - Verify by tracing a toy example: generate “The cat sat on” → cache “The cat”, then request “sat”; the model should reuse “cat”’s activations.  
   - Explain to peers that prefix caching turns repeated inference over the same context into a single pass, dramatically improving throughput for short‑term contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
