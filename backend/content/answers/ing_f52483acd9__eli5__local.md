---
qid: ing_f52483acd9__eli5__local
question: How do you design good tool/function definitions for an LLM? What makes
  tool calling fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 261
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:02:50-05:00'
sources: []
---

Think of a large language model (LLM) as a very smart chef who can cook many dishes but needs clear recipes and reliable kitchen tools.  
**Good “tool” definitions are like well‑labeled utensils in that kitchen.**  
* **Name:** tells the chef what the tool does, just as “sauté pan” says it’s for quick frying.  
* **Purpose:** a short sentence (e.g., “convert temperatures”) so the chef knows when to use it.  
* **Inputs and outputs:** list exactly what the chef must hand over (e.g., temperature value) and what will come back (converted value).  
* **Constraints:** note limits (max 10 items, no negative numbers) so the chef won’t ask for something impossible.

When a tool is vague—missing a name, unclear inputs, or missing constraints—the chef gets confused. It may try to guess, pass wrong data, or even skip the tool entirely. That’s why tool‑calling can fail: the model doesn’t know *how* to hand off information properly. Clear, concise “recipe cards” for each tool keep the LLM’s kitchen running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
