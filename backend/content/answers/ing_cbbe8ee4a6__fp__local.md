---
qid: ing_cbbe8ee4a6__fp__local
question: When Does Cleanup Happen? — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 413
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:13:20-05:00'
sources: []
---

**When does a Guava cache purge its entries?**  
At first glance it seems like a simple “evict‑when‑full” rule, but the real answer emerges from *optimal resource allocation* in an uncertain workload.

1. **Fundamental problem** – A cache must keep useful data while respecting memory limits and latency guarantees.  
2. **Why size‑only eviction fails** – In bursty traffic a single hot key can dominate the table for minutes, starving others even though the overall hit ratio is high.  
3. **Guava’s solution** – Treat each entry as a *resource* with an implicit “value” (hit rate) and a *cost* (memory). The cache runs a lightweight *least‑recently‑used* (LRU) sweep when either:
   - **Capacity exceeded**: the total size of all entries > `maximumSize`.  
   - **Time‑to‑idle elapsed**: an entry has not been accessed for longer than `expireAfterAccess` (or, if configured, `expireAfterWrite`).  

4. **Why LRU + time works** – LRU approximates the optimal offline eviction policy (Belady’s algorithm) under realistic access patterns; adding a timeout guarantees that stale data never linger indefinitely, even if it was recently inserted but never read.

5. **Non‑obvious insight** – The *combination* of size and time thresholds is not arbitrary: the cache implicitly solves a **continuous knapsack problem** where each entry’s weight is its size and its value decays over time. By evicting the “cheapest” items first, Guava balances memory pressure against recency without complex statistics.

In short, cleanup triggers on either a capacity breach or an idle‑time violation, ensuring that the cache remains both space‑efficient and responsive to current usage patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
