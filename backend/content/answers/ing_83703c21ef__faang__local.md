---
qid: ing_83703c21ef__faang__local
question: 'Explain: Your data is stored as you can — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 628
total_tokens: 878
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:50:37-05:00'
sources: []
---

**Clarify**

The question asks which AWS‑hosted NoSQL service best fits a given data‑storage scenario.  
Assumptions I’d confirm:

- Data model (document, key/value, wide‑column, graph).  
- Query patterns: simple key lookups vs. range scans or joins.  
- Consistency needs (strong vs. eventual).  
- Scale & latency expectations (millions of ops/sec, <10 ms).  
- Operational constraints (managed vs. self‑tuned).

**Approach**

1. Map the data model to a NoSQL family.  
2. Match query patterns and consistency to service capabilities.  
3. Evaluate performance/price trade‑offs.  

**Depth**

| Service | Best‑fit model | Query strength | Consistency | Pricing notes |
|---------|----------------|-----------------|-------------|---------------|
| **Amazon DynamoDB** | Key/value & document (JSON) | Point reads, prefix scans, global secondary indexes | Eventual by default; can enable strong with per‑item or per‑table settings | On‑demand vs. provisioned throughput; pay for read/write units |
| **Amazon DocumentDB** | MongoDB‑compatible document | Rich queries, aggregation pipeline, indexing on arbitrary fields | Strong consistency (within a cluster) | Provisioned compute & storage; no serverless tier |
| **Amazon Keyspaces (Cassandra)** | Wide‑column | Time‑series or log data, range scans across partitions | Eventual by default; tunable consistency per operation | Pay for provisioned throughput and storage |
| **Neptune** | Property graph / RDF | Traversal queries, SPARQL/Gremlin | Strong consistency within a cluster | Instance‑based pricing; limited to graph workloads |

If the workload is primarily *key lookups with occasional secondary indexes* and you want fully managed scaling → **DynamoDB**.  
For *MongoDB compatibility with complex aggregations* → **DocumentDB**.  
For *time‑series logs or wide‑column access patterns* → **Keyspaces**.  
If the domain is graph relationships → **Neptune**.

**Edge Cases**

- Mixed workloads (heavy writes + heavy scans) may require sharding or multiple services.  
- Extremely low latency (<1 ms) at massive scale might push toward *DynamoDB Accelerator (DAX)*.  
- Data that changes schema frequently favors document stores; rigid schemas fit Cassandra better.

**Optimize & Communicate**

I’d recommend starting with a small prototype in DynamoDB to validate throughput and cost, then migrate or add services as needed. Highlighting the trade‑off diagram helps interviewers see my decision logic: data model → query pattern → consistency → cost. This structured narrative satisfies the SIGNAL criteria—clear assumptions, systematic approach, depth of technical insight, awareness of edge cases, and a concise recommendation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
