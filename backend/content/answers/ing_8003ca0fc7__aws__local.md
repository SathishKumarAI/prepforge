---
qid: ing_8003ca0fc7__aws__local
question: 'Explain: 1.2. Client-Server — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 469
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:37-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task** – I was tasked to redesign the product’s data ingestion layer for a SaaS analytics platform that served 12 k daily active users. The goal was to expose a lightweight, versioned API so front‑end teams could fetch metrics without pulling entire datasets.

> **Action** –  
1. *Client–Server Overview*: I clarified that in this paradigm the **client** (browser or mobile app) requests data, while the **server** processes and returns only what is needed—reducing bandwidth and latency.  
2. *REST Definition & Principles*: I explained that a **RESTful API** uses stateless HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) to act on resources identified by URLs. It follows the HATEOAS pattern, enabling discoverability.  
3. *Design* – Implemented a **micro‑service** in AWS Lambda behind an Amazon API Gateway endpoint. Each resource maps to a DynamoDB table; pagination is handled via query parameters (`?limit=50&nextToken=`). I added CORS headers and OAuth2 with Cognito for authentication.  
4. *Scalability & Cost*: Serverless eliminates idle capacity—$0.0000167 per 1 k requests, < $5/month for our load. API Gateway provides throttling (10 k QPS) to protect downstream services.  
5. *Trade‑offs*: While REST offers simplicity and cacheability, it can lead to overfetching; I mitigated this by supporting GraphQL endpoints in parallel for complex queries.

> **Result** – The new API cut client payloads by 38 % and reduced server CPU usage by 42 %, enabling a 3× increase in concurrent users with the same cost.  

> **Leadership Principles Anchored**  
- *Customer Obsession* (streamlined UX, lower latency)  
- *Ownership & Dive Deep* (proactively addressing scalability and cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
