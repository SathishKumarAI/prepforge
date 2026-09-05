---
qid: ing_8c30170181__eli5__local
question: How does prompt injection work against agents via tool results, and what
  actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 239
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:18:38-05:00'
sources: []
---

Imagine an agent as a chef who follows your recipe (the prompt) but can also ask the kitchen’s pantry for extra ingredients (“tools”). Prompt injection is like slipping a note into that pantry request telling the chef, “Add this secret spice to every dish.” The agent receives the pantry’s answer, thinks it’s normal, and happily mixes in the hidden ingredient—this changes the final meal (the output) without you noticing.

The agent gets tricked because it trusts any text returned by its tools as useful. To stop it, we can:

* **Validate tool outputs** – check that what comes back fits a strict format or known vocabulary before using it.
* **Limit tool access** – give the agent only the specific tools it truly needs and keep others off‑limits.
* **Separate “thinking” from “acting”** – let the agent decide when to use a tool, then double‑check the result.

By treating tool responses like unverified pantry items—checking them first and restricting what can be requested—we keep the chef from adding unwanted spices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
