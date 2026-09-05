---
qid: ing_37c0ba0197__eli5__local
question: 'Explain: Coffman Conditions — What is a Deadlock?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 196
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:04:19-05:00'
sources: []
---

Imagine four friends (processes) each holding one key to a room that contains the only tool needed by the next friend. Friend A has the key for room B, B holds the key for C, C holds the key for D, and D holds the key for A. None of them can get the tool they need because everyone is waiting on someone else’s key. That stuck situation is a **deadlock**.

In computing, a deadlock happens when several tasks are each waiting for resources that another task in the same group holds. Because every task is blocked and no one can finish or release its resource, all of them stay stuck forever—just like the friends who can’t leave their rooms. The Coffman conditions describe the four simple rules that, if all true at once, guarantee a deadlock will occur.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
