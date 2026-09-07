---
qid: ing_0b66153031__faang__local
question: 'Explain: Integration of heterogeneous systems — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 473
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:10:56-05:00'
sources: []
---

**Integration of Heterogeneous Systems – Event‑Driven Architecture**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Problem:* We have legacy monoliths, microservices, and third‑party SaaS that must exchange data in real time. *Assumptions to confirm:* 1) All systems can publish/subscribe; 2) Latency tolerance (≤ 200 ms); 3) Data schema evolution support; 4) Security & compliance requirements. |
| **Approach** | 1️⃣ Choose a distributed event bus (Kafka, Pulsar, or Azure Event Grid). <br>2️⃣ Define an *event contract* using Avro/JSON‑Schema with versioning. <br>3️⃣ Wrap each system in an **adapter** that translates its native API to events and vice versa. <br>4️⃣ Implement *consumer groups* for load‑balanced processing and *dead‑letter queues* for failure handling. |
| **Depth** | - **Publishers** emit domain events (`OrderCreated`, `UserUpdated`). <br>- **Consumers** are stateless services that react (e.g., inventory update). <br>- Use *exactly‑once* semantics with idempotent handlers; keep an event‑id cache or transactional outbox. <br>- Complexity: O(1) per publish, O(N) for fan‑out; storage grows linearly with message volume. |
| **Edge Cases** | • Schema drift → use schema registry and backward compatibility checks.<br>• Network partitions → enable *at‑least‑once* with retries, but guard against duplicates.<br>• Security breach → enforce TLS + role‑based ACLs on topics. |
| **Optimize & Communicate** | After baseline, add: <br>• Compression (Snappy) to reduce bandwidth.<br>• Partitioning strategy based on sharding key for parallelism.<br>Explain trade‑offs: higher throughput vs. increased latency in consumer lag monitoring. Keep stakeholders updated via dashboards and SLAs. |

*Result:* A decoupled, scalable integration layer that allows heterogeneous systems to interoperate seamlessly with minimal downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
