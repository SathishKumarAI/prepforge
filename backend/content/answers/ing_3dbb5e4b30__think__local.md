---
qid: ing_3dbb5e4b30__think__local
question: What is an attention sink, why does it exist, and what breaks if you evict
  it from the KV cache?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 509
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:50:23-05:00'
sources: []
---

**1. Clarify the question & state assumptions**  
   - “Attention sink” refers to a token that is heavily attended to by many other tokens (e.g., a repeated prompt or a long‑running context).  
   - Assume we’re working with transformer models that use KV caches for efficiency.  
   - We need to explain why such a token exists, its role in attention patterns, and what happens when it’s removed from the cache.

**2. Mental model / framework**  
   - Treat the KV cache as a sliding window over past key‑value pairs.  
   - An attention sink acts like a *hub* that pulls information from surrounding tokens; it’s often a high‑frequency or semantically important token.  
   - Think of it in terms of graph theory: nodes (tokens) with weighted edges (attention scores); the sink has many strong incoming edges.

**3. Step‑by‑step reasoning toward the answer**  
   1. Identify how attention weights are computed (softmax over dot products).  
   2. Show that a token with high similarity to many queries will dominate its column in the attention matrix.  
   3. Explain why such a token persists in the cache—its embeddings are reused and thus it remains “active.”  
   4. Discuss eviction: when the cache is limited, the least‑recently‑used KV pair (often a distant context) is removed.  
   5. If we evict the attention sink instead, downstream queries lose their primary information source; the softmax distributes weight over weaker keys, altering semantics.

**4. Common traps to avoid**  
   - Confusing *attention sink* with “attention head” or “self‑attention.”  
   - Assuming eviction is random; it’s usually LRU based on usage frequency.  
   - Overlooking that removal changes the normalization in softmax, not just the presence of a key.

**5. Sanity‑check & verbalize**  
   - Verify with a toy example: 5 tokens, one central token gets >70 % attention; remove it → remaining attention spreads evenly.  
   - Explain to an audience by comparing to a spotlight: removing the spotlight (sink) forces viewers (queries) to look elsewhere, changing the scene’s interpretation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
