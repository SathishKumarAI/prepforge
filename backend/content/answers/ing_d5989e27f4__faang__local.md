---
qid: ing_d5989e27f4__faang__local
question: 'Explain: Partition keys and request throttling — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 493
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:56:12-05:00'
sources: []
---

**Clarify**  
We’re asked how a partition key influences read/write throughput in DynamoDB and why picking it wisely prevents request throttling. I’ll assume we’re working with hot‑partition avoidance, consistent reads, and that the table’s provisioned capacity (or on‑demand) matters.

**Approach**  
1. Explain what a partition key is and how DynamoDB maps keys to physical partitions.  
2. Show how throughput is distributed across those partitions.  
3. Illustrate hot‑partition scenarios and throttling behavior.  
4. Offer guidelines for choosing a good key (high cardinality, random distribution, sharding tricks).

**Depth**  
A partition key uniquely identifies an item’s *shard*; DynamoDB hashes the key to decide which physical partition stores it. Each partition can handle about 3 MiB/s read or 1 MiB/s write throughput. If many requests target the same key (or a small set of keys), they all hit the same shard, saturating its limits and causing throttling errors.  

Best practices:  
- **High cardinality** – avoid repeating values; aim for >10× your total traffic.  
- **Uniform distribution** – random or time‑based prefixes spread load (e.g., `user#<id>` → `hash(user_id)`).  
- **Avoid hot keys** – don’t base the key on a frequently accessed attribute (like “active”).  
- **Composite keys** – combine an entity id with a timestamp or shard token to create many distinct partitions.  

**Edge Cases**  
*Small tables*: even a good key can hit limits if total traffic is low; consider on‑demand mode. *Burst behavior*: sudden spikes may still throttle until the partition scales. Test by simulating 10k ops/sec against a single key versus shuffled keys.

**Optimize & Communicate**  
To reduce throttling, monitor CloudWatch metrics (`ThrottledRequests`) and adjust the key or enable auto‑scaling. If redesigning is infeasible, add a “shard” attribute to spread writes. I’d explain this trade‑off clearly: better key design saves capacity vs. costly read/write amplification when sharding manually.

---  
*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
