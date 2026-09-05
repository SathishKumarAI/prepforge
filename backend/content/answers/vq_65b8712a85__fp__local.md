---
qid: vq_65b8712a85__fp__local
question: What is CHECK OPTION for a view ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 439
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:38:22-05:00'
sources: []
---

**CHECK OPTION for a view**

A view is just a virtual table defined by a SELECT statement.  
When you use the view as if it were a real table (INSERT/UPDATE), the database must decide whether the new rows satisfy the *view’s* definition.  
The CHECK OPTION is the mechanism that enforces this.

### Why it must exist

1. **Preservation of abstraction** – A view hides the underlying tables; without a check, users could insert rows that violate the intended semantics (e.g., adding a “current” order to an *archive* view).
2. **Consistency with constraints** – It behaves like a *generated constraint*: every modification through the view is checked against the SELECT predicate, guaranteeing that the view’s invariant holds.
3. **Declarative integrity** – The database can enforce this at compile‑time, avoiding runtime errors and ensuring referential integrity for derived data.

### How it works

When `CREATE VIEW v AS SELECT … WHERE cond` includes `WITH CHECK OPTION`, every INSERT/UPDATE via `v` is rewritten as:

```sql
INSERT INTO underlying_table (…) VALUES (…)
WHERE cond;   -- enforced by the view’s predicate
```

If any new row fails `cond`, the operation aborts.  
Note that deletes are unaffected because they don’t create new rows.

### Non‑obvious insight

The CHECK OPTION is *not* a general constraint on the underlying tables—it only applies to modifications **through** the view. Thus, if data is inserted directly into the base table bypassing the view, the condition can be violated, and the view becomes “inconsistent” with its own definition. This subtlety explains why developers sometimes see seemingly valid rows disappear from a view after direct updates to base tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
