---
qid: ing_60f4a22185__eli5__local
question: 'Explain: Message Queue — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 194
total_tokens: 353
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:10:11-05:00'
sources: []
---

Think of two kitchen stations that need to pass recipes without bumping into each other.  
A **message queue** is like a shared recipe board: one station writes its recipe (a “message”) onto the board, and the other station reads it when ready. In Linux, programs running as separate processes play those stations. They don’t talk directly; instead they use system calls that put data into or pull data out of the queue. The operating system keeps the queue safe, ensuring each message stays in order and is only read once—just like a recipe that disappears after being copied. If one station is busy, its messages wait on the board until the other can take them, so both keep working smoothly without stepping on each other’s toes. This simple “board” mechanism lets processes cooperate reliably inside a single computer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
