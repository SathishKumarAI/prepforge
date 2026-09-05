---
qid: ing_88c7ce19f6__eli5__local
question: 'Explain: Scaling to Count Billions — From Zero to 50 Million Uploads per
  Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 276
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:13:11-05:00'
sources: []
---

Imagine a library that suddenly turns into a planet‑wide bookshop where millions of people can drop off and pick up books in the blink of an eye. That’s what Canva did when it grew from handling a few thousand images to tens of millions every day.

**The “bookshop” is a network of servers (the shelves) that sit behind the scenes.**  
When a user uploads a photo, the file first lands on a fast “entrance gate.” The gate checks the picture’s size and format, then hands it off to one of many “storage lockers,” each a small, independent unit that keeps its own copies. Because every locker is separate, several people can upload or download at once without stepping on each other’s toes.

**To keep everything moving smoothly, Canva uses a “traffic‑light system.”**  
If too many people try to use the same locker at once, the traffic lights turn red and politely ask them to wait a moment. This prevents any single locker from getting jammed while still letting others work freely.

By treating every upload like a book that can be shelved anywhere in this giant library—without needing one huge, single point of failure—Canva scales effortlessly from zero to billions of uploads per day.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
