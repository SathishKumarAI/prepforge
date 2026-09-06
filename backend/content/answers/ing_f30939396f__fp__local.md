---
qid: ing_f30939396f__fp__local
question: 'Explain: Sources — Databricks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 436
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:35:42-05:00'
sources: []
---

**Why “Sources” matter in Databricks**

At its core, a data‑engineering pipeline is an **optimization problem**: we want to transform raw observations into actionable signals while minimizing latency, cost, and error. The *source*—the place where the data first lives—is the boundary of this optimization.  

1. **Signal integrity:** Every source imposes its own schema, freshness, and consistency guarantees. Treating them uniformly would ignore the fact that a Kafka stream has micro‑second ordering, whereas an S3 bucket may have eventual consistency.  
2. **Cost‑aware routing:** The cost function is not only compute time; it includes I/O, network egress, and storage tiering. A source in an on‑prem HDFS cluster incurs different bandwidth costs than one in a cloud object store.  
3. **Fault tolerance as a constraint:** If the source fails, the entire pipeline stalls unless we have redundancy or fallback paths. The design must therefore embed *source health monitoring* into the DAG.

Databricks abstracts this by offering a unified `spark.read` API that internally maps each connector (Kafka, JDBC, Delta Lake, S3, etc.) to a **connector driver**. These drivers translate source‑specific semantics—like Kafka’s partition offsets or Delta’s transaction log—into Spark’s *structured streaming* or *batch* primitives.  

**Non‑obvious insight:**  
Many teams treat the connector as a black box and tune only downstream transformations. In reality, the *source driver* is often the bottleneck: its internal buffering, prefetching, and partition discovery determine the achievable throughput before any user code runs. Profiling the driver’s `InputPartition` distribution can reveal hidden skew that would otherwise manifest as late‑arriving micro‑batches or uneven task completion times. By first optimizing source ingestion (e.g., tuning Kafka consumer group size, enabling Delta’s incremental read), you gain a multiplicative benefit on overall pipeline performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
