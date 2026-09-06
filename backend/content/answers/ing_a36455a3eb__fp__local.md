---
qid: ing_a36455a3eb__fp__local
question: 👎 What are disadvantages of DynamoDB? — AWS-Services/1_Databases/AmazonDynamoDB/Readme.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 456
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:53:20-05:00'
sources: []
---

**Why DynamoDB can backfire**

At its core, DynamoDB trades *elasticity* for *control*.  
Its design is a **key‑value / document store built on SSD‑backed partitions**, each capped at ~10 TB and automatically split when throughput spikes. This partitioning guarantees linear scalability but introduces two subtle constraints:

| Problem | Underlying principle | Why it hurts |
|---------|----------------------|--------------|
| **Hot partitions** | Load balancing ≠ uniform data distribution | A few hot keys can monopolize a single partition’s IOPS, throttling the entire table. |
| **Limited query expressiveness** | No secondary indexes → point‑or‑range scans only | Complex joins or multi‑attribute filters require client‑side aggregation, inflating latency and cost. |
| **Provisioned throughput billing** | Pay for capacity, not actual use | Over‑provisioning protects against throttling but wastes money; under‑provisioning triggers `ThrottlingException`. |
| **No ACID transactions (pre‑2020)** | Eventual consistency vs strict isolation | Multi‑item updates are non‑atomic unless you enable the newer transaction API, which adds overhead. |
| **Eventual consistency by default** | Distributed consensus ≠ immediate read‑after‑write | Reads may miss recent writes unless you explicitly request strong consistency (rarely needed). |

### Non‑obvious insight  
The *partition key* is not just a hash; it becomes the **single source of truth for throughput budgeting**. If your access pattern clusters around a small set of keys, DynamoDB’s auto‑scaling can’t compensate—your table behaves like a single‑node system. This is why many teams pre‑hash or add “sharding” prefixes to their keys; otherwise, they pay for the best‑case capacity while suffering the worst‑case latency.

In short, DynamoDB excels when workloads are uniformly spread and read‑heavy, but any deviation from that ideal can lead to hidden throttling, cost overruns, and inconsistent data visibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
