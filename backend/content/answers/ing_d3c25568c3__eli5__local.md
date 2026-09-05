---
qid: ing_d3c25568c3__eli5__local
question: 'Explain: EventDriven vs Request-Response Communication Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 197
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:42-05:00'
sources: []
---

Think of two ways people can get information from a library.  

**Request‑Response (pull)** – You walk into the desk, ask for a book, and wait until the librarian hands it to you. You start the conversation, the librarian replies, then the exchange ends.  
**Event‑Driven (push)** – The librarian keeps an automated bulletin board that posts any new books as they arrive. You simply read the board whenever you’re ready; no one asks for a specific title each time.

In machine learning systems, **request‑response** is like calling a function and waiting for its result—tight coupling, predictable timing. **Event‑driven** is like subscribing to data streams: components publish events (e.g., new training data or model updates) and any interested part receives them asynchronously, allowing loose coordination and better scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
