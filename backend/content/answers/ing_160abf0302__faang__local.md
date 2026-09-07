---
qid: ing_160abf0302__faang__local
question: 'Explain: A Structured Streaming job reads Kafka and writes to a Delta table.
  The cluster is killed mid-batch and restarts. Does the customer get duplicate rows?
  Explain at the level of the checkpoint and the transaction log.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 495
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:34-05:00'
sources: []
---

**Clarify**

We’re asked: *In a Spark Structured Streaming job that reads from Kafka and writes to a Delta table, if the driver/executor cluster dies mid‑batch and restarts, will the downstream Delta table contain duplicate rows?*  
Assumptions:  
- The job uses **exactly‑once** semantics (default for Structured Streaming).  
- Checkpointing is enabled (`checkpointLocation`).  
- No external deduplication logic beyond Delta’s ACID guarantees.

---

**Approach**

1. Inspect the checkpoint after failure – it stores *offsets* and *write status*.  
2. On restart, Spark re‑reads the **last committed offsets** from the checkpoint.  
3. The write to Delta is wrapped in a **transaction log (Zookeeper/Delta Lake)** that guarantees atomicity.

---

**Depth**

- **Checkpointing**: When a batch starts, Structured Streaming records the *Kafka offsets* it will read and writes them to `checkpointLocation`. If the cluster dies before the batch completes, those offsets are not marked “committed”.  
- **Restart logic**: Spark reads the checkpoint on startup, sees that the last batch was incomplete, and re‑processes from the stored *start offset*.  
- **Delta write**: Each batch’s output is written as a single Delta transaction (a JSON entry in `_delta_log`). If the job crashes before committing the transaction, that log entry never appears. Thus, the downstream table only contains rows from fully committed batches.

Result: **No duplicates** – the system re‑processes uncommitted data but does not re‑apply already committed writes.

---

**Edge cases**

- Misconfigured checkpoint (e.g., writing offsets after commit) could cause duplication.  
- External systems (e.g., external CDC tools) that don’t honor checkpoints may replay records.  
- Network partitions causing delayed offset commits can create a small window of duplicate reads, but Delta’s transaction log prevents double writes.

---

**Optimize & Communicate**

Explain the *exact‑once* guarantee: checkpoint → offset tracking → atomic Delta commit. Emphasize that duplicates are avoided because an incomplete batch never records a Delta transaction; on restart Spark re‑reads from the last safe offset. Highlight that proper checkpoint placement and default settings suffice for idempotent streaming pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
