---
qid: ing_60690e26f3__faang__local
question: 'Explain: Privacy Considerations — RFC 8707: Resource Indicators for OAuth
  2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 554
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:28:13-05:00'
sources: []
---

**Clarify**

The question asks how *RFC 8707* (“Resource Indicators for OAuth 2.0”) impacts privacy in an OAuth‑based system.  
Assumptions I’d confirm:  

- The client requests access tokens that may be used on multiple resource servers (RS).  
- The RSs are distinct domains or services, each with its own data policies.  
- An attacker could potentially use a token across unintended RSs if no indicator is present.

**Approach**

1. Explain the problem: tokens without context can be misused.  
2. Summarize RFC 8707’s solution: attach a *resource indicator* to the authorization request.  
3. Detail how this preserves privacy (least‑privilege, scope isolation).  
4. Highlight implementation and security trade‑offs.

**Depth**

RFC 8707 introduces a `audience`‑style query parameter (`resource`) in the OAuth 2.0 authorization request. The authorization server (AS) validates that the indicated RS is authorized for the client’s scopes, then issues an access token with a claim (e.g., `azp`, `aud`) tying it to that specific RS.  

*Privacy benefits:*  
- **Scope confinement:** Tokens can only be used by the intended RS; cross‑domain leakage is prevented.  
- **Reduced data exposure:** Each RS receives tokens reflecting only the scopes it needs, limiting potential data disclosure if a token leaks.  
- **Auditability:** The AS records which RS requested what scopes, aiding compliance.

*Implementation notes:*  
- Clients must send `resource` in both `/authorize` and `/token`.  
- The AS may reject requests with unknown or disallowed resources (HTTP 400).  
- Tokens can be JWTs with a `azp` claim pointing to the resource.

**Edge Cases**

- **Missing resource indicator:** Some legacy clients omit it; the AS should default to an error rather than silently grant.  
- **Multiple resources:** RFC 8707 allows comma‑separated values; ensure each is validated separately.  
- **Dynamic RS discovery:** If RSs are added/removed, the AS must update its policy store accordingly.

**Optimize & Communicate**

To improve clarity:  

1. Show a short flow diagram (client → AS with `resource` → token → RS).  
2. Emphasize that this mechanism is *not* a replacement for transport encryption but an additional privacy safeguard.  
3. Conclude by noting that adopting RFC 8707 aligns with OAuth best practices and helps meet GDPR/CCPA requirements by limiting data exposure to the minimum necessary scope.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
