---
qid: ing_25d73e9fd7__eli5__local
question: 'Explain: MySQL at Canva: Growing Pains — From Zero to 50 Million Uploads
  per Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 310
total_tokens: 488
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:35:54-05:00'
sources: []
---

Imagine a library that starts with just a few books. As more people come, the librarian keeps adding shelves and copies of each book so everyone can find what they need quickly. Canva’s media upload system began like that tiny library—one database server could handle a handful of uploads per day. But when millions of designers started uploading images, the “shelves” (database tables) grew too big for one librarian to manage.

The solution was to split the workload: instead of having all books in one giant shelf, Canva created many smaller shelves that sit side‑by‑side. Each new upload goes to a specific shelf based on its ID, so only that shelf’s librarian has to work on it. This is called **sharding**—think of each shard as a separate bookshelf.

Next, Canva added more librarians (database replicas) who can read the books at the same time, so users don’t have to wait for one person to finish cataloging before they can see their file. They also introduced an “inventory system” that keeps track of where every book is located across shelves, making it fast to find and retrieve a file.

By turning one overloaded shelf into many organized ones, adding extra librarians, and keeping a clear inventory map, Canva’s MySQL database grew from handling a few uploads a day to comfortably managing 50 million uploads daily—just like a bustling library that never has to wait for the next book.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
