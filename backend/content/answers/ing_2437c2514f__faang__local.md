---
qid: ing_2437c2514f__faang__local
question: 'Explain: Sharding — Top 6 Data Management Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 577
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:08:41-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks for a high‑level overview of *sharding* and the six most common data‑management patterns that use it. Assume we’re targeting distributed SQL/NoSQL systems in a cloud environment, focusing on scalability, fault tolerance, and query performance.

**2️⃣ Approach**  
- Define sharding (horizontal partitioning).  
- Enumerate 6 patterns: *Range*, *Hash*, *Directory‑based*, *Consistent‑hashing*, *Hybrid (range+hash)*, *Feature‑based* (e.g., tenant ID).  
- For each, explain how it partitions data, typical use cases, and trade‑offs.  
- End with a quick comparison table.

**3️⃣ Depth**  

| Pattern | Partition key | Distribution | Pros | Cons |
|---------|---------------|--------------|------|------|
| **Range** | Ordered attribute (date, ID) | Contiguous ranges | Simple queries on ranges; locality | Hot‑spots if data skewed |
| **Hash** | Hash of key | Uniform spread | Even load, good for OLTP | Range queries expensive |
| **Directory‑based** | Lookup table maps key → shard | Explicit routing | Flexible, can move shards easily | Extra latency for lookup |
| **Consistent‑hashing** | Ring with virtual nodes | Dynamic resizing | Minimal data movement on churn | Slightly higher lookup cost |
| **Hybrid (range+hash)** | Range first, then hash within range | Combines locality & balance | Handles both OLAP/OLTP workloads | Complexity in routing logic |
| **Feature‑based** | Business tenant or region | Logical separation | Strong multi‑tenant isolation | Requires careful key design |

- *Sharding* itself: horizontally split a table into shards; each shard runs on separate node. Benefits: linear scalability, parallel query execution, localized failures.

**4️⃣ Edge Cases**  
- Skewed data → re‑shard or use range+hash.  
- Join across shards → costly unless co‑located.  
- Schema evolution → requires coordinated migrations.  
- Backup/restore per shard can be parallelized but needs consistency guarantees (e.g., snapshot isolation).

**5️⃣ Optimize & Communicate**  
Explain that choosing a pattern is driven by workload: OLTP → hash; reporting → range; multi‑tenant SaaS → feature‑based. Mention monitoring metrics (latency, CPU, I/O) to trigger re‑partitioning. Conclude with a brief note on tooling—e.g., using Kubernetes operators or managed services that automate sharding logic. This structured narrative demonstrates problem framing, solution depth, and practical trade‑offs, aligning with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
