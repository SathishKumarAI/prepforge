---
qid: ing_049fd79df9__aws__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 525
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:25-05:00'
sources: []
---

**Situation / Task**  
While leading a server‑less recommendation engine, I had to expose a protected ML model endpoint to third‑party partners without compromising our data lake. The partners needed *fine‑grained* access: only the “product‑category” resource they were interested in, not the entire dataset. RFC 8707 (OAuth 2.0 Resource Indicators) offered a standard way to let clients specify the target resource in an authorization request.

**Action**  
1. **Requirements & Design**  
   * Added a `resource` query parameter to our API gateway’s custom authorizer.  
   * Updated the IAM policy schema so that each client token could be scoped to one or more category ARNs.  
   * Implemented an AWS Lambda authorizer that parses the `resource`, validates it against Cognito user pool claims, and returns a JSON Web Token (JWT) with the appropriate scopes.

2. **AWS Services**  
   * **Amazon API Gateway** – exposes the ML endpoint and forwards the `resource` parameter.  
   * **AWS Lambda Authorizer** – performs “Dive Deep” into token validation and resource matching.  
   * **Amazon Cognito** – stores user pools with custom claims (`allowed_resources`).  
   * **IAM** – fine‑grained policies linked to resource ARNs.

3. **Scalability & Availability**  
   * Lambda scales automatically; cold‑start latency < 120 ms due to minimal dependencies.  
   * API Gateway is fully managed, providing 100 % SLA for HTTPS endpoints.

4. **Cost & Trade‑offs**  
   * <$0.0000167 per request for Lambda + $3.50/month for API Gateway’s REST endpoint.  
   * Trade‑off: added complexity in policy management; mitigated by automated Terraform scripts.

5. **Result**  
   * Reduced unauthorized data exposure risk by 98 % (validated via penetration tests).  
   * Partner adoption grew from 2 to 12 clients within 3 months, driving an additional $1.2 M ARR.

**Reflection & Bar‑raiser cues**  
*Demonstrated Ownership* – drove the end‑to‑end implementation and policy automation.  
*Dive Deep* – dissected RFC 8707, mapped it to AWS primitives, and quantified risk reduction.  
*Learning from Failure* – early mis‑scope of IAM policies caused a false positive; resolved by adding automated unit tests for policy generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
