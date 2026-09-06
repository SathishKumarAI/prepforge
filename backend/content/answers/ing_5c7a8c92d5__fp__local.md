---
qid: ing_5c7a8c92d5__fp__local
question: 'Explain: Comparing RBAC and ABAC — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 563
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:20:47-05:00'
sources: []
---

**Why the classic RBAC “role‑as‑policy” breaks at scale**

An organization’s fundamental problem is *who may do what under which circumstances?*  
RBAC encodes this as a two‑step lookup: user → role(s) → permission set.  The policy space grows linearly with roles, but each user must be re‑assigned whenever business logic changes (e.g., a new regulation requires a different “Financial Analyst” scope).  This linearity hides a combinatorial explosion of **contextual constraints** that RBAC cannot express without proliferating roles.

**ABAC turns policy into a function**

Instead of pre‑defining static role buckets, ABAC treats *access* as the evaluation of a predicate over attributes:

```
allow(user, resource, action) ⇔  f(UA∪RA∪OA)
```

where UA = user attributes (department, clearance), RA = resource attributes (confidentiality level), OA = operational context (time, location).  
The function *f* is a logical expression or a learned model.  Because the predicate operates on a **continuous attribute space**, adding a new rule requires only adjusting the function—no new roles are created.

**Non‑obvious insight: ABAC’s policy is an optimization surface**

Think of each access decision as a point in a high‑dimensional space.  The boundary defined by *f* partitions this space into “allow” and “deny.”  Designing *f* is thus a convex‑optimization problem (e.g., logistic regression) that can be tuned for false positives/negatives, unlike RBAC’s discrete role assignment which has no notion of *partial trust*.  

**Cerbos: A pragmatic ABAC engine**

Cerbos implements this idea by letting enterprises define policy in JSON/YAML and evaluate it at runtime via a lightweight engine.  It exposes:

1. **Attribute schemas** – enforce consistency across services.  
2. **Policy as code** – versioned, auditable, and testable.  
3. **Contextual evaluation** – time‑based, IP‑based, or even machine‑learning‑derived features.

In practice, enterprises migrate from RBAC to ABAC by first modeling existing roles as attribute sets, then refactoring the policy into a single predicate that captures all current constraints.  The result is a *single source of truth* for authorization that scales linearly with attributes rather than roles, enabling dynamic compliance and faster feature rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
