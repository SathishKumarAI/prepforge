---
qid: vq_c34b727e83__faang__local
question: Query to find 2nd largest number in the table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 494
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:09-05:00'
sources: []
---

**Clarify**  
> “Given a single‑column table `numbers(num INT)`, return the second distinct maximum value.”  
Assumptions:  
- The column can contain duplicates and NULLs.  
- We want the *second largest distinct* number, not just the second row in sorted order.

---

**Approach**  
1. Remove NULLs.  
2. Deduplicate to get distinct values.  
3. Order descending and skip the first (largest).  
4. Pick the next one.

SQL offers several ways; the simplest is a sub‑query with `LIMIT`.

---

**Depth**  

```sql
-- MySQL / PostgreSQL syntax
SELECT num
FROM (
    SELECT DISTINCT num
    FROM numbers
    WHERE num IS NOT NULL
    ORDER BY num DESC
) AS uniq_nums
LIMIT 1 OFFSET 1;   -- skip the first (largest)
```

*Complexity*:  
- `DISTINCT` + `ORDER BY`: **O(n log n)**, dominated by sorting.  
- Memory: O(n) for distinct values.

If you prefer a window function:

```sql
SELECT num
FROM (
    SELECT DISTINCT num,
           ROW_NUMBER() OVER (ORDER BY num DESC) AS rn
    FROM numbers
    WHERE num IS NOT NULL
) AS ranked
WHERE rn = 2;
```

Both yield the same result.  
In databases that support `FETCH FIRST`:

```sql
SELECT DISTINCT num
FROM numbers
WHERE num IS NOT NULL
ORDER BY num DESC
OFFSET 1 ROW FETCH NEXT 1 ROW ONLY;
```

---

**Edge Cases**  
- **Less than two distinct values** → returns no rows (or null if you wrap with `COALESCE`).  
- **All NULLs or empty table** → returns nothing.  
- **Large tables**: consider an index on `num` to speed up the sort.

---

**Optimize & Communicate**  
For very large datasets, use a two‑pass scan:  
1. Find max (`MAX(num)`),  
2. Scan again for the largest `< max`.  

This keeps memory O(1) and runs in two linear passes (O(n)).  
Explain trade‑offs: single query is concise but may sort many rows; two‑pass is more efficient but requires two scans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
