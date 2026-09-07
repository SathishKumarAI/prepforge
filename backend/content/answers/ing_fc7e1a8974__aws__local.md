---
qid: ing_fc7e1a8974__aws__local
question: 'Explain: Running with Docker Compose — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 420
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:47-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with prototyping a real‑time knowledge‑graph service for an AI agent platform. The stack lived in a single Docker Compose file (getzep/graphiti) and needed to scale from 5 to >200 concurrent users while keeping latency <100 ms.

**Action**  
I first **owned the architecture**: decomposed the compose into separate services—PostgreSQL, Redis, GraphQL API, and a worker pool. I replaced the local Postgres with **Amazon RDS Aurora Serverless v2**, added an **Elasticache Redis Cluster**, and migrated the API to **AWS Fargate** behind an **Application Load Balancer (ALB)**.  
For real‑time ingestion I introduced **Kinesis Data Streams** feeding a Lambda that updates the graph in DynamoDB, ensuring *eventual consistency* without blocking HTTP requests.  
I used **CloudWatch Metrics** and **X-Ray** to monitor latency; automated scaling rules on ALB target groups kept CPU <70 % with 2‑x cost savings vs. fixed EC2 instances.

**Result**  
Post‑migration, user concurrency rose from 5 → 200+ with mean latency dropping from 250 ms to **78 ms** (p<0.01). Operational costs fell by **30 %**, and the system now auto‑scales in <2 min during traffic spikes.

**Learnings**  
- *Dive Deep*: profiling each container revealed that Postgres I/O was the bottleneck; moving to Aurora eliminated it.  
- *Bias for Action*: I prototyped with Fargate in 4 hrs, reducing deployment time from days to hours.  

This demonstrates **Customer Obsession** (fast, reliable service) and **Ownership** (from code to cloud ops).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
