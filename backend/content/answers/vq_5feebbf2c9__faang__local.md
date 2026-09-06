---
qid: vq_5feebbf2c9__faang__local
question: Can we use a RESTRICTED packaged procedure in WHEN_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 411
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:12:45-05:00'
sources: []
---

**Clarify**  
You’re asking whether an Oracle `WHENEVER TEXT_ITEM` trigger can call a *RESTRICTED* packaged procedure (i.e., a procedure that requires the caller to have `EXECUTE` privilege on the package). The key assumption: the trigger runs under the **definer’s rights** of the object owning it. We need to confirm the package’s visibility and privileges for that owner.

**Approach**  
1. Verify that the package is in the same schema as the table, or that the owner has granted `EXECUTE` on it.  
2. Ensure the trigger body references the procedure without needing dynamic SQL (which would bypass privilege checks).  
3. Remember that triggers are executed with definer’s rights, so any privileges required by the packaged procedure must be granted to the definer.

**Depth**  
- If the package is in the same schema or `EXECUTE` has been granted, the trigger can call it directly; no special handling needed.  
- If not, Oracle will raise `ORA‑00942: table or view does not exist` (or a privilege error).  
- Using dynamic SQL (`EXECUTE IMMEDIATE`) would circumvent the check but is discouraged in triggers because of performance and security concerns.

**Edge Cases**  
- The procedure uses `PRAGMA AUTONOMOUS_TRANSACTION`; triggers should avoid that.  
- If the package contains functions with side‑effects, re‑entrancy could cause issues.  
- Test with a simple trigger calling a restricted procedure to confirm privilege propagation.

**Optimize & Communicate**  
Explain to the interviewer that the solution is straightforward: grant `EXECUTE` on the package to the trigger’s owner and call it directly. Highlight that triggers inherit definer’s rights, so no special tricks are required beyond proper privileges. This demonstrates clear understanding of Oracle security model and trigger execution context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
