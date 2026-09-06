---
qid: vq_501b92e90d__faang__local
question: HOW DO YOU CHECK FOR DUPLICATE RECORDS IN A TABLE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 491
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:10:14-05:00'
sources: []
---

**Clarify**  
We need a reliable way to detect duplicate rows in a relational table (e.g., `Users`). Assume the table has columns `id`, `email`, `phone`. Clarify whether “duplicate” means exact row match or duplicates on a subset of columns, and if we should flag or delete them. Also confirm DBMS (MySQL/PostgreSQL) and size of data.

**Approach**  
1. Identify the key(s) that define uniqueness.  
2. Use an aggregate query to count occurrences per key set.  
3. Optionally, create a unique index/constraint to prevent future duplicates.

**Depth**  
```sql
-- 1. Find duplicate rows by email and phone
SELECT email, phone, COUNT(*) AS cnt
FROM Users
GROUP BY email, phone
HAVING COUNT(*) > 1;

-- 2. List all rows that are part of a duplicate set
WITH dup_keys AS (
    SELECT email, phone
    FROM Users
    GROUP BY email, phone
    HAVING COUNT(*) > 1
)
SELECT *
FROM Users U
JOIN dup_keys D ON U.email = D.email AND U.phone = D.phone;
```
*Complexity*: O(n) time and O(k) space for the hash map of key counts.  
*Trade‑offs*: The query scans the whole table; adding an index on `(email, phone)` speeds up grouping.

**Edge Cases**  
- NULLs: `GROUP BY` treats each NULL as distinct unless using `ISNULL`.  
- Large tables: consider partitioning or incremental checks (e.g., check only new rows).  
- Concurrency: a race condition can insert duplicates between check and insert; enforce uniqueness at the DB level.

**Optimize & Communicate**  
For production, add a *unique* index after cleaning:

```sql
ALTER TABLE Users ADD CONSTRAINT uq_email_phone UNIQUE(email, phone);
```

Explain to interviewers that this not only flags current duplicates but also protects against future ones. Highlight that indexing reduces subsequent scan costs and that the approach scales linearly with data size. This showcases clear problem framing, efficient SQL usage, complexity awareness, and a forward‑looking solution—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
