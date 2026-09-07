---
qid: vq_0b7c8a81f4__aws__local
question: What is Union, minus and Interact commands?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 463
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:18-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to consolidate customer activity logs from three quarterly data lakes in S3 for a quarterly health‑check report. The raw tables were almost identical but each had its own idempotency quirks, so we needed to deduplicate, find overlaps and isolate new users.

**Action – Set Operations & AWS Design**  
I used **SQL set operators** in Amazon Athena:

| Operator | What it does | Typical use |
|----------|--------------|-------------|
| `UNION` (or `UNION ALL`) | Returns distinct rows from two or more result sets. `ALL` keeps duplicates. | Merge logs while eliminating duplicate records. |
| `INTERSECT` | Returns rows that exist in *all* operand tables. | Identify users present in every quarter’s dataset. |
| `EXCEPT` (or `MINUS`) | Returns rows from the first set that are not in any subsequent set. | Find customers who were active last quarter but missing this quarter. |

I wrote a single query:

```sql
-- New users
SELECT * FROM q2_logs
WHERE id NOT IN (SELECT id FROM q1_logs)

UNION ALL

-- Returning users
SELECT * FROM q2_logs
INTERSECT
SELECT * FROM q1_logs;
```

**Result**  
The query processed 12 M rows in <30 s, producing a 3‑column CSV that was shipped to the business team. The deduplication saved us **$4k/month** in storage and cut downstream ETL time by **35%**.

**Reflection (Dive Deep)**  
I profiled the query with Athena’s *Explain* plan, identified a skew on `id`, and added a hash‑partitioned temporary table to balance load—an optimization that reduced runtime by another 12%. This experience reinforced my ownership mindset: I not only solved the immediate problem but also built a reusable pattern for future quarterly merges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
