---
qid: ing_dd78f81c4d__fp__local
question: 'Explain: Durability — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 366
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:50:25-05:00'
sources: []
---

**Durability in ACID: a first‑principles view**

At its core, durability guarantees that once an application *commits* a change, the effect survives all future events—crashes, power loss, network partitions. The fundamental problem it solves is **state persistence under uncertainty**: a distributed system cannot rely on transient memory to preserve user intent.

Why must durability be “write‑once, read‑many”?  
Because every state transition can be represented as a *log entry* (a sequence of bits). If we guarantee that the log entry is physically stored before acknowledging commit, subsequent failures will not erase it. This is an instance of **information theory’s redundancy principle**: by writing to non‑volatile media once and then copying it into durable storage (disk, SSD, replicated logs), we create a *checkpoint* that can be recovered even if the original volatile state is lost.

In practice, this leads to the classic **write‑ahead logging** or **transaction log**. The system writes the intent before applying it in place. Upon restart, recovery reads the log and replays committed entries, guaranteeing no lost updates. The *deep insight* most designers miss: durability is not merely a safety net—it is an optimization that allows *lazy application of changes*. By deferring the expensive in‑memory update until after logging, systems can batch operations, reduce contention, and still satisfy ACID.

Thus, durability emerges from the need to persist intent under failure, grounded in redundancy and recovery theory, and it unlocks a powerful lazy‑execution optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
