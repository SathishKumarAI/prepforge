---
qid: ing_2ca71a6e87__eli5__local
question: 'Explain: APIs Are Boundaries — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 246
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:07-05:00'
sources: []
---

Think of a restaurant kitchen and its dining room.  
The **kitchen** (the software that does the heavy lifting) can’t be opened up to customers; it needs a clean, controlled way for diners to order food without spilling pots or breaking plates. That controlled way is an **API (Application Programming Interface)**—a set of clear rules and “menu items” that let one part of a system talk to another without seeing the messy details inside.

An API is just a boundary: it tells you *what* data can be sent, *how* to send it, and what response you’ll get back. It hides the complicated recipe (the code) so other parts of the system—like a front‑end web page or another service—can ask for a dish (“give me user profile #42”) and receive only the finished plate, not the entire cooking process.

So, in system design, APIs are like the restaurant’s ordering window: they keep components separate, safe, and easy to swap without breaking each other.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
