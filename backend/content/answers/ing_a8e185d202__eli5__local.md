---
qid: ing_a8e185d202__eli5__local
question: On a GPU you batch to amortise weight reads. What is the batching calculus
  on an SRAM-only machine, and how should that change how we price?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 248
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:05:43-05:00'
sources: []
---

Imagine your computer’s memory as a tiny library with only one shelf (the SRAM). Every time you want to read a book (a weight), the librarian has to walk from the front desk, fetch it, and bring it back—this takes time. If you ask for many books at once, the librarian can grab them all in one trip, saving a lot of walking.

On a GPU with large, fast shelves (SRAM plus off‑chip memory), you can still batch requests to keep the GPUs busy, but each trip is cheap because the shelves are big and close. On an SRAM‑only machine, every read costs more, so batching becomes even more valuable: you should request as many weights as fit on that single shelf before moving to another batch.

When pricing such a system, treat the cost of “walking” (memory access latency) as higher than for a GPU. Charge customers more when they issue many small, scattered reads, and reward them with lower rates when they bundle their requests into large batches—just like offering discounts for bulk book orders in a library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
