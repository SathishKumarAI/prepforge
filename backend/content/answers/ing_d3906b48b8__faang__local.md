---
qid: ing_d3906b48b8__faang__local
question: 'Explain: First In, First Out (FIFO) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 732
total_tokens: 975
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:08-05:00'
sources: []
---

**Clarify**  
You want a concise rundown of the seven most common FIFO‑style cache eviction policies and why each is useful. Assume we’re talking about an in‑memory key/value store (e.g., Redis, Memcached) with limited capacity.

---

### 1️⃣ First In, First Out (FIFO)
* **What it does** – evicts the oldest entry added to the cache.
* **When to use** – simple workloads where all items are roughly equal in value and you want deterministic eviction order.
* **Complexity** – O(1) insert & delete using a queue.

### 2️⃣ Least Recently Used (LRU)
* **What it does** – removes the entry that hasn’t been accessed for the longest time.
* **When to use** – read‑heavy workloads; keeps hot data in cache.
* **Complexity** – O(1) with a hash map + doubly linked list (e.g., `LinkedHashMap`).

### 3️⃣ Least Frequently Used (LFU)
* **What it does** – evicts the entry accessed the fewest times.
* **When to use** – workloads where access frequency is more predictive than recency.
* **Complexity** – O(log n) with a min‑heap or O(1) with a counter‑bucket structure (e.g., `LFUCache`).

### 4️⃣ Most Recently Used (MRU)
* **What it does** – evicts the entry that was accessed most recently.
* **When to use** – cache of “pre‑fetch” data where the newest items are likely to be invalidated soon.

### 5️⃣ Random Replacement (RR)
* **What it does** – picks a random item for eviction.
* **When to use** – very low‑overhead, when uniform access patterns make sophisticated heuristics unnecessary.

### 6️⃣ Segmented LRU (SLRU)
* **What it does** – divides cache into “protected” and “probationary” segments; items move from probationary to protected after repeated hits.
* **When to use** – large caches where a small set of data dominates hit rates; balances LRU with a “soft‑warmup” phase.

### 7️⃣ Clock (Second Chance)
* **What it does** – circular buffer with reference bits; items get a second chance before eviction.
* **When to use** – low‑memory overhead approximation of LRU on hardware/embedded caches.

---

#### Edge Cases & Testing
| Case | Why it matters |
|------|----------------|
| Sudden spike in unique keys | FIFO may evict hot data; LFU/LRU safer. |
| Cache size < number of distinct items | All policies will thrash; consider pre‑fetch or larger cache. |
| Write‑heavy workloads | MRU can reduce write amplification if new writes are transient. |

#### Optimization & Communication
* **Hybrid** – e.g., SLRU + LFU for read/write balance.
* **Monitoring** – expose hit/miss ratios per policy to auto‑tune thresholds.
* **Narrative** – “We start with FIFO for its simplicity, but in production we observe that LRU yields a 30 % higher hit rate on our user profile cache. Switching to SLRU further improves cold‑start performance.”

This cheat‑sheet gives interviewers a clear, structured overview of FIFO‑style eviction strategies and the trade‑offs each entails.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
