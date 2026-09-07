---
qid: ing_62716bd089__faang__local
question: 'Explain: Writing data that PySpark can read efficiently'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 419
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:32:51-05:00'
sources: []
---

**Clarify**  
We need to explain how to store data so that a Spark job reads it fast and cost‑efficiently, and what trade‑offs exist between storage format, partitioning, and compression.

**Approach**  
1. Pick a columnar format (Parquet/ORC) → schema inference & predicate pushdown.  
2. Apply partitioning on high‑cardinality keys that are used in filters.  
3. Use snappy or zstd compression to keep I/O low while avoiding CPU overhead.

**Depth**  
*Columnar storage* stores values of each column together, enabling Spark to skip entire columns during reads (schema pruning) and apply *predicate pushdown* to read only relevant rows.  
*Partitioning* creates separate folders for distinct key values; Spark can skip whole partitions when a filter matches the partition column, dramatically reducing data scanned.  
Compression reduces disk I/O; snappy is default because it balances CPU cost with ~70% compression ratio. zstd gives better ratios (~80%) but needs more CPU – suitable if cluster has spare cores.  
Spark’s *statistics* (min/max per column) let the optimizer skip partitions entirely when a filter falls outside the range.

**Edge Cases**  
- Over‑partitioning: too many tiny files → scheduling overhead, “small file problem.”  
- Skewed keys: one partition becomes huge → job imbalance.  
- Choosing compression: if data is already highly compressible (e.g., logs), snappy may suffice; otherwise use zstd or LZO.

**Optimize & Communicate**  
Start with a pilot: write a few partitions, run `spark.read.parquet`, inspect the number of files and shuffle stats. Then iterate—add or drop partition columns, switch compression, and profile GC/CPU usage. Explain to interviewers that we’re balancing I/O, CPU, and cluster scheduling overhead while ensuring data is query‑friendly for downstream analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
