---
qid: ing_362216b129__eli5__local
question: 'Explain: Creating Function-Calling Endpoints — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 231
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:01:34-05:00'
sources: []
---

Imagine a robot chef that can cook any dish you ask, but it only knows how to chop, stir, and bake. To make it more useful, we give the chef “tool cards” – each card tells it exactly how to use a new kitchen gadget: a blender, a sous‑vide machine, or a food thermometer.  

In AI, those tool cards are **function‑calling endpoints**. Each endpoint is a small program (a function) that does one clear job—like translating text, searching the web, or checking the weather. We expose it with a simple name and a list of inputs it needs, just as a card lists the ingredients and steps. The AI “chef” (the agent) looks at its task, picks the right card, sends the required data, and receives back the result.  

By chaining these calls, the agent can solve complex problems without writing everything from scratch—just like our chef can make a gourmet meal by combining basic kitchen tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
