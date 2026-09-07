---
qid: ing_7ef54acebf__aws__local
question: 'Explain: Example: — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 395
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:14-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I led the migration of a legacy e‑commerce API from REST to GraphQL to reduce over‑fetching and improve mobile performance. The existing REST endpoints returned ~4 MB per product page, causing 2× slower load times on iOS.

**Action (Dive Deep + Bias for Action)**  
I designed a two‑phase rollout:  

1. **GraphQL Layer** – Lambda@Edge with Apollo Server to aggregate data from DynamoDB and RDS via resolvers.  
2. **Hybrid Fallback** – retained REST endpoints behind CloudFront cache for legacy clients.

Key AWS services:  
- **API Gateway (REST)** for backward compatibility.  
- **AppSync** for GraphQL, auto‑scaling query execution.  
- **DynamoDB & Aurora Serverless** as data stores; resolvers use PartiQL to fetch only requested fields.  

I added instrumentation in CloudWatch to compare latency and cost: after 30 days, average payload dropped from 4 MB to 1.2 MB (70 % reduction) and API cost fell by 35 %, while request success rate improved from 95 % to 99.8 %.

**Result (Deliver Results)**  
The new architecture cut mobile data usage by 60 % per session, increased conversion by 12 % in the first quarter, and earned a “Customer Obsession” award for improving user experience.

**Learning & Trade‑offs**  
GraphQL complexity (query planning, caching) required extra monitoring. I mitigated this with AppSync’s built‑in cache and a fallback REST path to ensure reliability during early adoption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
