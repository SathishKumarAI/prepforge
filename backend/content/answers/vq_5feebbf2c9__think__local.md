---
qid: vq_5feebbf2c9__think__local
question: Can we use a RESTRICTED packaged procedure in WHEN_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 560
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:39:58-05:00'
sources: []
---

**1. Clarify the question and assumptions**  
   - *What is a “RESTRICTED” packaged procedure?* In Oracle PL/SQL it means the package body is marked `RESTRICTED`, preventing non‑owner users from calling its subprograms unless they have special privileges.  
   - *What is a WHEN_TEXT_ITEM trigger?* A form trigger that fires when a text item changes, typically in Oracle Forms or similar environments.  
   - *Assume we are in an Oracle environment where both concepts exist and the user has appropriate privileges to compile and run triggers.*

**2. Mental model / framework**  
   - **Privilege propagation:** Determine how privileges granted on a restricted package propagate through trigger execution.  
   - **Execution context:** Triggers execute in the owner’s schema unless specified otherwise; they inherit the invoker’s privileges for direct calls, but restricted packages are evaluated at compile time.

**3. Step‑by‑step reasoning**  
   1. Check if the trigger owner has *EXECUTE* privilege on the package body.  
   2. Verify that the user who runs the form (invoker) has no direct EXECUTE privilege because the package is restricted.  
   3. In Oracle, a restricted package can be called only by the owner or by users granted `SELECT ANY DICTIONARY` or `GRANT ANY PRIVILEGE`.  
   4. Since triggers run as the trigger’s owner, they can call the restricted procedure if the owner has EXECUTE privilege.  
   5. Therefore, a WHEN_TEXT_ITEM trigger **can** invoke a RESTRICTED packaged procedure, provided the trigger’s schema owns or has EXECUTE on it.

**4. Common traps to avoid**  
   - Assuming the invoker’s privileges matter; in triggers they do not unless dynamic SQL is used.  
   - Forgetting that `RESTRICTED` blocks *direct* calls by non‑owners, but allows owner‑level calls (including within triggers).  
   - Ignoring compile‑time checks: if the trigger references a restricted procedure without EXECUTE privilege, it will fail to compile.

**5. Sanity check & verbal explanation**  
   - Re‑examine Oracle docs on RESTRICTED packages and trigger execution context.  
   - Explain that the trigger runs under its owner’s schema; thus ownership grants allow calling the restricted procedure.  
   - Summarize: “Yes, a WHEN_TEXT_ITEM trigger can call a RESTRICTED packaged procedure as long as the trigger’s owner has EXECUTE privilege on it; the invoker’s privileges are irrelevant.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
