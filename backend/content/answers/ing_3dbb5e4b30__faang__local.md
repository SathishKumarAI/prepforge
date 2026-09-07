---
qid: ing_3dbb5e4b30__faang__local
question: What is an attention sink, why does it exist, and what breaks if you evict
  it from the KV cache?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 465
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:17-05:00'
sources: []
---

**Clarify**  
You’re asking about *attention sinks*—the phenomenon where a transformer’s key‑value (KV) cache is dominated by a single token or a few tokens that attract almost all attention heads.  
Assumptions: we’re using an autoregressive decoder with KV caching, the model has a fixed context window, and the “sink” appears early in generation.

**Approach**  
1. Define what makes a token an attention sink (high dot‑product scores).  
2. Explain why it forms (e.g., long‑range dependencies or strong positional bias).  
3. Discuss the effect of evicting that KV entry (what the model would see next).

**Depth**  
An *attention sink* is a token whose key vector has a large inner product with many query vectors, so most heads allocate >90 % of their weight to it. It often arises when a token is semantically central or positioned near the end of the context, causing the softmax to collapse on that key.  
The KV cache stores past activations; if we evict the sink, subsequent queries no longer have access to its “anchor.” The transformer will then redistribute attention across remaining keys—often leading to incoherent generation, loss of long‑range structure, or a drift in topic because the model can’t retrieve that pivotal context.

**Edge Cases**  
- If the sink is *not* truly central (e.g., a frequent stop‑word), eviction may have negligible impact.  
- In very short contexts, evicting any key breaks the cache entirely.  
- Models with relative position encodings might still compensate partially.

**Optimize & Communicate**  
To mitigate, one could:  
- Use *cache pruning* that preserves high‑entropy keys rather than just oldest ones.  
- Introduce a *dynamic attention window* that limits how far back a head can look when a sink dominates.  
Explain the trade‑off: tighter pruning saves memory but risks losing critical context; broader windows keep coherence at higher cost.  

This structured view demonstrates problem framing, technical depth, and practical mitigation—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
