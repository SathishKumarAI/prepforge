---
qid: ing_2c8d507ddc__eli5__local
question: 'Explain: Keep Membership Consistent Enough — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 199
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:45:54-05:00'
sources: []
---

Think of a big library where every book (a data item) has to be stored on one of many shelves (servers).  
With ordinary “hashing,” you pick a shelf by turning the book’s title into a number, then take that number modulo the total shelves. If you add or remove a shelf, almost all books get shuffled to new places—like moving most books whenever a shelf breaks.  

Consistent hashing fixes this by first mapping both shelves and books onto points around a circle (the “hash ring”). A book is stored on the nearest shelf clockwise from its point. When a shelf disappears, only the books that were right after it in the circle jump to the next shelf; all other books stay where they are. Thus, membership changes affect few items—just enough to keep the system balanced without massive re‑assignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
