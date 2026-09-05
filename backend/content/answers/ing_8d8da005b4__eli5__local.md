---
qid: ing_8d8da005b4__eli5__local
question: 'Explain: Design the backend for a customer-facing chatbot. Walk me through
  the request path.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 245
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:20:55-05:00'
sources: []
---

Think of the chatbot as a friendly librarian who lives in a big library (the backend).  
When a user types a question, their message is like a library card slip that travels over the internet to the librarian’s desk.  

1. **Receive** – The server first grabs the slip (HTTP request) and reads the user’s words.  
2. **Understand** – A “language‑model” (the AI brain) looks at those words, figures out what the user wants, and decides on a reply.  
3. **Retrieve** – If the answer needs facts, the librarian queries a database or another service for up‑to‑date information.  
4. **Compose** – The AI stitches together text from its knowledge base and any fresh data into a clear response.  
5. **Send back** – That reply is put on a new slip (HTTP response) and sent back to the user’s chat window.

So, each request is a round trip: user → server → AI model + databases → server → user, all happening in milliseconds so the conversation feels natural.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
