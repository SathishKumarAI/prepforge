---
qid: ing_6ef9fb4a20__faang__local
question: 'Explain: Replication — 7 Must-Know Strategies to Scale Your Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 665
total_tokens: 903
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:01:49-05:00'
sources: []
---

**Clarify**  
You’re asking for the seven key strategies that allow a relational or NoSQL database to *replicate* data reliably at scale—i.e., keeping multiple copies of data in sync across nodes while preserving consistency, availability, and performance.  
Assumptions: we’re dealing with large‑scale OLTP/OLAP workloads, multi‑region deployments, and a mix of synchronous & asynchronous replication models.

**Approach**  
1. Identify the consistency model (strong vs eventual).  
2. Map each strategy to that model.  
3. Discuss trade‑offs in latency, throughput, fault tolerance, and operational complexity.

**Depth**  

| # | Strategy | Core Idea | Complexity / Trade‑offs |
|---|----------|-----------|-------------------------|
| 1 | **Master–Slave (Primary–Replica)** | One writable master; replicas read-only. Simple to implement, good for reads. | Write bottleneck, single point of failure unless multi‑master or automatic failover is added. |
| 2 | **Multi‑Master (Active‑Active)** | All nodes accept writes; conflict resolution via vector clocks/CRDTs. | Higher write latency, complex merge logic, risk of split‑brain if network partitions occur. |
| 3 | **Quorum‑Based Replication** | Operations succeed when a majority (Q) of replicas acknowledge. | Tunable consistency vs availability; higher quorum → lower throughput. |
| 4 | **Log Shipping / Change Data Capture (CDC)** | Append‑only log is shipped to replicas asynchronously. | Near real‑time, minimal impact on source writes; lag can grow under heavy load. |
| 5 | **Geo‑Distributed Sharding + Replication** | Partition data by key ranges and replicate each shard to multiple regions. | Complexity in routing queries, cross‑region latency, need for global transaction support. |
| 6 | **Snapshot Isolation + Periodic Sync** | Create point‑in‑time snapshots of the database and apply deltas periodically. | Consistent view for analytics, but may be stale for operational workloads. |
| 7 | **Hybrid Cloud Replication (e.g., AWS Aurora Global DB)** | Uses a primary region with low‑latency reads in secondary regions via cross‑region replication. | Vendor lock‑in, cost of inter‑region traffic, but simplifies global scaling. |

**Edge Cases**  
- Network partitions → choose between CAP trade‑offs.  
- Schema evolution across replicas can break CDC pipelines.  
- Large binary blobs (LOBs) cause replication lag; use object storage instead.

**Optimize & Communicate**  
Start with a *read‑heavy* workload: Master–Slave + read replicas. If writes must be global, move to Multi‑Master or quorum‑based approaches and add conflict resolution logic. For analytics, offload to snapshot isolation pipelines. Always instrument replication lag and failure rates; automate failover with health checks.  
Narrate your plan by mapping the business requirement (latency vs consistency) to the appropriate strategy and iteratively tightening the trade‑offs as you scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
