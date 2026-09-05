---
qid: vq_1420371ba0__fp__local
question: How do you pivot data in SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 393
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:23:53-05:00'
sources: []
---

**Pivoting in SQL: a problem‑solving lens**

The core goal is to transform *rows* that encode categorical values into *columns* so each category becomes a separate attribute of a single record.  
Formally, given a relation \(R(A,B,C)\) where \(B\) holds the categories and \(C\) the numeric payload, we want a new relation
\(S(A,\{b_1,b_2,\dots\})\) with one row per distinct \(A\) and one column per distinct \(B\).  
The operation is essentially a *group‑by* followed by an **aggregation** that selects the appropriate value for each category.  

In SQL this is expressed as

```sql
SELECT A,
       MAX(CASE WHEN B='b1' THEN C END) AS b1,
       MAX(CASE WHEN B='b2' THEN C END) AS b2,
       … 
FROM R
GROUP BY A;
```

Why `MAX`? Because for a given `(A,B)` pair there is at most one value of \(C\); any associative, commutative operation that returns the sole element will do.  
The `CASE` filters rows to the desired category; outside it yields NULL, which `MAX` ignores.

**Non‑obvious insight:** Pivoting is *not* a new primitive but a composition of two fundamental relational algebra operations—projection and aggregation over a conditional expression. Recognizing this lets you write pivots in any query language that supports these primitives (e.g., LINQ, Pandas), and explains why pivoting scales: the heavy lifting remains a simple `GROUP BY`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
