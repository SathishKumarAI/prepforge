---
qid: vq_fc01001ef5__star__local
question: How can one dump/ examine the exact content of a database column?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 417
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:56-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with debugging a data drift issue in our user profile table on PostgreSQL. A recent ETL job had started returning nulls for the `email` column, and our analytics dashboards were suddenly reporting 15% fewer active users.

**Task:**  
I needed to verify the actual content of the `email` column across all rows, identify patterns of corruption, and provide a quick snapshot for the data science team so they could adjust their models.

**Action:**  
First I wrote a simple SQL query to count nulls versus non‑nulls:  
```sql
SELECT COUNT(*) AS total,
       SUM(CASE WHEN email IS NULL THEN 1 ELSE 0 END) AS null_count
FROM user_profiles;
```
Then, to dump the exact values for inspection, I used `COPY TO STDOUT` with CSV format, piping it through `gzip` for size efficiency:  
```bash
psql -d prod <<'SQL'
\copy (SELECT id,email FROM user_profiles) TO STDOUT WITH (FORMAT csv, HEADER true)
SQL | gzip > /tmp/user_emails_$(date +%F).csv.gz
```
I also leveraged `pg_dump`’s `--column-inserts` flag for a smaller subset of problematic rows. Finally, I built a tiny Python script to decompress and print the first 20 lines, allowing quick visual checks without opening large files.

**Result:**  
The dump revealed that 8% of the emails were truncated due to a legacy encoding bug in the ETL pipeline. Fixing the transformation reduced nulls from 15k to 1k in a 2‑hour window, restoring dashboard accuracy and giving the team confidence in their models. I learned the importance of lightweight, reproducible export workflows for ad‑hoc debugging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
