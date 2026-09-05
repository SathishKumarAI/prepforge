---
qid: ing_83c1e4418a__eli5__local
question: 'Explain: Tool Composition: Chaining Tools — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 237
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:05:44-05:00'
sources: []
---

Imagine you’re cooking a fancy meal, but instead of one chef, you have several specialized helpers—one who chops vegetables, another who marinates meat, a third who grills, and a fourth who plates the dish. Each helper (tool) knows exactly how to perform its part, but they can’t do everything alone. By handing the partially prepared food from one helper to the next in a clear order, you create a smooth cooking flow that turns raw ingredients into a finished meal.

In AI, *tool composition* works the same way. A “tool” is a small program or model that does one thing—like summarizing text, translating language, or searching the web. A *tool agent* strings these tools together in a chain: it sends data to Tool A, takes Tool A’s output and feeds it into Tool B, then maybe asks Tool C for more info, and finally presents a polished answer. This chaining lets complex tasks be solved by coordinating simple, reliable pieces rather than building one huge monolithic model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
