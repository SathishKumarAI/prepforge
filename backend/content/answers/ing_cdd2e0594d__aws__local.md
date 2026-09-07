---
qid: ing_cdd2e0594d__aws__local
question: 'Explain: JWT — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 422
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:27-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task**  
> While redesigning our e‑commerce auth flow, the team needed a stateless, scalable solution that still allowed us to enforce CSRF protection and support mobile clients.

> **Action**  
> I introduced **JWTs** stored in an **HTTP‑Only secure cookie**. The token contains `sub`, `iat`, `exp` and role claims signed with RS256. For legacy browsers we fall back to a server‑side **session table** (Redis) keyed by a short‑lived session ID, while mobile apps use the JWT directly in an Authorization header.  
> I built a Lambda‑based token validator that checks signature, revocation via a DynamoDB “revoked” list, and uses API Gateway’s request context to inject user claims into downstream services.

> **Result**  
> After rollout:  
> * 60 % reduction in session store traffic (from 1.2 M ops/day to 480 k).  
> * Latency dropped from 120 ms to 45 ms for auth‑protected endpoints.  
> * Cost saved ~$3K/month on RDS/ElastiCache.

> **Reflection**  
> I owned the migration, dived deep into JWT security pitfalls (replay, token rotation), and iterated based on real‑world failure data—e.g., a 2019 incident where an unexpired cookie was replayed across subdomains. The fix added domain‑scoped `SameSite` flags and rotated keys quarterly.

> **Leadership Principles**  
> *Customer Obsession* – improved login speed for millions of users.  
> *Ownership & Dive Deep* – led the entire refactor, examined cryptographic trade‑offs, and quantified impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
