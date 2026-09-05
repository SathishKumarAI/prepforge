---
qid: ing_8003ca0fc7__eli5__local
question: 'Explain: 1.2. Client-Server — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 235
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:49-05:00'
sources: []
---

Imagine you’re ordering pizza from an online app. The *client* (your phone) asks the server for a menu, places an order, or checks the status of your delivery. The *server* (the pizza‑shop computer) keeps all the data—menus, orders, recipes—and tells the client what it needs.

REST (Representational State Transfer) is a set of simple rules that let the client and server talk over the web. Think of REST like a menu with standard actions:  
- **GET** = “Show me the pizza list.”  
- **POST** = “Add a new order.”  
- **PUT/PATCH** = “Update an existing order.”  
- **DELETE** = “Cancel my order.”

Each action uses a URL (like a phone number) that points to a specific resource—menu, order, or customer. The server replies with the requested data in plain text (JSON), and the client can then use it as it wishes. This clean, stateless communication is what makes RESTful APIs so popular for building web services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
