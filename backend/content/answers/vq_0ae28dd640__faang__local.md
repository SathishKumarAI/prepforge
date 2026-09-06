---
qid: vq_0ae28dd640__faang__local
question: What are the different ways to handle row duplication in a PySpark DataFrame?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 499
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:56:56-05:00'
sources: []
---

**Clarify**

The question asks how to detect and eliminate duplicate rows in a **PySpark `DataFrame`**.  
Assumptions:  
* Duplicates are defined by equality of all columns (or a specified subset).  
* The DataFrame is large enough that memory‑bound solutions may not be feasible.  

**Approach**

1. Identify duplicates (`groupBy` + `count`).  
2. Remove them using one of three patterns:  
   * **`dropDuplicates()` / `distinct()`** – single‑pass Spark API.  
   * **Window function with row number** – keeps the first occurrence (custom ordering).  
   * **Self‑join or anti‑join** – more control for complex predicates.  

Explain trade‑offs: `dropDuplicates` is simplest but cannot keep a specific record; window lets you pick by timestamp/ID; join can be expensive.

**Depth**

```python
# 1) Simple drop all duplicates
clean = df.dropDuplicates()

# 2) Keep first row per key (e.g., by id, order by ts)
from pyspark.sql.window import Window
w = Window.partitionBy("id").orderBy("ts")
df_with_rank = df.withColumn("rn", F.row_number().over(w))
clean = df_with_rank.filter(F.col("rn") == 1).drop("rn")

# 3) Remove duplicates based on a subset of columns
subset_clean = df.dropDuplicates(["colA","colB"])
```

*Complexity*: All are `O(n log n)` in shuffle size; window can add extra column and sort cost.  
*Memory*: `distinct()` requires no extra state beyond shuffle.

**Edge Cases**

* Empty DataFrame → returns empty.  
* Nulls: treated as equal by `dropDuplicates`.  
* Very high cardinality keys → skew may cause slow windows.

**Optimize & Communicate**

- If only need to know if duplicates exist, use `df.count() != df.dropDuplicates().count()` (cheap).  
- For large schemas, specify column list to reduce shuffle.  
- Use broadcast join for small lookup tables when filtering duplicates by a reference table.

By articulating the trade‑offs and providing code snippets, we demonstrate clear problem understanding, structured thinking, and depth—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
