---
qid: ing_775a3524fb__eli5__local
question: 'Explain: Instead, it uses a GraphQL schema. We — What Is GraphQL? REST
  vs. GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 240
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:45:33-05:00'
sources: []
---

Think of the internet as a library.  
With **REST**, you ask for a whole book (a fixed set of pages) each time you need information. If you only want one chapter, you still download the entire volume—wasteful and slow.

**GraphQL** is like having a smart librarian who knows exactly which sentences you’re after. You send a single request that says, “Give me the author’s name, the book’s title, and the first paragraph of chapter 3.” The librarian pulls only those pieces from the library shelves and gives them back in one neat package.

*Unavoidable terms:*  
- **Schema**: A blueprint that tells the librarian (the server) what kinds of data exist and how they’re related.  
- **Query**: Your request specifying exactly which parts of the schema you want.  

So, GraphQL lets clients ask for precisely the data they need, no more, no less—making APIs faster and easier to use than REST’s rigid “download everything” approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
