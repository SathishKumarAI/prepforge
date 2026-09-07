---
qid: vq_c0ef7bb739__aws__local
question: Can we use GO_BLOCK package in a PRE_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 324
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:12:21-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I was asked by the UI team whether we could invoke the `GO_BLOCK` package inside a **PRE_TEXT_ITEM** trigger for a form that collects customer feedback. The goal was to automatically jump to a related block when a specific keyword entered in the text field.

**Action (Dive Deep & Bias for Action)**  
1. Reviewed Oracle Forms documentation – `PRE_TEXT_ITEM` fires *before* the item accepts input, so any navigation must be deferred until after validation.  
2. Created a lightweight `WHEN-VALIDATE-ITEM` trigger that calls `GO_BLOCK`.  
3. Added a condition to avoid recursion (`IF :SYSTEM.TRIGGER_NAME != 'PRE_TEXT_ITEM'`).  
4. Tested on 500 concurrent users (10 k feedback entries per day) – latency < 200 ms, no dead‑locks.

**Result (Deliver Results)**  
- Reduced average form load time by **12%** for the feedback module.  
- Eliminated a customer‑reported “stuck screen” bug, improving CSAT from 88 % to 94 %.  
- Code now follows Oracle best practices and is fully unit‑tested.

**Bar‑raiser notes** – I demonstrated ownership (identified root cause), deep dive into trigger semantics, quantified performance gains, and learned that navigation logic belongs in `WHEN-VALIDATE-ITEM`, not pre‑text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
