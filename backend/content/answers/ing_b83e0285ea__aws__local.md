---
qid: ing_b83e0285ea__aws__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 487
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:39-05:00'
sources: []
---

**Situation & Task**  
When our marketplace expanded to partner‑sponsored stores, we had to let each store use the same OAuth 2.0 token while still enforcing fine‑grained access per “resource server.” The RFC 8707 Resource Indicators specification was the only standard that let us pass a target URI in the authorization request, so I led a design to integrate it into our authentication flow.

**Action (Design & Implementation)**  
1. **API Gateway + Lambda Authorizer** – Added a custom header `X-Resource-Indicator` to the token request and parsed it in a Lambda authorizer that consulted a DynamoDB table mapping indicators to permission scopes.  
2. **Cognito User Pools** – Extended user pool tokens with an `audience` claim containing the indicator, ensuring downstream services could verify the intended target without extra round‑trips.  
3. **Cost & Scalability** – The authorizer runs in a single Lambda function (5 ms cold start) and scales to 10k RPS; DynamoDB auto‑scales, keeping latency <30 ms. We avoided extra SQS queues or EC2 instances, keeping the cost <$0.01 per 1K requests.  
4. **Availability** – Leveraged API Gateway’s built‑in failover and the authorizer’s retry logic; overall 99.95% uptime during the rollout.

**Result**  
- Reduced token misuse incidents by **92 %** (from 12 to 1 alerts/month).  
- Cut downstream authorization latency from 120 ms to 35 ms, improving user‑perceived checkout speed by **18 %**.  
- Enabled a new partner program that grew revenue by **$4M YoY**.

**Reflection & Learning**  
I took full ownership of the RFC implementation and dove deep into AWS’s serverless primitives to keep costs low while meeting strict availability goals. The bar‑raiser will notice my quantitative impact, the trade‑offs I balanced (latency vs. cost), and how I iterated after a small failure in our first authorizer version—rewriting it with idempotent caching to avoid duplicate lookups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
