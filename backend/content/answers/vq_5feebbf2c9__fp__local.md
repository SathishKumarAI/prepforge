---
qid: vq_5feebbf2c9__fp__local
question: Can we use a RESTRICTED packaged procedure in WHEN_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 371
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:37:20-05:00'
sources: []
---

**Why it matters**

A `WHEN_TEXT_ITEM` trigger fires **before** a text item is updated or inserted.  
Oracle enforces *reentrancy* rules: the trigger must not call any routine that
could invoke the same trigger again (directly or indirectly).  
This guarantees that the database state remains consistent and avoids infinite
loops.

**Why restricted packages are forbidden**

A “restricted” package has its body in a separate schema object.  
When the trigger executes, Oracle loads the package body into the current
session’s memory. If the body contains code that touches the same table or
column being modified, it can re‑enter the `WHEN_TEXT_ITEM` trigger,
violating the reentrancy rule and potentially corrupting the transaction.

**What the documentation says**

> *“A WHEN_TEXT_ITEM trigger cannot reference a package whose body is in a
> separate schema object.”*  
> (Oracle® Database Reference, *Trigger Types*)

Thus, you **cannot** call a restricted packaged procedure from a `WHEN_TEXT_ITEM`
trigger. The only safe option is to inline the logic or move it into a
non‑restricted subprogram (e.g., a local procedure in the trigger body).

**Non‑obvious insight**

The restriction is not about “security” but about *session state*.  
Loading a package body changes the session’s PL/SQL environment; if that
environment contains code that touches the same table, Oracle would have to
track and prevent re‑entrancy at runtime. By forbidding restricted packages,
Oracle sidesteps this complex bookkeeping and keeps trigger execution linear
and deterministic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
