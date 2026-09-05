---
qid: vq_3b9d28bcf1__fp__local
question: When a form is invoked with CALL_FORM does Oracle forms issues SAVEPOINT
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 356
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:32-05:00'
sources: []
---

When **CALL_FORM** loads a child form, the parent form’s transaction state must stay consistent until the child is closed or committed.  
Oracle Forms therefore creates an implicit *savepoint* before executing `CALL_FORM`.  

**Why it must work this way**

1. **Atomicity across forms** – A child form may modify data that belongs to the same database session. If the child commits, the parent’s pending changes should not be lost; if it rolls back, the parent’s state must remain unchanged.
2. **Rollback isolation** – The implicit savepoint guarantees that a rollback in the child (e.g., user presses *Cancel*) does not undo the parent’s uncommitted work.  
3. **Consistency of `CURRENT_TRANSACTION`** – Forms tracks the transaction ID for each session. By setting a savepoint, it can restore this ID after the child completes.

**Deeper principle**

This is an application‑level manifestation of *transaction nesting* in relational databases: each form represents a logical sub‑transaction. The savepoint acts as a boundary that preserves the outer transaction’s integrity while allowing inner work to commit or roll back independently.

**Non‑obvious insight**

Many developers think `CALL_FORM` simply “opens” a new screen; they overlook that it implicitly creates a *savepoint* **every time**—even for read‑only child forms. Thus, any DML in the child is automatically isolated from the parent unless explicitly committed or rolled back, which explains why changes made in a read‑only form never affect the database until you call `COMMIT`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
