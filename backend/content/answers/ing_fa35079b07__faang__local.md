---
qid: ing_fa35079b07__faang__local
question: 'Explain: You may also like — What Is Cardinality in a Database? - SolarWinds
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 472
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:21:32-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *cardinality* as used in relational databases—essentially the uniqueness or count of values within a column (or set of columns). I’d confirm whether they want just definition, impact on queries/indexes, or both.

**Approach**  
1. Define cardinality and its types.  
2. Explain why it matters for query planning and indexing.  
3. Give a quick example.  
4. Mention pitfalls and how to test/measure it.

**Depth**  

| Concept | Detail |
|---------|--------|
| **Definition** | Cardinality = number of distinct values in a column or combination of columns. |
| **Types** | *Low* (few distinct values, e.g., gender), *High* (many unique values, e.g., user ID). |
| **Impact** | • **Selectivity**: high cardinality → highly selective predicate → better index usage.<br>• **Join strategy**: optimizer chooses nested‑loop vs hash join based on estimated cardinality. |
| **Example** | Table `orders`: `customer_id` (high) vs `status` (low). An index on `customer_id` is useful for filtering orders; an index on `status` may be unnecessary. |
| **Measurement** | Database statistics (`ANALYZE`, `EXPLAIN`) or manual `SELECT COUNT(DISTINCT col)`; refresh when data changes significantly. |

**Edge Cases**  
- Columns with many NULLs: NULL is a distinct value in cardinality counts but often ignored by indexes.  
- Highly skewed distributions: optimizer may misestimate selectivity, leading to suboptimal plans.  
- Composite keys: cardinality of `(A,B)` can be higher than either individually.

**Optimize & Communicate**  
To improve performance: keep statistics fresh, use histograms for skewed data, and choose indexes based on high‑cardinality columns that appear in WHERE/JOIN clauses. When explaining, I’d narrate the flow from definition → practical impact → concrete example, ending with a quick “how to verify” step so interviewers see my holistic grasp.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
