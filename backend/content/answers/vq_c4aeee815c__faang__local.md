---
qid: vq_c4aeee815c__faang__local
question: How do you find gaps in a sequence in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 544
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:35-05:00'
sources: []
---

**Clarify**

> “Find gaps in a sequence” – I’ll assume we have an ordered list of integers stored in a single column (`id`) of a relational table and we need to return every missing integer between the smallest and largest values (or only those that are truly absent).  
> **Assumptions to confirm**:  
> * The sequence is contiguous except for gaps.  
> * Values are positive, unique, and sorted by `id`.  
> * We’re working with a relational DB (SQL‑based) – no external arrays or code.

---

**Approach**

1. Identify the minimum (`min_id`) and maximum (`max_id`).  
2. Generate all integers in that range.  
3. Left‑join the table to this generated set and filter where the original value is `NULL`.  

In PostgreSQL/SQL Server, a recursive CTE or `generate_series` can produce the full range.

---

**Depth (Sample SQL)**

```sql
WITH seq AS (
    SELECT generate_series(MIN(id), MAX(id)) AS num
    FROM   my_table
),
missing AS (
    SELECT s.num
    FROM   seq s
    LEFT JOIN my_table t ON t.id = s.num
    WHERE  t.id IS NULL
)
SELECT * FROM missing ORDER BY num;
```

*Complexity*:  
`O(n)` to scan the table for min/max + `O(r)` where `r = max_id - min_id + 1` to generate and join.  
Space: `O(r)` for the temporary sequence set.

---

**Edge Cases**

| Case | What breaks? | Test |
|------|--------------|------|
| Empty table | No min/max | Expect empty result |
| Single row | Range size = 1 → no gaps | Return empty |
| Large gaps (e.g., millions) | Memory blow‑out for seq CTE | Use streaming or pagination |
| Non‑integer IDs | `generate_series` fails | Cast to integer or use custom generator |

---

**Optimize & Communicate**

* If the range is huge, switch to a set-based approach:  
  * Compute differences between consecutive rows (`id - LAG(id)`) and emit ranges where difference > 1.  
  * This keeps memory at `O(n)` without materializing all numbers.

Explain reasoning: “I first confirm assumptions, then outline a straightforward CTE solution for clarity, discuss complexity, cover edge cases, and finally present an optimized set‑based variant that scales better.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
