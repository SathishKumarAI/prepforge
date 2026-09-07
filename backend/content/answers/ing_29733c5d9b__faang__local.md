---
qid: ing_29733c5d9b__faang__local
question: 'Explain: Pattern 2: Database Replication with Automatic Failover'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 435
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:19:58-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Pattern 2: Database Replication with Automatic Failover*.  
Assumptions: a primary DB (write‑heavy) and one or more replicas; reads can be served from any node; we need zero‑downtime switchover when the primary fails.

**Approach**  
1. Set up synchronous or semi‑synchronous replication so replicas stay up‑to‑date.  
2. Deploy a health‑check probe that pings the primary’s connection health.  
3. On failure, an automated orchestrator (e.g., Patroni, AWS RDS Multi‑AZ) promotes the healthiest replica to primary.  
4. Update connection strings or DNS (or use a load balancer with failover rules).  
5. Ensure idempotent promotion logic to avoid split‑brain.

**Depth**  
- *Replication*: write‑through replication ensures data consistency; asynchronous trades latency for speed but risks stale reads.  
- *Failover* uses heartbeats and quorum checks; promotion must lock the cluster to prevent two primaries.  
- *Consistency*: use read‑committed or serializable isolation on replicas if they serve writes during failover.  
- *Complexity*: O(1) for health checks, O(log n) for leader election (e.g., Raft).  

**Edge Cases**  
- Network partitions: need split‑brain resolution.  
- Lagging replica: promotion could lead to data loss; use lag thresholds.  
- Concurrent failovers: test idempotency of promotion scripts.

**Optimize & Communicate**  
Add a *read‑only* flag on replicas, cache DNS TTLs low for rapid propagation, and log every state transition for auditability. Explain trade‑offs: synchronous replication gives stronger consistency but higher latency; asynchronous offers performance but potential data loss. Conclude by emphasizing that automated failover reduces MTTR to seconds, meeting SLAs in mission‑critical services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
