---
qid: ing_6c466656f2__eli5__local
question: 'Explain: Related patterns — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 264
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:27:23-05:00'
sources: []
---

Imagine you’re at a big restaurant that offers many dishes (the backend services). You, the customer, want one meal—maybe a combo of salad, steak, and dessert—but you don’t know how each dish is prepared. Instead of going to each kitchen, you order from the **front‑desk waiter** who takes your request, knows which kitchen prepares what, and brings you everything in one plate.

In software, that waiter is an **API Gateway**: a single entry point that receives a client’s request (the meal) and routes it to the right services. When the “meal” needs several specialized dishes—say, user data from a database, images from a CDN, and payment info—the gateway forwards each part to its dedicated service.

The **Backends for Frontends (BFF)** pattern is like having a separate waiter for every type of customer: one waiter for mobile phones, another for tablets, another for web browsers. Each waiter knows exactly what that customer’s device likes—short, fast responses or richer data—and asks the kitchens accordingly. This keeps the kitchen (backend) simple and lets each client get an optimized “meal” without juggling many routes themselves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
