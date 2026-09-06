---
qid: vq_5590bf4144__faang__local
question: How can you handle missing values in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 481
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:11:06-05:00'
sources: []
---

**Clarify**  
*Restate:* “In a distributed Hadoop job, we need to decide how to treat rows with nulls or empty fields so downstream analytics are accurate.”  
*Assumptions to confirm:*  
- What format is the data (CSV/Parquet/Avro)?  
- Are the missing values truly absent (`null`) or placeholders (`NA`, `?`)?  
- Is the pipeline MapReduce, Spark, Hive, or Flink?  

**Approach**  
1. Detect & flag missingness in a pre‑processing stage.  
2. Choose an imputation strategy per column: drop rows, fill with constant/mean/mode, or model‑based.  
3. Implement using Hadoop tools that preserve distribution (e.g., Spark’s `DataFrame.na.fill`, Hive UDFs, MapReduce custom reducer).  

**Depth**  
- *Detection:* Use a Mapper to emit `(colIndex, 1)` for each null; Reducer aggregates counts → global missingness statistics.  
- *Imputation:*  
  - **Drop:** Simple filter (`WHERE col IS NOT NULL`) – O(n) time, minimal memory.  
  - **Constant/Statistic fill:** Compute mean/mode in a separate job, broadcast to workers; replace nulls via UDF. Complexity: O(n) + shuffle for statistics.  
  - **Model‑based (e.g., KNN, regression):** Train a lightweight model on non‑missing rows, then apply during the map phase—higher compute but more accurate.  

**Edge Cases**  
- Columns with >50 % missing → consider dropping entire feature.  
- Mixed data types or schema evolution → ensure UDF handles type casting safely.  
- Very large files → use combiner to reduce shuffle volume.  

**Optimize & Communicate**  
Explain trade‑offs: “Dropping saves time but may bias results; constant fill is fast but introduces noise.” Show a cost‑benefit table, then narrate that we’ll start with the simplest approach (drop or mean) and iterate only if downstream metrics degrade. This demonstrates clear decision‑making, technical depth, and communication expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
