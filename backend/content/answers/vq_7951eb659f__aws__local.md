---
qid: vq_7951eb659f__aws__local
question: Query to find duplicate value in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 403
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:59:07-05:00'
sources: []
---

**Situation & Task (Leadership – Customer Obsession, Ownership)**  
In my last role at a fintech startup we had a production data warehouse that was ingesting millions of daily transaction records. A downstream analytics team reported stale dashboards because duplicate rows were being surfaced in their reports. I owned the investigation and resolved it within 48 hrs.

**Action (Dive Deep + Bias for Action)**  
1. **Diagnose** – I queried `COUNT(*)` per key, identified the primary candidate columns (`account_id`, `transaction_date`).  
2. **Fix** – Added a unique constraint on those columns in Redshift; before that we had a lightweight dedupe query:  

```sql
WITH dup AS (
  SELECT account_id,
         transaction_date,
         COUNT(*) AS cnt
  FROM transactions
  GROUP BY account_id, transaction_date
  HAVING COUNT(*) > 1
)
SELECT t.*
FROM transactions t
JOIN dup d ON t.account_id = d.account_id
          AND t.transaction_date = d.transaction_date;
```

3. **Automation** – Built a nightly Lambda (Python) that runs the query and posts an SNS alert if any duplicates are found, preventing recurrence.

**Result (Deliver Results)**  
- Eliminated 99.9 % of duplicate rows in production data.  
- Dashboard latency dropped from ~5 min to <30 s.  
- Cost impact: Lambda + Redshift scan < $0.50/day, no additional storage.

**Learning & Trade‑offs**  
*Trade‑off*: Adding a unique constraint increased write latency slightly (~3 ms per insert), but this was acceptable for our read‑heavy workload.  
I learned that quick, data‑driven fixes combined with automated monitoring can keep downstream teams happy and prevent future regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
