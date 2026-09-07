---
qid: ing_b648ce482e__faang__local
question: 'Explain: Replication — A Cheat Sheet for Designing Fault-Tolerant Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 579
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:47:06-05:00'
sources: []
---

**Replication – A Cheat‑Sheet for Fault‑Tolerant ML Systems**

| Step | What to do | Why it matters |
|------|------------|----------------|
| **1️⃣ Clarify the goal** | *Restate*: “Design a replicated system that keeps ML models online despite node failures.” Ask: Do we need strong consistency, low latency, or eventual availability? What failure modes (network split, disk corruption) are most likely? | Sets constraints for trade‑offs. |
| **2️⃣ Approach** | 1. Choose an *replication strategy* (master‑slave, multi‑master, quorum). <br>2. Pick a *consistency model*: strict (synchronous writes), relaxed (asynchronous with conflict resolution). <br>3. Implement *failure detection* (heartbeats, gossip) and *recovery* (state sync, version vectors). | Gives a roadmap before coding. |
| **3️⃣ Depth** | • **Synchronous Replication**: write to all replicas, wait for ACKs → strong consistency, higher latency. <br>• **Asynchronous Replication**: log changes, propagate later → lower latency but may diverge; use *vector clocks* or *CRDTs* for conflict resolution. <br>• **Quorum Reads/Writes** (Paxos/Raft): `W + R > N` ensures consistency while tolerating up to `f = ⌊(N-1)/2⌋` failures. <br>• **Checkpointing & Rollback**: snapshot model weights, rollback on corruption. Complexity: O(N) write latency; storage overhead ≈ replication factor × data size. | Covers the core mechanics and trade‑offs. |
| **4️⃣ Edge Cases** | • Network partitions → split‑brain if two masters keep writing. <br>• Hot spots (e.g., popular model versions). <br>• Byzantine faults – need cryptographic signatures or consensus protocols. Test by simulating node crashes, delayed heartbeats, and concurrent updates. | Highlights what could break the design. |
| **5️⃣ Optimize & Communicate** | • Use *log‑structured merge trees* for efficient append‑only replication. <br>• Cache hot model shards to reduce read traffic. <br>Explain: “We’ll start with a Raft cluster for strong consistency on training metadata, then asynchronously push weight checkpoints to S3 via CRDTs for inference nodes.” | Shows ability to iterate and articulate trade‑offs in a real interview setting. |

*Word count:* ~210  
*(FAANG style – concise, structured, deep, edge‑aware.)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
