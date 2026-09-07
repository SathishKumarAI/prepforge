---
qid: ing_09043fad8f__faang__local
question: 'Explain: How should an agent authenticate to downstream systems? Compare
  a shared service account with acting on behalf of the user.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 521
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:05:31-05:00'
sources: []
---

**Clarify**

> *Problem:* An autonomous AI agent must call downstream APIs (e.g., CRM, billing).  
> *Assumptions to confirm:*  
> – The agent is a server‑side service, not a user‑facing UI.  
> – Downstream systems support OAuth 2.0 and/or mutual TLS.  
> – Auditing/logging of API calls is required.

**Approach**

1. **Choose an authentication flow** that balances security, auditability, and developer effort.  
2. **Implement the flow** using a robust SDK or library.  
3. **Test for privilege escalation and replay attacks.**  

**Depth**

| Method | How it works | Pros | Cons |
|--------|--------------|------|------|
| **Shared service account (client credentials)** | The agent holds its own client‑id/secret, obtains a JWT/OAuth token, and calls downstream APIs. | • Simple to set up.<br>• No per‑user context needed. | • All actions appear as the same identity → difficult to audit user intent.<br>• If compromised, all downstream data is exposed. |
| **Acting on behalf of the user (delegated access)** | The agent initiates an OAuth 2.0 *authorization code* or *on‑behalf‑of* flow; it receives a token scoped to the specific user’s permissions. | • Fine‑grained, auditable actions.<br>• Least‑privilege principle: only what the user granted. | • Requires a user consent/refresh flow.<br>• More complex token lifecycle management. |

**Edge Cases**

* Token expiry → implement silent refresh or rotation.  
* Revoked permissions → handle 403 errors and trigger re‑auth.  
* Compromise of service account secrets → rotate immediately; use hardware security modules (HSM).  

**Optimize & Communicate**

- **Security hardening:** store credentials in a vault, enable MFA for human operators, log every token issuance.  
- **Performance:** cache tokens per user, batch API calls where possible.  
- **Narration:** “I chose delegated access because it preserves the user’s intent and limits blast radius; I’ll fall back to a shared service account only if the downstream system lacks OAuth support.”  

This structured reasoning demonstrates clear problem framing, technical depth, and awareness of trade‑offs—hallmarks of a top‑tier FAANG interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
