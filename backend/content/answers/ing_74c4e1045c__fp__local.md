---
qid: ing_74c4e1045c__fp__local
question: What is Raft? — Raft Consensus Algorithm
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 381
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:13:27-05:00'
sources: []
---

**Raft: a pragmatic consensus protocol**

At its core, Raft solves *distributed agreement*—getting multiple unreliable nodes to agree on the same sequence of commands (a replicated log) even when some crash or messages are lost.  
The algorithm is built around three minimal invariants:

1. **Leader election** – one node must coordinate all writes; if it fails, a new leader emerges quickly.  
2. **Log replication** – followers copy the leader’s entries and persist them before acknowledging success.  
3. **Safety via term numbers** – every log entry carries a monotonically increasing “term”; a follower will never accept an older term than its own.

From these invariants, Raft derives *exactly* what is needed to guarantee consistency:  
- **Election protocol** (leader steps down when it loses quorum; new leader is the most up‑to‑date candidate).  
- **AppendEntries RPC** that acts as both heartbeats and replication.  
- **Commit rule** that requires an entry to be stored on a majority before being applied.

The deep principle here is *progress by bounded nondeterminism*: Raft limits nondeterministic choices (who becomes leader, which entries are committed) to the size of a quorum, ensuring linear‑time convergence.  

**Non‑obvious insight:**  
Raft’s safety hinges not on preventing split votes but on *term monotonicity*. Even if two nodes think they’re leaders in the same term, any later term will force them to step down because followers reject older terms. Thus, a simple integer counter enforces global ordering without complex state machines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
