---
qid: ing_3885323adf__faang__local
question: 'Explain: Role-based access control — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 519
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:55:39-05:00'
sources: []
---

## Clarify  
We need to explain how **Cerbos** can be used to build a role‑based authorization model for an enterprise. Key assumptions:  
* Users, groups and roles are already defined in the directory.  
* The system must support fine‑grained object permissions (CRUD on resources).  
* Auditing and policy versioning are required.

## Approach  
1. **Define entities** – users, roles, resources, actions.  
2. **Model relationships** – a user *has* roles; a role *owns* policies.  
3. **Create Cerbos policy files** in the domain‑specific language (DSL).  
4. **Implement the SDK** to evaluate permissions at runtime.  
5. **Integrate audit hooks** for compliance.

## Depth  
Cerbos uses a **policy‑as‑code** DSL:  

```yaml
resource:
  type: "document"
  attributes:
    ownerId: string
    classification: enum("public","internal","confidential")

permission:
  - name: "read"
    conditions:
      - attr_eq: [ownerId, user.id]
      - or:
          - attr_eq: [classification, "public"]
          - and:
              - attr_in: [role.name, ["viewer","editor"]]
```

The SDK (e.g., Go/JavaScript) calls `cerbos.Evaluate(ctx, request)` where `request` contains the user context, resource ID, action, and attributes. Cerbos returns an allow/deny decision plus any relevant constraints. Auditing is handled by subscribing to policy events.

**Complexity:** Evaluation is *O(1)* per request after caching; policy compilation is *O(n)* where *n* is policy size.  

## Edge Cases  
* **Role hierarchy cycles** – Cerbos rejects circular dependencies at compile time.  
* **Missing attributes** – evaluation fails with a clear error, prompting data completeness checks.  
* **Concurrent policy updates** – use versioning; rollback on validation errors.

## Optimize & Communicate  
To improve performance: cache compiled policies per tenant and pre‑fetch user roles. For clarity in interviews, I’d narrate the flow from user login → role fetch → Cerbos evaluation → action grant/deny, highlighting how the DSL keeps business rules human‑readable while the engine guarantees consistency. This demonstrates structured thinking, depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
