---
qid: ing_b61cef2a64__faang__local
question: 'Explain: Partitions and data distribution — AWS-Services/1_Databases/AmazonDynamoDB/Partioning.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 590
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:46:41-05:00'
sources: []
---

**Clarify**  
The question asks how Amazon DynamoDB partitions a table’s data across its infrastructure and what that means for read/write throughput, consistency, and cost. I’ll assume we’re talking about the default partition‑key model (no global tables or cross‑region replication).

**Approach**  
1. Explain physical partitioning vs logical keyspace.  
2. Describe how DynamoDB maps a hash value of the partition key to an internal shard.  
3. Cover throughput allocation per partition, burst capacity, and scaling.  
4. Touch on hot partitions and how DynamoDB mitigates them.

**Depth**  

| Concept | What it is | How it works |
|---------|------------|--------------|
| **Hash‑based partitioning** | Each item’s partition key is hashed (MD5 → 128‑bit). The hash space is split into ~10 GB “physical partitions”. | DynamoDB assigns a contiguous range of hash values to each physical partition. All items with hash values in that range live on the same shard. |
| **Throughput per partition** | A table’s provisioned Read Capacity Units (RCU) / Write Capacity Units (WCU) are divided across its active partitions. | 1 RCU ≈ 4 KB read; 1 WCU ≈ 1 KB write. If a table has 10 GB of data and is split into 5 partitions, each gets ~2 GB of capacity. |
| **Burst and auto‑scaling** | Each partition can burst up to 100× its provisioned rate for short periods. Auto‑scaling adjusts the total RCU/WCU based on observed traffic. | DynamoDB monitors usage per partition and adds/removes partitions as needed. |
| **Hot partitions** | If many requests target the same hash range, that shard becomes a bottleneck. | Use evenly distributed keys (e.g., UUIDs), composite keys, or “sharding” prefixes to spread load. |

**Edge cases**  
- **Single‑item hot spot**: a popular product ID can saturate its partition; test by inserting many items with the same key.  
- **Large item size**: >400 KB items are split across multiple internal partitions; this increases cost and latency.  

**Optimize & communicate**  
To reduce hotspots, advise using a high‑entropy partition key or adding a random prefix (`<prefix>#<id>`). Explain that DynamoDB automatically shards data but you control the distribution through key design. Emphasize trade‑offs: more partitions → higher costs; fewer partitions → risk of throttling.  

This concise, structured explanation aligns with FAANG interview expectations for clarity, depth, and edge‑case awareness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
