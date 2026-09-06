---
qid: vq_8d5ffcce47__faang__local
question: How do control which rollback segment I use ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 461
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:01-05:00'
sources: []
---

**Clarify**  
The question asks how a user can specify which *rollback segment* Oracle uses during a transaction.  
Assumptions: we’re working with an older Oracle RDBMS that still has manual rollback segments (pre‑12c). The user wants deterministic control rather than the optimizer’s choice.

**Approach**  
1. Understand the two ways to influence segment selection: *session‐level* and *statement‐level*.  
2. Explain how to set a default segment via `ALTER SESSION`.  
3. Show how to override per‑statement using the `USING` clause in DML.  
4. Mention that this applies only when manual segments are enabled (`UNDO_MANAGEMENT = MANUAL`).

**Depth**  
- **Session level**:  
  ```sql
  ALTER SESSION SET UNDO_TABLESPACE = us_tbs;
  ```  
  This sets the default undo tablespace for all subsequent statements in the session.  
- **Statement level** (Oracle 11g+):  
  ```sql
  UPDATE employees
     SET salary = salary * 1.05
   USING 'us_seg' AS UNDO_SEGMENT;
  ```  
  The `USING` clause forces that particular rollback segment for the statement, overriding the session default.  
- Note: if `UNDO_TABLESPACE` isn’t set, Oracle picks the lowest‑numbered active segment in the tablespace.

**Edge cases**  
- If no manual segments exist or all are inactive, Oracle falls back to automatic undo.  
- Setting a non‑existent segment causes an error.  
- In 12c+ with `UNDO_MANAGEMENT = AUTOMATIC`, these controls are ignored; you must manage `UNDO_TABLESPACE` only.

**Optimize & communicate**  
To keep transactions predictable, set the session default once and use the `USING` clause sparingly for critical statements that need a specific segment (e.g., large bulk updates). Always monitor segment usage with `V$ROLLSTAT`. This clear hierarchy of control aligns with Oracle’s undo management model and satisfies both performance and recoverability requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
