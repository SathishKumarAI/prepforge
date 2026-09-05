---
qid: ing_9a5759105c__star__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 365
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:16-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we were building a unified API gateway that needed to expose customer data to multiple partner apps while keeping strict separation between banking and payment services. Our existing OAuth 2.0 flow only supported a single resource server, which meant every client request went through the same endpoint and risked leaking cross‑domain data.

**Task:**  
I had to redesign the authorization process so that each client could explicitly declare which resource (banking or payments) it was accessing, without adding extra complexity for developers or breaking backward compatibility with existing tokens.

**Action:**  
I introduced RFC 8707 “Resource Indicators” into our token issuance pipeline. In practice, I updated the Authorization Server to accept a `resource` query parameter on the `/authorize` endpoint and stored the indicator in the access token’s `audience` claim. The resource servers were then configured to validate that incoming tokens had the matching `resource` value before granting access. We used Spring Security OAuth2 for the server side and added middleware in our API gateway to rewrite the `Authorization` header based on the indicated resource, ensuring isolation between services.

**Result:**  
The change reduced accidental data exposure by 100% and cut token revocation overhead by 40% because each token now had a clear scope. Clients reported a smoother onboarding experience, and we achieved compliance with PCI‑DSS requirements for multi‑tenant access control. I learned how standards like RFC 8707 can solve real-world security problems when applied thoughtfully to existing infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
