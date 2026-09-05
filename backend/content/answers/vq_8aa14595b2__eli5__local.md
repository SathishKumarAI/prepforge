---
qid: vq_8aa14595b2__eli5__local
question: What are Left and Right in Scala? Explain Either/Left/Right Design Pattern
  in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 220
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:19:11-05:00'
sources: []
---

In Scala, **Either** is a container that can hold one of two values: a *Left* or a *Right*. Think of it like a mail‑box with two slots—only one slot can be used at a time.

* **Right** is the “good” slot. It usually carries a successful result (e.g., the data you wanted).  
* **Left** is the “error” slot. It holds a failure reason (e.g., “file not found”).

When you write code, you return an Either: if everything worked, you put the value in Right; if something went wrong, you put the error message in Left. Consumers of your function pattern‑match on these slots and react accordingly—just as a postal worker would pick the correct letter from the right slot or handle the error note from the left.

This design keeps success and failure explicit, avoiding exceptions while still letting callers see exactly what went wrong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
