---
qid: vq_a2c1c115c9__fp__local
question: How to fetch alternate records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 427
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:49:26-05:00'
sources: []
---

**Why “alternate” matters**

In a relational table the rows are an unordered multiset; to talk about *alternates* we first impose a **deterministic order** (usually the primary key or a timestamp). Once ordered, selecting every other row is just a sampling problem: pick indices 0,2,4,… from that sequence. The underlying principle is *sampling without replacement*—the operation must be reproducible and independent of physical storage.

**How to implement it**

1. **Assign sequential positions**  
   ```sql
   WITH ordered AS (
     SELECT *, ROW_NUMBER() OVER (ORDER BY id) AS rn
     FROM my_table
   )
   ```
2. **Filter by parity**  
   ```sql
   SELECT *
   FROM ordered
   WHERE MOD(rn, 2) = 1;   -- 1 → first, 3 → third, …
   ```

The `ROW_NUMBER()` guarantees a contiguous numbering regardless of gaps or deletions, unlike using `MOD(id,2)` which would be biased by missing keys.

**Performance note**

If the order column is indexed (e.g., primary key), the window function can use that index; otherwise it may trigger a full sort. For very large tables consider materializing the row numbers once and reusing them.

**Non‑obvious insight**

Using `MOD(id,2)` seems tempting but fails when the identifier isn’t dense: rows with ids 1,3,4 will yield alternates 1,4 (skipping 3). The row‑number approach is immune to such gaps, ensuring *true* alternation every physical record in the sorted set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
