---
qid: ing_8286330829__aws__local
question: 'Explain: Glean API Tokens — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 422
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:17-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with building a lightweight “Glean API Tokens” service for the Glean MCP (Machine‑Learning‑Compute‑Platform) that would issue short‑lived, revocable tokens to downstream microservices while keeping latency under 5 ms and cost < $0.01 per request.

**Action**  
I designed a stateless token generator using **Amazon Cognito** for identity federation and **AWS Lambda** + **API Gateway** for the endpoint. Tokens were JWTs signed with AWS KMS‑managed keys, stored in a **DynamoDB** table (TTL) to allow revocation. To guarantee 99.999% availability I enabled DynamoDB Global Tables across two AZs. For scaling, I leveraged Lambda’s concurrent execution limits and provisioned concurrency for burst traffic. Cost was reduced by using the free tier of Cognito for auth and setting Lambda memory to 256 MB (cost ≈ $0.00001667 per invocation).  

**Result**  
Within three weeks, token issuance latency dropped from 12 ms to 3.2 ms, and we handled a peak of 150k requests/sec with zero downtime. Cost per request fell from $0.03 to $0.008. The system also reduced the number of manual revocation calls by 70% because tokens self‑expire after 30 min.

**Reflection**  
I practiced **Ownership** by leading end‑to‑end design and **Dive Deep** into AWS cost models, while applying **Bias for Action** to ship a production‑ready service in record time. The bar‑raiser will note my data‑driven impact, architectural depth, and the learning loop that moved us from a 12 ms monolith to a serverless, highly available token service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
