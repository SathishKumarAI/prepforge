---
qid: ing_3206a0b640__think__local
question: 'Explain: Conditional Update — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 515
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:24:49-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *What is “Conditional Update” in this context?* Assume it refers to a write‑back strategy that only updates cached data when certain conditions (e.g., version match, lease expiry) are satisfied.  
   - *Audience knowledge:* Expect readers know basic caching but not Uber’s specific infra.  
   - *Goal:* Explain the technique and its impact on read throughput.

**2. Adopt a mental model**  
   - Use the **Cache‑Aside + Conditional Write** pattern: reads hit cache; writes go to storage first, then propagate to cache only when safe.  
   - Map Uber’s architecture onto this: online store (e.g., Cassandra) → distributed cache (e.g., Redis/HotCache) with a write‑through layer.

**3. Step‑by‑step reasoning**  
   1. **Read path:** Client queries cache; hit yields instant response, otherwise fetch from storage and populate cache.  
   2. **Write path:** When an update arrives, it is written to the persistent store first. A *conditional* flag (e.g., compare‑and‑set) ensures no stale data overwrites newer entries.  
   3. **Cache invalidation/refresh:** If the condition passes, the cache entry is refreshed or evicted; otherwise the write is discarded locally but retained in storage.  
   4. **Resulting throughput:** Because most traffic (≈90 %) hits the cache and writes rarely hit the hot spot (thanks to the conditional guard), Uber sustains >40 M reads/s.

**4. Common traps to avoid**  
   - *Assuming unconditional writes:* This would cause race conditions and stale data.  
   - *Over‑simplifying consistency guarantees:* Explain that Conditional Update is a lightweight consistency mechanism, not full ACID.  
   - *Ignoring eviction policies:* Cache size limits can still throttle read throughput.

**5. Sanity‑check & verbalize**  
   - Verify that the conditional check really prevents write storms (e.g., “if version X < current, reject”).  
   - Explain the trade‑off: slight extra latency on writes for a huge gain in read performance.  
   - Conclude by tying back to Uber’s scale: 40 M reads/s is achieved because most traffic bypasses storage entirely thanks to this conditional cache‑update strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
