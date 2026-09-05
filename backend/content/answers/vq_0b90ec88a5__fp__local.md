---
qid: vq_0b90ec88a5__fp__local
question: is it legal to set the number of reducer tasks to zero?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 433
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:22:19-05:00'
sources: []
---

In Hadoop’s Map‑Reduce model the *reducer* phase is optional.  
When you submit a job with `numReducers = 0`, the framework skips the shuffle and reduce stages entirely, treating the mapper outputs as final.  
This is perfectly legal—many ETL “map‑only” jobs (e.g., log filtering, data enrichment that does not require aggregation) are written this way.  

**Why it must work like this**

1. **Pipeline semantics**: A Map‑Reduce job is a directed acyclic graph of stages. Removing the reduce node simply removes a subgraph; no downstream tasks depend on its output, so the framework can safely skip it.
2. **Resource optimization**: The shuffle and sorting phases are the most expensive parts of Map‑Reduce (network I/O, disk writes). If the user’s logic never needs aggregation or global ordering, bypassing them saves CPU, memory, and network bandwidth—an instance of *divide‑and‑conquer* in distributed computation.
3. **Fault tolerance**: With zero reducers, each mapper is an independent task; failures can be retried without involving a reduce shuffle, simplifying the lineage graph.

**Non‑obvious caveat**

Some job frameworks (e.g., older Hadoop or certain Hive queries) still expect at least one reducer to create a single output file and register it in the JobTracker. If you set reducers to zero on such systems, the job may finish but produce *no* output directory or an empty result. Always verify that the downstream consumers do not rely on a reduce‑generated metadata file.

So, yes—setting reducers to zero is legal and often advantageous when no global aggregation is required; just ensure your execution environment supports true “map‑only” jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
