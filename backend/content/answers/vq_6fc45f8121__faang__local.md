---
qid: vq_6fc45f8121__faang__local
question: What are Role Based Access Control permissions ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 423
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:16:00-05:00'
sources: []
---

**Clarify**  
*RBAC (Role‑Based Access Control) is a policy model that grants users permissions through roles rather than individually.*  
Assumptions I’d confirm:  
1. We’re talking about fine‑grained data‑access (tables, views, schemas).  
2. Permissions are static per role and inherited hierarchically.  

**Approach**  
1. Define *roles* that map to job functions (e.g., Analyst, Engineer, Admin).  
2. Assign *permissions* (read, write, modify, delete) to each role.  
3. Bind users to one or more roles.  
4. Enforce via the data platform’s policy engine (e.g., Snowflake, BigQuery IAM).

**Depth**  
- **Roles** are immutable groups; adding a permission to a role automatically propagates to all bound users—great for scaling.  
- Permissions can be *granular* (column‑level) or *coarse* (schema‑wide).  
- Hierarchical roles allow inheritance: `Admin > Engineer > Analyst`.  
- Auditing is straightforward: every access trace shows the effective role, simplifying compliance.

**Edge Cases**  
- **Privilege creep** if a user receives multiple high‑privilege roles.  
- **Role explosion** in very granular systems; may need role templates.  
- **Dynamic data sets** (e.g., time‑based partitions) require policy refresh logic.

**Optimize & Communicate**  
- Use *least privilege* by defaulting new roles to read‑only and promoting only when needed.  
- Periodically review role assignments via automated reports.  
- Document the RBAC model in a single source of truth (e.g., Confluence + Git).  

By structuring access around roles, we achieve maintainable, auditable, and scalable data governance—exactly what FAANG teams need for multi‑tenant analytics platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
