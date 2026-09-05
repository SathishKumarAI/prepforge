---
qid: ing_dba83db03a__eli5__local
question: 'Explain: Computation — Asynchronous computing at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 215
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:21:48-05:00'
sources: []
---

Imagine Meta’s data centers as a giant kitchen where chefs (computers) make many dishes (tasks). In a normal kitchen, every chef waits for the stove to finish before starting the next dish – that’s synchronous cooking. Asynchronous computing is like letting each chef pick up a new ingredient or start a side dish while another chef finishes on the stove. The kitchen runs faster because nothing sits idle.

At Meta, they built an “async kitchen” where machines can pause and resume tasks without waiting for every other machine to finish. They use lightweight “promises” (like notes that say, “I’ll get this result later”) so a task can hand off work, jump to another job, and return when the promised data is ready. The key learning? When you let machines share the wait‑time, overall throughput jumps, but you must carefully track who owns which piece of data—otherwise dishes (results) can get mixed up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
