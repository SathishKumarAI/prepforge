---
qid: ing_085c8e5789__eli5__local
question: 'Explain: Company — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 206
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:48:56-05:00'
sources: []
---

Imagine a giant library that can hold every book ever written, but the books are tiny—just the titles and where they belong on shelves. LedgerStore is like that library for Uber’s data. Each “book” (a piece of information) gets a *ledger entry* that records its exact place in a massive index tree. The tree is built so that no matter how many entries there are—trillions, even—the system can jump straight to the right branch and find what it needs almost instantly.

Think of it as a perfectly organized parking garage: every car (data point) has a ticket (index) telling you exactly which level and spot it’s parked in. The garage is designed with so many levels that adding more cars never slows down finding one. That’s how LedgerStore keeps Uber’s millions of drivers, riders, and trips searchable at lightning speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
