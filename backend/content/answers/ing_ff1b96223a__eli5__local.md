---
qid: ing_ff1b96223a__eli5__local
question: 'Explain: Agent Skills (SKILL.md) — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 235
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:19:00-05:00'
sources: []
---

Imagine an AI assistant as a chef in a kitchen that can only use the tools on the counter—spatulas, knives, ovens, and so on. Each tool is a *skill*: the knife knows how to chop, the oven knows how to bake, and the spatula knows how to flip. The chef (the agent) doesn’t know how to cook a dish from scratch; instead, it follows a recipe that tells it which skill to call when it needs a specific action.

In this analogy, *tools* are software modules that perform concrete tasks—searching the web, translating text, or drawing a graph. The *agent* is the orchestrator: it decides “I need a translation now,” picks the translation tool, and feeds it the right input. By combining many such tools, the agent can solve complex problems without ever having to learn each task itself. This modular approach lets developers add new skills (tools) easily, just like swapping in a new kitchen gadget, while keeping the chef’s recipe logic unchanged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
