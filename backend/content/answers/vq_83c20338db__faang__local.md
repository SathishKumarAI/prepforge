---
qid: vq_83c20338db__faang__local
question: How to choose partitioning column in hive? and which column shouldn't use
  partition and why?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 418
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:20:02-05:00'
sources: []
---

**Clarify**  
You’re asked how to pick a good partition key for Hive tables and which columns are bad candidates.  
Assumptions: the data set is large (> TB), queries filter on one or more columns, and you can afford extra metadata storage.

**Approach**  
1. Identify *filter‑heavy* columns (used in WHERE clauses).  
2. Check cardinality – high distinct values → finer partitions; low cardinality → coarse partitions.  
3. Consider data skew – avoid a column where one value dominates.  
4. Ensure the partition column is stable (doesn’t change over time).  

**Depth**  
- **Good candidates:** dates, region codes, or any column with ≥ 10 k distinct values and uniform distribution.  
  *Benefit:* Hive reads only relevant files → I/O savings, faster joins/aggregations.  
- **Bad candidates:** columns with very low cardinality (e.g., a binary flag), highly skewed columns, or those that change frequently.  
  *Why?* Low distinctness leads to many small partitions (metadata overhead) and no pruning benefit; skew causes hot‑spots; mutable values force expensive repartitioning.

**Edge Cases**  
- When cardinality is moderate but data is time‑series: use a composite key (`date/year-month`).  
- If queries rarely filter on the chosen column, partitioning adds no gain.  
- Very large number of partitions (> 100k) can slow down the metastore; consider bucketing instead.

**Optimize & Communicate**  
Start with a pilot table, monitor `SHOW PARTITIONS` and query plans. If pruning is ineffective or the number of files per partition is too low/high, switch to bucketing or adjust the partition column. Explain that the goal is *effective I/O pruning* while keeping metadata manageable—exactly what FAANG interviewers look for in a data‑engineering solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
