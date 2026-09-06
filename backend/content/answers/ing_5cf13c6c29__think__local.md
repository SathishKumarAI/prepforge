---
qid: ing_5cf13c6c29__think__local
question: 'Explain: Authorization — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 431
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:08:53-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**

* Assume the audience knows basic ML concepts but not cloud‑native APIs.  
* Focus on “Authorization” as a security layer that gates API calls.  
* Treat an API as a contract between client and service—exposing endpoints, data formats, and auth rules.

**2️⃣ Adopt a mental model**

Think of an API like a **front desk**:  
- *Interface* (public methods) → what the client can ask for.  
- *Authentication* → who is calling.  
- *Authorization* → what that caller may do.  
Use the “Resource‑Access” diagram: *Client → Auth Service → API Gateway → Backend Service*.

**3️⃣ Step‑by‑step reasoning**

1. Define **resources** (e.g., ML model, dataset).  
2. Assign **roles/permissions** to users/groups (read/write/predict).  
3. Choose an auth protocol (OAuth 2.0, JWT, API keys).  
4. Implement a **policy engine** (OPA, RBAC tables) that checks the caller’s token against allowed actions.  
5. Enforce via middleware or gateway before routing to the ML inference service.

**4️⃣ Common traps**

* Mixing authentication with authorization → forget role checks after identity is verified.  
* Storing permissions in client‑side tokens without validation.  
* Ignoring token revocation → stale access remains possible.  
* Over‑exposing endpoints → unnecessary attack surface.

**5️⃣ Sanity‑check & verbalize**

* Verify that every endpoint has a clear permission matrix.  
* Ask: “If an attacker steals an API key, can they do anything beyond reading?”  
* Communicate the flow: *Client → Token → Gateway → Policy Engine → ML Service*, highlighting where auth decisions happen and how revocation is handled.

This structured approach lets you explain the role of APIs in authorization within a system design context while avoiding typical pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
