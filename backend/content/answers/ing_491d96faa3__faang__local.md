---
qid: ing_491d96faa3__faang__local
question: 'Explain: Core RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 521
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:34:06-05:00'
sources: []
---

**Clarify**

You’re asking how a core Role‑Based Access Control (RBAC) model can be built for an enterprise‑grade authorization system like Cerbos.  
Assumptions I’d confirm:  

* Users belong to one or more *roles*.  
* Permissions are tied to *actions* on *resources* (e.g., “read” on “Customer”).  
* The system must support fine‑grained policies, auditability, and dynamic role assignment.

**Approach**

1. **Model entities** – `User`, `Role`, `Permission`, `Resource`.  
2. **Define relationships** – many‑to‑many between Users–Roles and Roles–Permissions.  
3. **Policy engine** – evaluate a request against the user’s active roles and their permissions.  
4. **Admin API** – CRUD for roles, assign/unassign users, grant/revoke permissions.

**Depth**

*Schema* (simplified):  

```sql
Users(id PK)
Roles(id PK, name UNIQUE)
Permissions(id PK, action, resource_type)
UserRoles(user_id FK, role_id FK)  -- many‑to‑many
RolePerms(role_id FK, perm_id FK)

```

When a request arrives:  
1. Fetch user’s roles (O(1) with indexed join).  
2. For each role, check if the required permission exists (set lookup).  
3. Return `ALLOW` or `DENY`.  

Complexity: O(r + p) per request, where *r* is number of roles and *p* permissions for those roles—acceptable for typical workloads.  

**Edge Cases**

* Role hierarchy (inheritance): add a `parent_role_id` field; use recursive CTEs or pre‑computed closure table.  
* Conditional permissions (e.g., only own data): embed predicates in the permission record or evaluate via policy scripts.  
* Auditing: log every decision with user, role set, and evaluated permission.

**Optimize & Communicate**

- Cache a user’s effective permission set to avoid repeated joins; invalidate on role changes.  
- Use a distributed cache (Redis) for high‑throughput environments.  
- Expose an introspection endpoint so admins can see why a decision was made—improves trust and debugging.

This structure gives a clear, scalable RBAC foundation while leaving room for policy extensions typical in enterprise settings like Cerbos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
