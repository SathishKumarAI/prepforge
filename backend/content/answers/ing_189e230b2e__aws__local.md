---
qid: ing_189e230b2e__aws__local
question: 'Explain: Glean OAuth Authorization Server — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 411
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:29-05:00'
sources: []
---

**Situation / Task**  
When I joined the Glean team, we needed a dedicated **OAuth Authorization Server** to secure our Machine‑Learning‑Powered Content (MCP) platform. The goal was to support 200 k active users, enable single‑sign‑on across internal tools, and keep latency under 50 ms while staying within $0.05 per request.

**Action**  
I led a cross‑functional squad, first diving deep into the requirements:  
- **Stateless JWT tokens** for horizontal scaling.  
- **Refresh‑token rotation** to mitigate credential compromise.  
- **Fine‑grained scopes** tied to ML model access.  

The architecture I proposed used **Amazon Cognito** (user pool + identity pool) for authentication, **AWS Lambda** for custom authorizer logic, and **API Gateway** to expose the token endpoint. We stored client secrets in **AWS Secrets Manager** and leveraged **DynamoDB** (partition key = client_id) for rate‑limiting and audit logs.  

To guarantee availability, I added **Route 53 latency routing** across us‑east‑1 and eu‑west‑1, with health checks on the Lambda authorizer. Cost was kept low by using **Lambda@Edge** for token validation in edge locations.

**Result**  
- 99.9 % uptime over six months.  
- Token issuance throughput > 10 k req/s with < 45 ms latency.  
- Reduced authentication‑related support tickets by 37 %.  

**Learning & Bar‑raiser cues**  
I documented failure modes (e.g., secret rotation lag) and introduced automated rollback scripts, demonstrating ownership and bias for action—qualities a bar‑raiser looks for in an Amazonian leader.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
