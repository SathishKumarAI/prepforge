---
qid: vq_6f171ccdcf__eli5__local
question: WHAT ARE AGGREGATE FUNCTIONS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 242
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:15:10-05:00'
sources: []
---

Imagine you’re at a big family reunion and everyone brings their own dish—some bring salads, some bring desserts, others bring main courses. You want a single number that tells you how many people are there, what the total weight of all dishes is, or which dish weighs the most. In SQL, an **aggregate function** does exactly that: it looks at a whole column (or set of columns) in a table and returns one summarized value instead of every individual row.

Common aggregate functions include:

- **COUNT()** – how many rows fit a condition  
- **SUM()** – total of all numeric values  
- **AVG()** – average of numbers  
- **MIN() / MAX()** – smallest or largest value

When you write `SELECT COUNT(*) FROM orders;`, SQL tallies every row in the *orders* table and gives you one number: the total count. Just as a single tally card replaces dozens of individual receipts, an aggregate function turns many rows into one meaningful summary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
