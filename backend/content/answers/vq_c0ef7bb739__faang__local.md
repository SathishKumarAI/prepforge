---
qid: vq_c0ef7bb739__faang__local
question: Can we use GO_BLOCK package in a PRE_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 442
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:31:35-05:00'
sources: []
---

**Clarify**  
The question asks whether the `GO_BLOCK` package can be called from a **PRE‑TEXT‑ITEM** trigger in Oracle Forms.  
Assumptions:  
* The trigger is on a form item that fires *before* the item’s value changes.  
* `GO_BLOCK` is used to change the current block (e.g., `GO_BLOCK('EMP')`).  

**Approach**  
1. Review Oracle Forms documentation for trigger timing and restrictions.  
2. Test a minimal example: create a text item, add a PRE‑TEXT‑ITEM trigger that calls `GO_BLOCK`.  
3. Observe whether the form raises an exception or silently ignores the call.  

**Depth**  
Oracle Forms prohibits changing the current block in triggers that fire *before* data is committed to the database or before the control changes. The `PRE‑TEXT‑ITEM` trigger fires **before** the item’s value is stored, so it runs during the **pre‑validation** phase. According to the documentation, navigation routines such as `GO_BLOCK`, `GO_ITEM`, and `NEXT_RECORD` are disallowed in PRE‑ triggers because they interfere with the form’s internal validation sequence. When invoked, Forms raises the error *“This operation is not allowed in this context.”*  

Thus, **no** – you cannot call `GO_BLOCK` from a PRE‑TEXT‑ITEM trigger. Use a POST‑TEXT‑ITEM or WHEN‑VALIDATE‑RECORD trigger instead.

**Edge Cases**  
* If the trigger fires only after validation (`WHEN-VALIDATE-ITEM`) it will work.  
* Using `SET_ITEM_PROPERTY(..., DISPLAYED)` in a PRE‑TRIGGER can hide items but not change blocks.  

**Optimize & Communicate**  
Explain that the restriction preserves data integrity during pre‑validation. Recommend restructuring logic: perform block navigation in a post‑trigger or after user confirmation to avoid interfering with validation flow. This shows awareness of Oracle Forms internals and clean design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
