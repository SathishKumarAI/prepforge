---
qid: ing_9e822a54b0__faang__local
question: 'Explain: Active-Active — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 466
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:52:31-05:00'
sources: []
---

**Clarify**  
We need to describe an *active‑active* architecture that maximizes availability for a global AI service (e.g., inference). Key assumptions:  

1. Traffic is read‑heavy, writes are rare (model updates).  
2. Latency < 100 ms is required in every region.  
3. Failover must be automatic and transparent to clients.

**Approach**  
1. Deploy multiple identical inference clusters in separate AZs/regions.  
2. Use a global load balancer (e.g., AWS Global Accelerator) with health checks that route traffic only to healthy nodes.  
3. Replicate model weights via a distributed cache or object store (S3, GCS).  
4. Coordinate updates with a consensus protocol (Raft) so all replicas stay in sync.

**Depth**  
- **Latency**: Clients hit the nearest edge; round‑trip < 50 ms.  
- **Consistency**: Eventual consistency for model weights; strong consistency during hot‑updates via Raft.  
- **Failover**: If an AZ fails, health checks drop it; traffic automatically re‑routes with no DNS TTL issues.  
- **Scalability**: Auto‑scaling per region handles bursty inference loads.  

Complexity: O(1) routing time; update latency ≈ O(N) for N replicas (Raft). Trade‑off: higher operational cost vs. 99.999% SLA.

**Edge Cases**  
- *Simultaneous AZ failure*: use cross‑region replication to maintain service.  
- *Model drift*: stale weights in some replicas → version tags and cache invalidation.  
- *Network partition*: fallback to read‑only mode until partitions heal.

**Optimize & Communicate**  
Improvements: implement a CDN for static artifacts, use gRPC multiplexing to reduce connection overhead, add health‑probes that simulate real inference load. I would narrate the trade‑offs (cost vs. latency), explain how Raft guarantees consistency during updates, and emphasize the zero‑downtime failover as the core benefit of active‑active design for AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
