---
qid: ing_6ff271fdc4__eli5__local
question: 'Explain: Communication styles — A pattern language for microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 237
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:33:32-05:00'
sources: []
---

Imagine a neighborhood where every house (microservice) has its own mailbox, phone line, and walk‑in window. **Communication styles** are the ways these houses talk to each other.

* **Point‑to‑point (direct mail)** – one house sends a letter straight to another. It’s simple but fragile; if that door closes, the message is lost.
* **Publish/subscribe (community bulletin board)** – a house posts a notice on a shared board; any interested houses read it. This decouples sender and receiver, letting many listen or ignore as needed.
* **Request/response (phone call)** – one house calls another for an answer, waiting while the other answers. It’s fast but ties both together tightly.
* **Event‑driven (doorbell)** – a house rings a bell when something happens; the neighbor may act immediately or later, without needing to talk back.

Choosing the right style is like picking the best “mail system” for your neighborhood: keep it simple, flexible, and resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
