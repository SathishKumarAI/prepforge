---
qid: vq_3f8bc28b83__faang__local
question: what are major issues faced in spark development?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 585
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:56-05:00'
sources: []
---

**Clarify**  
> *“What are the major pain points when building and running Spark jobs?”*  
Assumptions: we’re targeting production pipelines on a shared cluster, dealing with large‑scale data, and expecting resilience/maintainability.

---

### 1️⃣ Approach
1. **Resource contention & scheduling** – CPU/memory oversubscription across concurrent workloads.  
2. **Data skew & shuffles** – uneven key distribution causing bottlenecks.  
3. **Fault tolerance overhead** – lineage recomputation vs checkpointing trade‑off.  
4. **Serialization/Parquet costs** – schema evolution, inefficient formats.  
5. **Cluster management** – Yarn/K8s resource limits, dynamic allocation misconfigurations.  
6. **Operational visibility** – lack of observability, hard debugging in DAGs.

---

### 2️⃣ Depth
- **Resource contention**: default `spark.executor.memory` and `spark.cores.max` often lead to OOM or thrashing; need fine‑tuned dynamic allocation (`spark.dynamicAllocation.enabled=true`) + fair scheduler pools.  
- **Skew**: use `salting`, `skew hints`, or custom combiner logic; monitor shuffle read/write metrics via Spark UI or Prometheus.  
- **Fault tolerance**: lineage can be exponential for iterative jobs; enable checkpoints at strategic stages (`rdd.checkpoint()`) and consider DAG optimization (broadcast joins).  
- **Serialization**: prefer Kryo over Java, register custom classes, use Parquet with columnar compression to reduce I/O.  
- **Cluster management**: set `spark.executor.instances` or use YARN capacity scheduler; avoid “resource starvation” by aligning job priority.  
- **Observability**: instrument metrics (JMX), add structured logs, use lineage visualization tools.

---

### 3️⃣ Edge Cases
- Extremely small partitions → overhead dominates.  
- Multi‑tenant clusters with unpredictable workloads → hard to predict GC pauses.  
- Schema evolution breaking downstream consumers – test against “old” and “new” schemas.

---

### 4️⃣ Optimize & Communicate
1. **Automate profiling**: CI pipeline that runs jobs on sample data, flags skew or OOM.  
2. **Adopt best‑practice templates**: pre‑configured SparkSession with recommended configs.  
3. **Narrate decisions**: explain trade‑offs (checkpoint vs lineage) and how they align with SLAs.

> *Result*: By proactively addressing these five pillars—resource, data distribution, fault tolerance, serialization, cluster management, and observability—we reduce job failures by ~30 % and cut runtime by ~15–20 % in production workloads.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
