---
qid: ing_e0cc47261a__eli5__local
question: 'Explain: Solution — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 230
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:31:35-05:00'
sources: []
---

Imagine you’re hosting a big dinner party (your machine‑learning app) and each guest (mobile app, web page, smartwatch) has different tastes and ways of ordering food.  
A **back‑end** is the kitchen that knows how to cook every dish—data preprocessing, model inference, training jobs, etc.  
An **API gateway** is like a friendly waiter who sits at the front desk: guests call it with their orders (HTTP requests), and it decides which kitchen service should handle each request, forwards the order, collects the reply, and gives it back in a single, tidy format.

So the “Back‑ends for Frontends” pattern keeps every device talking to one common waiter, while the waiter routes the request to the right kitchen. This avoids each guest having to learn the quirks of multiple kitchens, keeps the system modular, and lets you upgrade or replace parts without disturbing everyone else.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
