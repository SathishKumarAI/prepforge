---
qid: ing_0175833399__faang__local
question: 'Explain: Relational Databases (RDBMS) — 15 Types of Databases and When
  to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 714
total_tokens: 960
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:26-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise taxonomy of relational database systems—15 distinct RDBMS flavors—and guidelines on when each is the right fit. I’ll assume you want a mix of commercial, open‑source, and cloud‑native options, covering OLTP, analytics, and hybrid workloads.

**Approach**  
1. List 15 representative engines (Oracle, SQL Server, PostgreSQL, MySQL, MariaDB, DB2, Informix, Teradata, Snowflake, BigQuery, Redshift, Vertica, Greenplum, CockroachDB, TiDB).  
2. For each, note core strengths, typical use‑case, and key trade‑offs (cost, scalability, compliance).  
3. End with a quick decision matrix.

**Depth**  

| DB | Core Strength | Typical Use‑Case | Key Trade‑Off |
|----|---------------|------------------|---------------|
| **Oracle** | ACID + advanced security | Mission‑critical OLTP (finance) | License cost, complexity |
| **SQL Server** | Tight MS ecosystem, BI tools | Enterprise apps on Windows | Licensing, platform lock‑in |
| **PostgreSQL** | Extensibility, JSONB, GIS | Web services, data science | Slightly slower write throughput |
| **MySQL** | Simple, high read‑throughput | LAMP stack, SaaS | Limited advanced features |
| **MariaDB** | Fork of MySQL with engines | Cost‑sensitive OLTP | Compatibility quirks |
| **IBM DB2** | Mainframe integration, analytics | Legacy workloads | Enterprise licensing |
| **Informix** | Time‑series + high availability | IoT/telecom | Smaller community |
| **Teradata** | Massive parallel processing | Data warehousing | Expensive hardware |
| **Snowflake** | Cloud‑native, separation of compute/storage | BI on the cloud | Vendor lock‑in |
| **BigQuery** | Serverless, pay‑per‑query | Ad‑hoc analytics | Limited transactional support |
| **Redshift** | Columnar + AWS integration | Data lake analytics | Cold start latency |
| **Vertica** | High compression, fast queries | Real‑time dashboards | Requires tuning |
| **Greenplum** | MPP + PostgreSQL base | Enterprise data warehousing | Complex ops |
| **CockroachDB** | Distributed SQL, HA | Global microservices | Performance vs. consistency trade‑off |
| **TiDB** | MySQL‑compatible, distributed | Cloud‑native OLTP/Analytics hybrid | Still maturing |

**Edge Cases**  
- Mixed workloads (OLTP + analytics) may need a polyglot approach or a hybrid engine like TiDB.  
- Regulatory constraints can force on‑prem vs. cloud choices; check compliance certifications.

**Optimize & Communicate**  
Highlight that the “right” database depends on *workload*, *scale*, *budget*, and *team expertise*. Present a simple decision tree: if you need strict ACID + legacy support → Oracle/DB2; if you’re building a new SaaS with global users → CockroachDB or TiDB; for cloud analytics → Snowflake or BigQuery. Emphasize that many modern apps layer multiple engines, so the choice is often about orchestration rather than a single monolith.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
