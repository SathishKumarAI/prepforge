---
qid: ing_4ffa2cebaa__faang__local
question: 'Explain: Security Considerations — RFC 8707: Resource Indicators for OAuth
  2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 509
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:50:19-05:00'
sources: []
---

**Clarify**  
The question asks how *RFC 8707* (Resource Indicators) adds security to OAuth 2.0. We assume the interviewers want a concise explanation of why it matters, what problems it solves, and how it’s implemented.

**Approach**  
1. Summarize the core issue in OAuth 2.0.  
2. Explain the Resource Indicator concept.  
3. Highlight security benefits (scope isolation, token replay prevention).  
4. Mention practical use‑cases and any trade‑offs.

**Depth**  

| Concept | Detail |
|---------|--------|
| **Problem** | In multi‑resource scenarios a single access token can be misused across APIs if the authorization server issues broad scopes or if clients blindly trust the `aud` claim. |
| **Resource Indicator (RI)** | An optional URI sent in the Authorization Request (`resource=`). The AS validates that the requested resource is allowed for the client and may issue a *resource‑specific* access token, optionally with a distinct audience (`aud`). |
| **Security Gains** | • Scope isolation: tokens are valid only for the indicated resource. <br>• Prevents token replay across APIs. <br>• Enforces server‑side intent verification (the AS knows which API was requested). |
| **Implementation** | Client includes `resource` in `/authorize` and `/token`. The AS checks the URI against a whitelist, may add an `aud` claim, and can issue a separate token if needed. |
| **Trade‑offs** | Adds a small header/parameter overhead; requires coordination between AS and resource servers to agree on URIs. |

**Edge Cases**  
- **Missing RI**: default to the “default” resource or reject.  
- **Invalid URI**: reject with `invalid_request`.  
- **Multiple resources**: RFC allows comma‑separated list; token must be scoped appropriately.

**Optimize & Communicate**  
Explain that RFC 8707 is a lightweight guard against cross‑resource attacks and scales naturally as the number of protected APIs grows. Emphasize its role in large, multi‑tenant platforms where token misuse can have severe impact. This framing shows structured thinking, depth on protocol mechanics, and awareness of practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
