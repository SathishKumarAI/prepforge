---
qid: ing_c3ed95f33c__faang__local
question: 'Explain: Step 2: Create a high level design — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 486
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:16:34-05:00'
sources: []
---

**Clarify**  
You’re asked to explain the second step in a typical system‑design interview: *“Create a high‑level design.”*  
Assumptions I’d confirm:  
1. We’re designing a scalable, fault‑tolerant service (e.g., a social media feed).  
2. The interviewer expects a diagram and component list, not code.  

**Approach**  
1. **Identify core requirements** – latency, throughput, consistency, availability.  
2. **Define the major subsystems** – client API, load balancer, request router, data store, cache, background workers.  
3. **Sketch a diagram** – show traffic flow and data paths.  
4. **Explain trade‑offs** for each component choice (e.g., NoSQL vs RDBMS).  

**Depth**  
- *Client API*: REST/GraphQL over HTTPS, versioned endpoints.  
- *Load Balancer*: Layer 4 LB with health checks; use sticky sessions if needed.  
- *Router*: Sharded request router that routes by user ID to the correct data shard.  
- *Data Store*: Partitioned PostgreSQL for ACID guarantees on writes; read‑optimized Redis cache per shard.  
- *Cache Eviction*: LRU with write‑through to DB.  
- *Background Workers*: Kafka queue → microservice workers for heavy ops (image processing).  

Complexity: Read latency O(1) via cache, write latency O(log n) due to sharding + commit log.  

**Edge Cases**  
- Sudden traffic spike → auto‑scale LB and worker pools.  
- Cache miss burst → throttle DB queries or pre‑warm caches.  
- Shard failure → replicate data and failover to replica.  

**Optimize & Communicate**  
I’d iterate on the diagram, adding monitoring (Prometheus), alerting, and a CDN for static assets. I’d narrate each decision: “We choose Redis here because read traffic dominates; we accept eventual consistency for feed freshness.” This shows structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
