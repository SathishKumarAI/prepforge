---
qid: ing_789f22dbbd__think__local
question: 'Explain: Read Replicas — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 463
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:58:53-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Ask whether “Read Replicas” refers to database replication or messaging‑queue replicas.  
- Assume a relational DB (e.g., PostgreSQL/MySQL) used in a web service, with read‑heavy traffic and eventual consistency is acceptable.

**2️⃣ Adopt a layered mental model**  
1. *Data flow*: write → master → replicate → replicas.  
2. *Scalability dimensions*: throughput, latency, fault tolerance.  
3. *Trade‑offs*: consistency vs. availability, cost vs. complexity.

**3️⃣ Step‑by‑step reasoning**  
- **Identify bottleneck**: Master can’t handle all read traffic → creates a single point of contention.  
- **Introduce replicas**: each replica receives WAL or binlog from master; reads are distributed among them.  
- **Load balancing**: use DNS round‑robin, connection poolers (PgBouncer), or application‑level sharding.  
- **Consistency model**: explain “read‑your‑writes” issues, how to mitigate with read‑after‑write delays or using a “primary‑followed‑by‑replica” pattern.  
- **Failover & promotion**: automatic tools (Patroni, Galera) and manual steps if needed.  
- **Monitoring**: lag metrics, replica health, query performance.

**4️⃣ Avoid common pitfalls**  
- Don’t assume replicas are instant; they lag behind the master.  
- Don’t overlook write amplification on the master.  
- Don’t ignore network partition scenarios that can split read traffic.  
- Don’t forget about index replication and storage overhead.

**5️⃣ Sanity‑check & verbalize**  
- Re‑explain the flow to a non‑technical stakeholder: “We keep a copy of our data elsewhere so users don’t wait for updates.”  
- Confirm that each bullet logically follows from the previous one.  
- Summarize trade‑offs: more replicas = higher read capacity but also higher cost and eventual consistency.

Use this checklist whenever you need to design or explain scalable read architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
