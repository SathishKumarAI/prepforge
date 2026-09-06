---
qid: vq_54c1186a68__faang__local
question: How to remove duplicates records in dataframe?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 428
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:10:48-05:00'
sources: []
---

**Clarify**  
> “Remove duplicate rows from a Spark/DataFrame.”  
Assumptions:  
* We’re using PySpark/Scala DataFrames (or pandas if small).  
* Duplicates are defined by all columns, or optionally a subset of key columns.  
* We want deterministic results and minimal memory overhead.

**Approach**  
1. Identify duplicate criteria (`subset` of columns).  
2. Use built‑in `dropDuplicates()` for Spark or `df.drop_duplicates()` for pandas.  
3. If we need to keep the *first* or *last* occurrence, use a window partition + row_number().  

**Depth**  
```python
# Spark example – keep first occurrence by timestamp
from pyspark.sql import Window
w = Window.partitionBy('id').orderBy('ts')
df_clean = (df.withColumn('rn', F.row_number().over(w))
                .filter(F.col('rn') == 1)
                .drop('rn'))
```
*Time*: O(n log n) for sorting; *Space*: O(1) extra columns.  
For large datasets, `dropDuplicates()` uses shuffle but is highly optimized.

**Edge Cases**  
* Nulls: Spark treats null as equal – works if that’s desired.  
* Very wide schemas: `subset` reduces shuffle cost.  
* Memory limits: use `repartition` before window to avoid spills.

**Optimize & Communicate**  
* If only uniqueness matters, prefer `dropDuplicates()`—no extra columns, minimal code.  
* For “first/last” semantics, the window approach is necessary but incurs a sort; explain trade‑off in interview.  
* Mention that in PySpark 3.x, `df.dropDuplicates(subset)` uses hash partitioning which is faster than full shuffle.  

This structured answer shows clear assumptions, multiple solutions with complexity, and awareness of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
