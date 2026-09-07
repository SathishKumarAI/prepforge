---
qid: ing_4430752875__faang__local
question: 'Explain: Blob Store — Grokking System Design Interview: Patterns & Mock
  Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 568
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:23:10-05:00'
sources: []
---

**Clarify**  
We’re asked to explain a *Blob Store*—the scalable object‑storage system that underpins services like S3 or GCS—and how it appears in system‑design interviews (patterns, mock Qs). Key assumptions: high durability, eventual consistency, large unstructured blobs, read/write heavy workloads, cost sensitivity.

**Approach**  
1. Outline core components (metadata catalog, storage nodes, load balancer).  
2. Show typical design patterns (sharding, erasure coding, CDN integration).  
3. Highlight interview angles: scaling, fault tolerance, consistency trade‑offs, cost/latency knobs.

**Depth**  

| Layer | Responsibility | Key Design Choices |
|-------|----------------|--------------------|
| **Client API** | REST/HTTP endpoints (`PUT/GET/Delete`) | Stateless gateways; use CDN for GETs. |
| **Catalog Service** | Stores object metadata (bucket, key → location, size, ACL) | Distributed hash table + Raft consensus; eventual consistency via write‑ahead log. |
| **Storage Layer** | Physical blob storage on SSD/HDD or object storage nodes | Sharded by hash of key; use erasure coding for 4–6‑node parity to cut cost vs replication. |
| **Replication & Consistency** | Dual‑write to two datacenters; read‑repair | Read‑your‑writes with session tokens; eventual consistency otherwise. |
| **Cache** | In‑memory LRU or Redis for hot objects | TTL, size limits; fallback to storage on miss. |
| **Security** | IAM policies, bucket ACLs, client-side encryption | Token validation in API gateway. |

*Complexity*:  
- Write: O(1) catalog + O(k) erasure coding (k=4‑6).  
- Read: O(1) catalog lookup + network hop to storage node; CDN reduces latency.  

**Edge Cases**  
- Large blobs (>10 GB): chunking & parallel uploads.  
- Thundering herd on hot objects: use edge caching and rate limiting.  
- Data loss: test erasure coding failure scenarios, cross‑region restores.

**Optimize & Communicate**  
Discuss trade‑offs: replication vs erasure coding (cost vs durability), strong vs eventual consistency (latency). Show how to iterate: start with simple key–value store, then add catalog sharding and CDN. End by summarizing that a Blob Store is essentially a distributed metadata service + sharded storage layer, tuned for cost, durability, and low‑latency reads—exactly the pattern interviewers probe in system‑design mock sessions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
