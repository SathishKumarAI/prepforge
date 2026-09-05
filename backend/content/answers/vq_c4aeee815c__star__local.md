---
qid: vq_c4aeee815c__star__local
question: How do you find gaps in a sequence in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 404
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:44-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our daily transaction log table had a primary key “seq_id” that was supposed to increment by one each day. During an audit we discovered that the reporting dashboard was showing a 5‑minute lag, and preliminary checks suggested there were missing sequence numbers in the table.

**Task** – I needed to identify all gaps in the `transactions` table for a specific date range, quantify how many rows were affected, and provide a fix so future inserts would enforce continuity.

**Action** – I wrote a single‑statement SQL using a window function:

```sql
SELECT 
  MIN(seq_id)+1 AS missing_start,
  MAX(seq_id)-1 AS missing_end
FROM (
  SELECT seq_id,
         LAG(seq_id) OVER (ORDER BY seq_id) AS prev_id
  FROM transactions
  WHERE transaction_date BETWEEN '2026‑08‑01' AND '2026‑08‑07'
) t
WHERE seq_id <> prev_id + 1;
```

This returned each contiguous block of missing IDs. I then wrote a small Python script to generate `INSERT` statements for the missing rows, populating them with default values and logging the operation in an audit table. Finally, I added a database trigger that throws an error if an insert skips a number.

**Result** – The script identified 12 gaps totaling 48 missing records across the week, which we corrected in one batch. After the fix, the reporting lag dropped from 5 minutes to real‑time, and our data integrity score improved by 98%. I learned that combining window functions with automation scripts can quickly surface hidden data quality issues and that proactive triggers are essential for maintaining sequence guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
