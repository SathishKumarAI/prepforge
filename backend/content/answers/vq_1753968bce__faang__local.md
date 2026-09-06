---
qid: vq_1753968bce__faang__local
question: What are various optimization technique in hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 560
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:59:28-05:00'
sources: []
---

**Clarify**  
The interview asks for *optimization techniques in Hive*—i.e., how to tune query performance on a Hadoop‑based data warehouse. I’ll assume we’re working with standard Hive on YARN/Hadoop, using Tez or Spark execution engines, and that the schema and cluster are already provisioned.

**Approach**  
1. **Data layout & partitioning** – columnar formats (Parquet/ORC), bucketing, dynamic/static partitions.  
2. **Statistics & compaction** – run `ANALYZE TABLE … COMPUTE STATISTICS` to enable the optimizer; use ACID transactions and `INSERT OVERWRITE` for compaction.  
3. **Execution engine & memory** – switch to Tez/Spark, tune `tez.exec.memory`, `spark.executor.memory`.  
4. **Vectorization & I/O** – enable Hive vectorized query execution (`hive.vectorized.execution.enabled=true`).  
5. **Cost‑based optimizer (CBO)** – ensure `hive.cbo.enable=true` and statistics are up to date.  
6. **Indexing & materialized views** – create bitmap or compact indexes; use Hive’s `CREATE MATERIALIZED VIEW … REFRESH`.  
7. **Resource allocation** – YARN queues, `mapreduce.map.memory.mb`, `spark.executor.instances`.  
8. **Query rewriting** – push‑down predicates, avoid SELECT *, use LIMIT/OFFSET sparingly.

**Depth**  
- *Partition pruning* cuts I/O by reading only relevant files; bucketing allows map-side joins.  
- *Vectorized execution* reduces CPU cycles per row (≈ 10× faster).  
- *CBO* chooses join types and order based on size estimates; wrong stats can mislead, so run `ANALYZE` often.  
- *Memory settings* affect spill‑over; Tez’s `tez.runtime.io.sort.mb` controls shuffle buffer size.

**Edge Cases**  
- Skewed partitions → use skew handling (`hive.exec.skewjoin=true`).  
- Missing stats → fallback to rule‑based plan, slower.  
- Small tables → materialized view or broadcast join may be better than partitioning.

**Optimize & Communicate**  
I’d iterate: start with columnar formats + statistics, then enable CBO, vectorization, and Tez; monitor `EXPLAIN (TYPICAL)` output. Explain trade‑offs—partitioning reduces I/O but increases metadata; bucketing aids joins but adds overhead during writes. Conclude by stressing continuous monitoring of query plans and cluster metrics to refine the configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
