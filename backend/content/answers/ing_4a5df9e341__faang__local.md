---
qid: ing_4a5df9e341__faang__local
question: 'Explain: Apache Spark — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 581
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:37:39-05:00'
sources: []
---

**Apache Spark: Batch vs. Streaming – What’s the Difference?**

| | **Batch** | **Streaming** |
|---|-----------|---------------|
| **Data Source** | Finite dataset (files, tables) | Continuous flow (Kafka, sockets, etc.) |
| **Execution Model** | RDD/Dataset transformations → DAG → *job* per batch | DStream/Structured Streaming → micro‑batches or event‑time operators → continuous job |
| **Latency** | Seconds to minutes (depends on cluster size) | Low‑latency (seconds or sub‑second with Structured Streaming) |
| **Fault Tolerance** | Checkpointing + lineage; recompute lost partitions | Same lineage, plus checkpointed state for *stateful* ops |
| **Scalability** | Horizontal scaling via executors; bounded workload | Same scaling, but throughput must keep up with ingestion rate |
| **Use‑cases** | ETL, analytics, ML training on static data | Real‑time dashboards, anomaly detection, online ML scoring |

---

### 1. Clarify  
The interviewer wants the core distinction: *when* Spark processes and *how* it guarantees correctness.

### 2. Approach  
I’ll compare the two paradigms along four axes—source, execution, latency, fault tolerance—and then tie them to typical use‑cases.

### 3. Depth  
- **Batch** builds a DAG of transformations on immutable RDDs/Datasets; each job materializes results at the end. Spark recomputes lost partitions via lineage, so no need for external checkpoints.  
- **Streaming** (classic DStream) slices incoming data into micro‑batches and runs the same DAG repeatedly. Structured Streaming replaces micro‑batches with event‑time windows and stateful operators that maintain a *checkpoint* of their state on durable storage. This ensures exactly‑once semantics even if a node fails.

### 4. Edge Cases  
- **Backpressure**: Streaming can overwhelm the cluster if ingestion > processing; need to tune batch interval or use backpressure APIs.  
- **State Size**: Stateful streaming may exhaust checkpoint storage—monitor and partition state.  
- **Schema Evolution**: Batch jobs can tolerate schema changes more easily than streaming pipelines that require consistent schemas.

### 5. Optimize & Communicate  
I’d emphasize that the trade‑off is between *latency* and *throughput*. If you need near‑real‑time insights, Structured Streaming is the way to go; for heavy analytics on static data, batch gives higher throughput and simpler debugging. I’d conclude with a quick code snippet showing how a simple word count differs in both APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
