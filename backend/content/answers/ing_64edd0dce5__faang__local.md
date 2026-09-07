---
qid: ing_64edd0dce5__faang__local
question: 'Explain: Read-only enforcement & row-level security - defence in depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 461
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:57-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how *read‑only enforcement* and *row‑level security (RLS)* combine for “defence in depth.”  
Assumptions:  
- A relational DB that supports both ACLs and RLS.  
- Users may have varying privileges, some only read, others update.  
- Threat model includes privilege escalation and data exfiltration.

**2️⃣ Approach**  
1. Define a *least‑privilege* baseline: grant users only the READ role on tables.  
2. Enable RLS policies that filter rows per user (e.g., `WHERE tenant_id = current_setting('app.current_tenant')`).  
3. Combine both so that even if a user gains write privileges, the policy still blocks unauthorized rows.

**3️⃣ Depth**  
- **Read‑only enforcement** is an ACL layer—database objects deny INSERT/UPDATE/DELETE to users without WRITE rights. Complexity: O(1) per operation.  
- **RLS** is a row filter evaluated at query time; it adds a predicate cost but stays within the same execution plan (often only a few extra index lookups).  
- *Defence in depth* arises because two independent mechanisms must be bypassed: first, the ACL denies any write attempt; second, even if an attacker somehow writes, RLS would still restrict visibility of rows they shouldn’t see.

**4️⃣ Edge Cases**  
- `SELECT ... FOR UPDATE` on read‑only users → denied by ACL.  
- Privilege escalation via stored procedures that run as superuser bypasses ACL but still hit RLS.  
- Policies must be tested for “NULL” or “unknown” tenant values, which could inadvertently expose data.

**5️⃣ Optimize & Communicate**  
- Use *policy caching* and *index‑only scans* to keep RLS fast.  
- Document the policy hierarchy in architecture diagrams so reviewers see both layers.  
- Narrate: “We first lock down write access; then we sandbox read access per tenant, ensuring that even a compromised session cannot leak data.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
