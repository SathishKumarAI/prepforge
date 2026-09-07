---
qid: ing_43f382062d__faang__local
question: 'Explain: Least Recently Used (LRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 702
total_tokens: 944
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:22:36-05:00'
sources: []
---

**Least‑Recently Used (LRU)**  
*The classic cache replacement algorithm that evicts the entry that has gone unused for the longest time.*

---

### 1️⃣ Clarify  
We’re asked to explain LRU *and* list seven other eviction policies. Assume we’re discussing in‑memory caches (e.g., web proxy, database buffer). We need to highlight when each strategy is useful and what trade‑offs they entail.

### 2️⃣ Approach  
- Define LRU’s core idea and data structures.  
- Enumerate six additional strategies: FIFO, LFU, MRU, Random, Clock, ARC/Hybrid.  
- For each, mention typical use‑cases and pros/cons.  
- Keep the explanation concise yet complete.

### 3️⃣ Depth  

| Strategy | Principle | Typical Use‑Case | Pros | Cons |
|----------|-----------|------------------|------|------|
| **LRU** | Evict entry least recently accessed. | Working‑set workloads, page replacement. | Good hit‑rate for locality. | Requires O(1) update (hash + linked list). |
| **FIFO** | First‑in, first‑out. | Simple buffers where order of arrival matters. | Very cheap to implement. | Ignores access frequency; poor hit‑rate in many workloads. |
| **LFU** | Evict least frequently used. | Long‑term caching (e.g., CDN). | Captures popularity over time. | Needs counters → memory overhead; stale hot items may stay. |
| **MRU** | Most recently used first. | LRU “anti‑pattern” workloads (e.g., prefetching). | Avoids re‑caching data that just left the cache. | Rarely optimal for typical locality patterns. |
| **Random** | Pick a random entry to evict. | When access pattern is unpredictable or uniform. | Extremely cheap; no bookkeeping. | Hit‑rate can be sub‑optimal compared to LRU/LFU. |
| **Clock (Second Chance)** | Approximate LRU with reference bits and a rotating hand. | Operating‑system page replacement. | Near‑LRU performance, low overhead. | Still requires periodic scans. |
| **ARC / LIRS** | Adaptive Replacement Cache: balances LRU & LFU dynamically. | Highly variable workloads (web, OS). | Self‑tuning; good across diverse patterns. | More complex to implement and tune. |

### 4️⃣ Edge Cases  
- **Small cache size** → Random may outperform sophisticated policies because overhead dominates.  
- **Highly skewed access patterns** → LFU or ARC shine; LRU may evict hot items too early.  
- **Bursty workloads** → MRU can help if the burst is a transient “hot” period.

### 5️⃣ Optimize & Communicate  
When explaining, emphasize that choosing an eviction policy is *context‑dependent*: look at locality, access skew, memory overhead, and implementation cost. Frame LRU as a solid default; recommend evaluating LFU or ARC when profiling shows strong popularity trends. Conclude by noting that real systems often mix strategies (e.g., LRU for hot tier, Random for cold tier) to balance performance and simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
