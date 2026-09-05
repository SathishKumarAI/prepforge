---
qid: vq_c0ef7bb739__fp__local
question: Can we use GO_BLOCK package in a PRE_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 739
total_tokens: 912
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:54:35-05:00'
sources: []
---

**No – you can’t safely call `GO_BLOCK` from a **Pre‑Text‑Item** trigger.**

The Pre‑Text‑Item event fires *after* Oracle Forms has already decided which block and record the cursor is on, but *before* it displays the new item’s value. At that moment the form is in the middle of its “focus” phase: it has pushed the previous state onto an internal stack and is about to push the current item onto that stack.

`GO_BLOCK` immediately changes the active block (and record), which rewrites that stack, cancels the current focus transition, and fires a whole new sequence of triggers (`WHEN‑NEW-RECORD-INSTANCE`, `WHEN‑NEW-BLOCK-INSTANCE`, etc.). If you issue `GO_BLOCK` inside Pre‑Text‑Item, Oracle Forms will abort the original trigger chain and raise an error (“You cannot change blocks during this event”). The form’s internal state becomes inconsistent because it expects the same block to be active when the Pre‑Text‑Item finishes.

**Underlying principle:**  
Triggers are linear; navigation commands alter that linearity. `GO_BLOCK` is a *state‑changing* procedure, and only triggers that run before any state change (e.g., `WHEN-NEW-FORM-INSTANCE`, `WHEN-BUTTON-PRESSED`) may safely invoke it. The Pre‑Text‑Item trigger runs after the state has already been set, so inserting a block change violates the event sequence.

**Non‑obvious insight:**  
Even if you wrap the call in an exception handler and ignore the error, the form will still skip the rest of the Pre‑Text‑Item logic and may leave the UI in a stale state. The safest strategy is to move any navigation logic to a **When‑Button‑Pressed** or **When‑New-Record-Instance** trigger instead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
