---
qid: vq_dd2a9c02fc__eli5__local
question: HOW DOES A CLUSTERED INDEX DIFFER FROM A NON-CLUSTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 186
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:30:51-05:00'
sources: []
---

Think of a library that holds books (your table rows).  
A **clustered index** is like the physical shelf arrangement: the books are sorted by author on each shelf, and every book’s spine is in that order. When you look for “author Smith,” the librarian can walk straight to the right shelf section because the books themselves are stored that way.

A **non‑clustered index** is like a separate card catalog. The cards list authors and point to the exact location (shelf number, position) of each book, but the books on the shelves stay in whatever order they happened to be placed. You first find the card, then go to the indicated spot.

So: clustered = data stored in sorted order; non‑clustered = an extra lookup table that points to data kept elsewhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
