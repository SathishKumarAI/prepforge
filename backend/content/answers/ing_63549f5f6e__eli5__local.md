---
qid: ing_63549f5f6e__eli5__local
question: 'Q13: How do you implement tool use / function calling?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 226
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:29-05:00'
sources: []
---

**Imagine your AI is a chef in a kitchen that can only cook dishes if it has the right ingredients and recipes.**  
When the user asks for something—say, “Make me a chocolate cake”—the AI first checks its pantry (its knowledge base). If it lacks an ingredient, it calls a *tool* like a grocery‑delivery app. The tool is just another program that can fetch data or perform actions.  

In practice, you give the AI a list of available tools—each with a short name and a description (“search_web” finds current info, “calc” does math). When the AI decides it needs more than what its memory holds, it sends a *function call* to the chosen tool, passing any needed arguments. The tool runs, returns results, and the AI uses those results to finish the answer.  

So think of tools as kitchen appliances that the chef (AI) can “call on” whenever a recipe step requires something beyond its own pantry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
