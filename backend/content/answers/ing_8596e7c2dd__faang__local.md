---
qid: ing_8596e7c2dd__faang__local
question: 'Explain: Relational databases tend to have vertical scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 396
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:55:02-05:00'
sources: []
---

**Clarify**  
You’re asking why relational databases (RDBMS) typically scale *vertically* rather than horizontally.  
Assumptions: we’re talking about OLTP workloads, ACID guarantees, and traditional RDBMS engines (e.g., MySQL, PostgreSQL, Oracle).

**Approach**  
Explain the core reason—schema‑centric, row‑oriented storage, strict transaction isolation—and then contrast with NoSQL. Highlight key trade‑offs: consistency vs. availability.

**Depth**  
RDBMS store data in tables with fixed schemas and enforce ACID properties via locks, MVCC, or two‑phase commit. A single node must understand the entire schema to validate joins, foreign keys, and transactions. Horizontal sharding requires complex distributed transaction protocols (e.g., XA, two‑phase commit) that degrade performance and increase latency.  
Therefore scaling is usually achieved by adding CPU/memory/disk to a single machine—*vertical scaling*. Modern RDBMS also support read replicas for load distribution, but writes still hit the master node.

**Edge Cases**  
- *Large analytic workloads*: column‑store engines (e.g., Vertica) or OLAP systems scale horizontally.  
- *NewSQL*: solutions like CockroachDB attempt horizontal ACID scaling but at a cost of higher latency and complexity.  
- *Hybrid approaches*: use sharding with careful transaction boundaries to reduce cross‑node commits.

**Optimize & Communicate**  
Conclude that vertical scaling is efficient for typical OLTP because it preserves consistency without costly distributed protocols. For workloads needing massive horizontal scale, consider NoSQL or NewSQL architectures, but be aware of the trade‑offs in consistency and operational complexity. This framing shows structured reasoning, technical depth, and awareness of edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
