---
qid: vq_dba5c3a938__eli5__local
question: WHAT HAPPENS WHEN A TRANSACTION IS ROLLED BACK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 182
total_tokens: 344
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:30:39-05:00'
sources: []
---

Imagine a kitchen where you’re preparing a big dinner (the **transaction**). All the steps—chopping vegetables, boiling pasta, seasoning sauce—are like the individual operations in a database.

If something goes wrong midway (say the sauce burns), you decide to *roll back*. That means you go back to the moment before you started cooking and wipe everything clean: throw out the burnt sauce, put the veggies back in their bowls, and reset the stove. No part of the ruined meal stays; the kitchen is exactly as it was before you began.

In database terms, a rollback undoes every change made by that transaction so the data returns to its original state—just like clearing the kitchen after an unsuccessful cooking attempt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
