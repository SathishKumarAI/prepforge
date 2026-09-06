---
qid: ing_d7a143a292__think__local
question: 'Explain: When to use RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 448
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:10:45-05:00'
sources: []
---

**1️⃣ Clarify the context and assumptions**  
- Assume an enterprise with multiple business units, data sets, and regulatory constraints.  
- The question asks *when* RBAC is appropriate, not how to implement it.  
- Assume that “authorization model” refers to fine‑grained access control over resources (files, APIs, services).  

**2️⃣ Adopt a mental framework: “Fit for purpose”**  
- Map the key characteristics of RBAC (role hierarchy, static assignment, role‑based permissions) against typical enterprise scenarios.  
- Compare with alternatives (ABAC, ACLs) to see where RBAC’s strengths shine.  

**3️⃣ Step‑by‑step reasoning**  
1. Identify the *policy complexity*: if most users belong to a few well‑defined groups (e.g., HR, Finance, Engineering).  
2. Assess *frequency of change*: roles rarely shift; users are assigned once and stay until job changes.  
3. Evaluate *auditing needs*: need traceable “role → permission” mappings for compliance.  
4. Consider *scalability*: hundreds or thousands of users but a modest number of roles is ideal.  
5. Check *regulatory alignment*: data classification can be tied to role definitions (e.g., “Sensitive Data Access” role).  

If all these conditions align, RBAC is the right choice; otherwise, a hybrid or attribute‑based model may be better.

**4️⃣ Common traps to avoid**  
- Over‑generalizing: don’t assume RBAC works for highly dynamic user attributes.  
- Ignoring “role explosion”: too many granular roles defeat simplicity.  
- Forgetting that RBAC is *not* a silver bullet for all compliance requirements—additional controls may still be needed.

**5️⃣ Sanity check & verbalize**  
Re‑state the decision criteria: “RBAC fits when user groups are stable, permissions can be bundled into a few roles, and auditability of those bundles is critical.” If this matches the enterprise’s reality, you’ve found the right moment to use RBAC.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
