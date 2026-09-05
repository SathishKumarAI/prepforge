---
qid: ing_c2f37fa094__eli5__local
question: 'Explain: From a CacheLoader — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 229
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:45:02-05:00'
sources: []
---

Imagine a library that only keeps the books you borrow most often on its top shelf, while the rest stay in deeper stacks. When you ask for a book that’s not on the top shelf, the librarian automatically fetches it from the back stack and puts it on the shelf for quick access next time.

In Guava, a **CacheLoader** is like that librarian. It tells the cache what to do when someone asks for data that isn’t already cached (“a miss”). You write a small piece of code—`load(key)`—that pulls the needed value from wherever it lives (database, file, web service) and returns it. The cache then stores this result on the shelf (the in‑memory map). Next time anyone asks for the same key, the cache hands out the cached copy instantly, saving the expensive fetch.

So, a CacheLoader is simply the recipe the cache follows to automatically fill itself with fresh data whenever it runs out of room or misses a requested item.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
