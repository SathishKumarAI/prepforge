---
qid: vq_3b9d28bcf1__think__local
question: When a form is invoked with CALL_FORM does Oracle forms issues SAVEPOINT
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 514
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:25:43-05:00'
sources: []
---

**1. Clarify the question and assumptions**  
   - “When a form is invoked with `CALL_FORM`” refers to Oracle Forms 6i/10g where a main form can call another form.  
   - The question asks whether an implicit *savepoint* is created when the called form loads or when it starts executing.  
   - Assume a default transaction model (no explicit commit/rollback in the calling form) and that `CALL_FORM` uses the standard “form‑level” execution.

**2. Mental model / framework**  
   - Oracle Forms uses *transaction control* per database session.  
   - A *savepoint* is created when an operation that modifies data begins a transaction (e.g., an insert, update, delete).  
   - `CALL_FORM` itself does not modify data; it merely loads the form definition and initializes its items.

**3. Step‑by‑step reasoning**  
   1. When `CALL_FORM` is executed, Forms compiles/loads the target form.  
   2. No DML occurs at this point, so no transaction starts.  
   3. The called form may contain triggers that perform DML; only when those triggers fire does a transaction begin.  
   4. Oracle automatically creates a savepoint (usually `SYS$SAVEPOINT`) right before the first DML statement in that transaction.  
   5. Therefore, the act of invoking `CALL_FORM` itself **does not** issue a savepoint; it is issued later when data modification starts.

**4. Common traps to avoid**  
   - Confusing *form load* with *transaction start*.  
   - Assuming that every form call triggers a commit/rollback.  
   - Overlooking that `CALL_FORM` can be used in modal/non‑modal contexts but the transaction rules remain the same.

**5. Sanity check & verbal explanation**  
   - Verify by running a test: open a main form, add a button with `WHEN-BUTTON-PRESSED: CALL_FORM('child');`, and place a pre‑record trigger that does an insert. Observe that no commit occurs until the insert runs; only then is the savepoint created.  
   - Communicate this clearly: “`CALL_FORM` merely loads the form; Oracle Forms issues a savepoint only when the called form first executes DML.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
