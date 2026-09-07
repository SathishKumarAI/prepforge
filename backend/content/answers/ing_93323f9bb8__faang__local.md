---
qid: ing_93323f9bb8__faang__local
question: 'Explain: Secondary Indexes - DynamoDB — AWS-Services/1_Databases/AmazonDynamoDB/SecondaryIndexes.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 440
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:39-05:00'
sources: []
---

**Clarify**  
You’re asking how **secondary indexes** work in Amazon DynamoDB and why they matter for query flexibility. I’ll assume you know the basics: a primary key (partition + optional sort) defines data placement and guarantees uniqueness.

**Approach**  
1. Describe the two index types (LSI & GSI).  
2. Explain how they are created, projected attributes, and consistency rules.  
3. Highlight use‑cases and trade‑offs (storage, throughput, latency).

**Depth**  
- **Local Secondary Index (LSI)**: shares the same partition key as its table but has a different sort key. Created at table creation; cannot be added later. Projection can be *ALL*, *INCLUDE*, or *KEYS_ONLY*. Because it lives on the same physical storage, reads are strongly consistent and consume the same provisioned throughput as the base table.  
- **Global Secondary Index (GSI)**: independent partition & sort keys; can be added/removed at any time. Each GSI has its own read/write capacity units unless you enable *on‑demand*. Projection works the same way, but writes incur an extra cost to keep the index materialized. GSIs allow queries that are not covered by the primary key, enabling flexible access patterns (e.g., searching users by email).

**Edge cases**  
- Partition key collisions in LSIs cause a single item to appear only once per partition.  
- Updating items must update all GSIs; large payloads can hit write throughput limits.  
- Projection mismatches lead to *MissingAttributeException*.

**Optimize & communicate**  
Choose LSI when you need alternate sort orders on the same partition and know your access patterns upfront; choose GSI for truly flexible queries or when you need to add indexes later. Communicate to stakeholders that every GSI consumes extra capacity, so plan provisioned throughput accordingly and monitor *WriteThrottleEvents*.

---  

*(Word count: ~190)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
