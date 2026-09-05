---
qid: ing_2ef7a15aa0__eli5__local
question: 'Explain: Stage 1: Single Server (0-10K users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 207
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:50:04-05:00'
sources: []
---

Imagine you’re a baker who starts a small shop in your kitchen. Your “single server” is that one oven and the counter where customers place orders. For the first 0–10 000 users (customers), everything works fine: you can keep up with the demand, and the oven stays cool enough to bake each batch on time.

**Scalability** means being ready when more people come in. In a system, that’s like adding more ovens or expanding the kitchen without having to rebuild from scratch. You’ll use simple tools—like a conveyor belt (load balancer) to spread orders evenly and a pantry of spare ingredients (caching) so you don’t have to fetch everything fresh each time.

So Stage 1 is all about proving that one server can handle up to ten thousand users, while planning the next “kitchen expansion” before the line gets too long.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
