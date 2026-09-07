---
qid: ing_e20c6c1fce__faang__local
question: 'Explain: BASE Transactions — 11 System Design Concepts Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 762
total_tokens: 997
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:25:00-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the “BASE Transactions” paper—11 core concepts that underpin modern distributed databases (e.g., Dynamo, Cassandra). I’ll assume the audience knows basic ACID/BASE theory and wants a concise, interview‑style rundown of each concept, its purpose, and trade‑offs.

---

## 1. **CAP Theorem**  
*What it says:* In any networked system you can only guarantee two of Consistency, Availability, Partition tolerance.  
*Why it matters:* Drives design decisions—e.g., a write‑through cache sacrifices consistency for availability during partitions.

## 2. **BASE vs ACID**  
*BASE = Basically Available, Soft state, Eventual consistency.*  
*Trade‑off:* Faster writes and lower latency at the cost of temporary inconsistency; useful for large‑scale web services.

## 3. **Eventual Consistency**  
Data will converge over time without locking.  
*Use case:* Social‑media feeds where stale data is acceptable temporarily.

## 4. **Conflict Resolution & Versioning**  
Leverages vector clocks or Lamport timestamps to merge divergent replicas automatically.  
*Benefit:* No coordination needed; *Risk:* Requires deterministic merge logic.

## 5. **Replication Strategies**  
*Master–Slave, Multi‑master, Peer‑to‑peer.*  
*Impact on latency and fault tolerance:* Multi‑master gives low read/write latency but complex conflict handling.

## 6. **Data Partitioning (Sharding)**  
Horizontal split of data across nodes to scale linearly.  
*Key point:* Must be deterministic (hash or range) and support rebalancing without downtime.

## 7. **Quorum Reads/Writes**  
Define *R + W > N* for strong consistency, or relax to *W > N/2* for availability.  
*Trade‑off:* Larger quorums → higher latency but more consistent reads.

## 8. **Consistency Levels**  
Read/write levels (ONE, QUORUM, ALL).  
*Practical tip:* Expose as API knobs so clients can choose per‑operation consistency.

## 9. **Causal Ordering**  
Ensures that causally related operations are seen in order across replicas.  
*Implementation:* Track dependencies via vector clocks; useful for collaborative apps.

## 10. **Time‑to‑Live (TTL) & Garbage Collection**  
Automatic expiration of stale data reduces storage bloat and improves read performance.  
*Design note:* TTL must be enforced consistently across shards to avoid phantom reads.

## 11. **Monitoring & Self‑Healing**  
Instrumentation for latency, error rates, and automatic failover logic.  
*Why it’s critical:* In large clusters manual intervention is infeasible; health checks drive automated rebalancing.

---

### Edge Cases
- *Network partitions*: Choosing *W=1* leads to lost writes if the master node fails.
- *Clock skew*: Vector clocks mitigate but still need monotonic clock guarantees.
- *Hot spots*: Poor sharding can overload a single node, hurting latency.

### Optimization & Communication
I’d suggest starting with a simple key‑value store prototype, then layer in vector clocks for conflict resolution. Use dashboards to visualize quorums and partition health. When explaining to stakeholders, frame each concept as a trade‑off: *“We sacrifice immediate consistency to achieve sub‑200 ms latency at scale.”* This aligns with FAANG interview expectations—structured reasoning, clear trade‑offs, and depth without overcomplicating.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
