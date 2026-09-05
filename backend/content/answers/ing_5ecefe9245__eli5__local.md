---
qid: ing_5ecefe9245__eli5__local
question: 'Explain: Mutations → Modify Data — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 241
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:44-05:00'
sources: []
---

Imagine a library where you can **borrow** books (GET) and also **write new stories** into the shelves (POST/PUT).  
In **REST**, each action is a separate door: you knock on “/books” to read, “/books/123” to edit, “/authors/45/books” to add. Every time you want to change something, you open a whole new door and send a whole package of data—sometimes more than you need or less.

**GraphQL** is like having one magical desk that knows every book in the library. You ask the desk *“Give me the title of book 123 and let me change its author.”* The desk gives only what you asked for, then lets you send back just the new author field. One request handles both read and write, and you never get extra or missing information.

So, a **mutation** in GraphQL is simply “write” – an instruction that tells the system exactly which data to change, with minimal fuss and maximum clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
