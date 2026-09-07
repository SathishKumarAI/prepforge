---
qid: ing_df912f6104__faang__local
question: 'Explain: Durability: — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 539
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:19:12-05:00'
sources: []
---

**Clarify**  
You’re asking how the *durability* part of ACID (Atomicity, Consistency, Isolation, Durability) relates to machine‑learning pipelines that rely on databases. I’ll assume we’re talking about relational or transactional stores (PostgreSQL, MySQL, etc.) used for feature store persistence and model metadata.

**Approach**  
1. Define durability in ACID terms.  
2. Show why it matters for ML workflows.  
3. Explain how DBMS guarantees durability.  
4. Mention trade‑offs & monitoring.  

**Depth**  
Durability means once a transaction commits, its changes survive system failures (crash, power loss). The DBMS achieves this by writing the commit record to stable storage—typically a write‑ahead log (WAL) or redo log—before acknowledging success. The log is flushed synchronously (fsync/FlushFileBuffers), ensuring the data is on non‑volatile media. Upon recovery, the engine replays the log to reconstruct committed state.

For ML pipelines:  
* **Feature persistence** – a feature vector written once must not vanish if the node dies mid‑stream.  
* **Model registry** – versioning records must survive outages so deployment scripts can reliably fetch the correct weights.  
* **Audit trails** – compliance logs (who ran what) rely on durability to satisfy regulatory audits.

If durability is weak, a crash could roll back a batch job, corrupt a feature store, or lose a model checkpoint, forcing expensive recomputation.

**Edge cases**  
* *Unclean shutdowns* before fsync → log loss.  
* *Disk corruption* in the log file – mitigated by redundancy (RAID, snapshots).  
* *High‑write throughput* may throttle due to synchronous flushes; async or batched durability can trade off immediacy for performance.

**Optimize & communicate**  
- Use **journaling file systems** and **SSD caches** to reduce latency of fsync.  
- Configure `wal_level` (PostgreSQL) to `replica` or `logical` if downstream services need real‑time replication.  
- Monitor log write times; set alerts for backlogs that could jeopardize durability guarantees.

When explaining this to interviewers, emphasize the causal chain: **Durability → Reliable feature store** → Accurate model training → Trustworthy production inference. Highlight how you would validate durability (e.g., simulated crash tests) and how it integrates into an end‑to‑end ML ops pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
