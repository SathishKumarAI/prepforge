---
qid: ing_5cf985b6fc__eli5__local
question: 'Explain: Tool Calling — GitHub - MoonshotAI/Kimi-K2: Kimi K2 is the large
  language model series developed by Moonshot AI team \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 282
total_tokens: 468
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:03:43-05:00'
sources: []
---

Think of a large‑language model (LLM) like a very chatty chef who knows how to cook everything you ask but can’t actually pick up the pans or stir the pot. **Tool calling** is the way that chef uses helpers—like a stove, oven, blender, or measuring cup—to finish the dish.

When you give the LLM a recipe (a prompt), it first decides which helper tools it needs: maybe “open the oven” or “measure 2 cups of flour.” It then sends a short command to the right tool. The tool does its job and returns the result—“oven is now at 350°F” or “flour measured.” The LLM receives that answer, updates its own state, and keeps cooking until the dish (the final output) is ready.

In Moonshot AI’s Kimi‑K2, this same idea lets the model call external programs—like GitHub APIs—to pull code, run tests, or fetch data. It can plan a series of tool calls, execute them one by one, and weave their results into its answer. So, tool calling turns an LLM from a clever conversationalist into a practical worker that can interact with real software just like a human would use tools to complete a task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
