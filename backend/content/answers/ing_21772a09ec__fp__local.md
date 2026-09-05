---
qid: ing_21772a09ec__fp__local
question: What about initial and ongoing costs? — Use vertical partitioning to scale
  data efficiently in Amazon DynamoDB | AWS Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 492
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:17:21-05:00'
sources: []
---

**Why vertical partitioning matters for DynamoDB costs**

At its core, DynamoDB charges per **Read/Write Capacity Unit (RCU/WCU)** and per **GB of storage**. The fundamental problem is that a single *table* with many attributes forces every read or write to touch all those columns, even if the application only needs a subset. That means you pay for bandwidth you never use.

Vertical partitioning splits a table into several *logical tables* that each hold only the columns needed by a specific workload (e.g., analytics vs. real‑time updates). Each partition can be provisioned with its own RCUs/WCUs and can even live in separate DynamoDB instances or regions if required. The deeper principle is **data locality**: by localizing hot attributes, you reduce the amount of data scanned per request, which translates directly into fewer capacity units consumed.

### Initial cost
* **Table creation & key design** – negligible compared to ongoing savings.
* **Provisioned throughput** – set just enough for the expected traffic on each partition; over‑provisioning is costly because unused units still accrue fees.

### Ongoing cost
* **RCU/WCU consumption** – only the partitions that receive traffic incur charges, so a read-heavy analytics table can stay on low‑throughput provisioned mode while a hot write table gets burst capacity.
* **Storage** – each partition’s size is billed separately; by moving infrequently accessed columns to a “cold” partition you reduce active storage costs.
* **Cross‑partition queries** (via Global Secondary Indexes or DynamoDB Streams) incur extra RCUs/WCUs, but these are predictable and can be throttled.

**Non‑obvious insight:**  
Because each partition has its own *partition key*, the physical layout on disk is independent. When you delete a column from a hot table, DynamoDB never re‑writes the entire dataset; only the affected items shrink. Thus, vertical partitioning not only saves cost but also reduces write amplification and improves performance over time.

In short, by aligning capacity units with actual access patterns through vertical partitioning, you convert what would be a fixed, high baseline cost into a flexible, pay‑for‑what‑you‑use model that scales organically as workloads evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
