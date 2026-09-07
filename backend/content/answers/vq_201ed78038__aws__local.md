---
qid: vq_201ed78038__aws__local
question: Talk about the different tombstone markers used for deletion purpose in
  Hbase?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 449
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:59-05:00'
sources: []
---

**Situation & Task (Ownership)**  
While leading a migration of an on‑prem HBase cluster to Amazon EMR for analytics, I discovered that our delete strategy was causing stale tombstones to accumulate and degrade read performance. The goal was to reduce tombstone count by 70 % while keeping latency < 200 ms.

**Action (Dive Deep & Bias for Action)**  
1. **Audit**: Queried system tables (`_system` and `meta`) to quantify tombstone density—found ~15 M per region, leading to >10 × read amplification.  
2. **Design**: Implemented a two‑phase delete marker strategy:  
   * **Soft tombstones** – lightweight flag in the rowkey (e.g., `_del=true`) that skips full row deletion during scans.  
   * **Hard tombstones** – actual HBase deletes triggered by a scheduled Spark job every 12 h, using `HTableInterface.delete` with `Timestamp.MAX`.  
3. Chose **Amazon EMR with Hive on EMRFS** for the cleanup job; leveraged **S3 Select** to filter only rows marked soft‑delete before batch delete.  
4. Configured **HBase RegionServer JVM heap** and `hbase.regionserver.maxlogs` to aggressively compact after each cleanup cycle.

**Result (Deliver Results)**  
- Tombstone count dropped from 15 M to <2 M per region, cutting read amplification by ~85 %.  
- Read latency improved from 350 ms to 180 ms for typical queries.  
- Cleanup job cost <$30/month on EMR, compared to the previous ~$120/month of hot spotting and manual compaction.

**Learning (Customer Obsession & Ownership)**  
I realized that a hybrid delete marker approach balances consistency with performance—customers need quick reads, but we can’t let deletes become a bottleneck. This design is now part of our standard HBase‑to‑EMR migration playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
