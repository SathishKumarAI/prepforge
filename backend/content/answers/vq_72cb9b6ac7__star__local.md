---
qid: vq_72cb9b6ac7__star__local
question: WHAT IS A FILTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 302
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:24-05:00'
sources: []
---

**Situation:** In a recent project for an e‑commerce platform, our sales database had a `Transactions` table with over 15 million rows. The reporting dashboard only queried active orders (status = 'completed'), but the full table scan caused a 3‑second lag during peak hours.

**Task:** I needed to reduce query latency for the “Completed Orders” report without adding excessive storage or compromising write performance on the main table.

**Action:** I designed a filtered index on `Transactions`:
```sql
CREATE INDEX IX_Transactions_Completed
ON Transactions(OrderDate, Amount)
WHERE Status = 'completed';
```
This index only contains rows where `Status` is ‘completed’, so its size was roughly 30 % of the full table. I also added INCLUDE columns for `CustomerID` and `ShippingCity` to cover the query’s SELECT list, eliminating look‑ups. After deployment, I monitored CPU usage with SQL Server Profiler and adjusted the filter when a new status code ‘canceled’ was introduced.

**Result:** Query time dropped from 3 s to under 300 ms on average, a 90 % improvement. Storage overhead for the index was just 1.2 GB. I learned that filtered indexes are powerful for sparse predicates and can dramatically improve read performance when the filter is highly selective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
