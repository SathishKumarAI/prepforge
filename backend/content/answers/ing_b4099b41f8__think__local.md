---
qid: ing_b4099b41f8__think__local
question: 'Explain: Timed Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 515
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:52:30-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume the reader knows what a cache is but not Guava’s internals.  
- Focus on *timed* (time‑based) eviction, not size or weight limits.  
- Mention that Guava’s `CacheBuilder` supports multiple eviction policies simultaneously.

**2️⃣ Adopt a “timeline + policy” mental model**  
- Visualize each entry as an object stamped with the last access or write time.  
- Think of two separate clocks: *access‑time* and *write‑time*.  
- Eviction is simply a rule that says “if the elapsed time since the relevant clock exceeds X, remove the entry”.

**3️⃣ Step‑by‑step reasoning**  
1. When `CacheBuilder` receives `.expireAfterWrite(duration)` it records the duration and stores the current timestamp with each new or updated entry.  
2. On every read (`getIfPresent`) or write, Guava checks whether the elapsed time since that stored timestamp exceeds the configured duration; if so, the entry is considered expired and removed lazily during the operation.  
3. `.expireAfterAccess(duration)` behaves similarly but updates the “last‑access” timestamp on reads as well.  
4. Explain the difference between *lazy* (checked on access) vs *eager* eviction: Guava does not proactively scan; expiration is validated when an entry is touched.  
5. Note that both policies can coexist and that Guava will evict based on whichever condition triggers first.

**4️⃣ Common traps to avoid**  
- Confusing “write” with “update”; in Guava a write includes the initial put and any subsequent `put`/`refresh`.  
- Assuming eviction happens instantly after the duration; it actually occurs when the entry is next accessed.  
- Overlooking that expiration timestamps are stored per‑entry, not globally.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “If I put a value at time 0 and set expireAfterWrite(10s), what happens at 11 s?” The answer should be “It’s still present until accessed; the next access will trigger removal.”  
- Reiterate that timed eviction is about *time windows* per entry, not a global purge.  

By following this structure you’ll convey the concept clearly and avoid the usual misconceptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
