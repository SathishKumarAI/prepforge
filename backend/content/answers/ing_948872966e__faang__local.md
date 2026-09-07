---
qid: ing_948872966e__faang__local
question: 'Explain: API-level Context Caching (Prompt Caching)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 634
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:29:31-05:00'
sources: []
---

**Clarify**  
We’re asked about *API‑level context caching*—often called **prompt caching**—in large language model (LLM) services. I’ll assume:  
1. Clients send a prompt + system instructions to an API endpoint.  
2. The same or very similar prompt is reused frequently.  
3. Latency and cost are critical metrics for the product.

**Approach**  
Explain what it is, why it matters, how it’s implemented at the API layer, and its trade‑offs. Structure: definition → benefits → mechanics (hashing + storage) → complexity & safety concerns → edge cases → possible optimizations.

**Depth**  

| Step | Detail |
|------|--------|
| **What it is** | The LLM service pre‑generates embeddings or partial outputs for a prompt and stores them keyed by a deterministic hash. Subsequent identical requests hit the cache instead of recomputing. |
| **Benefits** | *Latency*: reduces token processing time from milliseconds to microseconds. *Cost*: fewer compute tokens per request → lower billable usage. *Consistency*: same cached output guarantees identical responses for idempotent prompts. |
| **Mechanics** | 1. Receive prompt + system role. 2. Canonicalize (strip whitespace, normalize tokenization). 3. Compute a hash (e.g., SHA‑256) → cache key. 4. Lookup in an LRU or time‑to‑live (TTL) store. 5. If hit: return cached response; if miss: forward to model, stream result, then cache it. |
| **Complexity** | O(1) lookup & insertion on average. Hashing is linear in prompt length but negligible compared to model inference. Memory cost = sum of cached outputs; usually bounded by TTL or size limits. |
| **Safety** | Cache only for prompts that are truly deterministic (no user‑supplied randomness). Avoid caching prompts containing dynamic content or personal data unless privacy guarantees exist. |

**Edge Cases**  
- *Prompt drift*: minor edits cause cache miss—could use fuzzy hashing but risks incorrect results.  
- *Stale caches*: model updates may invalidate cached outputs; implement version tags in key.  
- *Privacy*: user‑specific prompts must never be cached or must be encrypted.

**Optimize & Communicate**  
1. **Adaptive TTL**: longer for static FAQs, shorter for frequently updated content.  
2. **Bloom filters** to reduce hash collisions.  
3. **Multi‑level cache** (in‑memory + SSD) for scale.  

When explaining, I’d start with a concrete example (“Your FAQ bot receives the same question 10k times/day”), show latency savings numerically, and finish by highlighting that prompt caching is a classic trade‑off between compute cost and consistency—exactly the kind of system design nuance FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
