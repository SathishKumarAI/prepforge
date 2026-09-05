---
qid: ing_47feb78b5d__eli5__local
question: How do you respect access controls for client data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 233
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:31:04-05:00'
sources: []
---

Imagine your client’s data is a library book that only certain people are allowed to read. The *access control* is like the library’s lock system: each reader gets a unique key (a password or token) and a list of shelves they’re permitted to visit.

When an AI model needs to answer a question, it first checks the “key” it has been given. If the key matches a person who’s authorized for that book, the model can open the lock and read the relevant pages. If not, the lock stays closed—no text is revealed, no extra data is stored or shared.

In practice this means:

1. **Authentication** – verifying the user’s identity (login, API token).  
2. **Authorization** – confirming the user has permission for that particular dataset.  
3. **Least‑privilege** – giving only the minimal access needed to answer the query.  

By treating data as a locked book and the AI as a careful librarian, we keep client information safe while still letting the model do its useful work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
