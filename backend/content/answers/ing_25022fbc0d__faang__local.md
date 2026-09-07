---
qid: ing_25022fbc0d__faang__local
question: 'Explain: Database Design Tips | Choosing the Best Database in a System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 459
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:01-05:00'
sources: []
---

**Clarify**  
You’re asked how to pick and design a database for a new system—e.g., a social‑media platform or e‑commerce site. Key assumptions:  
* Workload mix (reads vs writes, latency goals).  
* Data model (relational, document, graph).  
* Scale needs (horizontal sharding, replication).  
* Consistency vs availability trade‑offs.

**Approach**  
1. **Requirements mapping** – translate functional and non‑functional requirements into data access patterns.  
2. **Model selection** – decide between SQL (ACID), NoSQL key‑value, document, column‑store, or graph based on the patterns.  
3. **Scalability & fault tolerance** – choose sharding strategy, replication factor, and consistency model.  
4. **Operational concerns** – backup, monitoring, schema evolution, and vendor lock‑in.

**Depth**  
*For a read‑heavy feed*: use a column‑store (Cassandra) with eventual consistency; materialize feeds in a denormalized table.  
*For transactional e‑commerce*: a relational DB (PostgreSQL) with ACID guarantees, sharded by customer ID and using logical replication for read replicas.  
*Hybrid approach*: employ PostgreSQL for core data, Redis for caching hot items, and Neo4j for recommendation graph queries.  

Complexity:  
- **Read latency** O(1) in key‑value; O(log N) in relational joins.  
- **Write amplification** higher in NoSQL when updating denormalized tables.  
Trade‑offs: stricter consistency → higher write cost.

**Edge Cases**  
*Burst traffic*: test auto‑scaling and throttling.  
*Schema changes*: use migration tools (Flyway/Prisma).  
*Cross‑region latency*: evaluate read replica placement.

**Optimize & Communicate**  
Iterate the design with performance benchmarks, then present a concise trade‑off table to stakeholders. Highlight that the “best” database is context‑dependent—matching data patterns, consistency needs, and operational constraints drives the choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
