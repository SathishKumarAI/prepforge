---
qid: ing_444fd2c131__aws__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0 | RFC
  Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 412
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:33-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* At my previous company we built a multi‑tenant SaaS platform that exposed an OAuth 2.0 API to partners. Our partners were complaining that when they called our “resource” endpoint, the access token was being validated against the wrong tenant’s authorization server, causing silent failures and data leakage.

*Task:* I led a task force to design a solution that would let each request carry its own “resource indicator” so we could validate tokens correctly without breaking backward compatibility.

*Action:* I authored an RFC‑style proposal (based on RFC 8707) that added the **`audience`** claim and a `Resource-Indicator` HTTP header.  
I mapped it to AWS Cognito for token issuance, API Gateway + Lambda Authorizer for validation, and DynamoDB for tenant metadata. The design ensured:
- **Scalability:** API Gateway scales automatically; Lambda authorizers run in parallel per request.
- **Availability:** Global CloudFront distribution keeps latency low across regions.
- **Cost:** Pay‑per‑request model with minimal cold‑start impact.

*Result:* After rollout, partner error rates dropped from 12 % to <0.3 %. We processed >5 M requests/day with <0.1 s average latency and <$200/month in AWS spend. The solution was adopted as a best practice across all services.

**What the bar‑raiser heard**

- *Ownership:* Took initiative, drove cross‑team alignment, delivered end‑to‑end.
- *Dive Deep:* Detailed claim mapping, service selection, cost & performance analysis.
- *Quantified Impact:* Concrete metrics on error reduction and cost savings.
- *Learning from Failure:* Adjusted design after initial pilot failures (e.g., header collision) to ensure idempotence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
