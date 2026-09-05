---
qid: ing_6e395bf6d8__eli5__local
question: 'Explain: External Side Effects — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 213
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:31:11-05:00'
sources: []
---

Imagine you’re baking a cake for a birthday party, and the oven is your machine‑learning service that “creates” predictions. If you accidentally hit the button twice, you don’t want two cakes (two different outputs) or ruined batter (errors). **Idempotency** means no matter how many times you ask the same question—“What’s the probability of rain tomorrow?”—the oven will give you the same single answer and won’t keep adding layers.  

In system design, this is like a recipe that guarantees the same result every time it runs with the same input. It protects against duplicate requests (network glitches, retries) and keeps side effects—like writing to a database or sending an email—consistent. Think of idempotency as a self‑cleaning oven: pressing the button once cooks the cake; pressing it again does nothing new, keeping the kitchen tidy and the outcome reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
