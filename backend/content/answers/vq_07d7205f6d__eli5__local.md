---
qid: vq_07d7205f6d__eli5__local
question: What are the types of dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 241
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:42-05:00'
sources: []
---

Think of a data warehouse as a giant library.  
The **fact table** is like the main shelf that holds every book’s sales number, while the **dimension tables** are the bookshelves that describe who bought it, where it was sold, and when.

There are three common kinds of dimension shelves:

1. **Slow‑Changing Dimension (SCD)** – a shelf that keeps a history of changes. Imagine a biography book that adds new chapters each time the author writes a new life event; you can still read past chapters.

2. **Hierarchical Dimension** – a shelf organized in levels, like an address: Country → State → City. Each level sits on top of the one below it, letting you drill up or down.

3. **Factless Dimension** – a shelf that only provides context, no numeric facts. Think of a “season” shelf listing Winter, Spring, etc., used to group sales but not holding numbers itself.

Together they let analysts ask “who, what, where, when” questions while keeping the data tidy and searchable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
