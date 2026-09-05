---
qid: vq_85366be94e__eli5__local
question: How do you define a series in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 288
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:37-05:00'
sources: []
---

Imagine your data as a long line of friends standing in a row, each holding a card with a number or word on it. In pandas, that row is called an **index**—the “series” is the list of cards (values) that belong to those friends.

Think of a series like a single‑column spreadsheet: one column of data and a matching row label for every entry. The labels can be simple numbers (0, 1, 2…) or meaningful names (“Jan”, “Feb”), but they’re just identifiers telling pandas where each value sits.

To **define** a series, you give pandas two things:
1. **The values** – the list of items you want to store.
2. **An optional index** – the labels that go with those items.

For example, if your friends are “Alice”, “Bob”, and “Cara” and they hold cards 10, 20, 30, the series is:

```
Alice    10
Bob      20
Cara     30
dtype: int64
```

Pandas keeps track of both parts so you can look up a value by name (“Bob”) or by position (the second card). That’s all there is to defining a series—just data plus its row labels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
