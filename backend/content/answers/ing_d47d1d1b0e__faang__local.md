---
qid: ing_d47d1d1b0e__faang__local
question: 'Explain: So that will be called replication or — System Design: Content
  Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 524
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:59-05:00'
sources: []
---

**Clarify**  
You’re asking two things: (1) the term “replication” in distributed ML pipelines—how data/weights are copied across nodes—and (2) a high‑level design of a Content Delivery Network (CDN). I’ll assume we want to discuss consistency models for replication and then outline an edge‑centric CDN.

**Approach**  
*Replication:* Identify the type (master‑less, leader‑follower), consistency guarantees (eventual vs strong), and failure scenarios.  
*CDN:* Map out components—origin servers, edge caches, load balancer, routing logic, cache invalidation, and security layers.

**Depth**

| Replication | CDN |
|-------------|-----|
| **Model** – *leader‑follower* (primary writes, replicas read) or *multi‑master* (any node can write).  <br>**Consistency** – eventual (good for ML training data shuffling), strong via two‑phase commit (rarely used due to latency).  <br>**Failure handling** – automatic failover; use quorum reads/writes. | **Edge cache** stores popular content within geographic proximity.  <br>**Routing** – DNS + Anycast or HTTP redirects based on latency & health checks.  <br>**Cache invalidation** – time‑to‑live (TTL) plus publish/subscribe “purge” messages.  <br>**Security** – TLS termination at edge, signed URLs, WAF. |

**Edge Cases**  
*Replication:* network partitions → split brain; data loss if replicas lag. *CDN:* stale cache after update; miss‑penalty when origin is down; DDoS amplification at edge.

**Optimize & Communicate**  
For ML pipelines, prefer eventual consistency to keep training throughput high; add read‑repair or anti‑entropy to converge. In CDNs, use content hashing for cache keys and multi‑region replication of origin data to reduce latency. Explain that trade‑offs (latency vs freshness) are tunable via TTLs and consistency levels. This structured reasoning shows clear problem framing, actionable design, and awareness of edge conditions—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
