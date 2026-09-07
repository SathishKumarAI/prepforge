---
qid: ing_39f696c24b__faang__local
question: 'Explain: Choosing the Right DynamoDB Partition Key'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 435
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:04-05:00'
sources: []
---

**Clarify**

The interviewer asks how to pick a partition key in Amazon DynamoDB so that reads, writes, and scalability stay optimal.  
Assumptions: we’re designing a single‑table schema for a high‑traffic application; data is read/written by many users concurrently; we care about throughput and cost.

**Approach**

1. Identify the access patterns (query keys).  
2. Evaluate cardinality & uniform distribution of candidate attributes.  
3. Ensure the key never becomes a hot spot (no single value receives > 10 % of traffic).  
4. Combine with a sort key or secondary indexes if needed.

**Depth**

- **High cardinality** (e.g., user‑id, UUID) spreads writes across many partitions → better throughput and lower latency.  
- **Low cardinality** (e.g., status=“active”) causes hot spots; DynamoDB throttles that partition.  
- Use a *hash* of the natural key if raw values are skewed: `partitionKey = hash(userId)`.  
- When a single entity is frequently accessed, consider *global secondary indexes* with a different key instead of making it the primary key.  
- Remember the 10 GB per‑partition limit; evenly distributed keys keep each partition small.

**Edge Cases**

- Skewed user activity (e.g., one admin doing many writes) → split by composite key (`admin#userId`).  
- Very low throughput workloads can tolerate lower cardinality but risk throttling if traffic spikes.  
- Test with realistic load patterns; use DynamoDB’s *partition‑key distribution* metrics.

**Optimize & Communicate**

Explain that choosing the right partition key is a trade‑off: high cardinality for scalability vs. logical grouping for simplicity. Emphasize validating assumptions with real usage data, monitoring hot partitions, and iterating on the schema if hotspots appear. This shows clear problem solving, technical depth, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
