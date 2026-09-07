---
qid: vq_be61579414__aws__local
question: How to check the file size in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 426
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:11:52-05:00'
sources: []
---

**Situation / Task**

In my previous role I was tasked with auditing a nightly ingestion pipeline that pulled terabytes of raw logs from S3 into HDFS for downstream analytics. The team noticed sporadic failures when the input files exceeded certain limits, and we needed a quick way to surface file‑size violations before they hit downstream jobs.

**Action**

I built an *ownership‑driven* solution that leveraged AWS Glue and Amazon Athena rather than manual scripts:

1. **Glue Crawler** – Crawls the S3 bucket, creates a table in the Data Catalog with `s3://bucket/path/*` as the source.
2. **Athena Query** – Runs a single SQL statement:  
   ```sql
   SELECT key, size_bytes FROM s3_objects
   WHERE size_bytes > 2 * 1024 * 1024 * 1024;  -- >2 GB
   ```
3. **Lambda & SNS** – A scheduled Lambda parses the Athena result set and publishes an alert to an SNS topic if any oversized files are found.
4. **S3 Inventory (Optional)** – For long‑term compliance, we enabled S3 Inventory to keep a daily CSV of object sizes; this feeds into the same query for audit purposes.

**Result**

- Reduced pipeline failure rate from 18 % to <2 % within two weeks.
- Cut manual investigation time by **70 %**, saving ~15 engineer‑hours/month.
- The solution cost <$0.50/day (Athena queries are charged per data scanned; we limited scans to the inventory CSV).

**Why it matters**

*Customer Obsession*: Prevents downstream analysts from dealing with corrupted or incomplete data.  
*Ownership & Dive Deep*: I designed a reusable, automated check that surfaces issues before they impact users.

Bar‑raisers will note my **end‑to‑end ownership**, **data‑driven metrics**, and the ability to *simplify* a complex problem with AWS native services while keeping cost low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
