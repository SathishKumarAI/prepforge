---
qid: ing_d36abae071__aws__local
question: 'Explain: Availability — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 501
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:29-05:00'
sources: []
---

**Situation / Task**  
While architecting a global recommendation engine for an e‑commerce platform, I had to choose the NoSQL store that could sustain *99.999% uptime* across 12 regions while keeping costs below $50k/month.

**Action**  
I compared **Apache Cassandra** (wide‑column) and **MongoDB Atlas** (document).  
1. **Availability model** – Cassandra uses a tunable consistency (QUORUM/ALL) with automatic hinted handoff; any node can accept writes, so the cluster stays available even if an entire data center fails. MongoDB Atlas offers *Replica Sets* with a primary‑only write path; a failover requires election, which can add 200–300 ms latency and a brief outage during switchover.  
2. **Consistency vs. Partition Tolerance** – Cassandra prioritises *partition tolerance* (AP) to keep the system up; MongoDB leans toward *strong consistency* (CP). For our recommendation cache we needed eventual consistency, so Cassandra matched the requirement better.  
3. **Operational cost & tooling** – Atlas provides fully managed services, automated backups, and a built‑in auto‑scaling cluster with *$0.10/GB-month*. Cassandra on EC2 required manual sharding and patching; I estimated $12k/month for 4 m5.large nodes plus $8k for Ops Manager, totaling ~$20k higher than Atlas.

**Result**  
I chose **Cassandra**, which delivered a 99.999% uptime (only 5 min of downtime in two years) while keeping the monthly spend at $38k—$12k below budget. I documented the trade‑offs and created an incident playbook that reduced mean time to recovery from 15 min to <2 min.

**Leadership Principles**  
- **Customer Obsession** – ensured service availability for end users.  
- **Ownership & Dive Deep** – performed a data‑driven, granular comparison and built the playbook.  

*Bar‑raiser notes*: clear ownership, deep dive into consistency models, quantified impact on SLA and cost, and learning from previous outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
