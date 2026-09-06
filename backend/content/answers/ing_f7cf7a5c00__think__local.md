---
qid: ing_f7cf7a5c00__think__local
question: What is the KV cache and why does it make generation fast?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 430
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:22:01-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
   - Confirm we’re talking about *transformer‑based language models* (e.g., GPT).  
   - Assume the reader knows basic self‑attention but not the “KV cache” term.

**2️⃣ Mental model / framework**  
   - Treat a transformer layer as two sub‑modules: *key/value storage* and *query computation*.  
   - Think of KV cache as a memoization table that holds pre‑computed keys/values for all past tokens.

**3️⃣ Step‑by‑step reasoning**  
   1. During generation, each new token needs to attend to **all previous tokens**.  
   2. Without caching, the model would recompute keys and values for those past tokens at every step → O(n²) time per step.  
   3. With a KV cache, keys/values of earlier tokens are stored once.  
   4. For a new token we only compute its key/value (O(1)) and reuse the cached ones, reducing cost to roughly linear in sequence length instead of quadratic.  
   5. The attention computation becomes *query × cached K,V*, which is far cheaper.

**4️⃣ Common traps to avoid**  
   - Don’t conflate “KV cache” with “model weights”; it’s an inference‑time memory buffer.  
   - Beware of GPU memory limits: the cache grows with sequence length, so very long contexts can still be expensive.  
   - Assume caching always speeds up; for tiny sequences the overhead may outweigh benefits.

**5️⃣ Sanity‑check & communicate**  
   - Verify that after adding a token, the number of new operations is constant (not growing).  
   - Explain in plain terms: “It’s like keeping a running list of what we’ve already looked at so we don’t have to look again.”  
   - End with a quick example or diagram if possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
