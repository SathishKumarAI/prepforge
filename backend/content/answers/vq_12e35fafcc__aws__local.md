---
qid: vq_12e35fafcc__aws__local
question: How will you update the rows that are already exported?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 395
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:38-05:00'
sources: []
---

**Situation / Task**  
While migrating a legacy data lake to a new *Lake Formation*‑backed architecture, I discovered that the daily batch job was re‑exporting already processed rows from an on‑prem SQL Server into S3. This caused duplicate analytics and inflated storage costs by ~12 GB/month.

**Action**  
1. **Ownership & Bias for Action** – I immediately scoped a fix that would not interrupt the 4 hr nightly window.  
2. Implemented *Change Data Capture* (CDC) using SQL Server CDC tables, exposing them via AWS DMS into an Amazon Kinesis Data Stream.  
3. Built an AWS Glue job that reads from the stream, de‑duplicates on `row_id` + `updated_at`, and writes only new/changed rows to a partitioned Parquet table in S3 (Lake Formation).  
4. Updated downstream Athena views to point at the new table and added a nightly Lambda that archives old partitions to Glacier for compliance.

**Result**  
- Reduced duplicate exports by **100 %**, cutting storage costs from $0.30/GB to $0.02/GB, saving ~$1.2K/month.  
- Improved data freshness: CDC latency < 5 min vs 4 hr batch.  
- Enabled auditability through Glue job logs and Lake Formation permissions.

**Learnings (Dive Deep)**  
Tried a “soft delete” flag first; it added complexity with no cost benefit. Switching to CDC simplified the pipeline and made failure handling trivial—on stream error, DMS retries automatically, giving me confidence in resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
