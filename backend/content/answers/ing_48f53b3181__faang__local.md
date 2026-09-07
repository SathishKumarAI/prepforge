---
qid: ing_48f53b3181__faang__local
question: 'Explain: High and Low Database Cardinality Definition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 455
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:33:40-05:00'
sources: []
---

**Clarify**  
We’re asked to define *high* vs. *low* cardinality in a database context—i.e., the number of distinct values an attribute can take relative to the table size. I’ll assume we’re dealing with relational tables, not NoSQL, and that “cardinality” refers to column uniqueness.

**Approach**  
1. Define cardinality formally.  
2. Explain high vs. low in terms of data distribution.  
3. Discuss implications for indexing, joins, and query plans.  
4. Give concrete examples (e.g., `gender` vs. `user_id`).  

**Depth**  
- **Cardinality** = |distinct values| / |total rows|.  
- *Low cardinality* → few distinct values (≤ 10 % of rows). Typical: booleans, enums, status codes.  
  - Indexing may be counter‑productive because the index adds overhead but offers little selective power. Partitioning or bitmap indexes can help.  
- *High cardinality* → many distinct values (≈ > 90 %). Typical: IDs, emails, timestamps.  
  - B‑tree indexes are effective; they reduce search space dramatically and support range queries.  
- Mixed scenarios: a column with moderate cardinality (≈ 30–70 %) may benefit from a composite index or partial index if predicates filter on that column.

**Edge Cases**  
- Sparse data (many NULLs) can inflate apparent low cardinality.  
- Slowly changing dimensions: values that change infrequently but are high‑cardinality overall.  
- Composite keys where one component is low and the other high; indexing strategy changes accordingly.

**Optimize & Communicate**  
Explain trade‑offs: index maintenance cost vs. read performance, storage overhead of bitmap vs. B‑tree, and how query planners use cardinality estimates to choose join algorithms (nested loops vs. hash). Conclude with a quick rule: *If a column can filter > 10 % of rows, consider indexing; otherwise evaluate bitmap or no index.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
