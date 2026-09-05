---
qid: ing_1df22e95de__star__local
question: 'Explain: TTL pseudocode examples — Caching strategies for Memcached - Amazon
  ElastiCache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 452
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:50-05:00'
sources: []
---

**Situation** – While leading the backend team at an e‑commerce startup, we hit a traffic spike of 3× during a flash sale. Our API response times rose from 120 ms to over 1 s because product data was being fetched from PostgreSQL on every request.

**Task** – I needed to design a caching layer that would reduce database load, keep latency under 200 ms, and automatically invalidate stale inventory records when stock changed.

**Action** – I chose Amazon ElastiCache with Memcached for its low‑latency key/value store. I wrote TTL pseudocode:

```
function getProduct(id):
    cacheKey = "product:" + id
    data = memcached.get(cacheKey)
    if data:
        return deserialize(data)

    // cache miss – hit DB
    data = db.query("SELECT * FROM products WHERE id=?", id)
    ttl  = computeTTL(data.stock)   // e.g., 60s if stock>0, else 5s
    memcached.set(cacheKey, serialize(data), ttl)
    return data

function updateStock(id, newQty):
    db.update("UPDATE products SET stock=? WHERE id=?", newQty, id)
    cacheKey = "product:" + id
    memcached.delete(cacheKey)      // force refresh on next read
```

I also implemented a “write‑through” strategy for inventory updates and used a “cache-aside” pattern for infrequently accessed categories. I set per‑region eviction policies (Least Recently Used) to keep memory usage under 80 % of the node capacity.

**Result** – After deployment, API latency dropped from 1 s to 140 ms, database queries fell by 75 %, and the flash sale handled 12k concurrent users without any timeouts. I learned that careful TTL tuning (based on business logic) and combining write‑through with cache-aside gives both freshness and performance in a distributed cache like ElastiCache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
