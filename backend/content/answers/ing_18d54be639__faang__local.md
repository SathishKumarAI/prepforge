---
qid: ing_18d54be639__faang__local
question: 'Explain: Atomicity — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 511
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:42:31-05:00'
sources: []
---

**Atomicity in Cloud Spanner – A FAANG‑style explanation**

| Step | What I do |
|------|-----------|
| **Clarify** | *Problem:* How does Cloud Spanner guarantee that a transaction is all‑or‑nothing? <br>*Assumptions:* We’re talking about multi‑row, distributed transactions across replicas; the user wants to know how atomicity is achieved and what guarantees are provided. |
| **Approach** | 1️⃣ Summarize Spanner’s two‑phase commit (2PC) + TrueTime.<br>2️⃣ Explain isolation levels (serializable).<br>3️⃣ Highlight durability via replication. |
| **Depth** | Cloud Spanner implements *serializable* ACID transactions. <br>When a client issues `BEGIN TRANSACTION`, the coordinator assigns a **transaction ID** using **TrueTime**, which gives an absolute timestamp with bounded uncertainty. <br>During the **pre‑commit (phase 1)**, each replica logs the intent to commit and locks the affected rows. <br>If all replicas reply “ready”, the coordinator issues a **commit record** stamped with the transaction ID; this is written to every replica’s write‑ahead log. <br>The commit record is persisted on majority of replicas (via Paxos‑style consensus), ensuring that either *all* replicas see it or none do—hence atomicity. <br>In case of failure, the coordinator aborts and releases locks; replicas roll back to the last committed state. |
| **Edge cases** | • Network partitions: TrueTime’s uncertainty window guarantees no two transactions can commit with conflicting timestamps.<br>• Replica lag: a replica that misses a commit will never apply it, but other replicas still see the change—visibility is controlled by read‑timestamp rules.<br>• Long‑running transactions risk exceeding the timestamp window; Spanner aborts to preserve serializability. |
| **Optimize & communicate** | I’d highlight that atomicity here relies on *consensus* + *global time*, not just local locking. Mention that this design gives strong consistency with low latency, a key selling point for distributed SQL services. Conclude by noting the trade‑off: higher complexity and coordination cost versus the benefit of true ACID guarantees at scale. |

**Word count:** ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
