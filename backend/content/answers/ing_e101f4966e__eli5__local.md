---
qid: ing_e101f4966e__eli5__local
question: What is Prompt Injection? — Prompt Injection Defense
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 183
total_tokens: 339
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:31:58-05:00'
sources: []
---

Imagine you’re at a smart kitchen where a robot chef (the AI) follows your recipe card to make a dish. A prompt injection is like someone sneaking a secret note into that card, telling the chef to add an extra ingredient or skip a step—something you didn’t intend. The robot reads the whole card blindly, so it will follow the hidden instruction even if it’s harmful or wrong.

To defend against this, chefs put “tamper‑proof” seals on recipe cards and only accept recipes that come from trusted sources. In AI terms, we check the prompt for suspicious injections before feeding it to the model, use safe input formats, and give the AI a strict “do not add or remove anything unless explicitly told.” This keeps the robot doing what you really asked, without hidden tricks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
