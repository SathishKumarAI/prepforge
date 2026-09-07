---
qid: ing_236719fce2__faang__local
question: 'Explain: Endpoint: PUT /config/algorithm — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 455
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:06:25-05:00'
sources: []
---

**Clarify**

We’re asked to design a load‑balancing component for an HTTP endpoint that updates algorithm configuration (`PUT /config/algorithm`).  
Assumptions:  
* The service is stateless but must keep the latest config in memory and persist it.  
* Updates are frequent (hundreds per second) and read traffic dominates.  
* Clients may hit any replica; consistency matters only for *writes*.  

**Approach**

1. **Architectural pattern** – Use a front‑end LB (e.g., AWS ALB) routing to a pool of stateless API servers.  
2. **State propagation** – On `PUT`, each server writes to a shared datastore (Redis/Consul KV).  
3. **Cache & consistency** – Servers keep an in‑memory copy with a version tag; they subscribe to a Pub/Sub channel for invalidation.  
4. **Failure handling** – If a write fails, return 5xx and rely on eventual consistency via the pub/sub.  

**Depth**

* LB: round‑robin + health checks.  
* Write path:  
  * Receive request → validate → atomically `SET key value` with `NX` flag to avoid race conditions → publish `config_updated` event.  
  * Response time < 50 ms, complexity O(1).  
* Read path: local cache hit; if stale, fallback to datastore.  

**Edge Cases**

* Concurrent updates → use CAS or version numbers in Redis.  
* Network partitions → some replicas may serve stale config; mitigated by TTL on cache.  
* High load → backpressure via queue (e.g., SQS) before hitting DB.

**Optimize & Communicate**

Improvements:  
* Shard the key space if multiple algorithm configs exist.  
* Use a CDN‑style edge caching for read traffic to reduce latency.  

I’d explain each step, justify trade‑offs (strong vs eventual consistency), and emphasize how this design scales horizontally while keeping write latency low—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
