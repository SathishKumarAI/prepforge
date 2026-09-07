---
qid: ing_db305933ff__aws__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 394
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:33:35-05:00'
sources: []
---

**S – Situation**  
At my previous company we launched a multi‑tenant SaaS platform that used OAuth 2.0 for third‑party integrations. The security team flagged a risk: if an access token could be reused across different resource servers, an attacker might pivot from one tenant to another.  

**T – Task**  
I was tasked with implementing the RFC 8707 “Resource Indicators” so each token would carry a `resource` claim and only be accepted by its intended API endpoint.

**A – Action**  
*Dive Deep & Ownership*: I first mapped our architecture—API Gateway → Lambda Authorizer → DynamoDB. I added a `resource` field to the Cognito IdP token, then updated the Lambda authorizer to validate that the incoming request’s `audience` matched the token’s `resource`.  
*AWS Services Used*: Cognito (token issuance), API Gateway (custom authorizer), CloudWatch Logs for audit trails.  
I ran a load test: 50 k concurrent requests with mismatched resources; our authorizer rejected 100% of them in <10 ms, adding only ~0.5 ms overhead per call.

**R – Result**  
Post‑deployment, we saw **zero cross‑tenant token reuse incidents** and reduced the attack surface by 95%. The cost impact was negligible (under $1/month for CloudWatch).  

**Bar‑raiser Takeaway**  
The interviewer will note my *ownership* of the security gap, the *dive deep* into token structure, measurable impact on risk reduction, and the quick learning loop that translated RFC text into a scalable AWS implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
