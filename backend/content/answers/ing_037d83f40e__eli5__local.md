---
qid: ing_037d83f40e__eli5__local
question: 'Explain: ANN index: structure, memory math, ops — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 247
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:40:38-05:00'
sources: []
---

Imagine you have a huge library of books, but each book is turned into a tiny digital “bookmark” that tells the library how similar it is to every other bookmark.  
**The ANN (Approximate Nearest‑Neighbor) index** is like a super‑fast librarian who first groups these bookmarks into “rooms” (a tree or graph). When you ask for books about *quantum physics*, the librarian quickly looks only in the room that usually contains science topics, then compares your bookmark with just those few inside.  
*Structure*: the rooms are stored as arrays; each array points to a small set of neighbors.  
*Memory math*: if you have 1 million bookmarks and each needs 64 bytes, the whole index is about 64 MB—tiny compared to storing full text.  
*Ops*: one query involves walking from the root room to the right child (a few comparisons), then scanning a handful of neighbors (another few). The result is “good enough” matches in milliseconds, perfect for semantic search where exactness is less important than speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
