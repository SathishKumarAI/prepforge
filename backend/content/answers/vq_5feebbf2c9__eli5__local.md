---
qid: vq_5feebbf2c9__eli5__local
question: Can we use a RESTRICTED packaged procedure in WHEN_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 207
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:13:05-05:00'
sources: []
---

Think of a **WHEN‑TEXT‑ITEM** trigger like a security guard that watches the “text” door of a database room.  
A *restricted packaged procedure* is a special key that only certain doors (packages) can use; it’s hidden from anyone who doesn’t have permission.

If you ask the guard to hand you that restricted key while you’re standing at the text‑door, the guard will say “No, I can’t give you that key here.” The trigger runs in a *different context* than the package: it has no special privileges, so it cannot call a procedure that is marked **RESTRICTED**.

So, just as a guard can’t hand out a secret key at a public door, a WHEN‑TEXT‑ITEM trigger cannot invoke a restricted packaged procedure. The only way to use such a procedure is from code that runs in the package’s own privileged context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
