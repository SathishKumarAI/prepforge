---
qid: ing_0333c561ba__eli5__local
question: 'Explain: Example application — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 273
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:40:08-05:00'
sources: []
---

Think of a busy train station (your app’s users). Every commuter needs a ticket, but the tickets are sold by many different shops—some sell bus passes, others sell metro cards, and yet another sells special event passes. Instead of each traveler going to every shop, they go to one central kiosk that knows where to send them.  

In software, an **API Gateway** is that kiosk: a single entry point that receives requests from the front‑end (the commuter) and forwards them to the right “shop” or backend service—like a recommendation engine, image classifier, or data‑analysis microservice. The gateway handles common tasks (authenticating users, logging, rate‑limiting) so each backend can focus on its job: returning predictions or insights.

The **Backends for Frontends** pattern builds on this by giving the gateway a small, purpose‑built service for each front‑end type (web, mobile, IoT). Each of those services knows exactly what data that front‑end needs and calls the appropriate ML back‑ends. The result is fast, tailored responses while keeping the system modular and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
