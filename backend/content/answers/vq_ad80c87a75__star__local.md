---
qid: vq_ad80c87a75__star__local
question: How to update record in Hbase table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 374
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:37-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked to fix a data quality issue in our user activity analytics pipeline. The HBase table “user_events” had an outdated `last_login` column for ~30% of users after a migration to a new microservice that wrote events with the wrong timestamp format.

**Task**  
I needed to update those specific rows efficiently, ensuring no data loss and minimal downtime for the real‑time reporting jobs that read from HBase every minute.

**Action**  
First I queried the table with a `Scan` filtered on `last_login < current_time - 30 days`. Using the Java client I iterated over each Result, constructed a `Put` with the same row key and column family (`stats`) but only the `last_login` qualifier. I set the timestamp to the corrected value and used `put.setDurability(Durability.SKIP_WAL)` for bulk updates to reduce write latency. To avoid locking the table, I ran the job in parallel streams, respecting a 200 MB per second throughput limit. After each batch I flushed the region server cache with `flushCommits()`.

**Result**  
The script corrected over 1.2 million rows in under 15 minutes, restoring data integrity for 99.9% of active users. Query latency dropped from 350 ms to 85 ms, and downstream dashboards reflected accurate login dates immediately. I learned that targeted bulk puts with WAL suppression can reconcile large HBase datasets without disrupting real‑time workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
