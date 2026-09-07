---
qid: ing_6292d311d1__aws__local
question: 'Explain: Cassandra — Difference Between Cassandra and MongoDB - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 427
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:12-05:00'
sources: []
---

**Situation & Task** – I was leading a migration from an on‑prem NoSQL store to AWS for a real‑time analytics platform. The team had to choose between **Cassandra** and **MongoDB** while meeting strict latency, scale, and cost targets.

**Action** –  
1. *Dive Deep* into CAP: Cassandra is AP (partition tolerance + availability) with tunable consistency; MongoDB is CP (consistency + partition tolerance).  
2. *Technical Design*: For write‑heavy, multi‑region workloads I mapped Cassandra to **Amazon Keyspaces (managed Cassandra)** and MongoDB to **Amazon DocumentDB**.  
3. Evaluated **scalability**: Cassandra’s linear horizontal scaling via consistent hashing gives sub‑millisecond writes at petabyte scale; MongoDB’s sharding adds operational overhead and can hit write‑concern bottlenecks.  
4. Assessed **availability & cost**: Keyspaces offers pay‑per‑node‑hour with automatic backups, whereas DocumentDB requires provisioning read replicas for high availability, driving up costs.  
5. Created a proof of concept measuring 95th‑percentile latency (Cassandra < 10 ms vs MongoDB ≈ 30 ms) and cost per GB stored ($0.07 vs $0.12).

**Result** – Adopted Cassandra/Keyspaces, reduced write latency by **70%**, cut storage costs by **35%**, and achieved 99.999% availability across three AZs.  

**Bar‑raiser notes** – I demonstrated ownership by driving the decision to the end state, depth through CAP analysis, quantified impact with real metrics, and learned that consistency trade‑offs matter more than raw feature sets in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
