---
qid: ing_9c198b2e2b__think__local
question: 'Explain: Introduction — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 588
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:23:18-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- *What is “reads per second” referring to?* Assume it means data fetch operations from persistent storage (e.g., S3, HDFS).  
- *Which “online storage” is used by Uber?* Likely a distributed object store or key‑value store.  
- *What does “integrated cache” mean?* A caching layer that sits between the application and storage, tightly coupled to the data service.

**2️⃣ Mental model / framework**  
Use the classic **cache–storage hierarchy**:  
1. Application → 1) In‑memory LRU/ARC cache (e.g., Memcached, Redis).  
2. If miss → 2) Distributed read‑through layer (e.g., DynamoDB, Cassandra).  
3. If miss → 3) Object store or file system.  
Also consider **write‑back vs write‑through** policies and how Uber’s use‑case (ride requests, ETA calculations) drives consistency needs.

**3️⃣ Step‑by‑step reasoning**  
1. Estimate traffic: 40 M reads/s ≈ 2.5 B reads/day → requires sub‑millisecond latency.  
2. Compute cache hit ratio needed to offload storage: if storage can serve 10 kRPS, need ~99.975% hits.  
3. Design a sharded in‑memory cache (hundreds of nodes) with consistent hashing to avoid hotspots.  
4. Integrate the cache into Uber’s microservice stack so every read goes through the cache first; on miss, fetch from storage and populate cache asynchronously.  
5. Use metrics (latency, hit/miss ratios) to auto‑scale cache nodes.

**4️⃣ Common traps to avoid**  
- *Assuming a single cache layer is enough:* Uber’s traffic spikes require multiple tiers.  
- *Ignoring write consistency:* A read‑through cache can return stale data if writes aren’t coordinated.  
- *Underestimating cold‑start latency:* New keys must be prefetched or cached lazily to avoid “cache miss storms.”  
- *Neglecting eviction policies:* Poor eviction leads to thrashing and reduced hit ratio.

**5️⃣ Sanity‑check & verbalize**  
- Verify numbers: 40 M reads/s ÷ 1000 nodes ≈ 40kRPS per node → within Redis limits.  
- Check consistency: ensure write‑through or explicit invalidation on updates.  
- Communicate: “Uber’s architecture uses a highly sharded in‑memory cache as the first line of defense, backed by a distributed storage layer; this combination lets them sustain 40 M reads/s while keeping latency sub‑millisecond.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
