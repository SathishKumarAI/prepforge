---
qid: vq_686eb807ed__faang__local
question: Is it possible to use Transactional control statements in Database Triggers
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 473
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:14:12-05:00'
sources: []
---

**Clarify**  
The question asks whether a database trigger can contain *transaction‑control* statements such as `COMMIT`, `ROLLBACK`, or `SAVEPOINT`. In most RDBMS the answer is “no” – triggers run inside the context of the statement that fired them and cannot alter transaction boundaries. I’d confirm which DBMS (Oracle, SQL Server, PostgreSQL, MySQL) because some have vendor‑specific quirks.

**Approach**  
1. Identify the trigger’s execution mode (AFTER/BEFORE, row/statement).  
2. Review the documentation for that engine regarding allowed statements inside triggers.  
3. If a DBMS does allow it (rare), note restrictions (e.g., only `ROLLBACK` in PostgreSQL triggers).  

**Depth**  
- **Oracle**: Triggers cannot contain `COMMIT`/`ROLLBACK`; doing so raises ORA‑04091.  
- **SQL Server**: Similar restriction—transaction control is forbidden inside triggers, except that a trigger can start an explicit transaction with `BEGIN TRANSACTION`, but it must be balanced by the same trigger.  
- **PostgreSQL**: Triggers may issue `ROLLBACK` in *AFTER* triggers but only if they are written as functions; however, this aborts the entire outer transaction and is discouraged.  
- **MySQL**: Triggers cannot use `COMMIT`/`ROLLBACK`; attempting to do so results in a compilation error.  

Thus, while some engines allow limited rollback semantics, you cannot start or commit independent transactions inside a trigger; all work must remain within the original statement’s transaction.

**Edge Cases**  
- Nested triggers (triggered by another trigger) – still inherit the same transaction.  
- Stored procedures called from a trigger that perform commits – the commit applies to the outermost transaction, not the trigger itself.  

**Optimize & Communicate**  
Explain that if you need separate transactional boundaries, refactor logic into stored procedures or application code, and use explicit `SAVEPOINT`/`ROLLBACK TO SAVEPOINT` in the calling context instead of inside triggers. This keeps triggers deterministic and avoids side‑effects that break atomicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
