---
qid: ing_7e8a2ddfbd__fp__local
question: 'Explain: Contact Us — What is TPS, what is QPS, and what is the difference?
  _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 409
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:34:44-05:00'
sources: []
---

**TPS (Transactions Per Second) vs QPS (Queries Per Second)**  
At its core, both metrics answer the same question: *how many units of work can a system process each second?* The distinction lies in the **semantic unit** and the **performance guarantees** it implies.

- **TPS** counts *transactions*, i.e., atomic business operations that must satisfy ACID (Atomicity, Consistency, Isolation, Durability). A single transaction may involve multiple reads, writes, and complex logic. Because a transaction can span several database rows or services, TPS is sensitive to *latency* and *resource contention*. It reflects the system’s ability to uphold consistency under load.

- **QPS** counts *queries*, typically read‑only requests that return data without altering state. Queries are often stateless and can be served from cache or replicated replicas, making QPS a measure of *throughput* rather than *consistency*. A high QPS does not guarantee that each query hits fresh data; it only guarantees the number of request responses per second.

**Why the difference matters:**  
A system with 10 k QPS but only 100 TPS may satisfy read‑heavy workloads, yet fail to process critical updates. Conversely, a 1 k TPS engine might handle all writes safely but choke under heavy reads if QPS is low.

**Non‑obvious insight:**  
Because TPS aggregates multiple operations into one unit, its *variance* (the standard deviation of transaction latency) grows super‑linearly with workload size. In contrast, QPS variance remains relatively flat because each query is independent. Thus, when scaling a system, monitoring both metrics and their spread reveals whether bottlenecks stem from write contention or read saturation—something a single aggregate figure would obscure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
