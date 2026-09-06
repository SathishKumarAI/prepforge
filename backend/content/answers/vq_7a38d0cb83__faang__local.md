---
qid: vq_7a38d0cb83__faang__local
question: What do you mean by ‘joins’ in PySpark DataFrame? What are the different
  types of joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 524
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:17-05:00'
sources: []
---

**Clarify**  
> “Joins” refer to combining two Spark DataFrames on one or more key columns, producing a new DataFrame that contains rows from both inputs according to the join semantics.

Assumptions:  
* The DataFrames are in‑memory Resilient Distributed Datasets (RDDs) under the Catalyst optimizer.  
* We’re dealing with relational joins (inner, left/right/outer, cross).

---

**Approach**  
1. Explain the concept of a join as a distributed hash or sort‑merge operation.  
2. Enumerate the supported join types in Spark.  
3. Mention that Catalyst rewrites and optimizes each type.

---

**Depth**

| Join | Semantics | Typical Catalyst Plan |
|------|-----------|-----------------------|
| **Inner** | Rows where keys match in both DF | `HashJoin` (if broadcastable) or `SortMergeJoin` |
| **Left/Right Outer** | All rows from the left/right side + matching right/left rows | `BroadcastNestedLoopJoin` if one side is small; otherwise same as inner with null padding |
| **Full Outer** | All rows from both DF, nulls where no match | Same as outer joins but union of both sides |
| **Cross (Cartesian)** | Every pair of rows | `CartesianProduct` – expensive, only for tiny DFs |
| **Semi / Anti** | Rows in left that have/​don’t have a match in right | `BroadcastHashJoin` with `exists` semantics; no duplicate right side rows |

Spark also supports **broadcast joins** (`broadcast(df)`), **shuffle hash joins**, and **sort‑merge joins** depending on size thresholds.

---

**Edge Cases**

* Skewed keys → expensive shuffle; consider salting or custom partitioning.  
* Null join keys → treated as distinct, can produce unexpected duplicates.  
* Large cross join → out‑of‑memory errors; always guard with `limit` or `sample`.

---

**Optimize & Communicate**  

- Use `broadcast(df)` when one side < 100 MB to avoid shuffle.  
- Cache intermediate results if reused.  
- Explain that Catalyst automatically chooses the optimal strategy, but you can hint via `df.join(other, on, "inner")` or `join("left_semi")`.  
- Emphasize readability: “I’d describe the join type and its performance trade‑offs before coding.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
