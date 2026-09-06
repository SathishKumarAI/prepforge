---
qid: ing_b4099b41f8__fp__local
question: 'Explain: Timed Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 375
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:49-05:00'
sources: []
---

**Timed eviction in Guava’s Cache**

The fundamental problem is that a cache must limit memory use while keeping hot data accessible. In a *time‑based* policy we decide: “if an entry has not been accessed for **T** seconds, drop it.”  
Why this works?  
1. **Entropy of access patterns** – If the probability of accessing key *k* after time Δt is \(p_k(Δt)\), the *expected age* of a cached item equals \(\int_0^\infty Δt\, p_k(Δt)dΔt\). 2. **Cost–benefit trade‑off** – Keeping an entry incurs memory cost \(c\); serving it saves latency \(ℓ\). We evict when the expected benefit falls below the cost:  
   \[
   ℓ \int_{T}^{\infty} p_k(Δt)dΔt < c .
   \]
Guava implements this by maintaining a *logical clock* and recording each entry’s last‑access timestamp. When the cache size exceeds its maximum or when an eviction cycle runs, it scans entries whose age \(> T\) and removes them.  

**Non‑obvious insight:**  
Timed eviction is not a static “drop everything older than T” rule; Guava’s implementation uses *lazy eviction*. An entry is only checked when the cache needs space or during a scheduled cleanup thread. This avoids O(n) scans on every access, yet still guarantees that stale entries are purged within a bounded time—leveraging amortized analysis to keep per‑operation cost constant while satisfying the entropy‑based bound above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
