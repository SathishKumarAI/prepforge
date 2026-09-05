---
qid: ing_56108cc094__eli5__local
question: 'Explain: Forces — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 209
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:14-05:00'
sources: []
---

Imagine you’re at a big, busy kitchen. The **API gateway** is the head chef who takes every order from diners (the front‑end apps) and decides which dish it should be. It looks at the request, checks that it’s valid, adds any needed “seasoning” (authentication tokens), and then hands the order off to the right cook.

Each **backend for frontend** (BFF) is a specialized sous‑chef who knows how to prepare exactly what one type of diner needs—say, a vegan menu or a gluten‑free menu. They pull together ingredients from several smaller kitchens (microservices), mix them just right for that dish, and serve it back to the head chef.

When the order returns, the head chef gives the finished plate to the diner. This way, each front‑end gets a perfectly tailored service without having to talk to every single microservice directly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
