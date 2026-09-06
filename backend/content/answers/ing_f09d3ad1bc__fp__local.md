---
qid: ing_f09d3ad1bc__fp__local
question: 'Explain: Append-Only DB Property — Database-Internals/AppendOnlyProperty.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 352
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:30:32-05:00'
sources: []
---

**Append‑Only Database Property**

At its core an *append‑only* store solves the problem of guaranteeing *temporal consistency* without costly in‑place updates.  
When every write is a new record appended to the end of a log, the existing data never changes position or value. Therefore:

1. **Atomicity & durability** – a single append operation is a natural unit of work; if a crash occurs mid‑write it can be detected by checksum and discarded.
2. **Temporal integrity** – the history of every row is preserved; reconstructing any past snapshot reduces to filtering the log up to a given timestamp, which is an O(n) scan but can be accelerated with checkpoints.
3. **Concurrency safety** – multiple writers only compete for the tail pointer; no locks are required on individual records.

This design emerges from *information‑theoretic* considerations: each append adds new information; discarding old data would lose entropy, violating the principle that a database should never reduce its informational content without explicit user intent. Moreover, by treating the log as a *stream*, we can apply *sequential consistency* guarantees that are simpler than random‑access consistency models.

**Non‑obvious insight:**  
Because appends always grow monotonically, an append‑only DB can be *partitioned* simply by file size or time window without sharding logic. This means horizontal scaling is achieved by adding new files (or shards) rather than rebalancing existing ones—making capacity upgrades a linear‑time operation that preserves consistency automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
