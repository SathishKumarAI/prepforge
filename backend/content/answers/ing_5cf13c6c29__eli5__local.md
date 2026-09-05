---
qid: ing_5cf13c6c29__eli5__local
question: 'Explain: Authorization — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 237
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:03:41-05:00'
sources: []
---

Think of a big library that holds all the books (the data) and the special reading rooms (the models). An **API**—short for *Application Programming Interface*—is like the librarian’s desk. It tells you exactly how to ask for a book or a room, what words to use, where to stand, and which keys you need to open it.  

When we talk about *authorization*, the API also checks your library card: does this person have permission to borrow that particular book? If not, the desk politely says “sorry, you can’t access that.” In machine‑learning system design, the API sits between users (or other programs) and the ML model. It receives requests, verifies that the caller has a valid token or role, then forwards the request to the model and returns the answer—just as the librarian hands over the requested book only after checking your card. This keeps the data safe while letting authorized people use the powerful “reading rooms” (models) efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
