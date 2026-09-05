---
qid: vq_c09dfe982e__fp__local
question: WHAT IS AN UNPIVOT OPERATION IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 404
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:54:23-05:00'
sources: []
---

**Unpivoting in SQL – a geometric view of data reshaping**

At its core an *unpivot* turns wide‑column tables into tall‑row tables.  
Suppose we have a table

```sql
| year | sales_q1 | sales_q2 | sales_q3 |
```

Each row is a point in 4‑dimensional space: the *year* plus three *sales* coordinates.  
An unpivot projects this point onto a two‑dimensional subspace where one axis is **quarter** and the other is **value**, while preserving the year as a grouping key.

Mathematically, we apply a linear transformation that maps each original column `sales_qi` to a pair `(quarter='Q1', value=…)`, repeating for all columns. The operation is *invertible* only if the original schema includes a unique identifier; otherwise information about which quarter produced which value is lost.

**Why it must work this way**

- **Normalization principle**: relational tables are 2‑column key/value pairs. Unpivot restores that canonical form, enabling set operations (joins, unions) that assume uniform structure.
- **Information conservation**: the transformation is a bijection on the *set* of rows; no data is destroyed—only reorganized.

**Non‑obvious insight**

Unpivoting is essentially a *basis change* in linear algebra. Each original column represents a basis vector; unpivot expresses the same vector as a combination of a new basis (quarter, value). This perspective explains why you cannot simply “transpose” a table: the mapping must preserve the row identity (`year`) to maintain relational integrity.

In practice, SQL’s `UNPIVOT` clause automates this basis change, letting you treat aggregated metrics as rows for analytics or reporting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
