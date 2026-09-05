---
qid: vq_fffcffb9c8__star__local
question: Where can one find the high water mark for a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:33-05:00'
sources: []
---

**Situation:** In my last role, our data warehouse team was migrating an 8‑TB transactional table from on‑premise to AWS RDS Oracle. During the cutover we noticed that the database reported a much higher disk usage than expected, which threatened to hit our storage quota.

**Task:** I had to identify the source of the discrepancy and confirm whether the high water mark (HWM) was inflated due to lingering unused space or if there were hidden blocks still allocated. The goal was to produce an accurate HWM so we could safely plan the new instance size.

**Action:** I executed `SELECT * FROM DBA_TABLES WHERE TABLE_NAME = 'ORDERS'` to read the `HIGH_WATER_MARK` column, then cross‑checked it with `DBA_SEGMENTS`. I discovered that a recent large `DROP INDEX` left 120 GB of orphaned blocks. Using `ALTER TABLE ORDERS TRUNCATE PARTITION ALL COMPRESS FOR OLTP`, I reclaimed the space and ran `EXEC DBMS_SPACE.PURGE_UNUSED_BLOCKS(‘ORDERS’, ‘ALL’)`. After the purge, I re‑queried the HWM; it dropped from 10 TB to 8.1 TB.

**Result:** The storage plan was adjusted by 2 TB, saving $3K/month in AWS charges. I learned that routinely auditing `HIGH_WATER_MARK` and running `PURGE_UNUSED_BLOCKS` prevents silent bloat, especially after large DDL operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
