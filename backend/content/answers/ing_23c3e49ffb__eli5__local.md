---
qid: ing_23c3e49ffb__eli5__local
question: 'Explain: Build a Tool-Calling Agent — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 249
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:32:46-05:00'
sources: []
---

Imagine your AI is a chef who can only cook by asking the kitchen staff for ingredients or tools. A **tool‑calling agent** is that chef: it reads a recipe (the user’s request), decides which helper (a tool) to ask, sends the exact question, receives the answer, and then uses it to finish the dish.

In Haystack’s tutorial, you first set up the *tools*—functions like “search the web,” “look up a dictionary entry,” or “run a calculator.” Next, you build the *agent*, a tiny program that can:
1. **Understand** what the user wants (e.g., “What is the capital of France?”).
2. **Decide** which tool best answers it (“search the web”).
3. **Call** that tool with the right prompt.
4. **Combine** the tool’s reply back into a final answer.

The result is an AI that doesn’t just spit out guesses; it *consults* reliable services, just like a chef who asks for fresh produce when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
