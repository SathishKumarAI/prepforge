---
qid: ing_8f26d638a6__faang__local
question: 'Explain: Changing Events Safely — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 484
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:31-05:00'
sources: []
---

**Changing Events Safely – Pub/Sub System Design**

| Section | Key Points |
|---------|------------|
| **Clarify** | We need a fault‑tolerant publish–subscribe layer that can change event schemas or routing rules *without* breaking downstream consumers, while guaranteeing at‑least‑once delivery. Confirm: 1) traffic volume, 2) latency SLA, 3) max consumer churn, 4) compliance on data retention. |
| **Approach** | 1️⃣ Separate **Event Store** (immutable log of raw events). <br>2️⃣ **Schema Registry** with versioning and backward‑compatibility checks. <br>3️⃣ **Topic Manager** that maps logical topics to physical partitions, supporting live reconfiguration via *metadata services* (e.g., ZooKeeper/Eureka). <br>4️⃣ **Consumer Groups** subscribe to a *topic alias*; the broker routes events based on current mapping, allowing safe roll‑outs. |
| **Depth** | - Use Kafka or Pulsar for the log: partitions → parallelism, offset tracking. <br>- Schema evolution via Avro/Protobuf + “readers/writers” compatibility. <br>- For changes, deploy a new schema version; consumers that don’t support it fall back to older alias until they upgrade. <br>- Delivery guarantees: store‑and‑forward + commit offsets. Complexity O(log N) for partition lookup; memory overhead linear in number of topics. |
| **Edge Cases** | - Consumer crash mid‑read → re‑balance & replay. <br>- Schema conflict (incompatible change) → broker rejects publish until all consumers upgrade. <br>- Sudden traffic spike → auto‑scale partitions. |
| **Optimize & Communicate** | • Use a *topic alias* layer to decouple logical names from physical routing, enabling zero‑downtime re‑routing. <br>• Cache schema lookups; batch metadata pulls to reduce latency. <br>Explain trade‑offs: stronger consistency (exactly‑once) requires transaction logs; higher throughput favors at‑least‑once with idempotent consumers. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
