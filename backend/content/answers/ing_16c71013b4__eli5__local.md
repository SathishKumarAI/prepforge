---
qid: ing_16c71013b4__eli5__local
question: 'Explain: Shared Memory — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 203
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:11:43-05:00'
sources: []
---

Think of a kitchen where two chefs (processes) want to share the same cutting board.  
In Linux, **shared memory** lets those chefs put their ingredients on that single board instead of each having their own separate table.  

*Shared memory* is a region of RAM that both processes can map into their own address space. When one chef puts a tomato on the board (writes to the shared area), the other sees it instantly, because they’re looking at the same spot. The kitchen’s **inter‑process communication** (IPC) simply uses this common table so messages travel fast—no copying back and forth.

You still need a small “lock” (a mutex or semaphore) so chefs don’t bump into each other while chopping. Once that lock is in place, both can read and write concurrently, making the kitchen run smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
