---
qid: ing_03718c3184__faang__local
question: 'Explain: Interruption — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 605
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:51:53-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Interruption* concept in the context of caching, referencing Google’s Guava library and its “CachesExplained” wiki page on GitHub. I’ll assume the interviewer wants a concise technical overview: what an interruption is, how it affects cache operations, and why Guava handles it specially.

**Approach**  
1. Define *interruption* in Java concurrency terms.  
2. Explain why blocking cache operations (e.g., `Cache.get(K)` that triggers loading) can be interrupted.  
3. Show how Guava’s `LoadingCache` deals with interruptions—cancellation, fallback, and thread‑local state.  
4. Reference the “CachesExplained” wiki for implementation details.

**Depth**  

| Topic | Detail |
|-------|--------|
| **Interruption** | A thread can receive an `InterruptedException` while waiting (e.g., during a load). The flag is set; if the thread blocks on I/O or synchronization, it throws. |
| **Effect on Caches** | If a cache load is interrupted, the caller may get a partial value, or the load may be retried depending on policy. Unhandled interrupts can corrupt the cache state (e.g., leaving a “loading” sentinel). |
| **Guava Handling** | `LoadingCache` uses an internal `LoaderTask`. When interrupted, it: 1) clears the task from its `Future`, 2) removes the entry’s placeholder, and 3) propagates a `CancellationException` to callers. The cache remains consistent. Guava also supports *cancellation listeners* via `LoadingCacheBuilder.setRemovalListener`. |
| **CachesExplained Wiki** | Documents the design: why tasks are stored in a concurrent map, how `FutureTask` is used, and the exact interruption path (`cancel(true)` → `InterruptedException`). It clarifies that only one load per key runs concurrently. |

**Edge Cases**  
- Long‑running loads (e.g., network) get cancelled but may leave stale data if not cleaned.  
- Recursive loads can deadlock; Guava avoids this by checking `isLoading`.  
- Interrupting a thread that’s merely reading from the cache is harmless, but interrupting during write triggers removal.

**Optimize & Communicate**  
Explain that Guava’s design trades minimal overhead (a single map lookup) for strong consistency guarantees. If I were to improve it, I’d add configurable timeout policies or support for *soft* cancellations where a load can finish but the result is discarded. Narrate by walking through a typical `Cache.get()` flow: check map → if missing, start loader → block → possible interrupt → cleanup. This shows clear reasoning, depth, and awareness of edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
