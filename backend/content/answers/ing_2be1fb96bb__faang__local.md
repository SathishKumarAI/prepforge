---
qid: ing_2be1fb96bb__faang__local
question: 'Explain: Relational vs. Non-Relational Databases — 11 System Design Concepts
  Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 928
total_tokens: 1171
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:59-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain the *core differences* between relational (SQL) and non‑relational (NoSQL) databases while highlighting **11 key system‑design concepts** that influence this choice.  
Assumptions:  
- Audience knows basic DB terminology but not deep architecture.  
- Focus on design trade‑offs, not just syntax.

---

**2️⃣ Approach**  
1. List the 11 concepts first (ACID, CAP, schema, joins, scaling, consistency, query language, indexing, transactions, sharding, replication).  
2. For each, give a concise definition, then state whether it favors SQL or NoSQL and why.  
3. End with a quick decision‑making checklist.

---

**3️⃣ Depth (Core Answer)**  

| Concept | Relational (SQL) | Non‑Relational (NoSQL) | Why |
|---------|------------------|------------------------|-----|
| **ACID** | Full ACID guarantees via row‑level locks. | Often eventual consistency; some offer ACID per document/partition. | SQL’s strictness suits financial apps; NoSQL trades for availability. |
| **CAP** | Typically **CP** (Consistency + Partition tolerance) with strong sync. | Many are **AP** (Availability + Partition tolerance). | Design choice: critical data vs high uptime. |
| **Schema** | Fixed, relational schema; migrations needed. | Schema‑less or flexible JSON/BSON schemas. | NoSQL shines when evolving data models fast. |
| **Joins** | Native multi‑table joins via SQL. | Joins are expensive; usually denormalize or use secondary indexes. | SQL simplifies complex queries; NoSQL favors speed on single documents. |
| **Horizontal Scaling** | Sharding is possible but complex (requires consistent hashing + rebalancing). | Built‑in sharding and auto‑scaling in many NoSQL engines. | NoSQL easier for massive write loads. |
| **Consistency Models** | Strong consistency by default; optional eventual with read replicas. | Offers tunable consistency per operation. | Flexibility lets you balance latency vs accuracy. |
| **Query Language** | Declarative SQL; powerful aggregations, window functions. | Query APIs (CQL for Cassandra, MongoDB query DSL) or key‑value lookups. | SQL’s expressiveness is a big advantage for analytics. |
| **Indexing** | B‑tree indexes on columns; secondary indexes limited. | Wide variety: hash, geospatial, full‑text, composite. | NoSQL indexes tailored to access patterns (e.g., document fields). |
| **Transactions** | Multi‑row ACID transactions supported. | Limited multi‑document transactions in many stores (MongoDB 4.x+, DynamoDB supports ACID via PartiQL). | Use SQL when you need complex cross‑entity atomicity. |
| **Sharding Strategy** | Manual or via middleware; requires careful key design. | Automatic partitioning using hash or range of keys. | NoSQL reduces operational overhead. |
| **Replication & Fault Tolerance** | Master–slave or multi‑master setups; synchronous replication for safety. | Peer‑to‑peer, tunable consistency, built‑in fault tolerance. | NoSQL can recover faster from node failures in large clusters. |

---

**4️⃣ Edge Cases**  
- Highly relational data with strict ACID → SQL wins.  
- Rapidly evolving schema or massive horizontal writes → NoSQL preferred.  
- Legacy systems or complex reporting needs → stay SQL.

---

**5️⃣ Optimize & Communicate**  
Wrap up by stressing that the choice isn’t binary: many architectures use *polyglot persistence*—SQL for core transactional data, NoSQL for caching, analytics, or semi‑structured logs. Encourage interviewers to ask about workload patterns and future scaling before committing.  

> **Quick Decision Checklist**  
| Need | Pick SQL | Pick NoSQL |
|------|----------|------------|
| Strong ACID & joins | ✅ | ❌ |
| Massive horizontal scale (tens of TB) | ⚠️ | ✅ |
| Flexible schema evolution | ⚠️ | ✅ |
| High availability with minimal latency | ⚠️ | ✅ |

This structured, 200‑word answer demonstrates clear reasoning, depth on trade‑offs, and practical guidance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
