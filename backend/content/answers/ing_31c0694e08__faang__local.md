---
qid: ing_31c0694e08__faang__local
question: 'Explain: Example: Overselling Inventory — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 467
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:49-05:00'
sources: []
---

**Clarify**  
We’re asked how a system that *oversells inventory* can still preserve **ACID** semantics—particularly **Atomicity**, **Consistency**, **Isolation**, and **Durability**—and what design patterns enable this in high‑throughput e‑commerce platforms. Key assumptions:  
- Inventory updates happen concurrently across many services (orders, carts).  
- The system must tolerate temporary oversell without violating ACID guarantees at commit time.  

**Approach**  
1. Use a *two‑phase commit* or *distributed transaction manager* to coordinate inventory locks.  
2. Employ *pessimistic locking* on the inventory row until commit, or *optimistic concurrency control* with versioning and conflict resolution.  
3. Persist the lock state in a durable store (e.g., relational DB or distributed log).  

**Depth**  
- **Atomicity / Durability**: All changes to inventory are written to a transaction log; either all succeed or none do, ensuring rollback if an error occurs.  
- **Consistency**: The database enforces a constraint that quantity ≥ 0; any commit violating this is rejected.  
- **Isolation**: Using row‑level locks (pessimistic) or version numbers (optimistic) prevents phantom reads and ensures serializable isolation.  
Complexity: O(log N) for lock acquisition in B‑tree indexes, with contention overhead linear to concurrent requests.  

**Edge Cases**  
- *Deadlocks*: Detect via timeout or wait‑detour algorithms.  
- *Network partitions*: Use a consensus protocol (Raft) to keep the transaction manager consistent.  
- *High latency*: Batch updates or sharding inventory per product category to reduce lock contention.  

**Optimize & Communicate**  
Explain trade‑offs: pessimistic locking gives stronger isolation but hurts throughput; optimistic reduces contention but may need retries. Highlight that in practice, a hybrid—optimistic with a final pessimistic check before commit—is common. Conclude by stressing the importance of monitoring transaction abort rates and tuning lock granularity to balance ACID guarantees against scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
