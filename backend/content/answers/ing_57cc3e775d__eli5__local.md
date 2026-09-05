---
qid: ing_57cc3e775d__eli5__local
question: 'Explain: Better Availability — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 219
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:55:41-05:00'
sources: []
---

Imagine you’re a popular baker who sends out fresh cupcakes to cafés all over the country. If every café has to wait for the cupcakes to travel from your single bakery downtown, traffic jams and bad weather will delay delivery and some cafés may even miss their order window.

A **Content Delivery Network (CDN)** is like having many tiny bakeries—**edge servers**—sprinkled across the country. Each edge server stores copies of your cupcakes (website files). When a café (user) requests a cupcake, it automatically goes to the nearest bakery instead of traveling all the way from downtown. This makes delivery **faster and more reliable**, because even if one bakery is closed or its road is blocked, another nearby can still serve the cupcakes.

In system design, adding a CDN improves *availability* (the chance users always get content) by reducing latency, balancing traffic, and providing redundancy when any single server fails.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
