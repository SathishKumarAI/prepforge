---
qid: ing_c5803487e6__faang__local
question: 'Explain: RBAC (Role-based Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 699
total_tokens: 937
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:20:19-05:00'
sources: []
---

**Clarify**

You’re asked to design a permission system that uses **RBAC** – users get permissions through *roles*, not individually.  
Assumptions I’d confirm:  

- Scale (millions of users, thousands of roles).  
- Types of resources and operations (read/write/execute).  
- Dynamic changes: adding/removing roles or permissions.  
- Auditing & revocation requirements.

**Approach**

1. **Domain model** – `User`, `Role`, `Permission`, `Resource`.  
2. **Relationships** – many‑to‑many between Users–Roles, Roles–Permissions.  
3. **Data store** – relational (PostgreSQL) or NoSQL (Cassandra) for high write throughput; add a cache layer (Redis) for read‑heavy auth checks.  
4. **API surface** – CRUD for roles/permissions + assignment endpoints.  
5. **Security** – encrypt sensitive fields, enforce least privilege on the service itself.

**Depth**

- *Schema*:  

  ```sql
  CREATE TABLE users(id PK);
  CREATE TABLE roles(id PK, name UNIQUE);
  CREATE TABLE permissions(id PK, action, resource_type, condition_json);
  CREATE TABLE user_roles(user_id FK, role_id FK, PRIMARY KEY(user_id, role_id));
  CREATE TABLE role_permissions(role_id FK, perm_id FK, PRIMARY KEY(role_id, perm_id));
  ```

- *Authorization check*:  

  ```python
  def is_allowed(user_id, action, resource):
      perms = cache.get(f"user:{user_id}:perms")
      if not perms:
          perms = fetch_from_db(user_id)  # join user_roles → role_permissions
          cache.set(..., perms)
      return any(p.action==action and p.matches(resource) for p in perms)
  ```

- *Complexity*:  
  - Assignment ops: O(1).  
  - Check: O(k) where k = number of permissions for the user (typically <10).  

- *Trade‑offs*: Using a cache speeds up reads but requires invalidation on role/permission changes; consistency can be relaxed with eventual consistency if acceptable.

**Edge Cases**

- Circular role inheritance (if allowed) → detect via graph traversal.  
- Permission conflicts (deny overrides) → encode priority in the permission schema.  
- Large bulk updates → use batch jobs and background workers to rebuild caches.  
- Auditing: log every check; test that logs are immutable.

**Optimize & Communicate**

1. **Batching** – fetch all a user’s permissions in one query, cache per role to reduce joins.  
2. **Indexing** – composite indexes on `(user_id, role_id)` and `(role_id, perm_id)` for fast lookups.  
3. **Monitoring** – track cache hit rate; if it drops, consider pre‑warming or sharding.  

When explaining, I’d start with the high‑level RBAC idea, show how the schema maps to that, then walk through a request flow (assignment → check) while highlighting performance considerations and how we keep the system secure and auditable. This demonstrates clear structure, depth in implementation, awareness of edge cases, and an eye toward production‑grade optimizations—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
