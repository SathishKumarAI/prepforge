---
qid: ing_b34c04a84f__eli5__local
question: 'Explain: The Self-Correction Loop — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 208
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:21:09-05:00'
sources: []
---

Think of an AI system as a chef who keeps tasting the soup while cooking.  
**Input → Model → Output** is like adding ingredients and stirring, but the chef also **samples** the dish (the self‑correction loop). The sample goes back to the kitchen: if it’s too salty, the chef reduces salt; if it’s bland, they add spice. In AI terms, the model’s own predictions are fed into a feedback network that evaluates them against a target or a higher‑level rule. If the output drifts, the system nudges its parameters back on track—much like a thermostat keeping temperature steady. This loop is an *architecture pattern* because it can be layered onto many models: vision systems, language models, or reinforcement learners. It gives the AI a built‑in “taste test” that continually polishes accuracy and safety without human intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
