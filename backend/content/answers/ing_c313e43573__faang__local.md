---
qid: ing_c313e43573__faang__local
question: 'Explain: Cache Aside — Top 6 Data Management Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 617
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:14:34-05:00'
sources: []
---

**Clarify**  
The interviewer asks for the six most common data‑management patterns used with caching, specifically “Cache Aside.” I’ll confirm they mean *in‑memory* caches (e.g., Redis) and that we should explain each pattern’s purpose, when it applies, and its trade‑offs.

---

### 1. Cache Aside  
**What:** Application loads data from the database; if miss, fetches from DB, stores in cache, then returns. On write, invalidate or update cache first.  
**When:** Read‑heavy workloads where stale data is acceptable for a short window.  

### 2. Read‑Through (Cache‑Read)  
**What:** Cache intercepts read requests; if miss, it automatically loads from DB and populates itself.  
**When:** Simplifies client code; good when reads dominate and writes are rare.

### 3. Write‑Through (Cache-Write)  
**What:** Writes go to cache first, which immediately persists to the underlying store.  
**When:** Strong consistency required for write paths; lower read latency but higher write cost.

### 4. Write‑Behind (Cache‑Write‑Back)  
**What:** Cache accepts writes and asynchronously flushes them to DB later.  
**When:** High write throughput, acceptable eventual consistency; reduces write latency.

### 5. Lazy Loading / Expiration  
**What:** Items are loaded on demand and expire after a TTL or eviction policy (LRU/LFU).  
**When:** Useful for infrequently accessed data; keeps memory bounded.

### 6. Cache Invalidation Strategy  
**What:** Explicitly remove or update cache entries when underlying data changes (event‑driven, pub/sub, or time‑based).  
**When:** Needed to avoid stale reads in any pattern that writes directly to DB.

---

**Depth**  
- *Cache Aside* requires careful handling of race conditions: use atomic “get‑set” or distributed locks if multiple instances might populate the same key simultaneously.  
- Complexity: O(1) cache ops; database hits only on misses, so average latency ≈ cache latency + (miss × DB latency).  
- Trade‑offs: higher read speed vs potential staleness; write path becomes a bottleneck when invalidating.

**Edge Cases**  
- Cache miss storms during key creation → use *distributed lock* or *“cache stampede”* guard.  
- Partial failures: if cache down, fallback to DB directly.  
- TTL misconfiguration leading to “thundering herd” at expiry.

**Optimize & Communicate**  
I’d recommend a hybrid: Cache Aside for reads with high variance, Write‑Through for critical writes, and a background worker that periodically refreshes hot keys (prewarming). I’d explain this as balancing consistency, latency, and throughput while keeping code maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
