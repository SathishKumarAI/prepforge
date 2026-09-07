---
qid: ing_64ed800d97__faang__local
question: 'Explain: So if we try to make a — Database Design Tips | Choosing the Best
  Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 427
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:50-05:00'
sources: []
---

**Clarify**  
You’re asking how database design choices influence a system‑design interview. We’ll assume: *the system needs high write/read throughput, eventual consistency is acceptable, and the data model is semi‑structured (e.g., user profiles + activity logs).*  

**Approach**  
1. **Identify access patterns** – reads per user vs writes per event.  
2. **Choose schema type** – relational for ACID, NoSQL for horizontal scaling.  
3. **Partitioning & sharding strategy** – key‑based or range‑based.  
4. **Replication & failover** – synchronous vs asynchronous.  

**Depth**  
- *Relational (PostgreSQL)*: strong consistency, joins, but limited horizontal scale. Use when transactions are critical (e.g., billing).  
- *Document (MongoDB)*: schema‑flexible, good for activity feeds; shard by user ID to keep all a user’s docs on one node.  
- *Wide‑column (Cassandra)*: linear scalability and high write throughput; model data as column families keyed by user+timestamp.  
- *Graph (Neo4j)*: if relationships dominate (friend recommendations).  

For our scenario, a **hybrid** works best: PostgreSQL for core accounts, Cassandra for event streams. Use Kafka to stream events into both stores.  

**Edge Cases**  
- Hot keys: a viral post can skew shards; mitigate with anti‑entropy or secondary index.  
- Schema evolution: MongoDB handles it natively; relational needs migrations.  
- Latency spikes: monitor read/write ratios and auto‑scale nodes.  

**Optimize & Communicate**  
Explain trade‑offs: ACID vs scalability, query flexibility vs consistency. Outline monitoring (latency, replication lag) and rollback plans. Conclude that a well‑documented partitioning scheme plus clear failure‑over paths demonstrates solid design thinking to FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
