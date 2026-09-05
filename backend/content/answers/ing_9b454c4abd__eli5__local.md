---
qid: ing_9b454c4abd__eli5__local
question: 'Explain: How Engineers Use an API — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 228
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:43:40-05:00'
sources: []
---

Think of an API (Application Programming Interface) as a kitchen menu at a fancy restaurant. The chefs (your machine‑learning models) are busy preparing dishes, but you don’t need to know every secret ingredient or cooking step. Instead, you simply place an order on the menu and receive a finished plate ready for your guests.

In engineering terms, an API is a set of clearly defined commands—like “GET /predict” or “POST /train”—that let one software component (the client) ask another (the server) to do something. The client sends a request with data; the server runs the ML model and returns results in a standard format such as JSON.

Using this menu keeps your code clean: you call the API, don’t worry about how the model is built or where it lives, and you can swap models behind the scenes without touching the rest of your system. That’s how engineers keep complex ML services modular, reusable, and easy to maintain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
