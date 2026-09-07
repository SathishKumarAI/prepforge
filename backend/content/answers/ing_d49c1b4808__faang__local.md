---
qid: ing_d49c1b4808__faang__local
question: 'Explain: TTL (Time-to-Live) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 682
total_tokens: 922
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:25-05:00'
sources: []
---

**Clarify**  
You’re asking for the eight most common cache‑eviction policies used when a cache reaches capacity, and how TTL (Time‑to‑Live) fits into them.

**Approach**  
1. List each policy.  
2. Explain its working principle.  
3. Show how TTL can be combined or replaced by each strategy.  
4. Note complexity & trade‑offs.

**Depth**  

| # | Policy | Mechanism | TTL Interaction | Complexity |
|---|--------|-----------|-----------------|------------|
| 1 | **Least Recently Used (LRU)** | Evict entry whose last access time is oldest. | TTL can be added as a secondary check: if expired, evict immediately before LRU. | O(1) with linked hash map |
| 2 | **Least Frequently Used (LFU)** | Evict entry accessed least often. | Expired items bypass frequency count. | O(log n) with min‑heap or O(1) with counter buckets |
| 3 | **First In First Out (FIFO)** | Evict oldest inserted item. | TTL can pre‑empt FIFO order; expired entries removed on read/write. | O(1) with queue |
| 4 | **Random Replacement (RR)** | Pick a random entry to evict. | TTL simply discards expired items when accessed. | O(1) |
| 5 | **Most Recently Used (MRU)** | Evict most recently accessed item. | TTL can override MRU if an entry has expired earlier. | O(1) |
| 6 | **Time‑Based Expiration** | Each entry stores absolute expiry; eviction occurs when the timestamp is surpassed. | This *is* TTL. | O(n) to scan, or O(log n) with a min‑heap of expiries |
| 7 | **Size‑Aware Eviction (e.g., LRU‑K)** | Evicts based on both recency and size; can evict multiple entries to free space. | Expired items are removed first; TTL reduces the number of candidates. | O(1) per eviction |
| 8 | **Hybrid Policies (e.g., ARC, CAR)** | Combine LRU & LFU or adaptive replacement based on hit/miss statistics. | TTL can be applied uniformly to all cache lines before policy decision. | O(1) amortized |

**Edge Cases**  
- Clock skew: ensure clock monotonicity when using TTL.  
- High churn: random or MRU may degrade performance if writes dominate reads.  
- Large objects: size‑aware eviction prevents thrashing.

**Optimize & Communicate**  
In production, start with **LRU + TTL** (fast, low overhead). If read patterns become skewed, switch to **LFU** or a hybrid like **ARC** while keeping TTL as the primary expiration guard. Explain that TTL acts as a safety net—expired items are purged on access regardless of policy—so it never conflicts but simply short‑circuits eviction decisions. This layered approach balances freshness (TTL) with hit‑rate optimization (policy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
