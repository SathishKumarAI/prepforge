---
qid: ing_c95a3deda6__eli5__local
question: What are Agent Skills, and when do you package knowledge as a skill rather
  than a tool, an MCP server, or retrieval?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 254
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:54:27-05:00'
sources: []
---

Think of an AI “agent” like a smart chef in a kitchen.  
* **Skills** are the recipes it knows—complete instructions that turn raw ingredients into a finished dish, with choices and adjustments built‑in (e.g., how to sauté onions until golden).  
* **Tools** are the utensils—spatulas, knives, ovens—that help execute those steps but don’t decide what to cook.  
* An **MCP server** is like the pantry’s inventory system: it stores ingredients and lets the chef find them quickly.  
* **Retrieval** is the recipe book lookup: when the chef needs a specific tip or ingredient fact, it pulls that page from memory.

You package something as a *skill* when it represents a self‑contained process the agent can perform on its own—deciding sequence, handling variations, and producing an output. If it’s just a single function (cutting veggies) or a data source lookup, keep it as a tool, server, or retrieval step. This keeps the chef focused: recipes guide the cooking flow; tools and pantry help along the way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
