---
qid: vq_d02de878ac__faang__local
question: Database models ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 551
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:34:38-05:00'
sources: []
---

**Clarify**

> *“Database models”* – I’ll interpret this as the major data‑storage paradigms used in modern systems (relational, NoSQL, graph, time‑series, etc.).  
> **Assumptions to confirm:**  
> 1) Scope: only storage models, not query languages or ACID nuances.  
> 2) Audience level: interviewers expect a concise taxonomy and trade‑offs.

**Approach**

1. List the canonical models.  
2. For each, give a one‑sentence definition + typical use case.  
3. Compare on cardinality, consistency, scalability, schema flexibility, and transaction support.  
4. Highlight when to pick one over another (decision matrix).  

**Depth**

| Model | Core idea | Strengths | Weaknesses | Typical use |
|-------|-----------|-----------|------------|-------------|
| **Relational (RDBMS)** | Structured tables with foreign keys | ACID, mature tooling, joins | Schema rigidity, scaling read/write horizontally hard | OLTP, financial apps |
| **Document** | JSON‑like blobs in collections | Flexible schema, horizontal sharding | Limited multi‑document transactions | CMS, e‑commerce catalogs |
| **Key–Value** | Flat map of key → value | Ultra‑fast lookups, simple scaling | No secondary indexes or joins | Session stores, caching |
| **Wide‑Column (Column‑Family)** | Tables with sparse columns per row | Scalable analytics, variable schema | Complex consistency models | Big data pipelines |
| **Graph** | Nodes + labeled edges | Traversal queries, high connectivity | Limited to graph workloads | Social networks, recommendation engines |
| **Time‑Series** | Ordered timestamped key/value pairs | Efficient retention & down‑sampling | Not suited for arbitrary joins | IoT telemetry, monitoring |

**Edge Cases**

- Mixed workloads (e.g., OLTP + analytics) → use a polyglot persistence stack.  
- Strong consistency needs in distributed systems may force relational or transactional NoSQL solutions.  
- Schema evolution: document/graph models handle it gracefully; relational requires migrations.

**Optimize & Communicate**

I’d finish by summarizing a decision tree: start with *transactional guarantees* → if yes, pick RDBMS or ACID‑compliant NoSQL; else evaluate *data shape*: key/value for simple lookups, document for JSON blobs, wide‑column for analytics, graph for relationships. This shows I understand trade‑offs and can guide architecture choices—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
