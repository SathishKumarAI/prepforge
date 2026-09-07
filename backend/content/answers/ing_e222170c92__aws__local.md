---
qid: ing_e222170c92__aws__local
question: 'Explain: Q: Design a system that lets a customer support agent answer questions
  using data from Zendesk, Salesforce, and an internal knowledge base.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 455
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:44-05:00'
sources: []
---

**Situation & Task (S)**  
In a prior role at a SaaS firm I was asked to build a “Unified Knowledge Hub” so that support agents could retrieve answers from Zendesk tickets, Salesforce cases, and an internal wiki in one click—without switching tools.

**Action (A)**  

1. **Data ingestion** – used **AWS Lambda** + **API Gateway** to poll each source every 5 min (Zendesk REST API, Salesforce Streaming API, S3‑based markdown repo).  
2. **Normalization & indexing** – transformed payloads into a common JSON schema and stored them in an **Amazon DynamoDB** table with a composite key (`source#docId`).  
3. **Search layer** – provisioned an **OpenSearch** domain (1 m3.medium.search nodes) for full‑text search, integrated with DynamoDB via the OpenSearch connector for near‑real‑time sync.  
4. **Agent UI** – built a lightweight React app served from **S3 + CloudFront**, calling an **AppSync GraphQL API** that aggregates results from OpenSearch and DynamoDB in a single response.  

**Result (R)** – In 90 days the solution cut average agent handling time by **32 %** (from 12 min to 8 min) and increased first‑contact resolution by **18 %**, directly boosting CSAT from 4.2 to 4.6.

**Leadership Principles**  
- *Customer Obsession*: Delivered a single, fast interface that reduced friction for agents.  
- *Ownership*: Took end‑to‑end ownership—from API design to cost monitoring (≈$120/month).  

**Bar‑raiser cues**  
- Demonstrated deep dive into latency vs cost trade‑offs by selecting OpenSearch over Elasticsearch for managed scalability.  
- Quantified impact and iteratively improved the data pipeline after observing a 15 % lag in Salesforce sync—refactored to use Change Data Capture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
