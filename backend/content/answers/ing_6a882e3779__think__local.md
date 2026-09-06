---
qid: ing_6a882e3779__think__local
question: 'Explain: Docstore Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 442
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:04:05-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What* exactly is “Docstore” (Uber’s document‑store service)?  
   - *Why* focus on reads per second?  
   - Assume we’re dealing with a horizontally scalable key‑value store backed by S3‑style object storage, with an in‑memory cache layer.  

**2️⃣ Adopt a layered mental model**  
   1. **Persistence layer** – immutable objects in cloud storage (S3/Blob).  
   2. **Cache tier** – distributed memory caches (Redis, Memcached, or custom).  
   3. **Metadata & routing** – service discovery, sharding keys, and load‑balancing.  

**3️⃣ Step‑by‑step reasoning**  
   - *Read path*: client → request router → cache lookup → hit → serve; miss → fetch from storage, populate cache, then serve.  
   - *Cache sizing*: estimate hot set size (~10–20 % of total docs) to keep latency low.  
   - *Eviction policy*: LRU or LFU tuned for read‑heavy workloads.  
   - *Consistency*: eventual consistency via write‑through cache updates and background syncs.  

**4️⃣ Common pitfalls to avoid**  
   - Over‑optimistic hit rates → under‑provisioned cache.  
   - Cache stampedes when many clients miss simultaneously.  
   - Ignoring object metadata (ETags) leading to stale reads.  

**5️⃣ Sanity checks & verbalizing the answer**  
   - Verify that read latency stays < 10 ms even at 40M RPS.  
   - Confirm cache hit ratio > 90 % in production dashboards.  
   - Explain how writes update both cache and storage atomically to preserve consistency.  

By walking through these steps, you’ll be able to articulate how Uber’s Docstore achieves massive read throughput with an integrated caching strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
