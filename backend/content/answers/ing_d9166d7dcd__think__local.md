---
qid: ing_d9166d7dcd__think__local
question: 'Explain: Your agent''s prompt cache hit rate is 20% when you expected 90%.
  Walk me through the debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 706
total_tokens: 909
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:17:29-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- *What exactly is “prompt cache”*? (e.g., in-memory LRU, disk‑based, external service?)  
- *What defines a “hit”*? Same prompt string, same tokenization, same cache key?  
- *When did the 20 % figure come from*? A recent metric run or a long‑term average?  
- Assume the system is supposed to hit 90 % under normal load and that the code has not changed recently.

**2️⃣ Adopt a systematic debugging framework**  
1. **Reproduce** the low hit rate in isolation (unit test, small script).  
2. **Measure** – collect raw counters: total prompts, cache lookups, hits, misses, evictions.  
3. **Inspect** the cache key generation logic and storage layer health.  
4. **Check external dependencies** (network latency, disk space, memory pressure).

**3️⃣ Step‑by‑step reasoning**  

| Step | Action | Why it matters |
|------|--------|----------------|
| A | Verify that the cache is actually *enabled* in production config. | Sometimes a flag disables caching for debugging. |
| B | Confirm the key derivation matches the expected format (e.g., canonical string, hash). | Mismatched keys cause misses even if identical prompts are sent. |
| C | Look at eviction policy & thresholds. Are items being purged too aggressively? | If cache size is too small or TTL too short, hits drop. |
| D | Inspect memory/disk usage and GC pauses. A full heap can trigger evictions or block writes. | Resource constraints often cause unseen cache failures. |
| E | Check for concurrent write‑conflicts: does a race condition clear the cache? | Race conditions can wipe entries before they’re used. |
| F | Run a controlled benchmark: send identical prompts repeatedly and record hit ratio. | Isolate whether the problem is systemic or workload‑specific. |

**4️⃣ Common traps to avoid**  
- *Assuming “hit” means “cache entry exists”* when the code might still recompute because of stale data.  
- *Overlooking key normalization* (case, whitespace, tokenization differences).  
- *Ignoring side‑effects of cache invalidation hooks* that may be firing too often.  
- *Misreading metrics*: a 20 % hit rate could be from a particular shard or time window.

**5️⃣ Sanity checks & communication**  

1. **Cross‑check** the hit/miss counters with an independent log (e.g., every request logs “cache_hit” flag).  
2. **Explain** to stakeholders: “We discovered that cache keys were being mangled by a recent refactor, causing 80 % of lookups to miss.”  
3. **Propose fixes**: update key generator, increase cache size, add unit tests for key consistency.  
4. **Verify** after patching: run the benchmark again; hit rate should approach the expected 90 %.  

By following this structured flow—clarify assumptions, apply a reproducible measurement cycle, diagnose each layer, avoid common misreads, and validate with independent checks—you’ll pinpoint why the prompt cache is underperforming and restore the desired hit rate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
