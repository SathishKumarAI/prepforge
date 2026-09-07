---
qid: ing_8dcd1202ac__faang__local
question: 'Explain: And now, as a result of that — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 557
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:51-05:00'
sources: []
---

**Clarify**  
The interviewer asks which NoSQL database (Amazon DynamoDB, DocumentDB, Key‑Value store, etc.) is most suitable for a given workload. I’ll assume we’re comparing *DynamoDB* vs *DocumentDB* (MongoDB‑compatible) because those were highlighted at re:Invent 2021. Clarify the use case: high‑throughput key‑value lookups, global replication, or complex queries and secondary indexes.

**Approach**  
1. Identify core requirements (latency, throughput, consistency, query complexity).  
2. Map each requirement to a database’s strengths/weaknesses.  
3. Summarize trade‑offs in a concise decision table.

**Depth**  

| Requirement | DynamoDB | DocumentDB |
|-------------|----------|------------|
| **Throughput & scaling** | Auto‑scaling, >1 M RCU/WCU per region; serverless on-demand; global tables for multi‑AZ | Provisioned capacity, auto‑scale, but throughput is capped by underlying RDS instance limits |
| **Latency (single‑digit ms)** | Single‑digit ms at 99th percentile with SSD storage | Slightly higher due to sharding overhead |
| **Consistency** | Eventual or strong per item; fine‑grained control | Strong consistency only in primary region; eventual across replicas |
| **Schema flexibility** | Key‑value + optional secondary indexes (LSI/GSI) | Full document model, ad‑hoc queries, aggregation pipelines |
| **Operational overhead** | Fully managed, no ops for backups/patches | Managed but still requires RDS snapshot and patching workflow |
| **Cost** | Pay‑as‑you‑go; cheaper at low traffic | Higher due to instance pricing; cheaper if you already use MongoDB drivers |

**Edge cases**  
- If the workload is *write‑heavy* with unpredictable spikes → DynamoDB’s on‑demand mode shines.  
- If you need *complex joins or graph queries* → neither fits; consider Neptune or a relational DB.  
- For *legacy MongoDB applications* migrating to AWS → DocumentDB preserves drivers and tooling.

**Optimize & Communicate**  
I’d finish by recommending DynamoDB for high‑scale, low‑latency key‑value workloads with global replication, and DocumentDB when you need rich document queries without refactoring code. I’d mention the option of *DynamoDB Streams + Lambda* for event‑driven processing as a further advantage. This answer balances structure, depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
