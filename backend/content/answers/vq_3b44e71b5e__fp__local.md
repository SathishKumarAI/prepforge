---
qid: vq_3b44e71b5e__fp__local
question: Which operations is not lazy?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 314
total_tokens: 480
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:31-05:00'
sources: []
---

In a distributed data‑engineering system such as Spark or Flink, the *lazy* evaluation model guarantees that no computation is triggered until an action forces materialisation.  
This laziness is rooted in **resource optimisation**: intermediate RDDs are represented only by their lineage (a DAG of transformations). The engine can then coalesce stages, pipeline operations, and schedule tasks globally, avoiding unnecessary shuffles or disk I/O.

The *collect* operation violates this principle. When a user calls `rdd.collect()`, the driver requests all partitions to be executed and brings every element into memory as an array. This immediately materialises the entire dataset on the driver node, bypassing lineage optimisation:

1. **No DAG pruning** – All preceding transformations are executed even if some branches could be dropped.
2. **Unbounded memory pressure** – The driver must allocate space for all records, risking OOM in large‑scale jobs.
3. **Network bottleneck** – Data is shuffled to a single node rather than processed locally.

Thus `collect` (and similarly `toPandas`, `take(n)` with `n` close to the dataset size) are inherently non‑lazy because they force full evaluation and transfer of data, breaking the optimisation chain that lazy execution provides.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
