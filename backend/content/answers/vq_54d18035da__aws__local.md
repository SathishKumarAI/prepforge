---
qid: vq_54d18035da__aws__local
question: what are the parameters of mappers and reducers?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 862
total_tokens: 1092
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:51:56-05:00'
sources: []
---

**Situation & Task (S)**  
When I was leading a migration of our nightly ETL pipeline from an on‑prem Hadoop cluster to Amazon EMR, the team struggled with tuning MapReduce jobs that processed over **10 TB/day** of log data. The question was: *“What parameters should we expose for mappers and reducers?”*  

**Action (A)**  
I broke the problem into three layers—input/output formats, memory/CPU allocation, and parallelism—and mapped each to AWS services.  
1. **Input/Output** – I added `mapred.input.format.class` (`ParquetInputFormat`) and `mapred.output.compress.codec` (`org.apache.hadoop.io.compress.SnappyCodec`).  
2. **Memory & CPU** – For mappers: `mapreduce.map.memory.mb`, `mapreduce.map.cpu.vcores`; for reducers: `mapreduce.reduce.memory.mb`, `mapreduce.reduce.cpu.vcores`. I set defaults to 4 GB/2 vCores for mappers and 8 GB/4 vCores for reducers, then used CloudWatch metrics (`yarn.nodemanager.container-executor.service` & `YARN ResourceManager`) to auto‑tune via an EMR Auto Scaling group.  
3. **Parallelism** – I tuned `mapreduce.map.max.split.size`, `mapred.reduce.tasks`, and `spark.default.parallelism` (for the Spark‑on‑EMR fallback).  

I documented these as *pipeline‑level* variables in our Terraform module, allowing each environment to override them with a simple JSON map.  

**Result (R)**  
After deployment:  
- **Job runtime dropped from 2 hrs to 45 min** (a 71% reduction).  
- **Cost per job fell by $120/day**, saving ~$4k/month on EC2 spot instances.  
- The auto‑tuning loop now keeps the CPU utilization at ~65%, preventing over‑provisioning.  

---

### Leadership Principles Highlighted
- **Ownership** – I took end‑to‑end responsibility for the migration and parameter design.  
- **Dive Deep** – I analyzed YARN metrics, Hadoop logs, and AWS cost reports to inform every tuning decision.  
- **Bias for Action** – Implemented a quick Terraform change set that delivered measurable gains in under 48 hours.

---

### Technical Takeaways
| Parameter | Purpose | Typical Value (EMR) |
|-----------|---------|---------------------|
| `mapreduce.map.memory.mb` / `reduce.memory.mb` | JVM heap size for containers | 4096 / 8192 |
| `mapreduce.map.cpu.vcores` / `reduce.cpu.vcores` | CPU cores per container | 2 / 4 |
| `mapred.input.format.class` | Data serialization format | ParquetInputFormat |
| `mapred.output.compress.codec` | Compression codec for output | SnappyCodec |
| `mapreduce.reduce.tasks` | Parallelism level | dynamic (based on data size) |

**Scalability & Availability:**  
Using EMR’s **managed scaling** and **Spot Instances** ensures the cluster grows with load while keeping high availability via multi‑AZ node placement.  

**Cost Trade‑offs:**  
Higher memory allocations increase spot pricing but reduce spill‑to‑disk, improving runtime; we found a sweet spot at 4 GB/2 vCores for mappers and 8 GB/4 vCores for reducers.  

---

### What the Bar‑Raiser Looks For
- **Quantified Impact**: I tied parameter choices to concrete runtime & cost metrics.  
- **Depth (Dive Deep)**: Showed deep analysis of Hadoop internals, YARN metrics, and AWS pricing models.  
- **Ownership & Learning**: I documented lessons (e.g., “Spill‑to‑disk thresholds”) for future pipelines and iterated on the design after each production run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
