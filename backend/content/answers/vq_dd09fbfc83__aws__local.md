---
qid: vq_dd09fbfc83__aws__local
question: What main configuration parameters are specified in Mapreduce?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 434
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:18:24-05:00'
sources: []
---

**Situation / Task**  
While architecting a nightly ETL pipeline on **Amazon EMR**, I needed to tune MapReduce jobs so they would finish within the SLA of 30 minutes for a 5 TB data set while keeping cost under \$500 per run.

**Action**  
I focused on three core configuration families that map directly to the *Customer Obsession* and *Deliver Results* principles:

| Category | Key Params | Why it matters |
|----------|------------|----------------|
| **Execution** | `mapreduce.job.maps`, `mapreduce.job.reduces` | Controls parallelism; we set 200 maps/50 reduces after profiling. |
| **Memory & CPU** | `mapreduce.map.memory.mb`, `mapreduce.reduce.memory.mb`, `yarn.app.mapreduce.am.resource.cpu-vcores` | Prevents OOM and ensures YARN allocates enough vCores; tuned to 4 GB / 2 vCore per mapper, 8 GB / 4 vCore per reducer. |
| **I/O & Serialization** | `mapreduce.input.fileinputformat.split.minsize`, `mapred.compress.map.output` (Snappy) | Optimizes split size (~256 MB) and reduces shuffle traffic by 35 %. |

I scripted the config in a **YAML template**, injected it into EMR via AWS CLI, and validated with Spark‑UI metrics. The result: runtime dropped from 45 min to **28 min** (−38 %) and cost fell to \$320 per run.

**Result**  
The pipeline now reliably meets SLA while saving 32 % of the budget—demonstrating *Ownership* and a data‑driven, scalable approach. I documented the tuning process in Confluence for cross‑team reuse, turning a one‑off optimization into a repeatable best practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
