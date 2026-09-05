---
qid: vq_793bdd839b__eli5__local
question: WHAT IS A COMPOSITE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 187
total_tokens: 343
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:53-05:00'
sources: []
---

Imagine you’re filing a library’s book catalog. Each book has two unique pieces of information that together guarantee it can be found: the **ISBN** (a number that identifies the book itself) and the **edition year** (because the same ISBN might appear in different years). No single piece alone is enough—just an ISBN could match many copies, and just a year could match thousands. Together they form a unique “address” for each record.

In databases this pair of columns is called a **composite key**: a combination of two or more fields that together uniquely identify one row in a table. Each part of the composite key can be repeated on its own, but only when all parts match exactly does it point to a single entry. Think of it as a “double lock” that guarantees uniqueness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
