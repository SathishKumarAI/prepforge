---
qid: ing_665929fcab__star__local
question: 'Explain: Security Considerations — RFC 8707: Resource Indicators for OAuth
  2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 280
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:52:31-05:00'
sources: []
---

**Situation:**  
At my previous role I was leading the redesign of our mobile banking API gateway. The legacy OAuth2 flow let third‑party apps request tokens for any endpoint, which exposed us to the “token replay” problem after a data breach.

**Task:**  
I needed to harden token issuance so that each access token could only be used against its intended resource server, in compliance with RFC 8707 (Resource Indicators).

**Action:**  
I introduced the `resource` parameter into the authorization request. In our auth server we parsed this value and added it as a claim (`azp`, `aud`) in the JWT. The gateway then validated that the token’s `resource` matched the incoming API host before forwarding requests. We also updated our SDKs to automatically include the indicator, and wrote unit tests to confirm mismatched tokens were rejected with 401 errors.

**Result:**  
Token misuse dropped from a 12% incident rate to <0.5%. The new flow added only ~3 ms latency per request, and the compliance audit passed without any security findings. I learned that a small protocol tweak can dramatically reduce attack surface while keeping developer experience intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
