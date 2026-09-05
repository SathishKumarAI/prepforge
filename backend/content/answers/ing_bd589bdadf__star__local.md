---
qid: ing_bd589bdadf__star__local
question: 'Explain: When to use Memcached — Memcached vs Redis - #!/DevDude/'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 373
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:40-05:00'
sources: []
---

**Situation:**  
In a recent e‑commerce launch, our recommendation engine was hitting the database at ~20 k requests per second during flash sales. The latency kept creeping above 300 ms and we risked losing conversions.

**Task:**  
I had to reduce read latency for user preference data while keeping consistency high enough that stale recommendations didn’t show up.

**Action:**  
I compared Memcached and Redis. Memcached is pure in‑memory key/value, no persistence or advanced data types; it’s great for simple, high‑throughput caching of immutable objects. Redis offers persistence, pub/sub, Lua scripting, and atomic operations—useful if we needed to update counters or maintain a sorted list of top items.

I chose Memcached because our cache keys were short strings (user ID → JSON preferences) and the data could be regenerated from the DB if lost. I set up 8 nodes in a cluster, used consistent hashing with `memcachep` library, and added key TTLs of 10 minutes to keep memory usage bounded. For the rare case where an update was needed (e.g., when a user changes preferences), we wrote back to Redis as a “write‑through” cache that also maintained a small set of hot items for analytics.

**Result:**  
Cache hit rate jumped from 45 % to 92 %, reducing average latency from 300 ms to under 30 ms. Page load times improved by ~15 %, and we saw a 4 % lift in conversion during peak traffic. I learned that choosing the right cache depends on data volatility, required features, and consistency guarantees; Memcached is often the lightweight first line of defense, while Redis shines when you need richer semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
