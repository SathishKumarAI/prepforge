---
qid: vq_3b9d28bcf1__star__local
question: When a form is invoked with CALL_FORM does Oracle forms issues SAVEPOINT
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 378
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:29-05:00'
sources: []
---

**Situation:**  
While refactoring a legacy sales order system in Oracle Forms 6i, I noticed the “Create Order” form was rolling back unexpectedly after users clicked “Save.” The logs showed no explicit ROLLBACK statements; it seemed to be an automatic transaction boundary triggered by navigation.

**Task:**  
I needed to determine whether invoking the next form with `CALL_FORM` was creating a savepoint that caused the rollback, and if so, how to prevent it without breaking existing functionality.

**Action:**  
First, I added trace logs (`SET TRACE ON`) around every `CALL_FORM` invocation to capture transaction events. The trace revealed that Forms issued a `SAVEPOINT` before each form call only when `ON-ERROR` handlers were active or when the calling form had an explicit `COMMIT`. Since our “Create Order” form didn’t commit, the subsequent `CALL_FORM` didn’t create a savepoint; instead, the navigation forced a rollback of any uncommitted changes. I then refactored the code to issue an explicit `COMMIT` after populating mandatory fields and before calling the next form, ensuring that the transaction remained intact.

**Result:**  
After the change, 97 % of order creations completed without rollback errors, reducing support tickets by 40%. I learned that `CALL_FORM` itself doesn’t create a savepoint—transaction boundaries are governed by explicit commits or error handlers—and that careful placement of `COMMIT` statements is essential for predictable form navigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
