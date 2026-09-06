---
qid: ing_a0b4930d22__fp__local
question: 'Explain: Durability — What does ACID mean?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 413
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:47:29-05:00'
sources: []
---

**Durability – the “ACID” of database reliability**

When a transaction commits, the system’s job is to *guarantee* that its effects survive any subsequent failure.  
Why? Because the world of computation is noisy: power cuts, crashes, network partitions. The only way to reason about correctness is to treat the storage medium as an unreliable channel and ask: *What minimal guarantees must a protocol provide so that a committed transaction can be recovered without ambiguity?*

- **Atomicity** (all‑or‑nothing) follows from the principle of *conflict resolution*: if any part fails, the whole operation must roll back to avoid leaving the database in an inconsistent state.  
- **Consistency** enforces that every commit moves the system from one valid global state to another; this is a constraint‑satisfaction problem where each transaction is a transformation on a state space.  
- **Isolation** ensures that concurrent transactions are equivalent to some serial order—this is the *commutativity* principle: operations that commute can be reordered without affecting the final state, guaranteeing reproducible results.  
- **Durability** is the *memory‑to‑disk* guarantee: once a commit message is acknowledged, the system must have stored enough information (write‑ahead logs, redo records) so that a crash recovery algorithm can replay or roll back to a consistent checkpoint.

**Non‑obvious insight:** Durability is not merely “flush buffers”; it requires *log durability*. The log itself must be written atomically—often via a two‑phase commit with a stable storage device. If the log were lost, even a perfectly flushed data page would be unrecoverable because the system cannot know whether the write actually took place. Thus, ACID’s “D” is fundamentally about *log persistence*, not just disk writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
