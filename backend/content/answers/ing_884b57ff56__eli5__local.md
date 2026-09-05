---
qid: ing_884b57ff56__eli5__local
question: 'Explain: 5.4 Get a Post by ID — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 281
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:12:18-05:00'
sources: []
---

Think of your app as a library where every book is an Instagram post.  
When someone wants to read one specific book, they give the librarian its *ID*—the unique number on the book’s spine. The request “Get a Post by ID” works just like that: you tell the system which ID you need, and it pulls exactly that book from the shelf.

**Key parts of the design**

1. **Route** – `GET /posts/{id}` is the address where the librarian (the server) listens for requests.  
2. **Authentication** – Only people with a valid key can ask, like showing an ID card before borrowing a rare book.  
3. **Validation** – The system checks that the ID looks right (a number, not garbage).  
4. **Data store lookup** – It goes straight to the database index for that ID—fast, no need to scan every book.  
5. **Response** – Returns the post data in JSON: caption, image URL, author info, likes, comments.

If the post isn’t found, the system simply says “404 Not Found,” just as a librarian would say “I don’t have that title.” This keeps the interaction quick and predictable, like picking a single book from an organized shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
