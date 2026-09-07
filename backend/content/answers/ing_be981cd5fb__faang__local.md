---
qid: ing_be981cd5fb__faang__local
question: 'Explain: backups and you can restore them at — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 581
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:05:49-05:00'
sources: []
---

**Clarify**  
The interviewer wants an overview of how DynamoDB handles point‑in‑time recovery (PITR) and on‑demand backups, what data is persisted, and the restore workflow—essentially “backups & restores” at scale.

**Approach**  
1. Describe the two backup modes: *on‑demand* and *continuous PITR*.  
2. Explain underlying storage layers (DynamoDB tables → SSD-backed key/value store + DynamoDB Streams).  
3. Outline the restore process, including data sharding and consistency guarantees.  
4. Touch on cost, latency, and operational trade‑offs.

**Depth**  

| Feature | How it works | Key technical details |
|---------|--------------|-----------------------|
| **On‑demand backup** | Client calls `CreateBackup`; DynamoDB snapshots the current state to S3‑compatible storage (multi‑AZ). | Snapshot is incremental; each partition’s LSM tree is frozen. Restored as a new table with same key schema. |
| **PITR** | Enabled per table; every write triggers a *write‑ahead log* in DynamoDB Streams, persisted to durable storage. | Stores all changes for 35 days. Restore points can be any second within that window. |
| **Restore** | `RestoreTableFromBackup` or `RestoreTableToPointInTime`. DynamoDB rebuilds the table by replaying logs on a fresh partition layout. | Consistent read‑as‑of (CR) semantics: reads see data as of the restore timestamp. |
| **Scalability** | Uses sharding across 200+ nodes; each node keeps its own WAL and snapshot. Backup/restore is parallelized per shard. | Latency O(1) for point reads, but restores can take minutes to hours depending on size. |

**Edge Cases**  
- Restoring over an existing table: must delete or rename the target first.  
- Backups of tables with global secondary indexes (GSIs): each GSI is backed up separately; restore recreates them.  
- Multi‑region replication: PITR only works within the source region; cross‑region restores need manual copy.

**Optimize & Communicate**  
Highlight that DynamoDB abstracts complexity—developers just call APIs, while internally it uses incremental snapshots + WAL replay for durability and speed. Discuss trade‑offs: on‑demand backups are instant but costlier per GB; PITR offers continuous protection at a lower ongoing cost but incurs restore latency. Emphasize how this design balances **availability**, **durability**, and **performance**—core FAANG concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
