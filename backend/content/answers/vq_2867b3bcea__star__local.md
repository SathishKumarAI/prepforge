---
qid: vq_2867b3bcea__star__local
question: How can get SQL* Loader to commit only at the end of the load file?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 378
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:37-05:00'
sources: []
---

**Situation:**  
While migrating a legacy customer database into our new data warehouse, I was tasked with loading over 5 million rows from a flat file into an Oracle table using SQL*Loader. The existing load script committed after every 10,000 records to avoid transaction log bloat, but this caused the warehouse to lock for hours and broke downstream analytics jobs.

**Task:**  
I needed to reconfigure SQL*Loader so that it performed a single commit only at the end of the entire file, while still ensuring data integrity and minimal downtime during the migration.

**Action:**  
I switched the loader from *direct mode* (which auto‑commits per batch) to *conventional mode* with `OPTIONS (SKIP=0, ERRORS=10)` and added `COMMIT` control at the file level. I wrapped the load in a PL/SQL block that started a transaction (`SET AUTOCOMMIT OFF`) before invoking `sqlldr`, then executed an explicit `COMMIT` after the loader finished successfully. To safeguard against partial loads, I enabled `BADFILE` and `DISCARDFILE` logging and used Oracle’s `FLASHBACK ARCHIVE` to capture any rollback points. I also tuned the buffer size (`INFILESIZE`) to 1 GB to keep memory usage stable.

**Result:**  
The entire file loaded in under 45 minutes with a single commit, eliminating lock contention for downstream processes. The migration completed without any data loss, and we saved roughly 12 hours of idle time on the analytics platform. I learned how to balance transaction granularity with system performance by leveraging SQL*Loader’s conventional mode and explicit commit control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
