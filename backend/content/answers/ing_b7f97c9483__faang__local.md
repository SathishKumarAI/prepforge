---
qid: ing_b7f97c9483__faang__local
question: 'Explain: Scale efficiently — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 421
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:51:03-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *database sharding*—a technique for horizontally partitioning data so that a single logical database is split across multiple servers. Clarify that we’re focusing on the “scale efficiently” aspect: how sharding lets an application grow beyond one machine’s limits.

**Approach**  
1. Define sharding and its purpose.  
2. Describe the typical architecture (shard key, routing layer).  
3. Outline benefits vs. trade‑offs.  
4. Touch on common pitfalls and AWS services that help.

**Depth**  
- **Sharding** is horizontal partitioning: each shard stores a subset of rows determined by a *shard key* (user ID, region, etc.).  
- A **routing layer** (e.g., custom middleware or Amazon RDS Proxy) maps a request to the correct shard.  
- Benefits: linear scalability, reduced contention, localized backups.  
- Trade‑offs: increased complexity in joins across shards, need for careful key design, potential hotspoting if key distribution is uneven.  
- On AWS, you can implement sharding manually with Aurora Serverless or use **Amazon DynamoDB** (built‑in partitioning) or **Amazon DocumentDB** with custom routing.

**Edge Cases**  
- *Hot keys*: a single user generates most traffic → shard imbalance.  
- *Schema changes*: migrating columns across shards is costly.  
- *Cross‑shard transactions*: require two‑phase commit or eventual consistency.

**Optimize & Communicate**  
Explain that sharding is not a silver bullet; start with read scaling (read replicas) before horizontal partitioning. Use monitoring to detect skew and automate re‑sharding when needed. Wrap up by stressing the importance of choosing a stable shard key and leveraging managed services to reduce operational overhead—an approach that aligns with FAANG’s focus on scalable, maintainable systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
