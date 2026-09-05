---
qid: ing_160abf0302__fp__local
question: 'Explain: A Structured Streaming job reads Kafka and writes to a Delta table.
  The cluster is killed mid-batch and restarts. Does the customer get duplicate rows?
  Explain at the level of the checkpoint and the transaction log.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 570
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:52:16-05:00'
sources: []
---

**Why a mid‑batch kill can’t create duplicate rows**

1. **What the job does**  
   * Structured Streaming reads Kafka in micro‑batches.  
   * For each batch it:  
     1) pulls all messages whose offsets are not yet committed,  
     2) transforms them,  
     3) writes the result to a Delta table using `write.format("delta").mode("append")`.

2. **Checkpointing (offset bookkeeping)**  
   * Spark stores every batch’s **Kafka offsets** in a checkpoint directory (`spark.sql.streaming.checkpointLocation`).  
   * After a successful write, the job commits those offsets as “completed” and updates the checkpoint file.

3. **Delta’s transaction log**  
   * Each `append` produces a single atomic commit record in Delta’s `_delta_log`.  
   * The commit contains: the list of added files and the Kafka offset range for that batch.

4. **What happens on crash before commit**  
   * If the cluster dies *while* writing but *before* the transaction is committed, the checkpoint still shows those offsets as “uncompleted”.  
   * When the job restarts, Spark re‑reads exactly the same Kafka records (because they’re not marked completed) and attempts to write again.  
   * The new commit succeeds only if it writes a **new** set of files; the old, incomplete commit is discarded.

5. **Why duplicates never appear**  
   * Delta guarantees that every successful transaction is **idempotent**: once a batch’s files are committed, they’re immutable and will never be rewritten or removed unless explicitly deleted.  
   * Because the checkpoint marks offsets as completed only after the Delta commit succeeds, any retry writes exactly the same data but to new files. The old incomplete write was never made durable.

---

### Non‑obvious insight

Even though Spark’s checkpoint tracks **offsets**, Delta’s transaction log tracks **file sets**. If a job crashes *after* writing files but *before* the commit is finalized, those files may exist on storage but are not visible in the table because their commit record was never written. When the job restarts, Spark sees no completed commit for that offset range and re‑writes; Delta’s “no‑overwrite” policy guarantees the old orphaned files can be safely cleaned up later (e.g., via `VACUUM`). Thus the system is resilient to mid‑batch failures without risking data duplication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
