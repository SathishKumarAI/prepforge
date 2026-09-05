---
qid: ing_c0094e8032__eli5__local
question: 'Explain: Interface Adapters — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 236
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:04-05:00'
sources: []
---

**Interface Adapters – like a translator at a language‑exchange café**

In software, *clean architecture* keeps the “core ideas” (business rules) separate from how they’re talked to or stored. An **interface adapter** is the friendly waiter who sits between two tables: it takes the questions the core asks (“How do I find this customer?”) and turns them into a language the outside world understands (SQL, REST calls, etc.), then flips the answer back into a form the core can use.

Think of the core as a chef who only knows ingredients; the adapter is the kitchen staff that reads the menu (client requests), fetches the right items from the pantry (database or API), and hands them to the chef in a ready‑to‑cook format. It lets the chef focus on cooking, while the waiter handles the logistics of ordering and delivery.

**Key terms**

- *Interface adapter*: code that converts between two different communication styles so each side can work in its own language.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
