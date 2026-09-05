---
qid: ing_9c573fcb21__eli5__local
question: 'Explain: 5.3 Create a New Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 308
total_tokens: 477
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:12-05:00'
sources: []
---

Imagine Instagram as a giant library where every photo is a book that people can read, bookmark, and comment on.  
When you “Create a New Post,” the process is like adding a new book to this library.

1. **Author writes the book** – your phone sends the image, caption, tags, and location to a *post‑upload* service (the author’s desk).  
2. **Editing room** – the service checks the file size, converts it into several sizes (thumbnail, medium, full), and stores them in a fast CDN (content delivery network) so readers can load any size quickly.  
3. **Cataloguing** – metadata (who posted, when, tags) is written to a fast key‑value store for instant lookup.  
4. **Indexing** – the post’s ID is added to several sorted sets: *timeline feed*, *tag feeds*, and *location feeds*. These sets let other users pull new posts in real time.  
5. **Notification queue** – followers’ devices are queued with a push notification that “New post from X,” so their feeds refresh automatically.

So, creating a post is like publishing a book: you write it, edit it, store the pages, catalogue it for quick searching, and alert readers—all done in milliseconds to keep the library lively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
