---
qid: ing_be981cd5fb__fp__local
question: 'Explain: backups and you can restore them at — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 621
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:50-05:00'
sources: []
---

**Why DynamoDB needs “backups”**

A distributed key‑value store that serves billions of reads per second must guarantee *durability*: once a client writes, the data should survive any failure. In DynamoDB each item is stored on many replicas (the **partition‑to‑node mapping**) and every write is logged to a local **commit log** before being acknowledged. If a node crashes, its in‑memory state can be rebuilt from the logs, but if *all* replicas of an item lose their logs (e.g., catastrophic failure or mis‑configurations), the data disappears.

The fundamental problem is that **writes are asynchronous** relative to physical persistence: a write may be acknowledged while still residing only in RAM. To bridge this gap we need a mechanism that captures a *consistent snapshot* of the entire table at a given instant and stores it somewhere immutable (S3). This snapshot must satisfy:

1. **Atomicity across partitions** – all items seen at time T are present, no partial updates.
2. **Recoverability** – from any point‑in‑time we can reconstruct the exact table state.

These constraints lead directly to DynamoDB’s **point‑in‑time recovery (PITR)** and on‑demand backups.

**How it works**

DynamoDB continuously streams all commit‑log entries into an *audit log* that is written to S3 in real time. The audit log is essentially a write‑once, append‑only bit‑stream of every mutation. To restore the table as of timestamp T:

1. **Rebuild**: Re‑apply the audit log from the start of the table’s lifetime up to T.  
2. **Compaction**: Periodically DynamoDB compacts logs into *incremental snapshots* (full table dumps) stored in S3, so restoration skips replaying every single write.

The math behind this is a simple *prefix‑sum* over immutable operations—each write is an idempotent delta that can be composed linearly. Because the audit log is immutable and append‑only, there’s no need for locks or consensus during recovery; any node can start from the same snapshot and replay independently.

**Non‑obvious insight**

Most people think backups are “copy‑and‑paste” operations. In DynamoDB, the *audit log* itself is a **distributed transaction log** that serves dual purposes: it powers real‑time replication across Availability Zones and provides a deterministic, linearizable source of truth for point‑in‑time restores. Thus, the backup mechanism is not an afterthought but a core part of DynamoDB’s durability guarantees—essentially turning every write into an *immutable event* that can be replayed ad infinitum. This design eliminates the need for heavy consensus protocols during recovery and keeps restore times proportional to the size of the desired snapshot rather than the entire history.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
