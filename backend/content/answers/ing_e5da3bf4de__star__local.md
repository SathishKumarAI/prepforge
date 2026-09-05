---
qid: ing_e5da3bf4de__star__local
question: 'Explain: Types of Integrity Checks — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 350
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:07:29-05:00'
sources: []
---

**Situation**  
At my previous company we were shipping a data‑pipeline that ingested millions of sensor records nightly into our analytics warehouse. One night, the nightly job failed with an “inconsistent checksum” error; downstream dashboards started showing corrupted metrics.

**Task**  
I had to design and implement a robust integrity‑check system so that any corruption in transit or storage would be caught early, and we could automatically recover without manual intervention.

**Action**  
First I mapped the data flow: raw ingestion → staging table → transformation job → final table. I added a CRC32 checksum column to each record at ingestion time using PostgreSQL’s `checksum()` function, then stored an aggregate hash per batch in a separate audit table. In our Spark job, before writing to the final table I compared the computed batch hash against the stored one; if mismatched, the job aborted and triggered a retry with a fresh pull from the source. For storage integrity I scheduled nightly `pg_dump` snapshots and ran `md5sum` on the dump files, pushing the hashes into an S3 bucket for immutable audit. Finally, I exposed a REST endpoint that returned the latest checksum status so other services could query before consuming data.

**Result**  
The new system reduced downstream data errors by 98 % within two weeks of deployment. The average recovery time dropped from 8 hours to under 30 minutes because the pipeline auto‑retries on mismatch. I learned how deterministic checksums, coupled with audit tables and automated retries, can turn a brittle batch job into a resilient system—essential for any ML data infrastructure that depends on clean inputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
