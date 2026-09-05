---
qid: vq_5ea6d4619f__eli5__local
question: what are Complex data types in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 211
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:12:53-05:00'
sources: []
---

Think of Hive as a library that stores books (tables). Simple data types—like `INT` or `STRING`—are like single pages: one word, one number, easy to read. Complex data types are like whole chapters or nested storybooks inside a page.

- **Array** is a list of items in order, like a row of postcards on a string; each card can be a number, text, or even another list.
- **Map** is a set of key‑value pairs, similar to a recipe card where the ingredient (key) points to its quantity (value). You can look up any ingredient quickly.
- **Struct** groups several fields together, like a mini‑profile that holds name, age, and address all in one block.

These structures let you embed richer information inside a single column, just as a book can contain chapters, tables, or illustrations within its pages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
