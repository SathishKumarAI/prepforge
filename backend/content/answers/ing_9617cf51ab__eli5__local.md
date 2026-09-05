---
qid: ing_9617cf51ab__eli5__local
question: 'Explain: B-Tree Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 234
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:35:38-05:00'
sources: []
---

Imagine you’re looking for a book in a huge library that’s arranged alphabetically by title, but the librarian has written a “quick‑look” card index on every shelf.  
A **B‑tree** is like that card system: it keeps keys (the book titles) sorted and stores them in nodes that can hold many keys—just enough to keep the tree short. Each node points to child nodes, so you can jump from a broad “section” down to the exact page without walking through every shelf.

When you search for a key, you start at the root node, compare your target with the stored keys, and follow the pointer that leads closer. Because each step halves (or reduces) the remaining possibilities, finding or inserting takes only a handful of comparisons—logarithmic time.  

So, a B‑tree index is a balanced, tree‑like directory that lets databases quickly locate data without scanning all rows, much like a librarian’s card index speeds up finding any book in a massive library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
