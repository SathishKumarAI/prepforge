---
qid: ing_79a8a8a630__aws__local
question: 'Explain: Graph Data Models — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 516
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:58-05:00'
sources: []
---

**Situation (S)**  
At my last company I led a project to migrate our recommendation engine from a relational model into a graph‑based solution for the Instagram‑style feed. The goal was to surface friends’ posts and “suggested content” in real time.

**Task (T)**  
I had to design a scalable graph data store that could ingest millions of user relationships, support sub‑second traversals, and integrate with our existing ML pipeline.

**Action (A)**  
*Architecture*: I chose **Amazon Neptune** as the core graph database because it natively supports property graphs (Gremlin) and RDF (SPARQL), offering low‑latency edge traversal. For batch ingestion I built an **AWS Glue** ETL that streams relationship events from **Kinesis Data Streams** into Neptune via a Lambda function, ensuring eventual consistency with at most 1 s delay.  
*Scalability*: Neptune’s read replicas (up to 4) handled high query throughput; we auto‑scaled the instance type using CloudWatch alarms on CPU and disk I/O.  
*Cost & Availability*: We leveraged Spot Instances for the ingest cluster, saving ~30 % annually, while keeping On‑Demand instances for the primary cluster to guarantee SLA. Multi‑AZ deployment ensured 99.99 % availability.  
*ML Integration*: The graph embeddings were generated in SageMaker using a GraphSAGE model, stored in S3, and served via **Amazon API Gateway** + Lambda to the app front‑end.

**Result (R)**  
Within three months we saw a **25 % lift in engagement** (time spent per session) and reduced cold‑start latency by 40 %. The graph approach also cut our data duplication by 60 %, lowering storage costs.  

> **Leadership Principles:** *Customer Obsession* – delivering richer content; *Ownership* – owning the end‑to‑end pipeline; *Dive Deep* – selecting Neptune over DynamoDB after profiling traversal workloads; *Bias for Action* – prototyping in 2 weeks and iterating based on metrics.

**Bar‑raiser note**: I demonstrated ownership by taking full responsibility from design to production, dove deep into performance tuning, quantified impact with clear KPIs, and learned from an initial underestimation of write latency—prompting the shift to Kinesis for smoother ingestion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
