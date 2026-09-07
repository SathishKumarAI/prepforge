---
qid: ing_3a88808bda__faang__local
question: 'Explain: Event Driven Architectures — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 495
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:39-05:00'
sources: []
---

**Event‑Driven Architecture (EDA) – Quick Take**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Problem*: Explain EDA and how to design a system that relies on events (e.g., an e‑commerce order pipeline). Ask: “Do we need real‑time guarantees?” “What persistence or idempotency guarantees are required?” |
| **Approach** | 1️⃣ Define the event model (schema, versioning). <br>2️⃣ Pick a broker (Kafka, Pulsar, SQS) based on throughput & durability. <br>3️⃣ Design producers/consumers with retry, dead‑letter queues, and schema registry. <br>4️⃣ Handle ordering via partition keys or causal chains. |
| **Depth** | • **Throughput**: Kafka’s log‑based storage → O(log N) append; consumer parallelism = partitions.<br>• **Durability**: Replication factor >1, quorum reads.<br>• **Consistency**: At‑least‑once delivery; use idempotent handlers or transaction APIs (Kafka 2.5+).<br>• **Latency**: End‑to‑end <50 ms for low‑latency ops, otherwise batch consumption.<br>• **Scaling**: Add partitions → linear throughput; add consumers per partition. |
| **Edge Cases** | • Duplicate events → idempotent processing or deduplication window.<br>• Schema drift → backward/forward compatibility via Confluent Registry.<br>• Out‑of‑order events → sequence numbers + buffer windows.<br>• Failure of broker nodes → graceful failover & leader election. |
| **Optimize & Communicate** | • Use compacted topics for state snapshots (e.g., user profile). <br>• Implement monitoring: lag, throughput, error rates; alert on consumer stalls. <br>Explain trade‑offs: higher replication = lower latency but more storage; stricter ordering → fewer partitions and reduced parallelism. |

*Key takeaway*: EDA decouples producers/consumers via a durable broker, enabling horizontal scaling, fault tolerance, and flexible processing pipelines—critical for FAANG‑scale services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
