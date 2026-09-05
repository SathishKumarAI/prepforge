---
qid: ing_d797866a50__eli5__local
question: 'Explain: Client-Server Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 310
total_tokens: 473
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:16:10-05:00'
sources: []
---

Think of a library that serves many readers (clients) who ask for books from a single shelf (server). The way the librarian (server) and readers (clients) interact follows six common “reading patterns” that keep everything smooth.

1. **Request‑Response** – A reader asks for one book; the librarian gives it back immediately.  
2. **Publish‑Subscribe** – Readers sign up to receive news about new books; whenever a new title arrives, all subscribed readers get an alert.  
3. **Message Queue** – A reader puts a request in a waiting line (queue); the librarian picks requests one by one, ensuring no one is missed even if many come at once.  
4. **Remote Procedure Call (RPC)** – The reader asks the librarian to perform a task (e.g., locate a rare edition) and receives the result as if it were a local function call.  
5. **Load Balancing** – If several librarians are available, each one takes a share of incoming requests so no single person is overwhelmed.  
6. **Statelessness** – The librarian does not keep track of who asked for what; every request contains all the information needed to fulfill it, making the system easier to scale.

These patterns let client‑server systems handle many users reliably and flexibly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
