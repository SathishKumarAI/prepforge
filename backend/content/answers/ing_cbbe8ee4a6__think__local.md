---
qid: ing_cbbe8ee4a6__think__local
question: When Does Cleanup Happen? — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 537
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:22:52-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
   - What *cleanup* means in Guava’s cache context?  
   - Is it “eviction” (removal due to size/expiration) or “garbage‑collection‑style” cleanup of expired entries?  
   - Assume we’re dealing with `Cache`/`LoadingCache` from Guava, not `MapMaker`.

**2️⃣ Adopt a mental model**  
   - Think of the cache as a *time‑based* data structure: each entry has timestamps for write/read.  
   - Two independent mechanisms: *Expiration* (time‑to‑live / time‑since‑access) and *Eviction* (size limits).  
   - “Cleanup” is a background sweep that removes entries that have already expired but are still present in the internal map.

**3️⃣ Step‑by‑step reasoning**  
   1. When you call `get()` or `put()`, Guava checks the specific key’s timestamps; if it has expired, it is evicted immediately.  
   2. For keys that haven’t been touched, they may linger until a *cleanup* thread runs.  
   3. The cleanup thread is scheduled by an internal `ScheduledExecutorService`.  
   4. Its period equals the minimum of the configured expiration values (or a default if none).  
   5. On each run it scans the cache’s entries and removes those whose age exceeds the relevant threshold.

**4️⃣ Common traps to avoid**  
   - Confusing *eviction* with *cleanup*: eviction is size‑based, cleanup is time‑based.  
   - Assuming cleanup runs every millisecond; in reality it’s capped by a fixed delay (often 10 s).  
   - Ignoring that `CacheBuilder`’s `expireAfterWrite/Read` only affect touched entries until the next scheduled cleanup.

**5️⃣ Sanity check & verbalize**  
   - Verify against Guava’s documentation or source (`AbstractCache#cleanUp()` and `ScheduledCleanUp`).  
   - Explain: “Cleanup happens on a background thread at a fixed period, sweeping expired entries that haven’t been accessed since they became stale.”  
   - If unsure, run a quick test: put an entry with 1‑second expiration, wait 5 s, then check `size()` before and after calling `cleanUp()` manually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
