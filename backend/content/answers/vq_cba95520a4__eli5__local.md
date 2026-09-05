---
qid: vq_cba95520a4__eli5__local
question: 'What is the difference between :: and ::: in Scala?'
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 257
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:56-05:00'
sources: []
---

In Scala, think of `::` as a **single‑item builder** for lists, while `:::` is a **list‑merging operator**.

* `::` (double colon) – Imagine you’re adding one toy to the front of a shelf. The syntax `x :: xs` puts the element `x` in front of the existing list `xs`. It’s like “take this single piece and prepend it.”  
  *Term*: **Cons** – the operation that constructs a new list by attaching an element to the front.

* `:::` (triple colon) – Now picture sliding two whole shelves together, one after another. The syntax `xs ::: ys` stitches list `ys` onto the end of list `xs`. It’s “take this entire collection and append it.”  
  *Term*: **Concat** – the operation that joins two lists into one.

So, use `::` when you want to add a single element at the front; use `:::` when you need to combine two whole lists. The first builds a new list node, the second merges two existing nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
