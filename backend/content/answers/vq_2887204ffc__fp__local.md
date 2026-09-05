---
qid: vq_2887204ffc__fp__local
question: what are the optimisations performed in ADF and ADB ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 456
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:27:45-05:00'
sources: []
---

**Why ADF & ADB must optimize data movement and compute**

Both services solve the same core problem: *transfer or transform petabytes of structured data while keeping cost, latency and reliability in check*.  
To do this they lean on three deep principles:

| Principle | What it guarantees | How ADF/ADB enforces it |
|-----------|--------------------|------------------------|
| **Data locality** | Reduce network hops | ADF stages blobs in the same region; Databricks co‑locates executors with storage (ADLS Gen2, S3) and uses *Azure‑native tiered storage* to keep hot data on SSDs. |
| **Parallelism as a first class citizen** | Scale linearly with cluster size | ADF automatically shards copy activities into micro‑tasks; Databricks exposes *partition pruning*, *broadcast joins* and *adaptive query execution (AQE)* that re‑optimizes plans after runtime stats. |
| **Cost–latency trade‑off** | Spend only what you need | ADF’s pipeline scheduler can auto‑scale compute via Azure Batch; Databricks offers *Spot Clusters* and *Auto‑termination*, plus the `spark.sql.adaptive.enabled` flag that spills to disk only when needed. |

**Non‑obvious insight:**  
Both services use **metadata‑driven execution plans**. ADF’s pipeline DAG is compiled into a Directed Acyclic Graph where each node fetches *schema, partition bounds and lineage* from the catalog before deciding whether to skip a copy. Databricks’ Catalyst optimizer does the same but at query time: it rewrites SQL into an executable plan that *pre‑computes statistics*, then lets AQE rewire joins based on actual cardinality. This dual use of metadata turns otherwise brute‑force scans into targeted, cost‑efficient operations—something many users miss when they only tweak batch size or concurrency manually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
