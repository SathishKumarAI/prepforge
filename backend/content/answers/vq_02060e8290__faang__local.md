---
qid: vq_02060e8290__faang__local
question: What is the difference between Batch and real time processing?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 529
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:05-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise comparison of *batch* vs *real‑time* (stream) data pipelines—when each is appropriate, how they differ in latency, throughput, and fault tolerance. I’ll assume we’re discussing typical ETL/ELT workflows in a modern data lake or warehouse.

**Approach**  
1. Define key dimensions: **latency**, **volume/throughput**, **consistency model**, **fault‑tolerance**, **resource usage**, and **use cases**.  
2. For each dimension, state the characteristic of batch and real‑time.  
3. Summarize trade‑offs.

**Depth**  

| Dimension | Batch | Real‑Time (Streaming) |
|-----------|-------|----------------------|
| Latency | Minutes–hours; data ingested in large chunks (e.g., nightly jobs). | Milliseconds–seconds; continuous ingestion and processing. |
| Throughput | High volume, but scheduled windows; can process petabytes per batch. | Handles high‑velocity streams but bounded by per‑event compute limits. |
| Consistency | Strong eventual consistency after job completion; results are immutable snapshots. | Eventual consistency on the fly; aggregates may be “stale” until enough events arrive. |
| Fault tolerance | Retry entire batch or incremental checkpoints; simpler rollback. | Requires stateful stream processors (Kafka Streams, Flink) with checkpointing to recover partial windows. |
| Resource usage | Bursty: heavy compute only during job runs; can scale up/down on demand. | Steady load; requires continuous allocation of compute resources. |
| Use cases | Data warehousing, nightly analytics, compliance reporting. | Real‑time dashboards, fraud detection, click‑stream analysis, IoT telemetry. |

**Edge Cases**  
- *Large event bursts* may overwhelm a stream pipeline → need backpressure or scaling.  
- *Batch jobs with long runtimes* risk stale data; hybrid approaches (micro‑batches) mitigate this.  

**Optimize & Communicate**  
I’d explain that many modern architectures adopt a **Lambda** or **Kappa** style: keep a streaming layer for low‑latency insights, and a batch layer for deep, accurate aggregates. Highlight how tools like Spark Structured Streaming bridge the gap by offering micro‑batch processing with near real‑time semantics. Conclude by noting that the choice hinges on business latency requirements, data volume, and operational complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
