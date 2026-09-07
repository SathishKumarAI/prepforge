---
qid: ing_8f7f88d7ee__aws__local
question: 'Explain: Graphiti and Zep — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 491
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:36-05:00'
sources: []
---

**Situation / Task**  
When I joined the AI‑Ops team at a fast‑growing fintech, we were asked to surface real‑time knowledge graphs for our recommendation engine. The product owner wanted an end‑to‑end pipeline that ingested streaming events, updated a graph in near‑real time, and served low‑latency queries to our chatbot.  

**Action**  
I chose **Graphiti** (the open‑source library from Zep) because it natively supports incremental updates and can be deployed on AWS as a serverless microservice. I built the pipeline with:  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Ingest | Kinesis Data Streams + Lambda | Handles 10 k events/s, auto‑scales, cost per GB ~ $0.01 |
| Transform & Graph Update | Amazon Neptune (Gremlin) via Lambda | Neptune’s transactional writes keep consistency; Lambda keeps cold‑start latency < 300 ms |
| Query API | API Gateway + AppSync (GraphQL) | Low‑latency read (<50 ms), caching with DynamoDB Accelerator |
| Monitoring | CloudWatch + OpenSearch Dashboards | Real‑time metrics, alerts on write lag > 200 ms |

I also added a **deduplication layer** in Redis to avoid duplicate edges—cutting unnecessary writes by 35%.  

**Result**  
Within three weeks we achieved:  

* 95 % of events reflected in the graph within 1 s.  
* Query latency dropped from 200 ms to <50 ms, improving chatbot NPS by 12 points.  
* Operational cost stayed under $4k/month (30 % lower than a monolithic Spark solution).  

**Reflection**  
I learned that choosing a graph database with serverless compute can dramatically reduce operational overhead when the workload is event‑driven. I also realized the importance of **ownership**—owning both data ingestion and downstream services—and **bias for action**—moving from design to production in under a month.  

*Leadership Principles highlighted:* **Customer Obsession, Ownership, Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
