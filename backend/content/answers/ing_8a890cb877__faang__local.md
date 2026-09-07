---
qid: ing_8a890cb877__faang__local
question: 'Explain: don''t let you put into your dynamodb — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 464
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:54-05:00'
sources: []
---

**Clarify**  
The question asks why *you* should not store arbitrary data in DynamoDB. I’ll assume we’re talking about using it as a general‑purpose persistence layer for an application’s data, and that the interviewer wants insight into design trade‑offs.

**Approach**  
1. Identify DynamoDB’s strengths (low latency, horizontal scaling).  
2. List its constraints (schema‑less but key‑centric, limited query patterns, per‑item size limits, provisioned throughput vs on‑demand costs).  
3. Explain how these constraints influence architecture choices.

**Depth**  
- **Schema & Indexing**: DynamoDB requires a partition key (and optional sort key) to route items; you can’t perform arbitrary joins or range scans without carefully designing keys or using Global Secondary Indexes (GSIs), which incur extra writes and cost.  
- **Throughput & Capacity**: Provisioned mode demands estimating read/write units; over‑provisioning wastes money, under‑provisioning causes throttling. On‑demand is simpler but can be expensive for bursty traffic.  
- **Item Size & Pagination**: Max 400 KB per item forces splitting large blobs (e.g., documents) across multiple items or using S3, which adds complexity.  
- **Consistency & Transactions**: Strong consistency is optional; ACID transactions exist but are limited in size and throughput. Complex multi‑item updates must be carefully orchestrated.

**Edge Cases**  
- Highly relational data needing joins → DynamoDB struggles.  
- Workloads with unpredictable traffic spikes may incur cost surprises.  
- Need for complex analytics or ad‑hoc queries → better suited to Redshift, Athena, or Elasticsearch.

**Optimize & Communicate**  
When architecting, start by modeling access patterns; choose keys that support the most common reads/writes, use GSIs sparingly, and offload large blobs to S3. If the workload evolves toward relational or analytical needs, consider a hybrid approach (DynamoDB + Aurora/PostgreSQL). Communicating this trade‑off map shows clear decision reasoning—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
