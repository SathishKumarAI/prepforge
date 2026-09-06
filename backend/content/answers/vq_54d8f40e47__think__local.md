---
qid: vq_54d8f40e47__think__local
question: What is a Trigger?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 391
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:36:29-05:00'
sources: []
---

**1. Clarify the context and assumptions**  
   - Ask whether “Trigger” refers to database triggers (DDL/DML), ETL job triggers, or messaging‑queue triggers.  
   - Assume a typical data‑engineering interview: likely a database trigger that reacts to changes in a table.

**2. Adopt a mental model**  
   - Treat a trigger as an *event‑driven* component: it listens for a specific event (INSERT/UPDATE/DELETE) and executes predefined logic automatically, without explicit calls from application code.

**3. Step‑by‑step reasoning**  
   1. Define what “trigger” means in SQL terms.  
   2. Explain the syntax components (`CREATE TRIGGER … BEFORE/AFTER … ON table … FOR EACH ROW`).  
   3. Discuss common use cases: audit logging, enforcing business rules, maintaining derived columns.  
   4. Mention pros (encapsulation of logic) and cons (hidden side‑effects, harder to debug).

**4. Common traps to avoid**  
   - Mixing up *triggers* with *stored procedures*.  
   - Forgetting that triggers run per row unless specified `FOR EACH STATEMENT`.  
   - Overlooking performance impact on bulk operations.

**5. Sanity‑check & verbalize**  
   - Rephrase the answer back to yourself: “A trigger is a piece of code that automatically runs in response to data changes, keeping business logic close to the data.”  
   - Confirm you’ve covered definition, syntax, examples, pros/cons, and potential pitfalls. This ensures completeness before speaking or writing the final response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
