---
qid: vq_005f5490ec__think__local
question: Difference between Row number and Dense Rank in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 457
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:04:04-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - Confirm that “Row number” refers to `ROW_NUMBER()` window function.  
   - Confirm that “Dense Rank” refers to `DENSE_RANK()`.  
   - Assume a typical SQL dialect (e.g., PostgreSQL, SQL Server) where both functions exist and are used in an analytic context.

**2. Mental model / framework**  
   - Think of the two functions as ranking mechanisms applied over a partitioned & ordered result set.  
   - `ROW_NUMBER()` assigns a unique sequential integer to each row within the partition, regardless of duplicates.  
   - `DENSE_RANK()` assigns ranks based on distinct values in the ORDER BY clause; ties receive the same rank and subsequent ranks are contiguous.

**3. Step‑by‑step reasoning**  
   1. Write a sample dataset with duplicate keys.  
   2. Apply `ROW_NUMBER() OVER (ORDER BY key)` → observe each row gets 1,2,3,… even if keys repeat.  
   3. Apply `DENSE_RANK() OVER (ORDER BY key)` → see identical keys share the same rank; next distinct key jumps to the previous rank + 1.  
   4. Note that `RANK()` would skip ranks for ties, whereas `DENSE_RANK()` does not.

**4. Common traps & wrong turns**  
   - Mixing up `ROW_NUMBER()` with `RANK()`: remember only `RANK()` skips gaps.  
   - Forgetting the PARTITION BY clause: both functions behave differently when partitions are defined.  
   - Assuming ties always affect row numbers; they don’t.

**5. Sanity‑check & verbalize**  
   - Verify by running both queries on a known dataset.  
   - Explain that `ROW_NUMBER()` is for unique sequential identifiers, while `DENSE_RANK()` is for ranking distinct values without gaps.  
   - Emphasize the impact of duplicates and partitioning in practical use cases (e.g., top‑N per group).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
