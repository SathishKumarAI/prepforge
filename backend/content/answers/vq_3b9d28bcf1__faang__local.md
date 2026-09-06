---
qid: vq_3b9d28bcf1__faang__local
question: When a form is invoked with CALL_FORM does Oracle forms issues SAVEPOINT
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 483
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:25-05:00'
sources: []
---

**Clarify**

> *Question:* “When a form is invoked with `CALL_FORM`, does Oracle Forms automatically issue a `SAVEPOINT`?”  
> I’ll assume we’re talking about the built‑in `CALL_FORM` procedure in an Oracle Forms 6i/10g environment, and that the caller wants to know whether the target form’s state is preserved on entry so it can be restored later.

**Approach**

1. Review Oracle Forms documentation for `CALL_FORM`.  
2. Check the runtime behavior: does a transaction begin before the called form loads?  
3. Verify if any implicit `SAVEPOINT` or rollback occurs when returning.

**Depth**

- `CALL_FORM` is *not* a database operation; it merely pushes a new form onto the stack and executes its initialization blocks.  
- Oracle Forms opens a **new transaction only when data‑manipulation DML** is executed in the called form (e.g., INSERT/UPDATE).  
- No implicit `SAVEPOINT` is created at the moment of the call. The caller’s transaction remains active, and any changes made by the callee can be committed or rolled back together with the caller unless the callee explicitly issues a `COMMIT` or `ROLLBACK`.  
- If the called form performs a commit/rollback, it will affect the caller’s transaction context as well.

**Edge Cases**

| Scenario | Result |
|----------|--------|
| Caller calls `CALL_FORM` and callee does *no* DML | No transaction changes; no savepoint. |
| Callee executes `COMMIT` | Commits entire session, affecting caller. |
| Callee issues `ROLLBACK TO SAVEPOINT <name>` | Rolls back only within the callee’s scope; caller unaffected if separate transaction. |

**Optimize & Communicate**

Explain that developers should explicitly manage transactions using `SET_TRANSACTION`, `SAVEPOINT`, or `COMMIT`/`ROLLBACK` inside each form if isolation is needed. Highlight that relying on implicit behavior can lead to hard‑to‑debug data integrity issues.

> *Bottom line:* `CALL_FORM` does **not** issue a `SAVEPOINT`. Transaction control must be handled explicitly within the called form.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
