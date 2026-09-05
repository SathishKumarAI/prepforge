---
qid: ing_5da3e32d99__eli5__local
question: 'Explain: Tool calling mechanics — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 202
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:04:51-05:00'
sources: []
---

Imagine you’re cooking a meal with a smart kitchen assistant. The *agent* is the assistant’s mind—its plan for what to do next (e.g., “I need a recipe”). But it can’t cook itself; it needs tools: a stove, a blender, a cookbook app. In AI, an agent is a program that decides on actions based on its goal. When it realizes it needs something beyond its own abilities—say, looking up data or running a simulation—it *calls a tool*. Each tool is a separate function (like “search the web” or “calculate a formula”) that the agent can invoke by sending a request and receiving a response. The agent then uses the returned information to update its plan, just as you would read a recipe step and then use the stove. This back‑and‑forth lets the agent accomplish tasks it couldn’t finish alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
