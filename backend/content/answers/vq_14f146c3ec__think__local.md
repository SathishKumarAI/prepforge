---
qid: vq_14f146c3ec__think__local
question: How do you optimize data partitioning in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 438
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:11:51-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
   *Ask*: “What workload am I optimizing for?” (interactive analytics vs. batch ETL). Assume a typical Azure Data Lake Storage Gen2 setup with Hive/Databricks workloads on top.

**2️⃣ Mental model: partitioning as data locality**  
   Treat partitions like physical shelves: fewer, larger shelves → less seek; more, smaller shelves → better parallelism but higher metadata overhead. Use the *partition‑by* strategy that matches query predicates (date, region, etc.).

**3️⃣ Step‑by‑step reasoning**  
1. **Profile queries** – find frequent filter columns.  
2. **Choose cardinality** – pick a column with moderate distinct values (not too high to explode directories).  
3. **Define partition granularity** – e.g., daily partitions for log data, monthly for slowly changing dimensions.  
4. **Avoid skew** – if one day has 90 % of rows, consider bucketing or adding a hash key.  
5. **Re‑partition when needed** – use `repartition()` in Spark to balance size (~200 MB–1 GB per partition).  
6. **Monitor** – check execution plans and storage metrics; adjust if partitions become too many (>10k) or too small.

**4️⃣ Common traps to avoid**  
- Over‑partitioning (too many tiny files → high I/O, metadata overhead).  
- Ignoring bucketed columns that can further reduce shuffle.  
- Forgetting to update partition metadata after ingestion.  

**5️⃣ Sanity‑check & communicate**  
Run a sample query, inspect the *Execution Plan* (`EXPLAIN`) for “Partition Filters” and “File Scan”. If it shows many small files or no filter pushdown, tweak partitioning. Summarize: “We’ll partition by `date` at daily granularity, bucket on `region`, and keep each partition ~500 MB to balance parallelism and I/O.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
