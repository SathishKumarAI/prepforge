---
qid: ing_1185e1b5b0__eli5__local
question: 'Explain: Difference b/w get() & load() — Java/Hibernate.md at main \u00b7
  Anshul619/Java \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 210
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:03:26-05:00'
sources: []
---

Think of a library that keeps books (your database records) on shelves.  
When you use **`session.get()`** you ask the librarian to *give you the book now*. The system immediately looks up the shelf, pulls out the exact page, and returns it. If the book isn’t there, you get `null`.  

With **`session.load()`** you hand the librarian a *book code* and say “I’ll need this later.” The librarian writes down the code and hands back a tiny placeholder (a proxy). No pages are fetched yet. Only when you actually read something from that book does the librarian go to the shelf, load the full text, and replace the placeholder.  

So `get()` is eager—fetches right away; `load()` is lazy—defers fetching until needed. If you never touch the proxy, no database hit occurs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
