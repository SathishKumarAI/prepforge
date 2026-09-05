---
qid: ing_0175833399__star__local
question: 'Explain: Relational Databases (RDBMS) — 15 Types of Databases and When
  to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 365
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:13-05:00'
sources: []
---

**Situation** – At a fintech startup, we had to migrate the legacy customer‑data layer from an on‑premise Oracle instance to a cloud‑native solution while keeping uptime below 2 % and ensuring GDPR compliance.

**Task** – Identify which of the fifteen common relational database flavors (Oracle, PostgreSQL, MySQL, MariaDB, SQL Server, IBM DB2, SAP ASE, Teradata, Snowflake, Amazon Aurora, Google Cloud Spanner, Azure Synapse, ClickHouse, Vertica, CockroachDB) best matched our needs for transactionality, scalability, cost, and compliance.

**Action** – I built a scoring matrix: ACID strictness (Oracle, PostgreSQL), horizontal scaling (Aurora, Spanner, CockroachDB), multi‑region replication (Spanner, Aurora Global), analytics workload (Teradata, Vertica), and vendor lock‑in risk. After running benchmarks on our OLTP workload and a GDPR audit simulation, PostgreSQL with Amazon RDS read replicas emerged as the top choice: 99.999% availability SLA, native JSON support for semi‑structured logs, open‑source license, and cost per GB below 0.02 USD/month.

**Result** – The migration completed in 18 days with <1 % downtime, cut hosting costs by 35 %, and gave us a unified platform that supports both transactional and analytical workloads. I learned the value of formalizing trade‑offs early and validating assumptions with real‑world benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
