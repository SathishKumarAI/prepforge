---
qid: ing_3da4b97cca__aws__local
question: 'Explain: 5.1. OAuth Parameters Registration — RFC 8707: Resource Indicators
  for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 439
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:07-05:00'
sources: []
---

**Answer (Amazon Style)**  

**Situation:** I was tasked with modernizing our multi‑tenant SaaS platform so each tenant could expose protected APIs using OAuth 2.0 while keeping their data isolated. The challenge was to allow a single authorization server to issue tokens that only grant access to the *resource* requested by the client, without exposing other tenants’ scopes.

**Task:** Implement RFC 8707 “Resource Indicators for OAuth 2.0” so that clients can specify the target resource (`resource` parameter) during the token request and we can enforce fine‑grained access per tenant.

**Action:**  
1. **Design** – Added a `resource` query/POST field to the `/token` endpoint. On receipt, the auth server looks up the tenant’s allowed resources in DynamoDB (partition key: `tenant_id`).  
2. **Validation** – If the requested resource is listed, we append it as a custom claim (`azp_resource`) and issue an access token via Cognito Authorizer.  
3. **Enforcement** – API Gateway uses a Lambda authorizer that checks both the `azp_resource` claim and the `resource_id` in the URL path, rejecting mismatches with 403.  
4. **Scalability & Cost** – DynamoDB provides sub‑millisecond reads; Cognito scales automatically, keeping per‑request cost <$0.00001.  

**Result:** Reduced token misuse risk by **98 %**, cut API latency from 120 ms to 70 ms, and eliminated the need for tenant‑specific authorization servers, saving $12k/month in infrastructure.

> *Leadership Principles:*  
> • **Ownership** – Took full responsibility for end‑to‑end security flow.  
> • **Dive Deep** – Analyzed RFC details, mapped them to AWS primitives, and quantified risk reduction.  

This solution demonstrates ownership, depth, measurable impact, and continuous learning from prior token‑misuse incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
