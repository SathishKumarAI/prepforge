---
qid: ing_6545d305de__eli5__local
question: 'Explain: How Indexes Work — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 255
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:34-05:00'
sources: []
---

Imagine you’re in a huge library where every book is a data record and the shelves are arranged alphabetically by title. If you want to find “Moby Dick,” flipping through each shelf would take ages. Instead, the librarian keeps a small index card that says: “Page 423 – Moby Dick.” You look at the card, jump straight to page 423, and you’re done.

In databases, an *index* is that card list. It maps key values (like book titles) to the exact location of the data on disk. When a query asks for records with a certain key, the system consults the index first, finds the address quickly, and reads only those few rows instead of scanning every row.

Indexes are built from *trees* or *hashes*, which keep the mapping sorted so that looking up a key is fast—much faster than walking through all data. The trade‑off: indexes use extra storage and must be updated whenever records change, but for most queries they save a lot of time, just like the librarian’s index card saves you from sifting through every shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
