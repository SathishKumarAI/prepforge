---
qid: ing_c19132df36__faang__local
question: 'Explain: Design a permission model for an agent that can call our internal
  APIs as tools.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 464
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:11:10-05:00'
sources: []
---

**Clarify**  
We need a fine‑grained, auditable permission system that lets an AI “agent” invoke internal REST/GraphQL endpoints (our tools) while protecting data and business logic.  
Key assumptions:  

* Agents are identified by a stable ID or JWT issued by our auth layer.  
* Each API has defined scopes (read/write/modify).  
* We want to enforce least‑privilege, auditability, and easy revocation.

**Approach**  
1. **Token‑based ACLs** – issue each agent an access token containing a signed payload of allowed scopes per service.  
2. **Role‑oriented policy store** – maintain a central policy DB (e.g., DynamoDB) mapping roles → endpoint→actions.  
3. **Runtime gatekeeper** – every internal API checks the incoming token, validates signature & expiry, and cross‑references the policy store to allow/deny the call.  
4. **Audit log** – record each successful or denied invocation with agent ID, timestamp, endpoint, action, and payload hash.

**Depth**  
*Token structure*: `{sub: agentId, scopes:{serviceA:["GET","POST"], serviceB:["GET"]}, exp:…}` signed via RS256.  
*Policy query*: `SELECT actions FROM policies WHERE role = ? AND endpoint = ?`.  
*Complexity*: O(log n) lookup in DynamoDB; token verification is O(1).  
*Trade‑offs*: Central policy store introduces a single point of latency but allows dynamic revocation by updating the DB.

**Edge Cases**  
*Token replay*: mitigate with short expiry + nonce.  
*Privilege escalation*: ensure no implicit “superuser” scopes in any role.  
*Service deprecation*: purge or flag endpoints in policies to prevent accidental calls.

**Optimize & Communicate**  
Future work: cache policy lookups in a Redis layer for sub‑millisecond checks; integrate with IAM for on‑prem vs cloud services. I’d present this as a layered architecture diagram, walk through a token flow, and highlight how each component satisfies security, scalability, and auditability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
