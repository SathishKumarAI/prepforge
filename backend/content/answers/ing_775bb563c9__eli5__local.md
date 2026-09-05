---
qid: ing_775bb563c9__eli5__local
question: 'Explain: Unique, Primary, and Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 236
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:45:34-05:00'
sources: []
---

Think of a library that keeps all its books in one giant shelf.  
An **index** is like the book‑in‑a‑hand “card” you pull out to find where a particular title sits.

* **Unique index** – The card says “this title appears only once.” It guarantees no two books have the same name, just as a unique index forces one row per key value.  
* **Primary index** – This is the master card that points straight to each book’s exact spot on the shelf. Every book must have it; it can’t be empty and never duplicates a location.  
* **Clustered index** – Imagine the books are actually arranged in the order of their cards. The cards themselves become the shelf: every time you look up a title, you’re already standing at that book’s spot because the data is stored physically in the same order.

So unique = one‑to‑one card, primary = main address card for each item, clustered = the whole shelf laid out exactly as the cards say.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
