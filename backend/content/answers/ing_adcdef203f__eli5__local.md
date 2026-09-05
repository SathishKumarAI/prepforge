---
qid: ing_adcdef203f__eli5__local
question: 'Explain: Master-eligible nodes should have at least 1GB of heap per 3000
  indices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 201
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:12:55-05:00'
sources: []
---

Think of a database cluster like a big library where each **master‑eligible node** is the head librarian who keeps track of all the books (indices).  
The **heap** is the librarian’s personal desk space—memory that lets them quickly look up, move, and organize books without having to fetch them from the back shelves every time.  

For every 3 000 “books” a librarian needs at least 1 GB of desk space so they can keep their index cards, quick‑reference lists, and temporary notes in hand.  
If the desk is too small, the librarian will have to shuffle constantly, slowing down the whole library. That’s why each master‑eligible node gets that minimum amount of heap per 3 000 indices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
