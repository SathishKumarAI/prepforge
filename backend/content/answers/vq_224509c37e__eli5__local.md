---
qid: vq_224509c37e__eli5__local
question: Can I Update From Another Table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 218
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:05:28-05:00'
sources: []
---

Think of two grocery lists on a kitchen board—List A (the table you want to change) and List B (the table that already has the right amounts). Updating “from” another table is like looking at List B, picking out the numbers for each item, and writing those same numbers into List A so both boards match.

In SQL this is written as `UPDATE A SET col = B.col FROM B WHERE …`. The database pulls the value from row B that satisfies the condition (the *join*), then writes it into the matching row of table A. It’s a single, atomic operation: you don’t first copy List B to a new sheet and then paste; you just tell the engine “copy this column’s value from B to A where the keys match.” This keeps data consistent and avoids manual errors—just like keeping two grocery lists in sync with one quick glance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
