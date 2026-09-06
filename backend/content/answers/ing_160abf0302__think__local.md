---
qid: ing_160abf0302__think__local
question: 'Explain: A Structured Streaming job reads Kafka and writes to a Delta table.
  The cluster is killed mid-batch and restarts. Does the customer get duplicate rows?
  Explain at the level of the checkpoint and the transaction log.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 567
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:11:01-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
- Structured Streaming job reads from Kafka (offset‑based source).  
- Writes to a Delta Lake table (ACID, transactional).  
- Cluster crashes during a batch; it restarts and resumes processing.  
Assume: checkpointing is enabled, `spark.sql.streaming.checkpointLocation` points to HDFS/ADLS, and Delta’s transaction log (`_delta_log`) is persisted.

**2️⃣ Mental model / framework**  
- **Kafka → Structured Streaming**: Each batch reads a range of offsets; the job commits those offsets only after the downstream write succeeds.  
- **Checkpoint**: Stores the last processed offset per source partition.  
- **Delta transaction log**: Records each successful write as a JSON commit file with `timestamp`, `operation` (`WRITE`), and `dataChange`. Delta’s idempotency is guaranteed by the transaction log.

**3️⃣ Step‑by‑step reasoning**  
1. *Batch start*: job reads offsets `[a, b)` from Kafka; checkpoint contains `lastOffset = a-1`.  
2. *Write begins*: records are prepared for Delta commit.  
3. *Cluster dies* before the write completes:  
   - No transaction log entry is created (write aborted).  
   - Checkpoint remains unchanged (`lastOffset = a-1`).  
4. *Job restarts*: Structured Streaming reads from checkpoint → offsets `[a, b)` again.  
5. *Write completes*: Delta writes commit file for batch `b`; the data is appended once.  

Thus **no duplicate rows** because:  
- The write is atomic; if it fails, no entry appears in the transaction log.  
- On restart, the same offsets are re‑processed but only one successful commit exists.

**4️⃣ Common traps to avoid**  
- Assuming that “re‑processing” always leads to duplicates; Delta’s ACID guarantees prevent this.  
- Forgetting that Kafka offsets aren’t committed until after a successful write.  
- Ignoring that the checkpoint is updated *after* the write, not before.

**5️⃣ Sanity‑check & verbal explanation**  
- Verify in the Delta table’s `_delta_log` that there is only one commit for that batch.  
- Check the checkpoint file to see it still points to `a-1`.  
Explain: “Because Structured Streaming commits Kafka offsets only after a successful Delta write, and Delta writes are atomic, a crash before completion leaves both the offset and transaction log untouched. When the job restarts, it re‑processes the same records but the commit is applied only once, so no duplicates appear.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
