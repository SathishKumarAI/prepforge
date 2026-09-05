---
qid: vq_29b6ad0dd1__eli5__local
question: WHEN WOULD YOU USE A LEFT JOIN INSTEAD OF AN INNER JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 190
total_tokens: 353
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:40-05:00'
sources: []
---

Think of a left join like a “friend‑list” that keeps every person on the left side (say, all employees) and attaches any matching info from the right side (like their project assignments). If an employee isn’t working on anything, they still appear in the list with blank project data. An inner join is more selective: it’s like a “buddy‑list” that only shows people who have at least one buddy—everyone else disappears.

Use a left join when you want to keep all records from the first table regardless of whether there’s a match, especially if missing matches are meaningful (e.g., showing every employee even those not yet assigned). An inner join is fine when you only care about pairs that exist in both tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
