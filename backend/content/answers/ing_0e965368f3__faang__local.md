---
qid: ing_0e965368f3__faang__local
question: 'Explain: Using Role-based Access Control — A Cheatsheet to Build Secure
  APIs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 534
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:17:43-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asked how to secure an API with **Role‑Based Access Control (RBAC)**, so I’ll restate the goal: *build a stateless REST/GraphQL endpoint that enforces fine‑grained permissions per user role*. Key assumptions:  

- Authentication is already handled (e.g., JWT or OAuth2).  
- Roles are stored in a database and may change over time.  
- The API must scale horizontally without shared session state.

**2️⃣ Approach**  
1. **Token enrichment** – after auth, embed the user’s role(s) into the access token.  
2. **Middleware gatekeeper** – every request passes through an RBAC filter that reads the token and checks if the requested resource/verb is allowed for those roles.  
3. **Policy store** – keep a lightweight in‑memory cache (e.g., Redis or local LRU) mapping `role → {resource, method}` rules, refreshed on role updates.  
4. **Fail‑fast & audit** – log denied attempts and return 403; optionally record the action for compliance.

**3️⃣ Depth**  
- **Complexity:** O(1) lookup per request if using hash maps; cache invalidation is O(1).  
- **Trade‑offs:** Storing roles in tokens avoids DB hits but risks stale permissions; mitigated by short TTLs or a revocation list.  
- **Implementation snippets (Python‑Flask):**  

```python
@app.before_request
def rbac():
    token = request.headers.get('Authorization')
    roles  = decode_jwt(token)['roles']
    if not policy_cache.is_allowed(roles, request.endpoint, request.method):
        abort(403)
```

**4️⃣ Edge Cases**  
- **Multiple overlapping roles:** merge permissions (union).  
- **Hierarchical roles:** ensure parent roles inherit child rights.  
- **Dynamic role changes:** push cache invalidation via WebSocket or pub/sub.  
- **Token replay attacks:** include `iat` and enforce short life.

**5️⃣ Optimize & Communicate**  
To improve scalability, move policy enforcement to a dedicated microservice (policy server) using gRPC; this decouples the API from permission logic and allows central updates. I’d narrate my design by walking through a request lifecycle, highlighting where RBAC checks happen, and discuss how each component addresses latency, consistency, and security—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
