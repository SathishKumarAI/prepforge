---
qid: ing_4f730170a5__eli5__local
question: 'What is DI? — GitHub - Anshul619/Java: This repo contains java \"how to
  to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 204
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:42:53-05:00'
sources: []
---

**Dependency Injection (DI)** is a way of wiring together pieces of code so that each part gets exactly what it needs without having to ask for it itself.  

Think of a kitchen where you bake cookies. The cookie‑baking recipe (the *cook*) doesn’t own the oven, flour, or timer; those are separate tools. In DI, when the cook starts baking, someone hands them the oven, the measured flour, and the timer—*injecting* the tools they need. The cook just uses what’s given, never worrying about how the tools were created.

In programming, a class (the cook) declares the services it requires (oven = “database connection”, timer = “logger”). A framework or container supplies those services at run‑time, letting the class focus on its job and making testing easier because you can swap in mock services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
