---
qid: ing_b4185d6309__eli5__local
question: 'Explain: Architecture — Self-host Langfuse (Open Source LLM Observability)
  - Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 272
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:32-05:00'
sources: []
---

Imagine your language model is a busy kitchen, and every dish it prepares (a prompt run) has a recipe card. **Langfuse** is the kitchen’s smart pantry that watches each card, records what ingredients were used, how long cooking took, and whether the dish was tasty enough.

When you *self‑host* Langfuse, you set up three simple stations:

1. **Collector (API Gateway)** – every time your model receives a prompt, it hands the recipe card to this station. Think of it as a cashier that writes down each order before sending it on.
2. **Processor (Event Store & Worker)** – here, cards are stored in a fast database and workers pull them later to add extra details—like checking if the temperature was right or if the timing matched expectations.
3. **Dashboard (UI & Query Layer)** – this is your front‑of‑house display that lets you see all past orders, spot patterns, and tweak recipes.

All of these parts run on your own servers, so you keep full control over data while still having a clear, real‑time view of every LLM “dish” served.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
