---
qid: ing_6d22912687__faang__local
question: What is a partition key? — Choosing the Right DynamoDB Partition Key | AWS
  Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 400
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:16-05:00'
sources: []
---

**Clarify**  
You’re asking about the *partition key* in Amazon DynamoDB and how to pick one that keeps data evenly distributed and queries efficient. I’ll assume we’re dealing with a high‑throughput table (thousands of writes/reads per second) where hot spots can throttle performance.

**Approach**  
1. Define the access patterns (single‑item gets, range scans, etc.).  
2. Pick a key that balances read/write load and satisfies those patterns.  
3. Validate cardinality & distribution through metrics or simulation.

**Depth**  
- **Partition Key = Hash Key**: DynamoDB hashes this value to one of 10 000+ partitions.  
- **High Cardinality Needed**: Each distinct key should map to a different partition; otherwise, a “hot” key will overload a single node.  
- **Composite Keys**: Combine an entity ID with a timestamp or shard number (e.g., `userId#YYYYMM`).  
- **Secondary Indexes**: If you need alternate query patterns, design GSI keys similarly to avoid hotspots.

*Complexity*: O(1) lookup; throughput scales linearly with the number of partitions.  

**Edge Cases**  
- Low cardinality (e.g., `status` field) → hot spot.  
- Skewed data (many items share same prefix) → uneven distribution.  
- Very large keys can increase hash computation cost.

**Optimize & Communicate**  
Start with a “sharding” key (hash of userID + shard number), monitor CloudWatch metrics, and adjust if any partition exceeds ~300 MB or >10 000 RCU/WCU per second. Explain that this strategy keeps writes/reads evenly spread while honoring query patterns—exactly what a FAANG interviewer expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
