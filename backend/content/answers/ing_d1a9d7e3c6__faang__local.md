---
qid: ing_d1a9d7e3c6__faang__local
question: 'Explain: Importance of Cardinality for Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 459
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:47:55-05:00'
sources: []
---

**Clarify**  
You’re asking how the *cardinality* (number of distinct values) of a column affects query speed and storage in an RDBMS. I’ll assume we’re dealing with OLTP‑style tables, typical indexes, and that “performance” means both CPU/memory usage and I/O.

**Approach**  
1. Define cardinality and its impact on index selectivity.  
2. Show how high vs low cardinality influences join/where clause efficiency.  
3. Discuss physical storage (page splits, fragmentation).  
4. Summarize trade‑offs in indexing strategy.

**Depth**  

| Cardinality | Index Selectivity | Query Impact |
|-------------|-------------------|--------------|
| **High** (many distinct values) | Highly selective → index can pinpoint few rows; B‑tree depth small, cache hits high. | Joins/filters on this column are fast; range scans cheap. |
| **Low** (few distinct values) | Poor selectivity → index may return many rows; often full table scan is cheaper. | Indexes on low cardinality columns usually add overhead without benefit. |

*Storage*: High‑cardinality indexes spread keys across many pages, reducing page splits and fragmentation. Low‑cardinality indexes cluster few duplicate keys, causing large hot spots and more I/O.

**Edge Cases**  
- **Sparse tables**: Even high cardinality can be costly if data is very sparse; consider bitmap indexes.  
- **Update patterns**: Low cardinality columns that change frequently cause heavy index maintenance.  
- **Composite keys**: Cardinality of individual parts matters less than the joint distribution.

**Optimize & Communicate**  
For a new schema, profile histogram statistics first. If a column has > 10 % distinct values relative to row count, index it; otherwise skip or use a filtered index. When refactoring, drop low‑cardinality indexes and monitor I/O. In interviews, I’d conclude: *Cardinality is the compass that tells us whether an index will guide the optimizer efficiently or just add noise.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
