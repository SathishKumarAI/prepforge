---
qid: ing_42ad90625e__think__local
question: 'Explain: What is an authorization model — Designing an Authorization Model
  for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 453
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:02:09-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Ask whether they need a high‑level definition or a concrete design example.  
   - Assume “authorization model” refers to *who can do what* in an enterprise system (roles, policies, resources).  
   - Note that Cerbos is a policy‑as‑code platform; the answer should reference its concepts.

**2️⃣ Adopt a mental framework**  
   1. **Identify entities**: users, groups, services, devices.  
   2. **Define resources & actions**: files, APIs, CRUD ops.  
   3. **Choose a policy language** (e.g., Cerbos’ JSON or OPA‑style).  
   4. **Layer policies**: tenant‑level, organizational, project‑specific.  
   5. **Implement enforcement**: API gateway, SDKs, serverless hooks.

**3️⃣ Step‑by‑step reasoning**  
   - Start with business requirements → map to *permissions*.  
   - Translate permissions into Cerbos rules (subjects, resources, actions).  
   - Group similar rules into *policy bundles* per tenant.  
   - Use inheritance & conditionals for dynamic attributes (time, location).  
   - Validate with test cases, then deploy via CI/CD.

**4️⃣ Common pitfalls to avoid**  
   - Over‑privileging: “admin” roles too broad.  
   - Ignoring *attribute drift*: user attributes change but policies don’t update.  
   - Tight coupling of code and policy; keep policies in a separate repo.  
   - Forgetting audit logs for denied decisions.

**5️⃣ Sanity checks & communication**  
   - Run a “what‑if” matrix: pick a user, resource, action → verify expected outcome.  
   - Summarize the model as a diagram (subjects → policies → resources).  
   - Explain trade‑offs: simplicity vs. fine‑grained control, performance overhead of policy evaluation.  

This structured thought process can be reused for any authorization design interview or documentation task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
