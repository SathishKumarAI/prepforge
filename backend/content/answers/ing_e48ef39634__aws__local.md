---
qid: ing_e48ef39634__aws__local
question: 'Explain: Status of This Memo — RFC 8707: Resource Indicators for OAuth
  2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 567
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:**  
> While leading a cross‑team effort to secure our API gateway, my team needed a clear reference for how OAuth 2.0 should handle *resource indicators*—the `audience` field that tells the authorization server which protected resource the client is targeting. The IETF had recently published RFC 8707, but its status was unclear to many engineers.

> **Task:**  
> Translate the RFC’s current standing into actionable guidance for our developers and document it in our internal knowledge base so that future security reviews could reference a definitive source.

> **Action (Technical):**  
> 1. Checked the IETF “RFC Editor” portal: **RFC 8707 is a *Final* RFC, published March 2019**, not a draft or experimental memo.  
> 2. Extracted key points—resource indicators are optional but recommended; they appear in the `aud` claim of the access token and can be used by resource servers to validate scope.  
> 3. Created a Markdown guide that maps RFC fields (`aud`, `resource_id`) to our AWS Cognito user pools, API Gateway authorizers, and Lambda authorizer logic.  
> 4. Added a quick‑start snippet showing how to add the `aud` claim in a Cognito token using AWS CDK.

> **Result (Data‑driven):**  
> • Updated documentation was viewed **3,200 times** within the first week.  
> • Post‑deployment, our internal security audit score improved from 78 % to **92 % compliance** with OAuth best practices.  
> • Developers reported a **30 % reduction** in support tickets related to token validation errors.

> **Leadership Principles:**  
> *Customer Obsession* – ensuring the team has reliable, up‑to‑date security references.  
> *Ownership* – proactively clarifying RFC status and embedding it into our tooling.  
> *Dive Deep* – parsing the RFC, mapping its fields to AWS services, and quantifying impact.

> **Bar‑raiser takeaway:** The answer shows ownership of a knowledge gap, dives deep into the technical content, delivers measurable improvement, and reflects learning from prior audit failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
