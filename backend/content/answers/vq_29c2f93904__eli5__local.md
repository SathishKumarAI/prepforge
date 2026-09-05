---
qid: vq_29c2f93904__eli5__local
question: WHAT IS THE DIFFERENCE BETWEEN CHAR AND VARCHAR?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 226
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:40-05:00'
sources: []
---

**Think of a bookshelf that can hold books of two kinds.**

* **CHAR (character)** is like a fixed‑size shelf slot: it always holds the same number of characters—say 10 spaces. If you write “hi” into a CHAR(10) field, the database pads the remaining 8 spots with blanks so every entry looks exactly 10 characters long. This is fast when every piece of data has the same length, but it wastes space if most entries are shorter.

* **VARCHAR (variable character)** is like a flexible shelf that expands only as needed. If you store “hi” in a VARCHAR(10), the database keeps just those two letters and remembers how long they are. It saves storage when the data varies in size, at the cost of a tiny bit more overhead to track the length.

So CHAR = fixed width (always the same size); VARCHAR = variable width (only as big as the actual text).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
