---
qid: ing_2a21dc03e6__aws__local
question: What's the difference between replication & backup?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 400
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:34-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – customers need data that is always available and intact; *Ownership* – I own the reliability of our data layer.

**Situation / Task**  
In my last role, we migrated a legacy database to Aurora for an e‑commerce platform. The product owner asked me to explain why replication was not enough and why we still needed backup.  

**Action**  
I mapped out two use cases: **(1) real‑time failover** (replication) and **(2) point‑in‑time recovery after a data corruption or ransomware event** (backup).  
- *Replication* uses Aurora Global Database to keep up to 5 replicas in sync with <1 s lag, enabling instant read scaling and rapid switchover if the primary fails.  
- *Backup* is an automated snapshot that captures every 24 hours plus continuous transaction logs, giving us a restore window of 7 days and the ability to recover to any second within that period.

I presented this with AWS services: **Aurora Global DB** for replication, **S3 Glacier Deep Archive** for long‑term snapshots, and **AWS Backup** for policy enforcement. I quantified impact: after implementation we reduced mean time to recovery from 8 h (replication only) to <30 min (with backups), while keeping cost below $200/month.

**Result**  
Customers experienced zero downtime during a planned failover and could roll back a corrupted batch within minutes, increasing trust in our platform by 12% as measured by NPS.  

**Learnings**  
Replication protects against availability loss; backup protects against data integrity loss. Both are complementary and required for true resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
