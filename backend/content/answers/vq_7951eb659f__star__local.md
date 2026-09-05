---
qid: vq_7951eb659f__star__local
question: Query to find duplicate value in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 363
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:05:46-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we were preparing the nightly data load for our risk analytics engine. The nightly job was failing because a handful of transaction IDs were being duplicated in the staging table, and the downstream model threw an integrity error.

**Task:**  
I needed to identify exactly which transaction IDs were duplicated, quantify how many duplicates existed, and produce a clean report that could be fed back to the ETL team for correction—all within the 30‑minute window before the next batch ran.

**Action:**  
I wrote a quick T‑SQL script using `GROUP BY` and `HAVING COUNT(*) > 1`.  
```sql
SELECT TransactionID, COUNT(*) AS dup_count
FROM Staging.Transactions
GROUP BY TransactionID
HAVING COUNT(*) > 1;
```
Then I joined that result back to the staging table to pull full row details for the first duplicate occurrence and flagged the rest with a `duplicate_flag` column. I executed this on the dev environment, logged the output to an Azure Blob, and emailed the findings to the data ops team.

**Result:**  
The query ran in under 12 seconds and surfaced 2,347 duplicate records out of 1.2 million rows—about 0.2% duplication. Fixing the ETL logic reduced nightly failures by 100% and cut our risk model lag time from 45 minutes to just 10 minutes. I learned that a simple aggregation query can save hours of debugging when used as an automated health check in the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
