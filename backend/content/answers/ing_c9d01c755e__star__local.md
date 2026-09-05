---
qid: ing_c9d01c755e__star__local
question: 'Explain: The Instruction Hierarchy — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 361
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:12:47-05:00'
sources: []
---

**Situation** – In mid‑2024 I was leading a feature rollout for our customer support chatbot at a fintech startup. The bot’s accuracy on policy queries had dipped to 68 % after an update, and we needed to get it back above 85 % before the quarterly audit.

**Task** – My goal was to redesign the prompt architecture so that the model could reliably interpret user intent, apply business rules, and generate concise responses without hallucinating sensitive data.

**Action** – I broke the instruction hierarchy into three layers: (1) *Context layer* – I provided a short system message summarizing company policy, using the `system` role in OpenAI’s API; (2) *Directive layer* – I crafted a user‑level prompt that explicitly asked for compliance‑aware answers and included a safety check clause; (3) *Example layer* – I appended a few exemplars of correct responses with token‑count annotations to guide the model. I then iterated using A/B tests, tuning temperature from 0.2 to 0.1 and limiting response length to 90 tokens. The hierarchy also allowed me to swap in a domain‑specific embedding layer for nuanced financial terms.

**Result** – After deploying the new prompt stack, the chatbot’s policy‑query accuracy jumped to 87 %, reducing audit risk by 15 points and cutting manual review time from 12 hrs/week to 3 hrs. I learned that a clear instruction hierarchy not only improves model fidelity but also makes troubleshooting and scaling far more systematic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
