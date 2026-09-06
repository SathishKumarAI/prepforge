---
qid: ing_c097b033bf__think__local
question: 'Explain: Removal Listeners — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 402
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:39:28-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   * Confirm that “Removal Listeners” refers to Guava’s `Cache` API (not Java’s `RemoveListener`).  
   * Assume the reader knows basic cache concepts but not Guava specifics.

**2. Adopt a mental model**  
   * Think of a cache as a key‑value store with eviction policies.  
   * A removal listener is an observer that reacts whenever an entry disappears—either due to eviction, expiration, explicit removal, or size limits.

**3. Step‑by‑step reasoning**  
   1. **Define the API**: `CacheBuilder.removalListener(RemovalListener<K,V>)`.  
   2. **Explain RemovalCause enum** (EXPLICIT, REPLACED, COLLECTED, EXPIRED, SIZE).  
   3. **Show a simple example** with a lambda that logs key/value and cause.  
   4. **Describe typical use cases**: resource cleanup, metrics, audit trails.

**4. Avoid common traps**  
   * Don’t conflate removal listeners with `RemovalListener` in other libs.  
   * Don’t assume the listener runs on the same thread; clarify that Guava may invoke it asynchronously if you use `CacheBuilder.removalListener(...)` with a custom executor.  
   * Beware of blocking operations inside the listener—can stall cache eviction.

**5. Sanity‑check & verbalize**  
   * Verify that every removal cause is covered.  
   * Ask: “What happens if I remove an entry explicitly? What about GC collection?”  
   * Summarize: a removal listener lets you hook into the cache’s lifecycle to perform side effects safely and efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
