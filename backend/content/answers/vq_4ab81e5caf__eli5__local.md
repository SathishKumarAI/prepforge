---
qid: vq_4ab81e5caf__eli5__local
question: What does WITH CHECK do?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 217
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:36-05:00'
sources: []
---

Imagine you’re building a toy train set and you have a rule that every track piece must connect to the next one with a “magnetic snap.” When you place a new piece, the snap automatically checks whether it can attach; if it’s the wrong size or shape, the piece won’t stick, and you get an error message.  

In databases, a **CHECK constraint** is that magnetic snap for data. It says, “When I add or change a row, make sure this rule holds true.” For example, `CHECK (age >= 0)` ensures no negative ages are stored. The database automatically tests the condition every time you insert or update; if it fails, the operation is rejected and you see an error.  

So, **WITH CHECK** means “enforce this rule right now” – the system will stop any data that breaks the constraint, just like a faulty track piece can’t snap into place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
