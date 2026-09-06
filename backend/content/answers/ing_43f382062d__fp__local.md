---
qid: ing_43f382062d__fp__local
question: 'Explain: Least Recently Used (LRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 640
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:30:27-05:00'
sources: []
---

**Least‑Recently Used (LRU)** is the canonical policy for deciding which entry in a finite buffer to discard when space runs out.  
At its core, LRU addresses the *predictive replacement problem*: we want to keep those items that are most likely to be referenced again soon. The policy assumes *temporal locality*—a reference pattern where recently accessed data is more probable to be reused than older data.  

To formalize this, imagine each cache line as a node in a doubly‑linked list ordered by last access time. When an item is used, we move it to the head; when space is needed, we evict the tail (the “least recently” accessed). This ordering implements a *greedy* strategy that minimizes the expected miss rate under the assumption of a Markovian request process with exponential inter‑arrival times—exactly the condition under which the optimal replacement is the item with the longest time since last use.  

**Why it must work this way:**  
1. **Optimality for independent references:** If each access is independent, the probability that an item will be referenced again before any other depends only on its age; thus LRU’s choice aligns with the maximum‑likelihood estimate of future hits.  
2. **Simplicity & locality:** The list operations are \(O(1)\), preserving cache‑line granularity and avoiding global scans.

**Non‑obvious insight:**  
LRU is *not* a perfect predictor for workloads with long‑range dependencies (e.g., streaming). In such cases, the “least recently used” item may still be needed imminently. A subtle fix is to augment LRU with *frequency counting* (LFU) or use a *stack distance* histogram to adapt the eviction threshold dynamically—turning a pure temporal policy into a hybrid that captures both recency and popularity.

---

**Other six strategies worth knowing:**

1. **First‑In, First‑Out (FIFO)** – evicts the oldest entry; simple but ignores access patterns.  
2. **Random Replacement (RR)** – picks any victim uniformly; surprisingly robust under high contention.  
3. **Least Frequently Used (LFU)** – evicts the item with fewest hits; captures long‑term popularity.  
4. **Clock (Second Chance)** – approximates FIFO but gives each entry a “second chance” flag.  
5. **Adaptive Replacement Cache (ARC)** – blends LRU and LFU, automatically tuning their weights.  
6. **Belady’s MIN** – theoretical optimum that evicts the item whose next reference is farthest in the future; unattainable in practice but useful as a benchmark.

Each strategy trades off *implementation cost*, *prediction accuracy*, and *sensitivity to workload characteristics*. LRU remains popular because it strikes a near‑optimal balance for many real‑world workloads while being trivial to implement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
