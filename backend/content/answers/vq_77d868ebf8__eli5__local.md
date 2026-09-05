---
qid: vq_77d868ebf8__eli5__local
question: How can I eliminate duplicate values in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 260
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:41-05:00'
sources: []
---

Imagine your database table is a messy closet full of clothes—some are exactly the same shirts piled on top of each other. To tidy it up, you first look at every shirt (row) and decide which one to keep, then throw away the extras.

In SQL you can do this in two simple ways:

1. **Show only unique rows** – use `SELECT DISTINCT column1, column2 … FROM table;`.  
   This is like pulling out a single shirt of each color and size for display; duplicates never appear in the list.

2. **Remove duplicates from the table itself** – give every row a temporary number that tells you how many identical copies exist (`ROW_NUMBER() OVER (PARTITION BY column1, column2 … ORDER BY id)`), then delete all rows whose number is greater than 1.  
   Think of it as keeping the first shirt you find and tossing the rest.

Either method leaves your “closet” clean, with each unique item appearing only once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
