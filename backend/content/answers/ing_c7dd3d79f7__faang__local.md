---
qid: ing_c7dd3d79f7__faang__local
question: 'Explain: So the way that DynamoDB''s architecture works'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 521
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:07-05:00'
sources: []
---

**Clarify**  
*Question:* “Explain how DynamoDB’s architecture works.”  
I’ll assume you want a high‑level view of the data model, storage layout, and query path, not the low‑level wire protocol.

**Approach**  
1. Outline key concepts: partition keys, sort keys, secondary indexes.  
2. Describe physical placement: partitions (shards) on SSDs, replicated across AZs.  
3. Walk through a read/write request lifecycle.  

**Depth**  
- **Data model:** Each table has a *partition key*; optional *sort key* gives ordered items within the same partition. Items are stored as key/value pairs in an LSM‑style log on SSD, compressed with adaptive compression.  
- **Partitions:** A logical “shard” holds ~10 GB of data and is mapped to a physical node. DynamoDB automatically splits/merges partitions based on hot‑spotting or size growth; each partition has two replicas in separate Availability Zones (AZs).  
- **Indexes:** Global Secondary Indexes (GSI) create new hash keys, while Local Secondary Indexes (LSI) share the same partition key but a different sort key. GSIs are materialized as separate tables with their own partitions and replication.  
- **Request flow:** Client sends an API call → Route 53 → AWS edge → DynamoDB service node → *Partition lookup* (hash of PK) → *Read/Write request* to the owning partition’s node(s). Writes go to a commit log, then asynchronously flushed; reads hit the in‑memory cache or disk.  

**Edge cases**  
- Hot partitions: trigger auto‑sharding; otherwise latency spikes.  
- Consistency: eventually consistent reads are served from any replica; strongly consistent requires quorum read.  
- Large items (>400 KB): stored in S3 with a pointer in DynamoDB.

**Optimize & communicate**  
I’d highlight that DynamoDB’s key design (hash‑based partitioning + SSD storage) gives predictable O(1) access, while the automatic sharding removes manual scaling pain. I would also mention trade‑offs: no joins, limited aggregation, and cost sensitivity to throughput units. This framing shows a clear problem–solution path, complexity awareness, and communication of architectural trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
