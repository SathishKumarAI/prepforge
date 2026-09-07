---
qid: ing_48680908fc__faang__local
question: 'Explain: Recommendations for partition keys — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 499
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:32:15-05:00'
sources: []
---

**Clarify**  
You’re asking how to pick a *partition key* (hash key) for DynamoDB tables that will feed recommendation workloads—high read/write throughput and predictable hot‑spot avoidance. I’ll assume:  
1. The table stores user‑item interactions (e.g., `UserID`, `ItemID`, timestamp).  
2. Workloads are write‑heavy during peak usage, with frequent range queries per user or item.

**Approach**  
1. Identify the *access pattern* that drives traffic.  
2. Evaluate candidate keys for cardinality and distribution.  
3. Validate via a small scale prototype (or CloudWatch metrics).

**Depth**  
- **User‑centric key (`userId`)**: Good if most reads are “what did user X see?” but can lead to hot spots when a few users generate many writes.  
- **Composite key (`userId#timestamp`)**: Adds uniqueness, spreads writes temporally, and supports range queries on time windows.  
- **Item‑centric key (`itemId`)**: Useful for “what are popular items?” but risks skew if a handful of items dominate traffic.  
- **Hash‑sharded key (`hash(userId)+#itemId`)**: Distributes load by combining high‑cardinality attributes, mitigating hotspots while still enabling range scans on `userId`.  

Measure the *number of distinct hash values* and the *write amplification* for each candidate; aim for > 1000 distinct keys per second.  

**Edge Cases**  
- Cold starts: new users/items can cause uneven distribution—use a “catch‑all” bucket or periodic re‑hashing.  
- Evolving access patterns: if popularity shifts, the key may become skewed—plan for table migrations or Global Secondary Indexes (GSIs).  

**Optimize & Communicate**  
Once a key is chosen, monitor `ConsumedReadCapacityUnits` and `ConsumedWriteCapacityUnits`; adjust provisioned capacity or switch to on‑demand if spikes are unpredictable. Explain that the trade‑off is between *query simplicity* (single partition lookups) and *write scalability* (even key distribution). This structured reasoning demonstrates clear problem framing, technical depth, and proactive mitigation—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
