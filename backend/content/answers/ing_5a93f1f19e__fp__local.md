---
qid: ing_5a93f1f19e__fp__local
question: 'Explain: Most Recently Used (MRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 754
total_tokens: 933
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:16:52-05:00'
sources: []
---

**Why a cache needs an eviction rule**

A cache holds only a fixed number of items; when it’s full we must decide *which* entry to drop so that the next request is most likely to hit.  
Formally, for a sequence \(r_1,r_2,\dots\) and cache size \(k\), we want an algorithm minimizing misses—an online minimization problem. Each strategy can be seen as a greedy approximation to the optimal offline solution (Belady’s MIN).

---

### 1. **Least‑Recently Used (LRU)**  
*Greedy*: evict the entry whose last access is furthest in the past.  
**Principle:** recent use predicts near‑future use—captured by *temporal locality*.  
**Insight:** LRU is optimal for “stack” models where each new reference creates a stack of items; but it can be suboptimal when accesses are bursty.

### 2. **Least‑Frequently Used (LFU)**  
Evict the item with the smallest hit count.  
**Principle:** *frequency* reflects long‑term popularity—an information‑theoretic estimate of entropy.  
**Insight:** Without aging, LFU favours items that were popular early but may now be stale; thus a decay factor is essential.

### 3. **Most‑Recently Used (MRU)**  
Opposite of LRU: evict the item accessed most recently.  
**Principle:** In workloads with *anti‑locality* (e.g., large, streaming files where each block is used once), the newest entry will never be reused soon.  
**Insight:** MRU shines when access patterns are “streaming” or “random walk” rather than clustered.

### 4. **Random Replacement (RAND)**  
Choose a victim uniformly at random.  
**Principle:** Simplicity; under certain probabilistic models it matches LRU’s expected miss rate.  
**Insight:** RAND requires no metadata overhead, making it attractive for high‑speed hardware caches.

### 5. **First‑In‑First‑Out (FIFO)**  
Evict the oldest entry in insertion order.  
**Principle:** A simple queue; useful when insert order correlates with reuse probability.  
**Insight:** FIFO can suffer from “stale” entries that were recently inserted but never reused.

### 6. **Clock (Second‑Chance)**  
Approximate LRU using a circular buffer and reference bits.  
**Principle:** Reduce overhead of exact timestamp tracking while still favouring recent items.  
**Insight:** The clock hand’s motion embodies a *Markov* approximation to true temporal locality.

### 7. **Adaptive Replacement Cache (ARC)**  
Maintains two LRU lists—one for recently used, one for frequently used—and dynamically balances them.  
**Principle:** Combines LRU and LFU strengths; adapts to workload shifts.  
**Insight:** ARC’s *tuning parameter* automatically learns the optimal mix without manual calibration.

---

**Non‑obvious takeaway:**  
All these strategies are greedy approximations of an NP‑hard offline optimum (Belady). The key is *what locality property the workload exhibits*. A strategy that works for a web server may fail on a scientific simulation because their access patterns inhabit different regions of the locality spectrum. Understanding the underlying principle lets you pick—or design—a cache policy that truly fits the data, not just the algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
