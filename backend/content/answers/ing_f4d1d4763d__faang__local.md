---
qid: ing_f4d1d4763d__faang__local
question: 'Explain: But normally you would also want to — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 436
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:09:25-05:00'
sources: []
---

**Clarify**  
You’re asking how to pick a database during a system‑design interview: what criteria matter (latency, consistency, scalability), which families fit those needs, and the trade‑offs that guide the decision.

**Approach**  
1. **Gather requirements** – read/write patterns, data size, ACID needs, query complexity.  
2. **Map to database families** – relational (PostgreSQL/MySQL), document (MongoDB), key‑value (Redis/Consul), graph (Neo4j), wide‑column (Cassandra).  
3. **Evaluate trade‑offs** – consistency vs. partition tolerance, operational overhead, vendor lock‑in, cost per GB.  
4. **Validate with a sketch** – show how the chosen DB fits into the overall architecture.

**Depth**  
- *Relational*: strong ACID, joins, good for complex transactions (e.g., financial ops).  
- *Document*: schema flexibility, embedded docs → fewer joins; great for user profiles or content.  
- *Key‑value*: ultra‑fast read/write, ideal for caching or session stores.  
- *Wide‑column*: linear scalability, tunable consistency; fits time‑series logs.  
- *Graph*: natural traversal queries (social networks).  

Explain CAP: pick “Consistency + Availability” when you need up‑to‑date data; otherwise “Availability + Partition tolerance” for high‑traffic services.

**Edge Cases**  
- Mixed workloads → consider polyglot persistence.  
- Sudden traffic spikes → check sharding/replication limits.  
- Regulatory constraints → ensure encryption and audit logs.

**Optimize & Communicate**  
Show a concise decision matrix, then narrate: “Given 10⁶ writes/sec and eventual consistency is acceptable for user feeds, we’ll use Cassandra because it scales horizontally with minimal operational overhead.” Highlight that the interviewers value clear reasoning over perfect code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
