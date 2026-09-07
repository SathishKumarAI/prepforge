---
qid: ing_c4fb41b0c6__faang__local
question: 'Explain: Load Balancer — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 575
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:18:52-05:00'
sources: []
---

**Clarify**  
We need a highly‑available, horizontally scalable URL shortener that can handle millions of requests per day with low latency and minimal failure. Key assumptions:  

* Short URLs map 1:1 to long URLs; collisions are unacceptable.  
* Reads vastly outnumber writes (≈95% reads).  
* Users may request statistics or custom aliases.  
* We must support graceful scaling, eventual consistency for stats, and strong read‑after‑write guarantees for the core mapping.

**Approach**  

1. **Front‑end**: Global CDN + HTTP load balancer (AWS ALB/CloudFront) to route traffic to regional edge nodes.  
2. **Shortening service**: Stateless API servers behind a container cluster; use consistent hashing of user ID + counter → base‑62 token.  
3. **Storage**: Two tiers – a hot key–value store (Redis or DynamoDB with LRU) for recent/active URLs, and a cold persistent store (Cassandra/RDS) for all mappings.  
4. **Write path**: Generate token → write to both stores; use idempotent writes to avoid duplicates.  
5. **Read path**: Cache‑first lookup; on miss, fallback to persistent store and populate cache.  
6. **Redirection**: Edge nodes redirect (302) directly from cache or fetch from DB if needed.  

**Depth**  

* Token generation uses a global counter sharded by region; collisions avoided via atomic increment.  
* Consistency: Reads use “read‑your‑writes” semantics by checking the local cache first, then the DB with read‑repair on miss.  
* Complexity: O(1) for reads (cache hit), O(log N) for writes to Cassandra.  
* Failure handling: If a region fails, traffic reroutes via ALB; data replicated across zones.

**Edge Cases**  

* Concurrent creation of the same custom alias → lock per key or optimistic concurrency with version check.  
* Token exhaustion → switch alphabet or introduce longer tokens.  
* Cache stampede on hot URL → use cache‑aside locking (e.g., Redis SETNX).

**Optimize & Communicate**  

- **Performance**: Increase cache hit ratio by pre‑warming popular URLs during off‑peak.  
- **Cost**: Use serverless functions for low‑traffic regions; autoscale clusters based on request rate.  
- **Observability**: Instrument latency, cache miss rates, and replication lag; alert on anomalies.  

Narrate the design as a layered system where each component addresses a single failure mode, keeping the overall architecture simple yet robust enough for FAANG scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
