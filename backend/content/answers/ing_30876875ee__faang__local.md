---
qid: ing_30876875ee__faang__local
question: 'Explain: Top Features of Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 506
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:37:12-05:00'
sources: []
---

**Clarify**

Kafka is a distributed event‑streaming platform.  
We’re asked to list its key features that make it suitable for large‑scale data pipelines.

---

**Approach**

1. Identify core capabilities (throughput, durability, scalability).  
2. Map each capability to concrete design choices (partitioning, replication, log semantics).  
3. Quantify where possible and note trade‑offs.

---

**Depth**

| Feature | What it is | Why it matters |
|---------|------------|----------------|
| **Log‑based storage** | Immutable append‑only files per partition | Enables high write throughput, exact‑once semantics, easy replay |
| **Horizontal scalability** | Topics split into partitions distributed across brokers | Linear scaling of throughput; fault isolation |
| **Replication & leader election** | Each partition has a leader + followers | Guarantees durability (configurable `acks`) and high availability |
| **Consumer groups / offset commits** | Consumers share work via group id, commit offsets in Kafka | Provides at‑least‑once processing with load balancing |
| **Exactly‑once delivery (Kafka 2.5+)** | Transactional API + idempotent producers | Removes duplicate events without external compaction |
| **Low latency & high throughput** | Batching, zero copy, compression | Supports millions of messages/sec per broker |
| **Retention policies** | Time or size based | Enables event replay and stateful stream processing |
| **Schema registry / Avro integration** | Optional schema validation | Prevents data drift across producers/consumers |

---

**Edge Cases**

* Under heavy load, network I/O becomes bottleneck; need proper tuning of `linger.ms`, batch size.  
* If a broker fails during replication lag > 0, potential data loss unless `min.insync.replicas` is set.  
* Consumer lag can grow if processing slower than ingestion—requires scaling consumer instances.

---

**Optimize & Communicate**

To improve, one could enable *log compaction* for key‑value topics or use *Kafka Streams* for stateful ops, reducing external storage needs. I’d present this answer by first framing the problem (real‑time data pipelines), then walking through each feature with a brief example, and concluding with trade‑offs—exactly how FAANG interviewers expect a concise yet thorough explanation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
