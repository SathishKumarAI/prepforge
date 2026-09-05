---
qid: ing_9acad66210__eli5__local
question: 'Explain: Queries → Fetch Data — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 216
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:59-05:00'
sources: []
---

Think of a library that holds all the books you need (your database).  
With **REST**, you call a specific shelf by its address—“Give me the book on shelf /author/123.” The library sends back everything it has on that shelf, even if you only wanted the author’s name. If later you need the book’s publisher, you must make another trip to a different shelf.  

With **GraphQL**, you ask the librarian exactly what you want: “Show me the author’s name and the titles of their books.” The librarian goes to all shelves but returns only those pieces, in one visit.  
- *Endpoint* (REST) = fixed address for each resource.  
- *Query* (GraphQL) = a flexible request that specifies needed fields.  

Both fetch data over HTTP, but GraphQL gives you tailored responses, reducing extra trips and bandwidth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
