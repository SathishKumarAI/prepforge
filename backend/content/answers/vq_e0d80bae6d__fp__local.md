---
qid: vq_e0d80bae6d__fp__local
question: How to fetch common records from two tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 405
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:00:53-05:00'
sources: []
---

**Why the intersection is a “set” problem**

When you ask for rows that appear in *both* tables you are really asking for the **intersection** of two sets:  
\[
S_1=\{(k,v)\mid (k,v)\in T_1\},\quad S_2=\{(k,v)\mid (k,v)\in T_2\}
\]
The mathematical definition of an intersection guarantees that each result must satisfy *both* membership conditions.  
In relational algebra this is the **θ‑join** with a predicate that forces equality on the key(s). The engine can then use indexes or hash tables to test membership in constant time, which is why joins are optimal for this task.

**Practical SQL**

```sql
-- 1) Classic inner join (most DBs)
SELECT t1.*
FROM   T1 AS t1
JOIN   T2 AS t2 ON t1.id = t2.id;

-- 2) ANSI INTERSECT (if supported)
SELECT * FROM T1
INTERSECT
SELECT * FROM T2;
```

Both expressions produce the same set; the optimizer may transform one into the other.  
If you need only keys, a `SELECT DISTINCT` on the join can reduce duplicates caused by many‑to‑many relationships.

**Non‑obvious insight**

Most people assume that `JOIN … ON … = …` automatically eliminates duplicates. In fact, if either table contains duplicate key values, the result will contain cross‑product duplicates. The true “common” set is obtained only after a **DISTINCT** or by ensuring the keys are unique (e.g., primary key constraints). Thus, understanding the underlying set theory protects you from accidental data inflation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
