---
qid: ing_43ab4c65aa__faang__local
question: 'Explain: Consistency patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 520
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:21:58-05:00'
sources: []
---

**Clarify**

You’re asking about *consistency patterns* from the “system‑design‑primer” repo – essentially how distributed systems guarantee that reads see a correct or up‑to‑date state (strong vs eventual consistency, quorum reads/writes, etc.). I’ll assume we’re focusing on key/value stores and not deep into consensus protocols.

**Approach**

1. List the canonical consistency models (eventual, causal, sequential, linearizable).  
2. Map each to design patterns: *Primary‑Replica*, *Quorum*, *Read‑Your‑Writes*, *Conflict‑Free Replicated Data Types* (CRDTs), *Vector Clocks*.  
3. Explain trade‑offs in latency, availability, and partition tolerance (CAP).

**Depth**

- **Eventual Consistency** – writes propagate asynchronously; use *background sync* or *gossip*. Low latency, high availability.  
- **Primary‑Replica** – single leader handles writes; followers replicate synchronously → linearizable for reads from primary, eventual otherwise.  
- **Quorum Reads/Writes (Paxos/Raft)** – `write quorum + read quorum > total replicas` guarantees serializability. Adds write latency but strong consistency.  
- **CRDTs** – deterministic merge of diverging replicas; useful for offline collaboration or multi‑master writes.  
- **Vector Clocks / Lamport timestamps** – detect conflicts, allow application to resolve or merge.

Complexity: read/write cost O(log N) with consistent hashing; quorum adds 2× replication factor overhead. Trade‑offs are always *latency vs consistency*.

**Edge Cases**

- Network partitions → choose between “write‑availability” (eventual) and “read‑consistency”.  
- Clock skew in vector clocks → use logical timestamps.  
- Hot keys on the primary → shard or use multi‑master with conflict resolution.

**Optimize & Communicate**

Explain that a system designer first defines SLAs: *max read latency* vs *acceptable staleness*. Then pick a pattern (e.g., Raft for strict consistency in a leader‑driven DB, CRDTs for collaborative tools). Finally, highlight monitoring (latency dashboards) and graceful degradation (fallback to eventual mode during outages). This narrative shows clear decision logic, awareness of CAP, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
