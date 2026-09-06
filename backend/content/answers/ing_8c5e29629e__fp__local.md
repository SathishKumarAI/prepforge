---
qid: ing_8c5e29629e__fp__local
question: 'Explain: Snapshot Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 350
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:34-05:00'
sources: []
---

**Snapshot replication** is a *point‑in‑time* copy of a database that satisfies two core goals:  
1. **Consistency** – the replica must be an exact, coherent view of the source at some instant.  
2. **Isolation** – writes on the source after that instant should not corrupt the snapshot.

To meet these, a DBMS first *locks* or *logs* all transactions up to a chosen commit timestamp `T`. It then streams only those rows whose last update time ≤ `T`. Because no later updates are applied, the replica is guaranteed to be a legal state of the source. This contrasts with continuous replication (e.g., CDC), which must replay every change and thus risks interleaving concurrent writes.

The deeper principle is **temporal consistency**: by anchoring both sides at a single logical time, snapshot replication reduces synchronization complexity from *continuous* to *interval‑based*. It also leverages the database’s own transaction log for efficient incremental transfers—no need to scan entire tables.  

**Non‑obvious insight:**  
Even though snapshots appear static, they can be used for *incremental* updates: a new snapshot at time `T2` can be derived by replaying only changes between `T1` and `T2`. This means the cost of updating a replica is bounded by the number of changes in that interval, not by the total size of the database. Thus, snapshot replication blends the reliability of full copies with the efficiency of change‑based propagation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
