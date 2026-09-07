---
qid: vq_8ae2595edf__aws__local
question: How to change the warehouse.dir location for older tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 512
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:02:14-05:00'
sources: []
---

**Situation / Task**  
In my last role I managed a data lake that fed into Redshift and Athena. The team had migrated 12 M rows of legacy transactional tables from an on‑prem HDFS cluster to S3 under `/data/warehouse/old`. When we added new schema versions, the older tables were still referenced by ETL jobs pointing to the old path, causing duplicate reads and stale metrics in downstream dashboards. I was tasked with moving those tables to a new logical location (`/data/warehouse/archive`) while keeping production workloads unaffected.

**Action**  
1. **Dive Deep & Ownership** – I first catalogued every table using Glue Data Catalog, then ran a cost‑analysis script that measured read/write ops per table over the last 90 days (≈ 2 TB/day).  
2. **Design** – Implemented an S3 bucket lifecycle rule to transition objects from `old` to `archive` after 30 days, ensuring no accidental data loss.  
3. Updated Glue crawlers to point at `/data/warehouse/archive/*`, re‑registered the tables, and added a **Glue job** that copies only new partitions (using `--additional-metadata`) to avoid full‑table scans.  
4. Added **Lake Formation permissions** so existing Athena queries automatically resolve the new path via table aliases.  
5. Deployed changes in a blue‑green fashion: first updated a staging cluster, ran Smoke tests on 10 % of partitions, then switched production traffic after 99.9 % pass rate.

**Result**  
- Reduced **S3 request cost** by 18 % (from $0.40/1M requests to $0.33).  
- Cut ETL runtime for legacy tables from 45 min to 12 min, freeing 6 h of compute per day.  
- No production downtime; all dashboards reflected fresh data within 2 hours.

**Reflection (Bar‑raiser focus)**  
I owned the migration end‑to‑end, dove deep into cost & performance metrics, quantified impact, and documented a rollback plan that was later used in another region’s migration. This demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**—the core Amazon Leadership Principles for data engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
