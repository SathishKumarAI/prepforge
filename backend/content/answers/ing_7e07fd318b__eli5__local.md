---
qid: ing_7e07fd318b__eli5__local
question: 'Explain: How GraphQL Works — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 258
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:56:34-05:00'
sources: []
---

Imagine a library where you want books on *any* topic.  
With **REST** you call the librarian for each book separately: “Give me the *author* of *Book A*, then give me the *price* of *Book B*, next the *rating* of *Book C*.” Each request is a separate trip, and if you need several pieces from one book you end up making many trips.

With **GraphQL** the librarian takes a single written list that says exactly what parts you want: “Give me the *author* and *price* for Book A; give me the *rating* of Book B.” The librarian fetches all requested data in one go, returning only what you asked for.  

- **Endpoint** – the library’s door (REST uses many, GraphQL usually one).  
- **Query** – your written list of needed fields (GraphQL).  
- **Response** – a JSON object shaped like your list.

Thus GraphQL cuts down on round‑trips and overfetching, letting you ask for exactly what you need in one request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
