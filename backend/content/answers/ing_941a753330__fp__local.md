---
qid: ing_941a753330__fp__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 441
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:25-05:00'
sources: []
---

**Why a cache is essential**

A social‑media feed must deliver *millions* of posts per second with <50 ms latency.  
Reading the database for every request would force the DB to handle >10⁶ queries/s, which quickly saturates I/O and CPU.  
Caching solves two fundamental problems:

1. **Work‑load reduction** – The cache stores the *most frequently accessed* items (hot tweets).  
2. **Latency minimization** – Memory access is ~100× faster than disk.

---

### Deriving the design

| Step | Reasoning |
|------|-----------|
| **Identify hot data** | A user’s feed contains only a few hundred recent tweets; those are reused by many followers.  Hence we cache *per‑user feeds* rather than every tweet. |
| **Choose an eviction policy** | Feeds change frequently (new tweets push old ones out). LRU or LFU guarantees that the newest, most replayed items stay while stale ones drop away. |
| **Determine consistency model** | Strict consistency is unnecessary; eventual consistency (write‑through + TTL) keeps reads fast and tolerates brief staleness. |
| **Select storage layer** | Redis or Memcached offers sub‑millisecond lookups and built‑in eviction. |
| **Scale horizontally** | Partition feeds by user hash → each cache node handles ~10⁴ users, keeping memory per node bounded. |

---

### Non‑obvious insight

> **“Cache the *output* of a computation, not just raw data.”**  
For Twitter, the feed is a *computed list* (merge of followers’ tweets, apply ordering). Caching that pre‑merged result yields far higher hit ratios than caching individual tweet rows, because each read serves an entire user’s experience in one hit. This aligns with the principle of *pre‑computation + memoization*, turning a repeated O(n log n) merge into O(1) lookups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
