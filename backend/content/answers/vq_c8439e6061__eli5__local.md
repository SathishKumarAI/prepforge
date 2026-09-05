---
qid: vq_c8439e6061__eli5__local
question: What exactly is wrong with a recursive function that is not tail-recursive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 208
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:28-05:00'
sources: []
---

Imagine you’re climbing stairs by taking one step at a time, but every time you take a step you keep a note of where you were before so you can come back later. A non‑tail‑recursive function does the same thing: it calls itself to solve a smaller part and then waits for that call to finish before doing its own work (like adding a number or printing something).  

Because it must remember each “previous step,” every call adds a new frame to the stack—just like writing another note on a list. If you climb too many stairs, your list grows until you run out of space and crash. A tail‑recursive function, by contrast, would finish its own work *before* calling itself (like taking a step and immediately stepping again without keeping a note), so the stack never expands. Thus non‑tail recursion can exhaust memory on deep inputs, while tail recursion is safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
