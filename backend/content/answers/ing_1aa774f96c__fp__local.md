---
qid: ing_1aa774f96c__fp__local
question: 'Explain: Q127: The MCP stateless core replaced sessions with server-minted
  state handles, and an audit found 91.8% of internet-facing MCP servers run without
  OAuth. Design a secure multi-tenant MCP server on the stateless spec.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 399
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:03:00-05:00'
sources: []
---

**Designing a secure, stateless, multi‑tenant MCP server**

1. **Problem & principle**  
   The core goal is *information‑theoretic separation*: each tenant’s data must be isolated without storing per‑session credentials on the server. Statelessness forces us to encode all necessary authentication state in a tamper‑evident token that the client presents with every request.

2. **Token architecture**  
   - **Server‑minted handles**: Issue a signed JWT (`kid` → tenant ID, `sub` → user ID) using a rotating asymmetric key pair per tenant. The handle contains minimal claims (role, expiry).  
   - **Proof of possession**: Require the client to include a short‑lived cryptographic nonce (e.g., HMAC over request path+timestamp with a per‑tenant secret) that proves knowledge of the tenant’s shared secret. This thwarts replay and token theft.

3. **Multi‑tenancy enforcement**  
   - Store tenant metadata in a *read‑only* configuration store (e.g., Consul). Each request checks `kid` against this store; any unknown tenant triggers an immediate reject.  
   - Rate‑limit per‑tenant keys to prevent abuse of compromised secrets.

4. **Audit & hardening**  
   - Log every token issuance and usage with a hash chain for tamper evidence.  
   - Enforce OAuth only on the *front‑end* gateway; MCP itself remains stateless, eliminating the 91.8 % gap.

5. **Non‑obvious insight**  
   The nonce‑proof layer turns a purely signature‑based protocol into *authenticated encryption*. It binds the token to the specific request context, ensuring that a stolen handle cannot be replayed elsewhere—something most designs overlook when focusing solely on JWT signatures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
