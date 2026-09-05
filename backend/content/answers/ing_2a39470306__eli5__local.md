---
qid: ing_2a39470306__eli5__local
question: 'Explain: Hexagonal architecture the original 2005 article'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 201
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:42:27-05:00'
sources: []
---

**Hexagonal Architecture (the 2005 idea)**  
Imagine a pizza place that wants to serve any customer, no matter how they order: by phone, online, or walking in. The kitchen is the “hexagon” – it has six sides. Each side represents an **interface**: a phone call, a website request, a delivery app, a walk‑in counter, a loyalty program, or even a supplier’s system.  

Inside the kitchen (the core business logic) chefs don’t care how the order arrived; they just need the ingredients and instructions. The outside world talks to the kitchen through adapters that translate each interface into the same language the chefs understand.  

So hexagonal architecture keeps the core code clean and independent, letting you swap or add new ways of interacting (new “sides”) without touching the heart of your application.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
