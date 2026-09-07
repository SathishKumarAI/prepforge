---
qid: ing_3ce0f3ac3d__faang__local
question: 'Explain: LRU (Least Recently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 670
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:28-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem*: We need a concise overview of the **Top 8 cache‑eviction policies** used in production systems (e.g., LRU, LFU, ARC…).  
*Assumptions to confirm*:  
- Cache is in-memory key–value store.  
- Eviction occurs when capacity is exceeded.  
- We care about hit‑rate and computational overhead.

---

**2️⃣ Approach**  
I’ll list each strategy, give a short definition, mention typical use‑cases, and note its time/space complexity. Then I’ll rank them by popularity in large‑scale systems (Meta→Google→Amazon).

---

**3️⃣ Depth**

| Rank | Strategy | What it tracks | Eviction rule | Typical use |
|------|----------|----------------|---------------|-------------|
| 1 | **LRU** | Recency of access | Remove least recently accessed key | General‑purpose caches (Redis, Memcached) |
| 2 | **LFU** | Frequency count | Remove lowest frequency item | Workloads with skewed hot items |
| 3 | **ARC** | Adaptive mix of LRU & LFU | Balances recency and frequency | Web proxy caches |
| 4 | **Random** | None | Random key | Very low‑overhead, when hit‑rate is acceptable |
| 5 | **FIFO** | Insertion order | Remove oldest inserted item | Simple eviction in embedded systems |
| 6 | **MRU** | Most recently used | Remove most recent (rarely) | Cache for write‑back buffers |
| 7 | **Hybrid LRU+LFU** | Recency + frequency buckets | Weighted score | Custom enterprise caches |
| 8 | **Time‑to‑Live (TTL)** | Expiry timestamp | Evict on expiration | CDN edge caches |

*Complexities*:  
- LRU: O(1) with doubly linked list & hashmap.  
- LFU: O(log n) if using a min‑heap; can be approximated in O(1).  
- ARC: O(1) amortized, but more memory overhead.

---

**4️⃣ Edge Cases**

| Scenario | Potential issue | Test |
|----------|-----------------|------|
| Hot key spikes | LFU may keep stale items | Simulate burst traffic |
| Long‑lived cache | TTL evicts too early | Vary TTL values |
| Small capacity | Random can hurt hit‑rate | Compare against LRU |

---

**5️⃣ Optimize & Communicate**

*Optimization*:  
- Use **clock‑algorithm** (lazy LRU) for lower overhead.  
- Combine **LFU with aging** to prevent frequency snowballing.

*Communication*:  
I’d present the table in a slide, then walk through an example request sequence showing how each policy reacts. Finally, I’d recommend starting with LRU and profiling hit‑rate; if skewed access appears, switch to LFU or ARC. This demonstrates structured thinking, depth of knowledge, and practical trade‑off awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
