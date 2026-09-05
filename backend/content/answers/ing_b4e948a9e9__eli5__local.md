---
qid: ing_b4e948a9e9__eli5__local
question: 'Explain: Common Types of Locks — Database Locks Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 244
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:23:32-05:00'
sources: []
---

Imagine your favorite library where people can borrow books, but no two readers can hold the same book at once.  
A **lock** is like a tiny sign that says “This book is in use.” There are three common kinds:

1. **Shared (read) lock** – many readers can look at the book simultaneously, as long as nobody wants to edit it. Think of several people reading the same newspaper page side‑by‑side.

2. **Exclusive (write) lock** – only one person may hold this sign; no other reader or writer can touch the book until it’s returned. It’s like a librarian putting a “Do not disturb” sticker on a manuscript while they rewrite it.

3. **Update lock** – a middle‑ground sign used when someone intends to change the book but wants to be sure no one else is reading or writing at that moment. It’s a polite “I’m about to edit, please wait.”

These locks keep the library (your database) consistent, preventing two people from corrupting data by acting on it at the same time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
