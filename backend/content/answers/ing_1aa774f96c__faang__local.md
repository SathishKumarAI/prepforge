---
qid: ing_1aa774f96c__faang__local
question: 'Explain: Q127: The MCP stateless core replaced sessions with server-minted
  state handles, and an audit found 91.8% of internet-facing MCP servers run without
  OAuth. Design a secure multi-tenant MCP server on the stateless spec.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 574
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:47:12-05:00'
sources: []
---

**Clarify**

You’re asked to sketch a **secure, multi‑tenant MCP (Micro‑Container Platform) server** that follows the *stateless* specification: clients carry a server‑minted state handle instead of a session cookie. The audit shows most public servers lack OAuth, so we must design authentication/authorization that works without relying on OAuth while remaining stateless and tenant‑isolated.

Assumptions to confirm:
- Tenants are identified by a unique `tenant_id` embedded in the state handle.
- The server can verify signatures (e.g., HMAC or RSA) but cannot store per‑client session data.
- Requests contain only the state handle, optional API key, and the desired action.

**Approach**

1. **State Handle Structure**  
   - `tenant_id | timestamp | nonce | signature` (JWT‑style).  
2. **Authentication Layer**  
   - Validate signature (HMAC with a secret or RSA public key).  
   - Check `timestamp` is within a sliding window to prevent replay.  
3. **Authorization Layer**  
   - Map `tenant_id` → allowed scopes/roles stored in a read‑only config DB.  
   - Enforce RBAC per request.
4. **Tenant Isolation**  
   - All data stores are partitioned by `tenant_id`.  
   - Use container isolation (cgroups) to limit resource usage.

**Depth**

- *Signature*: HMAC‑SHA256 with a rotating secret; rotate via key‑rotation table, never store secrets in the state handle.  
- *Replay protection*: Include monotonic nonce and TTL; reject if older than 5 min or nonce seen before (store recent nonces in a fast cache).  
- *Scalability*: Stateless requests hit any server instance; minimal per‑request overhead (~50 µs for HMAC verification).  
- *Security*: No OAuth needed; mitigates CSRF because state handle is not stored on the client’s browser.  
- *Audit trail*: Log `tenant_id`, action, and IP; immutable logs.

**Edge Cases**

- Clock skew: allow ±30 s window.  
- Secret compromise: rotate immediately, invalidate old handles.  
- Malformed handle: return 400 Bad Request.  
- Missing tenant: reject with 403.

**Optimize & Communicate**

Explain that this design removes the need for server‑side sessions, satisfies the stateless spec, and keeps multi‑tenant isolation through strict tenant‑ID scoping. Mention trade‑offs: extra latency from nonce cache lookups vs. eliminating session storage. Highlight how the approach scales horizontally and can be audited via immutable logs, meeting security compliance while remaining simple to implement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
