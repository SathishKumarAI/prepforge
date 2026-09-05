---
qid: vq_14f146c3ec__fp__local
question: How do you optimize data partitioning in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 599
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:24:03-05:00'
sources: []
---

**Why partitioning matters**

When a query scans an Azure Data Lake Storage (ADLS) file set, the engine reads *every* byte unless it can skip whole blocks. The cost is proportional to the number of partitions that overlap the filter predicates. Thus, optimal partitioning is the problem of **minimizing the expected scan size for the workload**.

**Derive the solution from first principles**

1. **Model the workload**  
   Let \(F\) be the set of filters used in queries (e.g., `date > 2024-01-01`). For each filter, define its *selectivity* \(s_f = P(f)\), the probability that a random row satisfies it.

2. **Partition granularity**  
   Suppose we split the data into partitions indexed by key \(k\). A query will touch partition \(k\) if any row in it satisfies every active filter. The expected number of touched partitions is  
   \[
   E[\#\,partitions] = \sum_k P(\exists\,row\in k : \forall f\in F, f(row))
   \]
   If the data within a partition are *independent* with respect to \(F\), this probability becomes \((1 - (1-s_f)^{n_k})\) for each filter, where \(n_k\) is rows in partition \(k\).

3. **Optimization objective**  
   Minimize the expected scan size:  
   \[
   \min_{\{k\}} \sum_k n_k \cdot P(\text{partition } k \text{ is scanned})
   \]
   subject to constraints (file size limits, write throughput).

4. **Practical rule of thumb**  
   - Partition by the *most selective* column that appears in > 30 % of queries (often a date or region).  
   - Keep partition files between 100 MiB and 1 GiB; this balances metadata overhead against pruning granularity.  
   - Use *bucketing* inside partitions for highly skewed columns to avoid “hot” buckets.

**Non‑obvious insight**

Many engineers stop at date‑based partitioning, assuming it’s always best. However, if the query workload is dominated by a multi‑dimensional filter (e.g., `country = 'US' AND product_id IN (…)`), a single‑column partition will still scan all US partitions for every product query. By modeling the joint selectivity and applying **conditional bucketing**—partition on the most selective dimension, then bucket on the second—you reduce the expected number of touched files far more than either strategy alone. This two‑step pruning often yields 3–5× faster scans without increasing storage overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
