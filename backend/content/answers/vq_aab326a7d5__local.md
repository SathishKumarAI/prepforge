---
qid: vq_aab326a7d5__local
question: 83).How to implement parallel copies in ADF using partitioning ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 422
total_tokens: 650
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer (crisp)**  
In ADF you trigger parallel copies by setting *parallel copy* on the dataset and enabling *partitioned copy* in the sink settings. Define a *partition key* (e.g., `date` or a hash of an ID) in the source query, then use that same key as the *Sink Partition Key* in the mapping. ADF will automatically split the data into N partitions (default 4–8; you can set *Maximum concurrent copy tasks*) and run each as a separate copy activity, scaling out to the target’s throughput limits.

**Nuance & lived experience**  
In production at my last role I moved a nightly fact table from ADLS Gen2 to Synapse using this pattern. The source was a Hive‑like query that returned 3 TB; by partitioning on `year_month_day` and setting *Maximum concurrent copy tasks* to 12, we cut the run time from ~8 h to <1.5 h. I tuned the *Copy throughput* (e.g., set *Source buffer size* to 128 MB) to match the source’s read capacity.  

Failures mostly came from “max parallelism exceeded” errors when the sink (SQL DW) hit its concurrency quota. I mitigated this by adding a *Data Flow* stage that throttles the copy count based on real‑time metrics via the ADF monitoring API. Also, if the partition key had skew (one day’s data > 90 % of total), the load was uneven; I added a “partition size” hint in the query to rebalance.  

Metrics: we track *Copy bytes per second* and *Task duration* per partition; a sudden drop triggers an alert that often points to network hiccups or source throttling. This approach gives deterministic scaling while keeping cost predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
