---
qid: ing_09d0b5e434__think__local
question: 'Explain: Example: — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 476
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:22:46-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What is “scaling a database” here?* – vertical (more RAM/CPU) vs horizontal (sharding, replication).  
   - *What workload?* – OLTP, OLAP, mixed.  
   - *Constraints?* – latency budget, consistency model, cost limits.

**2️⃣ Adopt a system‑design framework**  
   1. **Requirements & constraints** → SLAs, data volume, growth rate.  
   2. **Core architecture choices** → master–slave, peer‑to‑peer, partitioning strategy.  
   3. **Consistency vs availability trade‑offs** → CAP theorem, eventual consistency options.  
   4. **Operational concerns** → backup, failover, monitoring, automation.

**3️⃣ Step‑by‑step reasoning**  
   - *Estimate traffic*: 1 M ops/sec → 10 GB/day.  
   - Choose sharding key (e.g., user_id) to spread load evenly.  
   - Deploy read replicas for hot tables; use write‑through caching if needed.  
   - Implement auto‑scaling groups: add nodes when CPU >70% or latency >Xms.  
   - Plan data migration path: online re‑partitioning, schema versioning.

**4️⃣ Avoid common traps**  
   - *Hot spots*: single shard becomes bottleneck → use consistent hashing + bucket keys.  
   - *Over‑sharding*: too many nodes add overhead and complexity.  
   - *Ignoring consistency needs*: eventual consistency may break business logic.  
   - *Underestimating ops cost*: replication & backups can dominate bill.

**5️⃣ Sanity‑check & communicate**  
   - Verify latency budget with a prototype shard.  
   - Run a load test to confirm horizontal scaling holds under peak.  
   - Explain trade‑offs clearly: “We’re accepting eventual consistency on the orders table in exchange for sub‑10 ms read latency.”  

This structured approach lets you explain *why* each design choice works and how it satisfies the problem constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
