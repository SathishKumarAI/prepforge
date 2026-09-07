---
qid: ing_4ffa2cebaa__aws__local
question: 'Explain: Security Considerations — RFC 8707: Resource Indicators for OAuth
  2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 366
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:49-05:00'
sources: []
---

**Security Considerations – RFC 8707 (Resource Indicators for OAuth 2.0)**  

*Leadership Principles:* **Customer Obsession** & **Dive Deep**

> **Situation:** While architecting a multi‑tenant SaaS platform that exposes APIs to third‑party partners, we discovered that the standard OAuth 2.0 flow could not guarantee which resource server (e.g., *billing*, *analytics*) the access token was intended for.  
> **Task:** Implement a mechanism that ensures tokens are bound to specific resources, preventing accidental or malicious cross‑resource access.  
> **Action:** Adopted RFC 8707 by adding the `audience` claim (`resource`) in the JWT and validating it against an *allowed resource list* stored in DynamoDB. Each API gateway (API Gateway + Lambda authorizer) checks this claim before forwarding requests. We also enabled token introspection via AWS Cognito’s custom attributes to support opaque tokens.  
> **Result:** After deployment, we saw a **92 % reduction** in unauthorized cross‑resource access incidents over six months and achieved **99.999 % API uptime** with no added latency (average 2 ms extra). The solution cost <$0.02 per request, leveraging existing Cognito and DynamoDB without additional infrastructure.

*Bar‑raiser cues:* Demonstrated ownership by leading the design; deep dive into claim validation logic; quantified impact on security metrics; learned to balance strictness vs. developer friction by exposing a simple SDK for resource‑specific token generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
