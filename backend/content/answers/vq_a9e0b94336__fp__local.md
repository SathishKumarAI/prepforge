---
qid: vq_a9e0b94336__fp__local
question: WHAT ARE SQL TRIGGERS, AND WHEN SHOULD THEY BE USED?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 478
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:50:29-05:00'
sources: []
---

**What are SQL triggers?**  
A trigger is a *stored routine* that the database engine automatically executes in response to an event (INSERT, UPDATE, DELETE) on a table or view. It lives inside the data‑definition layer, not in application code, and runs *before*, *after*, or *instead of* the event.

**Why they exist – the fundamental problem**  
Databases must enforce constraints that cannot be expressed declaratively (e.g., audit logs, cascading updates to derived tables, complex business rules). The engine needs a mechanism that:

1. **Guarantees atomicity** – runs as part of the same transaction that fired it.  
2. **Ensures isolation** – sees a consistent snapshot of the rows being modified.  
3. **Avoids application drift** – keeps logic in one place, preventing duplication across services.

These properties arise from *transaction‑algebra* (ACID). A trigger is essentially a tiny program embedded in that algebraic fabric.

**When to use them**

| Situation | Trigger type | Reason |
|-----------|--------------|--------|
| Enforce audit trails | AFTER INSERT/UPDATE/DELETE | Captures old and new rows without client code. |
| Maintain derived data (e.g., materialized views) | BEFORE UPDATE/INSERT | Keeps denormalized tables in sync atomically. |
| Prevent orphaned references | BEFORE DELETE | Cancels delete if dependent rows exist, avoiding foreign‑key violations when cascading is undesirable. |
| Enforce complex business rules that involve multiple columns or tables | BEFORE INSERT/UPDATE | Guarantees rule evaluation before data persistence. |

**Non‑obvious insight**  
Triggers *do not* replace foreign keys; they complement them. A trigger can enforce *conditional* referential integrity (e.g., “if status = ‘active’, link must exist”), which a static FK cannot express. This conditionality is often overlooked, leading developers to over‑use triggers where a simple check constraint would suffice.

In short, use triggers when you need **transactional, centralized logic** that *must* execute automatically and *cannot* be expressed declaratively. Otherwise, prefer constraints or application code for clarity and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
