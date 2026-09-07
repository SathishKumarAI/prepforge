---
qid: ing_cef12447f0__faang__local
question: 'Explain: Data Ingestion: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 544
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:41:38-05:00'
sources: []
---

**Clarify**  
You’re asking how batch and stream ingestion differ—i.e., when data is collected, processed, and stored for ML pipelines. Assume we have a source that emits events (clicks, logs, sensor readings) and we need to decide between two ingestion paradigms.

**Approach**  
1. Define the core concepts: *batch* = periodic bulk capture; *stream* = continuous per‑event flow.  
2. Compare dimensions: latency, throughput, fault tolerance, storage, and downstream model needs.  
3. Provide concrete tooling examples (Spark Batch vs Flink/Kafka Streams).  
4. Summarize trade‑offs.

**Depth**  
| Dimension | Batch | Stream |
|-----------|-------|--------|
| **Latency** | Hours to days; data available only after the window closes. | Near‑real‑time (milliseconds–seconds); each event processed as it arrives. |
| **Throughput** | Handles terabytes per job; optimized for large scans. | Handles high‑rate events with backpressure; scales horizontally via partitions. |
| **Fault tolerance** | Checkpoints at job boundaries; recomputation of entire batch on failure. | Incremental checkpoints (e.g., Kafka offsets); can replay only lost partitions. |
| **Storage & Schema** | Requires pre‑defined schemas, often in Parquet/HDFS for efficient analytics. | Needs flexible schema evolution; stores events in log systems (Kafka, Pulsar). |
| **Use‑cases** | Offline training, nightly model retraining, long‑term analytics. | Online scoring, real‑time feature engineering, anomaly detection. |

Typical stack: Spark Batch + Hive/Parquet vs Flink/Kafka Streams + Kinesis or Pub/Sub.

**Edge Cases**  
- *Burst traffic*: batch may choke on a sudden spike; stream handles via backpressure.  
- *Data consistency*: batch guarantees eventual consistency; streams risk out‑of‑order events unless windowed.  
- *Stateful ops*: streams need managed state (e.g., Flink’s keyed state); batch relies on disk joins.

**Optimize & Communicate**  
For a hybrid ML pipeline, use stream ingestion for real‑time features and batch for periodic model retraining. Explain that the choice is driven by required latency vs volume, and highlight how downstream services (model serving) dictate the ingestion pattern. This narrative demonstrates structured reasoning, clear trade‑offs, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
