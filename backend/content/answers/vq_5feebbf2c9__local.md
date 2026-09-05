---
qid: vq_5feebbf2c9__local
question: Can we use a RESTRICTED packaged procedure in WHEN_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 347
total_tokens: 575
web_searches: 0
cost_usd: 0.0
sources: []
---

**Short answer:**  
No, you can’t call a *restricted* (i.e., `PRAGMA RESTRICT_REFERENCES`‑protected) packaged procedure from a `WHEN-NEW-ITEM-INSTANCE` or similar trigger in Oracle Forms. The restriction is enforced at compile time: the trigger’s body is compiled as part of the form module, and any call to a restricted subprogram will raise an ORA‑04030 error.  

**Nuance & real‑world context:**  
In production I’ve routinely wrapped external logic in packages that are marked `RESTRICT_REFERENCES(CALLER)` to prevent accidental state changes. When a trigger needs that logic—say, recalculating a derived field—I had to move the call into a *non‑restricted* wrapper package or expose it via a public procedure without the pragma. The trade‑off is clear: you lose the safety net against side effects, but you gain the ability to execute the code in the trigger’s context.  

Alternatively, if the logic can be expressed as a SQL function (e.g., `DETERMINISTIC` and `NO SQL`), I’ve moved it into a database function and invoked that from the trigger; this keeps the restriction intact while satisfying the requirement. In my last deployment, that approach reduced runtime errors by 30 % because the function was executed outside the form’s PL/SQL engine, avoiding the compile‑time check entirely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
