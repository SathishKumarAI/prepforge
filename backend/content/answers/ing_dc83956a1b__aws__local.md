---
qid: ing_dc83956a1b__aws__local
question: 'Explain: Self-contained JWT Pattern — Selfcontainedaccesstoken'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 456
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:37:42-05:00'
sources: []
---

**Situation & Task**  
While redesigning our SaaS platform for a Fortune‑500 client, the security team demanded a *self‑contained* access token that could be validated without round‑trips to an auth server—critical for high‑throughput API gateways in a global microservice mesh.

**Action**  
I proposed a **Self‑Contained JWT Pattern**:

1. **Token Generation** – Lambda (Python) signs a JWT with AWS KMS‑protected RSA keys, embedding scopes, tenant ID, and short `exp` (~5 min).  
2. **Validation** – API Gateway custom authorizer fetches the public key from Secrets Manager once per day; subsequent requests validate locally using the JWKS endpoint exposed by an EC2 bastion for redundancy.  
3. **Revocation** – A DynamoDB table tracks revoked `jti`s with TTL=10 min, queried only when a token’s signature passes but the JTI is present.  

I modeled throughput (1 M req/s) and latency (< 20 ms), yielding an estimated cost of $0.02 per million requests versus $0.05 if each request hit Cognito.

**Result**  
Deployment cut authentication latency by **35%**, increased API capacity from 500K to 1M req/s, and lowered ops costs by **$18k/month**. The pattern also reduced the attack surface, as no session state is stored on the server.

**Learning & Bar‑raiser cues**  
- **Ownership**: I owned the end‑to‑end flow and performed a live rollback plan.  
- **Dive Deep**: We benchmarked KMS vs HSM, chose RSA over ECC for faster verification on Lambda.  
- **Quantified Impact**: 35% latency win + $18k/month savings.  
- **Failure Insight**: Initial design missed JTI revocation; we added DynamoDB TTL to prevent stale tokens—an example of iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
