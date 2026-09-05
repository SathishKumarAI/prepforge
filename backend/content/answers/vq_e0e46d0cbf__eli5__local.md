---
qid: vq_e0e46d0cbf__eli5__local
question: Can we pass RECORD GROUP between FORMS ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 208
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:39-05:00'
sources: []
---

Think of a *record group* like a clipboard that holds a list of rows you’ve copied from one part of your application—maybe a few customer orders or product details. In Oracle Forms, each form can be a separate “room” where users work on different tasks.

Just as you can paste the contents of a clipboard into another document, you can pass a record group from one form to another by storing it in a *global* variable (a place all forms can see). When the first form finishes gathering data, it puts its record group into that global spot. The second form then reads that same global spot and builds its own list from it.

So yes: create a global record‑group variable, assign the group to it in Form A, and read it back in Form B—just like copying and pasting between documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
