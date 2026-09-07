---
qid: ing_680a51a276__faang__local
question: 'Explain: Indexes — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 427
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:45:45-05:00'
sources: []
---

**Clarify**  
You’re building a URL‑shortening service (e.g., bit.ly). The core requirement: given a long URL, generate a unique short key; on lookup, redirect to the original. I’ll assume: high read/write throughput, minimal latency, eventual consistency for writes, and 1 GB of storage per day.

**Approach**  
1. **Key Generation** – base‑62 encode an auto‑incrementing counter or use a hash (SHA‑256) + truncate.  
2. **Storage Layer** – a key/value store (e.g., DynamoDB/Bigtable) where *key* = short code, *value* = original URL + metadata.  
3. **Cache** – LRU cache (Redis) for hot URLs to reduce read latency.  
4. **Indexing** – secondary index on the original URL to prevent duplicates and support “lookup by long URL”.  

**Depth**  
- *Write path*: generate code → write to DB → update cache. Amortized O(1).  
- *Read path*: check cache (O(1)); if miss, fetch from DB (O(log n)).  
- Secondary index uses a hash table; lookup by long URL is also O(1).  
Trade‑offs: auto‑incrementing counter risks predictability; hashing reduces that but may collide—handle with collision resolution or UUID fallback.

**Edge Cases**  
- Duplicate URLs → return existing code.  
- Key collisions → retry with new code.  
- High traffic burst → scale cache horizontally.  
- Data loss in DB → use replication & backups.

**Optimize & Communicate**  
- Shard the DB by key prefix to balance load.  
- Use CDN edge caches for redirects, cutting RTT.  
- Periodically prune unused URLs (TTL).  
I’d explain each layer’s purpose, show complexity numbers, and walk through a request flow to demonstrate clear, structured reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
