---
qid: vq_4ab81e5caf__fp__local
question: What does WITH CHECK do?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 406
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:34:11-05:00'
sources: []
---

### WITH CHECK – a safety net for integrity

When you create a *foreign key* or a *check constraint*, the database engine must decide whether **existing rows** already satisfy the rule.  
`WITH CHECK` forces that verification; `WITH NOCHECK` skips it and marks the constraint as *disabled* until the next explicit check.

#### Why this matters
1. **Consistency**: Without verifying, you might allow a dangling reference or an invalid value to persist unnoticed.
2. **Optimization**: A disabled constraint can be ignored by query planners, potentially speeding up bulk loads but at the cost of integrity.
3. **Rollback safety**: If you load data that violates a rule and then enable it with `WITH CHECK`, the engine will immediately surface the offending rows.

#### Deeper principle
This is an instance of *lazy vs eager evaluation* in constraint systems.  
- **Eager (`WITH CHECK`)** guarantees *soundness* (no invalid state) at the cost of immediate overhead.
- **Lazy (`WITH NOCHECK`)** trades soundness for performance, relying on later validation.

#### Non‑obvious insight
`WITH CHECK` **does not automatically re‑validate all rows** when you toggle a constraint. It only checks the *currently present* data. If you insert new rows after disabling a check, those rows are still subject to the constraint once it’s re‑enabled. Therefore, toggling constraints is a one‑off operation: you must run `ALTER TABLE … WITH CHECK` again if you want a fresh audit of all data.

In short, `WITH CHECK` is the database’s way of saying “before I trust this rule, let me make sure everything already in the table respects it.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
