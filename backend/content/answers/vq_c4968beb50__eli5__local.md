---
qid: vq_c4968beb50__eli5__local
question: What is SELF JOIN?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 217
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:58-05:00'
sources: []
---

Imagine you’re at a family reunion where everyone has a name tag. You want to find all pairs of relatives who share the same last name, but you can’t just look at one list—each person’s tag is separate. A **self join** does exactly that: it joins a table to itself so each row can be matched with another row from the same table.

Think of the table as a deck of cards. If you want to see which cards match in suit, you lay out two copies of the deck side by side and line up matching suits. In database terms, the “two copies” are just the same table referenced twice, each given its own nickname (alias). The join condition then says “pick rows where a chosen column is equal,” producing pairs that meet the rule.

So a self join lets you compare rows within one table—like matching family members or cards—by treating the table as two separate entities and linking them on shared data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
