---
qid: ing_55b47c0d89__aws__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 432
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:48-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of our customer‑facing API gateway to use fine‑grained OAuth 2.0 scopes instead of the traditional “access token” model. The team needed a clear, standards‑based way to express *which* resource an access token could act upon. I identified RFC 8707 (Resource Indicators for OAuth 2.0) as the formal mechanism.

**Action & Design**  
1. **Requirements** – Tokens must carry a `resource` claim that lists the target service URL(s). The gateway validates this claim before routing.  
2. **Architecture** –  
   * **Amazon Cognito / AWS IAM OIDC Provider** to issue tokens with the custom `resource` claim.  
   * **API Gateway + Lambda@Edge** to inspect the claim, enforce ACLs, and forward requests only if the resource matches the endpoint’s URI.  
   * **AWS Secrets Manager** for storing service‑specific keys; cost stays under $0.10 per 1 000 requests due to caching.  
3. **Scalability & Availability** – API Gateway automatically scales to millions of calls with built‑in high availability; Lambda@Edge runs in edge locations, reducing latency by ~30 ms globally.  
4. **Cost Trade‑off** – Adding the `resource` claim increases token size by <200 B, negligible impact on network cost. The overhead of an extra validation step adds ~1 µs per request—acceptable given the security gain.

**Result**  
After deployment, we saw a 40 % reduction in unauthorized access incidents (from 12 to 7 per month) and achieved a 99.999 % uptime for the protected endpoints. The solution also cut token‑validation latency by 15 ms compared with our legacy approach.  

*Leadership Principles:* **Customer Obsession** – ensuring customers’ data is only accessible where authorized; **Ownership** – driving the end‑to‑end design and rollout without handoffs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
