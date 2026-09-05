---
qid: ing_31fe76f49a__fp__local
question: 'Explain: Cache Keys — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 469
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:59-05:00'
sources: []
---

### Why a CDN needs “cache keys”

A CDN’s job is to serve *requests* as fast and cheaply as possible.  
Each request arrives with two immutable attributes:

1. **URI** (the path or query string that identifies the resource)
2. **Cache‑control headers** (which may alter validity)

The system must decide, for every incoming HTTP request, whether it can reply from a local store or must fetch the object from an origin.  
That decision is a *lookup*: “Does this exact tuple already exist in the cache?” If we had to scan all cached objects each time, latency would be linear in cache size—impossible at CDN scale.

Hence we compress the request into a **cache key** – a compact fingerprint that uniquely maps to one cache entry.  
The key is built from the URI (often a hash of it) and any cache‑controlling metadata. The hash guarantees:

* **Uniform distribution** → even spread across storage nodes
* **Determinism** → same request always yields the same key
* **Fast equality test** → O(1) lookup in hash tables or distributed hash rings

### Deeper principle: locality of reference + hashing

The cache is an *approximate set* that stores the most frequently accessed items.  
Hashing turns high‑dimensional request data into a low‑dimensional index, preserving **locality**: requests for the same resource collide on the same key and therefore share the same storage slot. This aligns with the *Least Recently Used (LRU)* eviction strategy—items whose keys are accessed rarely will naturally fall out of the hash table.

### Non‑obvious insight

Many people think a CDN simply “stores everything by URL.”  
In reality, **cache keys must also encode cache‑control directives** (e.g., `Vary: Accept-Encoding`). Two requests with identical URLs but different headers produce distinct keys; otherwise the CDN would incorrectly serve a gzip‑compressed object to an uncompressed client. Thus, the key is not just an identifier—it’s a *semantic contract* between request and stored representation, ensuring correctness while preserving lookup efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
