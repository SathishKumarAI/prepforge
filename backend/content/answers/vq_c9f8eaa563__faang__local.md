---
qid: vq_c9f8eaa563__faang__local
question: Difference between Narrow & wide transformations?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 563
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:36-05:00'
sources: []
---

**Clarify**  
> *“Narrow vs. wide transformations”* – i.e., how a record is mapped to one or many output records during an ETL/streaming job.  
> Assume we’re working with a Spark‑style data pipeline on cloud storage (S3/HDFS) and want to know the impact on shuffle, memory, and parallelism.

**Approach**  
1. Define each term.  
2. Contrast key properties: mapping cardinality, shuffle cost, fault tolerance.  
3. Provide concrete code snippets.  
4. Summarize trade‑offs in a table.  

**Depth**  
| Aspect | Narrow Transformation | Wide Transformation |
|--------|-----------------------|---------------------|
| Cardinality | 1 → 0/1 (e.g., `map`, `filter`) | 1 → ≥0 (e.g., `groupByKey`, `join`) |
| Shuffle | None – data stays on the same executor | Required – records re‑partitioned across executors |
| Parallelism | High, no communication overhead | Lower due to network I/O; can become a bottleneck |
| Fault tolerance | Simple lineage replay per partition | Requires recomputing all partitions that touched the shuffle |
| Typical use | Data cleaning, feature engineering | Aggregations, joins, deduplication |

**Edge Cases**  
- A *wide* op on a very small dataset may still incur shuffle overhead unnecessarily.  
- Nested or multi‑stage wide ops can amplify network traffic; test with partitioning strategies (`partitionBy`).  
- When the downstream task is only reading a subset of keys, consider `broadcast join` to avoid shuffling.

**Optimize & Communicate**  
- Prefer narrow ops in pipelines; batch wide ops when you must aggregate or join.  
- Use `repartition()` sparingly—only after a wide op that changes cardinality.  
- Explain to interviewers: “I keep the transformation graph lean, push down predicates early, and only trigger shuffles when the data semantics demand it.”  

**Summary (≈200 words)**  
Narrow transformations preserve record locality and incur no shuffle; they’re cheap, highly parallel, and fault‑tolerant. Wide transformations change cardinality and require a network shuffle, which adds latency, memory pressure, and weaker lineage guarantees. Choosing between them hinges on the data flow: keep logic narrow until you need to combine or aggregate across keys, then perform a controlled wide op with proper partitioning or broadcast optimization. This strategy balances throughput, scalability, and reliability in large‑scale ETL systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
