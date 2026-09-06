---
qid: ing_636497fc91__think__local
question: Design agent orchestration across dozens of connected SaaS systems. Where
  is authorization enforced, and why can it not live in the model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 522
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:36:11-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - “Dozens of connected SaaS systems” → each with its own auth contract (OAuth, API keys, SSO).  
   - “Agent orchestration” means a central workflow engine invoking those APIs on behalf of users or services.  
   - Assume we’re not building a new IAM system but integrating existing ones.

**2️⃣ Adopt the *“separation‑of‑concerns”* mental model**  
   - **Authorization** is policy enforcement that must reference *who* (user, service) and *what* (resource, action).  
   - A *model* (e.g., a graph or rule set) can describe capabilities but cannot enforce them without an execution context.

**3️⃣ Step‑by‑step reasoning**  
   1. The orchestration engine receives a request → it must authenticate the caller.  
   2. It looks up the caller’s identity in its local token store (or forwards to an IdP).  
   3. For each SaaS call, the engine must translate that identity into the target system’s credentials (e.g., exchange an OAuth code for a refresh token).  
   4. The *authorization* decision (is this caller allowed to read X in SaaS Y?) is made by consulting a policy service that knows both local roles and external scopes.  
   5. The engine then injects the correct bearer token into the outgoing request.

**4️⃣ Common traps**  
   - **Embedding auth in the model** → you lose runtime context (current user, session).  
   - **Hard‑coding tokens** → stale or scoped incorrectly.  
   - **Assuming a single IdP** → ignores per‑SaaS identity requirements.

**5️⃣ Sanity check & verbalization**  
   - Ask: “Can the decision be made without knowing who is actually calling right now?” If not, it can’t live in the model alone.  
   - Explain that authorization must happen *at runtime* where the engine has visibility into the caller’s identity and the target system’s expectations; the model merely informs the policy but does not enforce it.

By following this chain—clarify, separate concerns, reason through the call flow, watch for pitfalls, then validate—you’ll see why enforcement belongs in the orchestration layer, not just the abstract model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
