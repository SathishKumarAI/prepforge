---
qid: ing_c8e90ea286__faang__local
question: 'Explain: Transactions & Their Types — 11 System Design Concepts Explained,
  Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 504
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:27:14-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain the *types of transactions* in distributed systems—specifically the classic ACID‑style categories (Atomic, Consistent, Isolated, Durable) and how they map onto real‑world patterns like **2PC/3PC**, **Paxos/ Raft consensus**, and **eventual consistency**. Confirm that you’ll cover *transaction models* (e.g., strict two‑phase commit vs. optimistic concurrency control), the *trade‑offs* between strong vs. weak guarantees, and how these relate to CAP.

**Approach**  
1. Define each ACID property briefly.  
2. Map them onto distributed patterns: 2PC for atomicity, Raft/Paxos for consistency, write‑ahead logs for durability.  
3. Contrast *strict* (synchronous) vs. *optimistic* (asynchronous) transactions.  
4. Illustrate with a simple key‑value store example.  

**Depth**  
- **Atomicity** → 2PC: coordinator gathers votes; if any fail, all roll back. Complexity O(N).  
- **Consistency** → Consensus protocols (Paxos/Raft): linearizable order of operations, quorum = ⌊N/2⌋+1.  
- **Isolation** → Serializable schedules via locking or MVCC; optimistic uses version checks at commit time.  
- **Durability** → Write‑ahead logs persisted to stable storage before ack.  
- *Eventual consistency* sacrifices isolation for availability: use conflict resolution (CRDTs, vector clocks).  

**Edge Cases**  
- Coordinator crash in 2PC → blocked state; mitigated by timeout/commit‑or‑abort logic.  
- Network partitions → CAP forces a choice; Raft guarantees availability at the cost of temporary inconsistency.  
- High contention → optimistic retries explode; fallback to locking.

**Optimize & Communicate**  
Emphasize that production systems often blend models: e.g., DynamoDB uses *eventual consistency* with tunable read/write capacities, while Spanner couples TrueTime with 2PC for global ACID guarantees. Conclude by noting that understanding these trade‑offs lets you choose the right pattern for latency vs. correctness requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
