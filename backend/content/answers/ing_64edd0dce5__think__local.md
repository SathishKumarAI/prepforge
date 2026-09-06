---
qid: ing_64edd0dce5__think__local
question: 'Explain: Read-only enforcement & row-level security - defence in depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 493
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:42:09-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

* Assume a relational DB (e.g., PostgreSQL, Oracle) used by an AI‑driven app.  
* “Read‑only enforcement” means users cannot modify data at all.  
* “Row‑level security” (RLS) restricts which rows a user can see/modify.  
* Goal: show how combining them layers protection (“defence in depth”).

**2️⃣ Mental model / framework**

1. **Principle of least privilege** – give only the rights needed.  
2. **Defense‑in‑depth** – multiple independent safeguards so failure of one doesn’t expose data.  
3. **Security hierarchy** – physical → network → application → database.

Map read‑only and RLS onto that hierarchy: they’re database‑level controls, but you still rely on external auth.

**3️⃣ Step‑by‑step reasoning**

1. *Authenticate user* (OAuth/JWT).  
2. *Authorize role* in the app; map to a DB role.  
3. *Enforce read‑only*: GRANT SELECT only, no INSERT/UPDATE/DELETE.  
4. *Apply RLS policy* on tables: `CREATE POLICY` that filters rows by user id or tenant.  
5. Result: even if an attacker hijacks a session, they can’t write and can only see permitted rows.

**4️⃣ Common traps to avoid**

* Assuming read‑only implies “no data leakage”; remember data may still be exported.  
* Putting RLS on every table—overkill; target sensitive ones.  
* Mixing DB roles with app roles without clear mapping → privilege creep.  
* Ignoring audit logs: need to log SELECTs for compliance.

**5️⃣ Sanity‑check & verbalize**

*Ask*: “If a user has read‑only rights, can they modify any row?” → No.  
“Can they see rows outside their domain?” → No, RLS blocks that.  
Explain how each layer protects against distinct attack vectors: privilege escalation vs. data exfiltration.

By walking through these steps, you demonstrate both understanding and the practical interplay of read‑only enforcement and row‑level security as layers in a defense‑in‑depth strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
