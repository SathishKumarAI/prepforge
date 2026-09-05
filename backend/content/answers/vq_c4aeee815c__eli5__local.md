---
qid: vq_c4aeee815c__eli5__local
question: How do you find gaps in a sequence in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 190
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:57-05:00'
sources: []
---

Imagine your data is a row of streetlamps on a long road. Every lamp should be exactly one meter apart, but sometimes a few are missing and the road has dark spots. To spot those gaps, you look at each lamp’s position (the “sequence number”) and compare it to where the next lamp *should* be.

In a table, you sort the rows by that sequence column. Then for each row you subtract its value from the next row’s value. If the difference is more than one, the road between them is dark – those numbers are missing. You can write this as a simple query that lists all differences greater than one and shows how many lamps (or values) are lost in each stretch. That’s exactly how you find gaps in a numeric sequence stored in a table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
