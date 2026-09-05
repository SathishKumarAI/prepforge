---
qid: ing_4bbbeac52d__eli5__local
question: 'Explain: Index lifecycle management — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 248
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:36:57-05:00'
sources: []
---

Think of a gigantic library that never runs out of shelves, yet can still find any book in an instant.  
In this library each **index** is like a tiny signpost pointing to where a particular “book” (a piece of data) lives on the shelves.  

Uber’s **LedgerStore** keeps millions of these signposts alive by following a simple life‑cycle:

1. **Create** – When a new signpost is needed, LedgerStore writes it to fast, cheap storage so it can be found immediately.  
2. **Refresh** – Periodically the system checks that each signpost still points to a valid spot and updates it if the book has moved.  
3. **Expire** – Signposts that are no longer useful (because their books were deleted or archived) are quietly removed, freeing space for new ones.  

Because every step is automated and the storage hardware can be scaled horizontally, LedgerStore can handle trillions of signposts—just like a library with endless shelves that still lets you locate any book in seconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
