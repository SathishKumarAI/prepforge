---
qid: ing_0c9dc06886__faang__local
question: What is Kafka? — The Ultimate Kafka 101 You Cannot Miss
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 446
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:16-05:00'
sources: []
---

**Kafka – a quick FAANG‑style primer**

| Section | Content |
|---------|---------|
| **Clarify** | “What is Kafka?” → A distributed event streaming platform that ingests, stores, and processes streams of records (messages) in real time. I’d confirm: *Do we need durability, low latency, horizontal scalability?* |
| **Approach** | 1️⃣ Define core components – producers, brokers, topics, partitions, consumers, consumer groups.<br>2️⃣ Explain the publish‑subscribe model + log compaction.<br>3️⃣ Highlight its use cases (real‑time analytics, event sourcing, microservices glue). |
| **Depth** | - **Producers** write to a partition’s log; each record gets an offset. <br>- **Brokers** store logs on disk; data is replicated across nodes for fault tolerance. <br>- **Consumers** read offsets independently; consumer groups enable load‑balanced parallel consumption. <br>- **Exactly‑once semantics** via idempotent producers + transactional APIs.<br>Complexity: O(1) write per record (amortized); read latency ≈ microseconds to milliseconds depending on cluster size. |
| **Edge Cases** | • Partition rebalancing during consumer churn.<br>• Backpressure when consumers lag behind producers.<br>• Data retention policies—time‑based vs size‑based. Test with burst loads, network partitions, and varying consumer counts. |
| **Optimize & Communicate** | • Use compacted topics for state stores.<br>• Tune replication factor for availability vs throughput.<br>• Monitor lag metrics; auto‑scale consumers. When explaining, I’d walk the interviewer through a concrete pipeline (e.g., clickstream → Kafka → Spark Streaming → ClickHouse) to illustrate end‑to‑end flow and trade‑offs. |

*In 200 words, that’s why Kafka is the backbone of many real‑time data architectures at Meta, Google, Amazon, etc.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
