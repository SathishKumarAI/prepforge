---
qid: ing_a37e8049b0__fp__local
question: 'Explain: Hierarchical RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 447
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:53:46-05:00'
sources: []
---

**Hierarchical RBAC – the “role‑as‑object” view**

At its core, authorization is a *constraint* problem: given an action *a*, a subject *s*, and an object *o*, we must decide whether to allow *s* to perform *a* on *o*.  In enterprises the constraint space explodes because permissions are usually bundled into roles that reflect business units, functions, or clearance levels.  

**Why hierarchy?**  
If every role were flat, a manager would need a distinct “manager‑of‑team‑A” role for each team. That yields combinatorial blow‑up and makes policy maintenance brittle.  Hierarchy lets us *inherit* permissions: a senior role is automatically granted all child roles’ rights plus its own.  Formally, we define a partial order ⪯ on roles; if r₁⪰r₂ then ∀p∈Perm(r₂), p∈Perm(r₁).  This satisfies the *monotonicity* principle: adding constraints (moving up the hierarchy) never reduces a subject’s power, ensuring safety.

**Modeling with Cerbos**  
Cermos treats roles as *policy objects* in a graph.  An authorization request is resolved by evaluating the policy that matches the requested action and object, then traversing upward along role edges to accumulate permissions.  Because Cerbos policies are declarative JSON, you can encode complex business rules (e.g., “only Finance managers may approve budgets > $10k”) without embedding them in code.

**Non‑obvious insight**  
Many think hierarchy only simplifies permission assignment; the real power lies in *policy reuse*.  A single policy rule attached to a high‑level role automatically applies to all subordinates, even those added later.  This means you can evolve your org chart—adding new departments or roles—without touching any code or rewriting thousands of rules.  The hierarchy becomes a *semantic anchor* for future growth rather than just an organizational shortcut.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
