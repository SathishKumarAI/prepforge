---
qid: ing_b9fc945d49__fp__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 394
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:39:11-05:00'
sources: []
---

**Why a “resource indicator” is necessary**

OAuth 2.0 was designed as an *authorization* protocol: a client obtains an access token from an authorization server (AS) and presents it to a resource server (RS). The AS, however, only knows *who* the client is and what scopes were granted; it never learns which RS will consume the token.  
If an attacker obtains a token that was issued for RS A but sends it to RS B, RS B might accept it because the token’s scope matches the request—an implicit “token‑reuse” attack.  

The solution is simple yet profound: **ask the AS which RS the client intends to call**. This is the *resource indicator* (RFC 8707). By including a `resource` parameter in the authorization and token requests, the AS can issue a token that is cryptographically bound to that specific RS (e.g., via JWT audience claims or custom validation).  

**Deeper principle**

This is an application of *contextual binding*: the token’s validity domain is narrowed by adding a context variable (`audience`). It reduces the search space for attackers, turning a global credential into a *local* one. The indicator also restores *information asymmetry*—the RS no longer has to rely solely on scopes; it can verify that the AS intended its use.

**Non‑obvious insight**

Many overlook that the resource indicator is not just an extra parameter—it enables **token replay protection across multiple RSes** without requiring each RS to maintain a shared secret or token blacklist. The AS can issue distinct, non‑interchangeable tokens per RS, preserving scalability while tightening security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
