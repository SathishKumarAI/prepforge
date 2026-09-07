---
qid: ing_63efc1b766__faang__local
question: 'Explain: 6.1 Unique URL Generation — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 469
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:36:44-05:00'
sources: []
---

**Clarify**

We need a high‑scale service that turns long URLs into short, unique identifiers (e.g., `https://short.ly/abc123`).  
Assumptions:  
* Millions of requests per day, with peak traffic in the 10k/s range.  
* Each original URL should map to one canonical short code; duplicates can share the same code.  
* The system must be highly available and tolerant to node failures.  

**Approach**

1. **API Layer** – REST endpoints: `POST /shorten` (returns code) and `GET /{code}` (redirect).  
2. **Storage** – Use a distributed key‑value store (Cassandra/Redis) for mapping `code → longURL`.  
3. **Code Generation** – Generate a 6–8 char base‑62 string from an auto‑incrementing counter or hash; ensure idempotency by checking existence before insert.  
4. **Caching** – Hot codes cached in Memcached/Redis to reduce DB hits for redirects.  
5. **Load Balancing & Sharding** – Route requests via a front‑end LB (e.g., HAProxy) and shard the KV store by hash of code.  

**Depth**

*Time Complexity*: `O(1)` average for lookup; insertion also `O(1)` if counter is global.  
*Space*: 6–8 bytes per code + overhead.  
*Consistency*: Strong consistency via write‑through cache; eventual consistency acceptable for reads.  

**Edge Cases**

* Collisions: re‑hash or retry until unique.  
* Extremely long URLs (≥10 KB): store separately in object storage, keep pointer.  
* Throttling abuse: rate limit per IP/tenant.  

**Optimize & Communicate**

Future improvements:  
* Use a Bloom filter to quickly reject non‑existent codes before DB lookup.  
* Shard by code prefix for horizontal scaling.  
* Monitor hit/miss ratios to auto‑scale cache nodes.  

I’d present this flow diagrammatically, then walk through each component’s responsibilities and trade‑offs, ensuring interviewers see clear, modular design decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
