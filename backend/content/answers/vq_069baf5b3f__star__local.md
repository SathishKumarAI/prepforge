---
qid: vq_069baf5b3f__star__local
question: Can one read/write files from PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 368
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:46:32-05:00'
sources: []
---

**Situation** – In a payroll integration project for a mid‑size retailer, the legacy HR system produced daily CSV files that needed to be ingested into our Oracle database. The existing ETL pipeline was failing because the file names changed each day and the directory permissions were restricted.

**Task** – I had to build a robust, automated routine in PL/SQL that could read the incoming files from an SFTP‑mounted directory, validate their schema, load them into staging tables, and write a log file with success/failure details—all without external scripts.

**Action** – I leveraged Oracle UTL_FILE for reading and writing, wrapped it in a package `file_io_pkg`. The procedure first used DBMS_SCHEDULER to trigger at 02:00 AM, then queried the directory object mapped to `/u01/inbound` with appropriate read/write privileges. Inside the PL/SQL block I opened the file, looped through each line, split on commas, and inserted rows into `payroll_stage`. After processing, I wrote a status report back to `/u01/outbound/log.txt`, including row counts and any parsing errors. I added exception handling to capture `NO_DATA_FOUND` and `TOO_MANY_ROWS`, logging them for audit.

**Result** – The automated PL/SQL job reduced manual file handling by 90%, cut data load time from 45 minutes to under 5 minutes, and eliminated the risk of human error in file naming. I learned how Oracle’s directory objects and UTL_FILE can replace external scripts while maintaining database security and auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
