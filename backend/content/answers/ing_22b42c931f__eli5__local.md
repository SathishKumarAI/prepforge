---
qid: ing_22b42c931f__eli5__local
question: 'Explain: Design the AutoGLM product end to end: a cloud service that lets
  users delegate multi-step phone tasks ("order my usual coffee") to an autonomous
  agent. Walk through the architecture and the failure modes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 338
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:31:18-05:00'
sources: []
---

Imagine a smart kitchen that follows your recipe card automatically: you put in “order my usual coffee,” the kitchen reads the card, fetches ingredients, cooks, and delivers the cup to your table. AutoGLM is that kitchen for phone tasks.

**How it works**

1. **Command‑capture API** – The user speaks or types a request; the cloud receives it as text.
2. **Intent & Slot model** – A small “translator” reads the sentence, identifies the task (order coffee) and details (size, price limit).
3. **Task planner** – Like a recipe stepper, it breaks the job into actions: check inventory, choose vendor, place order, confirm payment.
4. **Agent executor** – Each action calls a micro‑service (e.g., payment gateway). Results flow back to the planner.
5. **Feedback loop** – If a step fails, the agent asks the user for clarification or retries.

**Possible failure modes**

- *Misunderstanding*: The translator misreads “coffee” as “cough,” leading to an unwanted call.  
- *Missing data*: Inventory service down → agent can’t confirm availability and must abort gracefully.  
- *Payment hiccup*: Gateway timeout → the agent rolls back earlier steps to avoid double‑charging.

By treating each phone task like a recipe, AutoGLM keeps the process clear, modular, and recoverable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
