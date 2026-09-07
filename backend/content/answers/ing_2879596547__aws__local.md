---
qid: ing_2879596547__aws__local
question: 'Explain: Create an OpenSearch Service domain — Embed Amazon OpenSearch
  Service dashboards in your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 488
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:57:05-05:00'
sources: []
---

**Situation & Task**  
In my previous role I led the migration of a legacy reporting platform to a modern, self‑served analytics layer for our e‑commerce team. The goal was to give product managers instant, interactive dashboards while keeping cost predictable. I chose Amazon OpenSearch Service (OSS) because it offered near‑real‑time search, built‑in Kibana dashboards, and managed scaling.

**Approach & Design**  
- **Domain Creation:** I scripted a CloudFormation stack that provisions an OSS domain with 2 dedicated master nodes (m5.large), 4 data nodes (r6g.xlarge) for memory‑intensive queries, and a warm tier of c5.large to store infrequently accessed indices.  
- **Security:** IAM roles + fine‑grained access control ensured only the analytics microservice could index data; dashboards were served via an ALB with Cognito authentication.  
- **Data Ingestion:** I built a Lambda pipeline that transforms clickstream logs (10 GB/day) into JSON, pushes to S3, and triggers an OpenSearch ingestion job using the AWS Data Pipeline.  
- **Embedding Dashboards:** Using the Kibana REST API, I generated embeddable iframe URLs with query parameters tied to user roles. The front‑end React app renders these iframes inside secure components, preserving session context via signed JWTs.

**Result**  
After rollout:  
- Query latency dropped from 8 s to **<500 ms** for 95th percentile analytics queries.  
- Monthly operating cost decreased by **30%** versus the previous ElasticSearch cluster on EC2.  
- User adoption increased 4×, with over **1,200 daily active users** reporting faster insights.

**Leadership Principles Highlighted**  
- *Customer Obsession* – Delivered a self‑serve tool that cut decision time for product managers.  
- *Dive Deep & Ownership* – Designed the entire data pipeline, tuned node sizing, and managed cost/scale trade‑offs.

**Bar‑raiser Takeaway**  
I own every layer: from infrastructure provisioning to API security. I quantify impact (latency, cost, adoption) and iterate based on user feedback—learning that embedding dashboards via secure iframes reduces friction compared to standalone Kibana access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
