---
qid: vq_ad533ad1e3__fp__local
question: 'Which set of commands must be added to handle the non-predefined error:
  ORA-02292?'
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 700
total_tokens: 881
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:51:09-05:00'
sources: []
---

**Handling ORA‑02292 in PL/SQL**

The error *ORA‑02292* is raised when a `DELETE` or `UPDATE` on a parent row would leave orphaned child rows, i.e. the foreign key still points to the parent value.  
From an information‑theoretic standpoint this violation preserves referential integrity: every child must be associated with an existing parent. The only ways to satisfy this constraint are  

1. **Prevent the operation** – raise a controlled exception and inform the caller; or  
2. **Transform the data** – delete (or null) the dependent rows automatically.

In PL/SQL we implement both paths by adding a named exception and, if desired, an `ON DELETE` clause.

```sql
/* 1. DDL to make cascading deletion optional */
ALTER TABLE child
ADD CONSTRAINT fk_child_parent
   FOREIGN KEY (parent_id)
   REFERENCES parent(id)
   ON DELETE CASCADE;          -- removes or nulls dependents

/* 2. PL/SQL block with explicit error handling */
DECLARE
    e_fk_violation EXCEPTION;
    PRAGMA EXCEPTION_INIT(e_fk_violation, -2292);   -- maps ORA‑02292 to a name
BEGIN
    /* business logic that may delete parents */
    DELETE FROM parent WHERE id = :p_id;

EXCEPTION
    WHEN e_fk_violation THEN
        DBMS_OUTPUT.PUT_LINE(
            'Delete aborted: child rows still reference this parent.');
        RAISE;   -- propagate if you want to abort the transaction
END;
```

**Non‑obvious insight:**  
The `ON DELETE CASCADE` clause is *not* a fix for ORA‑02292; it merely changes the semantics of the foreign key. If your application logic requires that parent deletions be rejected when children exist, you must keep the constraint *without* cascading and rely on explicit exception handling as shown above. This separation keeps the database schema declarative (enforcing integrity) while giving the application fine‑grained control over error reporting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
