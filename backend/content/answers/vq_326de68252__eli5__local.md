---
qid: vq_326de68252__eli5__local
question: Difference between schema on read vs schema on write?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 228
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:07:56-05:00'
sources: []
---

Imagine a library that stores books in two different ways.

**Schema on Write** is like the librarian asking each author to format their book exactly the same way before it goes on the shelf—every chapter must have a title, every page must follow a set layout, and all books are cataloged with the same categories. The system knows right away how to read any book because its structure was fixed when the data entered.

**Schema on Read** is like putting raw manuscripts in a drawer without labeling them. When you want to read one, you decide how to interpret it at that moment—maybe you choose to highlight only the dates or focus on names. The format is defined later, after the data has already arrived.

So, *schema on write* enforces structure up front; *schema on read* decides structure when you actually look at the data. Both keep the library organized, but one does it before storing, the other while retrieving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
