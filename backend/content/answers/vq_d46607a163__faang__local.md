---
qid: vq_d46607a163__faang__local
question: How does one count/sum RANGES of data values in a column?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 461
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:36:27-05:00'
sources: []
---

**Clarify**  
We want, for a numeric column, the *count* or *sum* of all rows whose value lies inside any of several disjoint ranges \([l_i,r_i]\).  
Assumptions:  
1. The table is static during the query (no concurrent inserts).  
2. Ranges are known beforehand and do not overlap.  
3. We can create indexes on the column.

**Approach**  
1. Build a B‑tree index on the column.  
2. Translate each range into a predicate `col BETWEEN l_i AND r_i`.  
3. Combine them with OR (or UNION ALL for aggregates).  
4. Let the optimizer use index scans; each scan returns only rows in that slice.

**Depth**  
```sql
SELECT SUM(cnt) FROM (
  SELECT COUNT(*) AS cnt FROM t WHERE col BETWEEN l1 AND r1
  UNION ALL
  SELECT COUNT(*) AS cnt FROM t WHERE col BETWEEN l2 AND r2
  ...
) s;
```
*Complexity*: Each index scan costs \(O(\log N + K_i)\), where \(K_i\) is the number of rows in that range. Total time ≈ \(\sum K_i + O(m\log N)\).  
If ranges are many or very small, a single `WHERE col IN (...)` with a derived table (or a bitmap index) can be faster.

**Edge Cases**  
- Overlapping ranges → double‑counting; ensure disjointness.  
- Empty ranges or null values → handle separately.  
- Very wide ranges may cause full table scans despite the index.

**Optimize & Communicate**  
For high‑volume analytics, materialize a *range histogram* (e.g., using PostgreSQL’s `pg_stats`) and pre‑aggregate counts per bucket; then sum relevant buckets. Explain to the interviewer that this trades off storage for \(O(1)\) query time after initial build. Emphasize clear communication of assumptions, trade‑offs, and how index usage drives performance—hallmarks of a FAANG interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
