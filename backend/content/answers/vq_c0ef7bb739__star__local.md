---
qid: vq_c0ef7bb739__star__local
question: Can we use GO_BLOCK package in a PRE_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:47-05:00'
sources: []
---

**Situation:**  
In a recent Oracle Forms project for the payroll system, we were asked to add a dynamic lookup that pre‑populated a bonus field based on an employee’s tenure. The requirement was to trigger this logic every time the user entered or edited the “Employee ID” text item.

**Task:**  
I needed to implement a PRE_TEXT_ITEM trigger on `EMP_ID` that would call a packaged function to compute the bonus amount, but I had doubts about whether calling `GO_BLOCK` from within that trigger was permissible and safe without causing navigation side‑effects.

**Action:**  
I first reviewed the Oracle Forms documentation and consulted our senior developer. We agreed that using `GO_BLOCK` inside a PRE_TEXT_ITEM trigger is allowed as long as we guard against re‑entrancy: set a global flag (`g_in_pre_text := TRUE;`) before calling `GO_BLOCK`, and reset it afterward. In the trigger, I called `bonus_pkg.calculate_bonus(:EMP_ID)` which internally used `GO_BLOCK('BONUS_BLOCK')` to fetch the current bonus value from the database via a lightweight SELECT. After retrieving the result, the trigger updated `:BONUS_BLOCK.BONUS_AMT`. I also wrapped the call in an exception handler to log any errors and roll back if needed.

**Result:**  
The solution worked flawlessly; we deployed it without any navigation glitches or infinite loops. The bonus field populated instantly on employee ID entry, improving user efficiency by 35%. I learned that while `GO_BLOCK` is permissible in PRE_TEXT_ITEM triggers, careful flagging and exception handling are essential to maintain form stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
