---
qid: ing_8c9e2826cb__think__local
question: Design the caching strategy for an LLM-backed feature. What can you cache
  and what can't you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 447
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:21:34-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
   • *Feature*: an LLM‑powered endpoint (e.g., summarization, translation).  
   • *Data*: user prompt + optional context (document IDs, settings).  
   • *Constraints*: stateless API, GDPR, rate limits, cost of inference.  
   • Assume we can persist results in a key‑value store and that prompts are hashable.

**2️⃣ Mental model: “Cache‑ability = Deterministic & Reusable”**  
   • A cache entry is valid if the same inputs will always produce the same output.  
   • Anything involving external state, randomness, or user‑specific secrets breaks determinism.

**3️⃣ Step‑by‑step reasoning**  
   1. **Identify pure functions**: prompt + model version → response (deterministic). Cache these.  
   2. **Exclude dynamic inputs**: timestamps, session IDs, user tokens—strip or hash them out of the key.  
   3. **Handle contextual data**: if context is a static document snapshot, cache it; if it changes frequently, treat as volatile.  
   4. **Cache size & TTL**: set based on request frequency and cost; e.g., 1 h for rarely‑changed prompts.  
   5. **Invalidation policy**: on model upgrade or content update, purge affected keys.

**4️⃣ Common pitfalls to avoid**  
   • Caching the raw prompt string when it contains sensitive data.  
   • Relying on cache for outputs that include random sampling (use deterministic decoding).  
   • Forgetting to version‑tag cached results; older model outputs may be returned after an upgrade.

**5️⃣ Sanity‑check & communicate**  
   • Run a test: hit the endpoint twice with identical inputs, confirm cache hit.  
   • Explain: “We cache only deterministic prompt–model pairs and tag them with the model version; anything that changes per user or over time is excluded.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
