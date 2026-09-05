---
qid: ing_9d871c8481__eli5__local
question: 'Explain: Q87: Your production agent enters a runaway loop, calling a broken
  tool 400 times in five minutes. Walk through the architectural patterns that prevent
  this - at the orchestrator, the tool layer, and the cost-guard layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 270
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:14-05:00'
sources: []
---

Imagine your AI system as a kitchen where an order (the production agent) asks a sous‑chef (the orchestrator) to make 400 dishes using a faulty stove (the tool). If nothing stops it, the sous‑chef will keep sending orders until the stove burns out.

**Orchestrator pattern** – Think of it as a smart waiter who checks whether the stove is ready before each dish. It keeps a counter and pauses or cancels after a set number of attempts. This prevents the sous‑chef from flooding the stove with requests.

**Tool layer pattern** – The faulty stove is wrapped in a safety guard: a “try‑catch” wrapper that catches errors, logs them, and stops further calls once an error threshold is reached. It’s like a stove that shuts off after too many sparks.

**Cost‑guard layer** – Finally, a budget manager watches the bill. If the kitchen spends more than a set amount on gas or electricity (cost), it automatically cuts off the stove. This ensures you don’t overspend while the faulty stove keeps firing.

Together, these layers act like a waiter, a safety guard, and a budget monitor that together keep your AI cooking efficiently without runaway loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
