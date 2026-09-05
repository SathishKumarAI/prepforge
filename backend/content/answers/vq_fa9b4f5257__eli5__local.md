---
qid: vq_fa9b4f5257__eli5__local
question: What is the difference between Array and List in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 235
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:34:39-05:00'
sources: []
---

Imagine you’re organizing books on a shelf.

**Array** – Think of it as a fixed‑size bookshelf. When you buy it, the number of slots is set and can’t change. Each slot holds one book (value), and you can jump straight to any slot by its position. Because the size never changes, the computer can keep all the books next to each other in memory for lightning‑fast access.

**List** – Picture a stack of cards that you can add or remove from the front. It’s flexible: you can insert or delete items at will, but every time you do it, new “card” objects are created and linked together. That makes adding cheap but looking up an item by position slower because you must walk through the links.

So, in Scala, an **Array** is a fixed‑size, contiguous block of memory giving quick indexed access; a **List** is a dynamic, singly‑linked sequence that’s great for frequent insertions/deletions at the front but slower to index.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
