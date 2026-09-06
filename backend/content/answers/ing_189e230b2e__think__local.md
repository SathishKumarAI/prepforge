---
qid: ing_189e230b2e__think__local
question: 'Explain: Glean OAuth Authorization Server — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 453
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:21:20-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The user wants an explanation of *Glean OAuth Authorization Server* in relation to the *Glean MCP (Machine‑Learning‑Powered) server*.  
   - Assume the audience has a ML background but not deep knowledge of Glean’s internal architecture.  
   - Clarify that we’re describing the role, key components, and how it fits into the overall data‑processing pipeline.

**2️⃣ Adopt a mental model**  
   - Treat the system as a *service‑oriented architecture*: an **Authorization Server** (handles OAuth flows) → **MCP server** (runs ML models).  
   - Use the classic “client‑server” + “resource‑owner” diagram to map OAuth concepts onto Glean’s components.

**3️⃣ Step‑by‑step reasoning**  
   1. Define OAuth in simple terms: token issuance, scopes, refresh tokens.  
   2. Explain why Glean needs a dedicated server (centralized auth, multi‑tenant isolation).  
   3. Detail the key endpoints (`/token`, `/authorize`, `/introspect`) and how they are implemented (JWTs, signing keys).  
   4. Show how the MCP server consumes these tokens: validates signature, checks scopes against model permissions.  
   5. Illustrate a typical request flow: user → client → Glean Auth → MCP → response.

**4️⃣ Common traps to avoid**  
   - Don’t conflate *Glean* (the company) with *Glean* (the platform).  
   - Avoid over‑technical jargon; keep ML focus by linking auth tokens to model access control.  
   - Don’t assume the reader knows Glean’s internal DB schema—only mention it if essential.

**5️⃣ Sanity‑check & verbalize**  
   - Run through a concrete example (e.g., “Predictive Search” model).  
   - Ask: *Does each component have a clear responsibility?*  
   - Explain in plain language, then recap the flow verbally as if teaching a colleague.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
