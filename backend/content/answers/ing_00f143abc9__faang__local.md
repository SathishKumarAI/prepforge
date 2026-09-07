---
qid: ing_00f143abc9__faang__local
question: 'Explain: Negative Caching — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 441
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:36-05:00'
sources: []
---

**Clarify**

We’re asked how Uber’s “Negative Caching” lets it read ~40 M requests/second from online storage.  
Assumptions to confirm: (1) the data is highly skewed, many reads hit a small hot set; (2) the cache is integrated with an object store (e.g., S3); (3) the system tolerates eventual consistency.

**Approach**

Explain the problem of cold‑start misses in a key‑value cache, then describe negative caching: storing *absence* markers for missing keys. Outline the data flow—request → distributed cache → fallback to online storage if miss; cache writes “negative” entries on 404s. Highlight how this reduces repeated store lookups.

**Depth**

- **Cache hit:** O(1) read from memory (Redis/etcd).  
- **Negative hit:** immediate 404, no store query.  
- **Positive miss:** fetch from storage, return data, write to cache.  
- **Eviction policy:** LRU with a separate TTL for negatives (shorter than positives).  
- **Consistency:** On updates, invalidate or refresh both positive and negative entries.  
Complexity: O(1) per request; memory overhead is proportional to the number of unique missing keys, which is far less than total key space.

**Edge Cases**

- *Burst traffic on a previously missing key* → many negative hits until first positive fetch completes.  
- *Stale negatives after data creation* → need cache invalidation or TTL expiry.  
- *Cache partition failure* → fallback to storage but may overload it temporarily.

**Optimize & Communicate**

By caching negatives, Uber cuts 90‑+% of unnecessary store lookups for unpopular keys, enabling the cache layer to absorb most traffic and keeping read latency low. I’d present this as a trade‑off: minimal extra memory for negative entries versus huge savings in storage I/O. This explains how 40 M RPS is sustainable while keeping consistency guarantees acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
