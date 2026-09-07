---
qid: ing_a9af737fb1__faang__local
question: 'Explain: Write-through pseudocode example — Caching strategies for Memcached
  - Amazon ElastiCache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 544
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:18:45-05:00'
sources: []
---

**Clarify**  
The interviewer wants a **write‑through cache** example using Amazon ElastiCache (Memcached).  
Assumptions:  
- Data lives in an RDS/PostgreSQL DB.  
- Cache key = “user:{id}”.  
- We need atomicity between cache and DB writes.  

**Approach**  
1. On write, update the DB first.  
2. If DB succeeds, invalidate or refresh the cache entry.  
3. Return success to caller.  

This guarantees that the cache never contains stale data while keeping write latency low by avoiding a second DB round‑trip for every read.

**Depth (Pseudocode)**

```python
def update_user(user_id: str, new_profile: dict) -> bool:
    # 1️⃣ Update persistent store
    try:
        db.execute(
            "UPDATE users SET profile = :p WHERE id = :id",
            {"p": json.dumps(new_profile), "id": user_id}
        )
    except DBError as e:
        log.error(f"DB write failed: {e}")
        return False

    # 2️⃣ Refresh cache (write‑through)
    try:
        memcached.set(
            f"user:{user_id}",
            new_profile,
            ttl=86400          # 1 day
        )
    except CacheError as e:
        log.warn(f"Cache update failed: {e}")
        # Cache miss is acceptable; next read will populate it

    return True
```

**Edge Cases**  
- *Network partition*: if cache write fails, the DB remains consistent; reads fall back to DB.  
- *High contention*: repeated writes for same key may thrash the cache; consider using a “write‑back” or batching strategy.  
- *Cache evictions*: TTL ensures eventual consistency even after eviction.

**Optimize & Communicate**  
- Use **pipelines/transactions** in Memcached to batch multiple key updates if needed.  
- Log cache failures separately to monitor cache health without affecting user experience.  
- For ultra‑low latency, consider a **read‑through** fallback: on cache miss, load from DB and populate cache asynchronously.

This pattern gives strong consistency for writes while still leveraging the speed of ElastiCache for reads—exactly what FAANG teams expect in a production‑grade caching strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
