---
qid: vq_3730ba7711__faang__local
question: What are the ways to remove duplicates in hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 458
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:05:50-05:00'
sources: []
---

**Clarify**

> “Remove duplicates in Hive” can mean either *deduplicate a table* (drop repeated rows) or *deduplicate during ingestion*.  
> • Do we need to preserve the original data?  
> • Is it a one‑time clean‑up or an ongoing stream?  
> • Are there partition keys or a primary key?  
> • What volume and schema are involved?

**Approach**

1. **SQL‑based deduplication** – `ROW_NUMBER() OVER (PARTITION BY … ORDER BY …)` + `WHERE rn = 1`.  
2. **Bucketed/partitioned tables** – use `CLUSTERED BY` or `DISTRIBUTE BY` to limit duplicates per bucket.  
3. **External tools** – Apache Spark/Hive‑LLAP for large datasets, using `dropDuplicates()`.  
4. **Incremental ingestion** – upsert via `MERGE INTO` (Hive 2.3+) or use a staging table + `INSERT OVERWRITE`.

**Depth**

```sql
CREATE TABLE dedup AS
SELECT * FROM (
  SELECT *, ROW_NUMBER() OVER(PARTITION BY key_cols ORDER BY ts DESC) rn
  FROM src_table
) t WHERE rn = 1;
```

- **Complexity:** O(n log n) due to window function; shuffle cost depends on partitioning.  
- **Trade‑offs:** `ROW_NUMBER()` guarantees one copy but can be heavy on memory; bucketing reduces shuffle.

**Edge Cases**

- Nulls in key columns → treat as distinct unless handled explicitly.  
- Very high cardinality keys → consider Bloom filters or approximate dedup.  
- Partitioned data: ensure partitions are refreshed after dedupe.

**Optimize & Communicate**

- Add `CLUSTERED BY` + `SORTED BY` to reduce shuffle.  
- Use `INSERT OVERWRITE TABLE` to avoid intermediate tables.  
- For continuous streams, switch to Spark Structured Streaming with watermarking and `dropDuplicates`.  

Explain that the chosen method balances correctness, performance, and maintainability, and iterate based on profiling results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
