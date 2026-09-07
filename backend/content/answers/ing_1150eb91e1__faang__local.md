---
qid: ing_1150eb91e1__faang__local
question: 'Explain: Asynchronous replication — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 492
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:24:04-05:00'
sources: []
---

**Asynchronous Replication – A Quick FAANG‑style Walkthrough**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Problem:* Explain how asynchronous replication works, its types, real‑world examples, and when you’d pick it over synchronous. *Assumptions to confirm:* We’re dealing with distributed data stores (SQL/NoSQL), latency‑tolerant workloads, and a need for high availability. |
| **Approach** | 1️⃣ Define replication basics.<br>2️⃣ Distinguish sync vs async.<br>3️⃣ List asynchronous patterns.<br>4️⃣ Cite examples & use cases.<br>5️⃣ Touch on trade‑offs (latency, consistency). |
| **Depth** | • **Async Replication** pushes writes to a log and acknowledges the client before applying them on replicas. <br>• **Types:**<br> – *Log‑based* (e.g., Kafka + Debezium) where change events are streamed.<br> – *Pull‑based* (MySQL binlog, PostgreSQL WAL) where replicas poll the master.<br> – *Hybrid* (MongoDB oplog with secondary reads).<br>• **Examples:** <br> – *Kafka Connect* replicating between Kafka clusters. <br> – *Cassandra’s hinted handoff* for eventual consistency.<br> – *Azure Cosmos DB’s cross‑region replication*. <br>• **Use cases:** read‑heavy, globally distributed services (CDNs, e‑commerce catalogs) where 1–2 s latency is acceptable but you still want fault tolerance. |
| **Edge Cases** | • Network partitions: replicas may lag → stale reads.<br>• Write storms can backlog the log – need backpressure.<br>• Schema evolution in log‑based streams requires careful handling. |
| **Optimize & Communicate** | *Improvements:* Add a lightweight conflict‑resolution policy (last‑write‑wins or application‑level merge). *Narration:* “Async replication lets us keep users online even if one data center goes down, at the cost of eventual consistency—exactly what you need for global product catalogs.” |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
