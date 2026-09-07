---
qid: ing_6942f83579__faang__local
question: 'Explain: partitions and now they have to get — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 504
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:48:15-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks you to explain how *partitions* work in DynamoDB, referencing the 2018 re:Invent talk “Under the Hood.”  
Assumptions:  
- The audience knows basic NoSQL concepts but not AWS internals.  
- They expect a high‑level yet technically accurate description of partitioning, key layout, and scaling.

**2️⃣ Approach**  
1. Define a *partition* in DynamoDB terms (a storage unit on a physical node).  
2. Explain the *hash key* → *partition key* mapping.  
3. Describe how items are distributed, rebalanced, and how hot‑spots are avoided.  
4. Mention the role of secondary indexes and global tables.

**3️⃣ Depth**  
- **Partition Key Design:** DynamoDB uses a 128‑bit hash (MD5) on the partition key to pick a *routing token* → a specific *partition*.  
- **Storage Units:** Each partition holds ~10 GB of data (tunable). The system auto‑scales by splitting or merging partitions when thresholds are crossed.  
- **Hot‑Spot Mitigation:** If many reads/writes target one key, DynamoDB shards that key into *sub‑partitions* using a *partition key prefix + hash suffix*, ensuring even load.  
- **Indexing:** Local Secondary Indexes (LSI) share the same partition; Global Secondary Indexes (GSI) are stored in separate partitions with their own hashing logic.  
- **Consistency & Replication:** Each partition is replicated across three AZs for durability.

**4️⃣ Edge Cases**  
- *Uneven key distribution* → leads to hot‑partitions; test with skewed workloads.  
- *Large items* (>400 KB) exceed the per‑item limit → must be split or stored in S3.  
- *Rapid scaling*: sudden write spikes can trigger “hot” partition throttling; monitor CloudWatch metrics.

**5️⃣ Optimize & Communicate**  
Conclude by stressing that DynamoDB’s partitioning is a trade‑off between **horizontal scalability** and **predictable latency**—the hash function guarantees O(1) lookup, while automatic splitting keeps throughput linear. Explain you’d validate this with load tests, monitor throttling events, and adjust key design accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
