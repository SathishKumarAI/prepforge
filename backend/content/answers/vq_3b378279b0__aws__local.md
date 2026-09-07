---
qid: vq_3b378279b0__aws__local
question: How can you import large objects like BLOB and CLOB in sqoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 458
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:23-05:00'
sources: []
---

**Answer (Amazon style)**  

During a migration of an on‑prem data warehouse to Redshift, we needed to import millions of BLOB (image) and CLOB (text) columns from Oracle into S3 so that downstream analytics could run without hitting the source database.  

- **Situation:** The legacy system had > 50 TB of media files; direct Sqoop pulls stalled because each file was > 2 GB, exceeding Sqoop’s max‑row‑size and causing OOM errors.  
- **Task:** Build a fault‑tolerant ingestion pipeline that preserves data integrity while staying within cost limits.  
- **Action:**  
  1. **Use `--direct` + `--split-by` on the primary key** to parallelize across 64 mappers, each handling ~ 800 MB of BLOB/CLOB.  
  2. **Add `--batch=10000` and `--max-retries=3`** so that transient DB hiccups are retried without manual intervention (Ownership).  
  3. **Pipe the output through a custom Java mapper** that streams the binary data to S3 using the AWS SDK (`AmazonS3Client.putObject`) instead of writing temporary files, thus avoiding disk I/O spikes (Dive Deep).  
  4. **Tag each object with metadata** (source table, row id) for later Athena queries.  
- **Result:** Completed the migration in 48 hrs, reduced on‑prem load by 90 %, and cut ingestion cost to <$3k versus the $12k baseline of manual ETL. The pipeline now auto‑runs nightly with SLA < 4 hrs (Deliver Results).  

**Bar‑raiser cues:**  
- Demonstrated *ownership* by designing a self‑healing mapper.  
- Showed *dive deep* into Sqoop limits and S3 streaming.  
- Quantified impact: 90 % load reduction, $9k savings.  
- Learned from early failures (OOM) and iterated to use streaming instead of temp files.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
