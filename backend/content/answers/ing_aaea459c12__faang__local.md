---
qid: ing_aaea459c12__faang__local
question: 'Explain: FIFO (First In First Out) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 627
total_tokens: 867
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:22:02-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise comparison of the eight most common cache‑eviction policies that follow FIFO semantics: First‑In‑First‑Out and its variants used in real systems (e.g., LRU, LFU, ARC). We’ll assume a fixed‑size, write‑back cache with key/value entries.

**Approach**  
1. Enumerate the strategies.  
2. For each, describe the eviction rule, data structures, time/space complexity, and typical use case.  
3. Highlight trade‑offs (hit ratio vs overhead).

**Depth**  

| Policy | Eviction Rule | Data Structure | Complexity | Use Case |
|--------|---------------|----------------|------------|----------|
| **FIFO** | Remove oldest entry in insertion order | Queue (linked list) | O(1) insert/evict | Simple hardware caches, low‑overhead systems |
| **LRU** | Evict least recently used | Doubly linked list + hash map | O(1) access & update | Web browsers, OS page tables |
| **LFU** | Evict least frequently used | Frequency buckets + min‑heap | O(log N) per hit | Workloads with skewed access patterns |
| **ARC** (Adaptive Replacement Cache) | Dynamically balances LRU/LFU | Two LRU lists + ghost cache | O(1) amortized | Systems needing self‑tuning between recency & frequency |
| **CLOCK** | Approximate LRU using reference bits | Circular buffer | O(1) per access | Operating‑system page replacement (low cost) |
| **Random** | Evict a random entry | Array or list | O(1) | When simplicity outweighs hit ratio |
| **LRU-K** | Evict based on K‑th most recent reference | Multi‑level lists | O(log N) | Workloads with bursty access patterns |
| **Segmented LRU (SLRU)** | Separate hot & cold segments, promote/demote | Two queues + promotion logic | O(1) | Database buffer pools |

**Edge Cases**  
- **Cold start**: FIFO may thrash if the first batch is rarely reused.  
- **Write‑back contention**: LRU may evict dirty pages causing expensive flushes.  
- **Memory constraints**: Random policy uses minimal bookkeeping but can hurt hit ratios.

**Optimize & Communicate**  
Explain that choosing a policy depends on workload characteristics and system constraints. For instance, if recency is critical (web cache), pick LRU; for highly skewed data, LFU or ARC may yield better hit rates. Emphasize the importance of profiling before deployment and that hybrid strategies (e.g., ARC) often provide robust performance with modest overhead. This structured response demonstrates clear problem framing, systematic evaluation, and depth—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
