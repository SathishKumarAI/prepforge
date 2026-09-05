---
qid: ing_107a222820__star__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 334
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:12-05:00'
sources: []
---

**Situation** – In my last role I was leading the integration of a multi‑tenant SaaS platform with an external identity provider that supported OAuth 2.0. The client’s API required clients to specify which resource they were accessing in every token request, but our existing SDK didn’t expose this “resource” parameter.

**Task** – I needed to add support for RFC 8707 Resource Indicators so that each access token was scoped to a specific tenant API endpoint, ensuring fine‑grained authorization and preventing accidental cross‑tenant data leaks.

**Action** – First, I reviewed the RFC and mapped its concepts to our OAuth flow. I extended the client‑side library to accept a `resource` argument and automatically append it as `resource=...` in the token request body. On the server side, I updated the authorization endpoint to validate the indicator against a whitelist of allowed URLs per tenant and added logging for audit purposes. I also wrote unit tests to confirm that tokens issued with an invalid resource were rejected, and performed load testing to ensure no performance regression.

**Result** – After deployment, token issuance errors dropped from 12% to <1%, and we gained the ability to issue separate tokens per API endpoint, reducing potential blast radius by 70%. The feature also enabled us to comply with our compliance audit, which cited RFC 8707 as a best practice. I learned how small protocol tweaks can have outsized security benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
