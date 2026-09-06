---
qid: ing_604c611c64__fp__local
question: 'Explain: Antipatterns for partition keys — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 494
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:30:21-05:00'
sources: []
---

### Why a bad partition key is an *antipattern*

In DynamoDB every item is stored on a physical node that is determined by its **partition key** (PK).  
The engine hashes the PK and assigns it to one of ~1 000 nodes.  All reads, writes, and scans for items sharing a PK hit the same node.

If you choose a PK that clusters many hot items together, you create a *hot partition*:

- **Throughput bottleneck** – only one node can service all requests, so the table’s provisioned capacity is wasted elsewhere.
- **Uneven storage** – some nodes grow large while others stay small, leading to inefficient use of RAM and SSD.

Thus, the antipatterns are simple:  
1. **Using a low‑cardinality key** (e.g., `userId` when most users have few items).  
2. **Choosing a monotonically increasing value** (timestamps or auto‑increment IDs) that causes all writes to land on one node.  
3. **Using a composite key where the “partition” part is static** (`PK=“Orders#2024-01”`).

### The deeper principle

This is an instance of *load balancing by hashing*.  Hash functions distribute uniformly only if the input values are independent and high‑entropy.  When the PK contains a common prefix or a sequence, the hash output becomes correlated, violating the assumption that all nodes see equal work.

**Non‑obvious insight:**  
Even if your table’s overall traffic is low, a hot partition can still throttle throughput because DynamoDB enforces per‑partition limits *before* aggregating them.  Consequently, you might hit the “ProvisionedThroughputExceeded” error on one node while others sit idle—an effect invisible to simple query patterns but visible in capacity metrics.

### Bottom line

Pick a PK that is **high cardinality and unpredictable** (e.g., UUID or composite of user ID + random suffix).  Avoid monotonically increasing values unless you add a *sharding key* (`#1`, `#2`, …) to spread the load.  This guarantees even distribution, optimal throughput, and graceful scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
