---
qid: ing_668333803c__faang__local
question: 'Explain: Get spans within a time range — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 433
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:48-05:00'
sources: []
---

**Clarify**

We’re asked how an AI‑evaluation platform (e.g., *Langwatch* or *Langfuse*) can retrieve evaluation spans that fall entirely within a user‑specified time window.  
Assumptions to confirm:  

1. Each evaluation span has `start_ts` and `end_ts`.  
2. Time is stored in UTC epoch milliseconds.  
3. The database is relational (PostgreSQL) or a NoSQL store with range queries.

**Approach**

1. Accept `range_start` and `range_end` from the UI/API.  
2. Translate to a query that selects spans where `start_ts >= range_start AND end_ts <= range_end`.  
3. Paginate results (cursor or offset).  
4. Return metadata (count, total duration) for analytics.

**Depth**

```sql
SELECT *
FROM evaluation_spans
WHERE start_ts >= $1
  AND end_ts   <= $2
ORDER BY start_ts ASC
LIMIT $3 OFFSET $4;
```

*Complexity*: O(log N + K) where N is number of spans and K the page size, thanks to a composite index on `(start_ts, end_ts)`.  
*Trade‑offs*: Using `BETWEEN` would include boundary overlaps; explicit comparison gives strict containment.

**Edge Cases**

- Empty result set (no spans in range).  
- Spans that start before but end inside the window – should be excluded.  
- Very large ranges causing many rows; pagination mitigates memory blowup.  
- Timezone mismatches – enforce UTC at ingestion and query time.

**Optimize & Communicate**

Add a materialized view summarizing spans per hour for quick aggregation queries. Explain to interviewers that this keeps the API responsive while preserving exact‑match semantics. Highlight that indexing on both timestamps is critical; without it, performance would degrade to O(N). Conclude by noting that this pattern scales from thousands to millions of evaluations with minimal changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
