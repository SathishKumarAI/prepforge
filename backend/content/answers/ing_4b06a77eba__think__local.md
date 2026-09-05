---
qid: ing_4b06a77eba__think__local
question: 'Explain: Cassandra vs. MongoDB: ACID Transactions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 472
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:20:09-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Ask whether the focus is on *write‑time* transactions or *read‑time* consistency.  
- Assume both systems are used in their default configurations (no custom replication factors, no two‑phase commit).  
- Note that “ACID” here refers to *Atomicity, Consistency, Isolation, Durability* as traditionally defined.

**2️⃣ Adopt a comparison framework**  
- List the four ACID properties side by side.  
- For each system, state whether it provides full support, partial support, or only eventual guarantees.  
- Use concrete examples (e.g., single‑row write in Cassandra vs multi‑document transaction in MongoDB).

**3️⃣ Reason step‑by‑step through each property**  
- **Atomicity:** Cassandra offers atomic writes per partition; MongoDB supports multi‑document ACID transactions since v4.0.  
- **Consistency:** Cassandra is *tunable* (read/write consistency levels); MongoDB enforces strong consistency within a transaction but relies on replica set voting.  
- **Isolation:** Cassandra’s default isolation is *Read Committed* with no locking; MongoDB provides snapshot isolation in transactions.  
- **Durability:** Both use write‑ahead logs, but durability guarantees differ based on replication factor and write concern.

**4️⃣ Watch for common traps**  
- Don’t conflate “eventual consistency” with “no ACID”; Cassandra can be tuned to provide strong consistency at the cost of latency.  
- Avoid assuming MongoDB’s transactions are as lightweight as Cassandra’s per‑partition writes; they incur extra overhead.  
- Remember that MongoDB’s transaction support is optional; without it, operations revert to single‑document atomicity.

**5️⃣ Sanity‑check & verbalize the answer**  
- Re‑explain in plain language: “Cassandra guarantees atomicity for a row but not cross‑row isolation unless you use lightweight transactions; MongoDB gives full ACID across documents when you enable transactions.”  
- Summarize trade‑offs: *speed vs. consistency* and *simplicity vs. flexibility*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
