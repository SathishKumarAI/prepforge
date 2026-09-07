---
qid: ing_95589b7d40__aws__local
question: 'Explain: Kuzu — GitHub - getzep/graphiti: Build Real-Time Knowledge Graphs
  for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 471
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:34-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a data‑science team tasked with giving our recommendation engine “real‑time context” so we could surface highly relevant content within 200 ms for millions of users. We needed an on‑prem solution that avoided the latency and cost of repeatedly querying a relational store.

**Action – Design & Implementation**  
I championed **Kuzu**, an open‑source graph database, because it offers in‑memory columnar storage and a Cypher‑like query language that scales linearly with node count. I wrapped Kuzu in a **Lambda‑based microservice** (Python runtime) behind an **API Gateway** so each request hit a single stateless container. The service streams incoming events from **Kinesis Data Streams**, updates the graph, and serves queries via **AppSync GraphQL** for low‑latency client access.

Key AWS services:  
- *Lambda* – auto‑scales to traffic spikes (up to 50 k concurrent invocations).  
- *Kinesis* – handles >10 M events/day with <1 s ingestion lag.  
- *AppSync* – caches query results in CloudFront, reducing backend hits by 40%.  

I added a **CloudWatch alarm** that triggers an ECS task to snapshot the graph every 30 min, ensuring data durability without impacting latency.

**Result**  
Within three months we saw:  
- **35% lift** in click‑through rate on recommendation widgets.  
- **200 ms average query latency**, beating our target of 250 ms by 20%.  
- **$18k/month cost savings** compared to a Neo4j cluster.

**Reflection (Bar‑raiser notes)**  
I owned the end‑to‑end pipeline, dove deep into Kuzu’s internals to tune memory usage, and quantified every change. The biggest learning was that “real‑time” for us meant sub‑200 ms; we had to trade a bit of consistency for latency, but our snapshot strategy mitigated data loss risks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
