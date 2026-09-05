---
qid: ing_eaa1e6e0bb__eli5__local
question: Your AI feature can call tools - search, email, database writes. What does
  prompt injection mean for your design?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 223
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:46:46-05:00'
sources: []
---

Think of your AI as a helpful chef who follows recipes (prompts) to make dishes. Sometimes the recipe is written in a secret language that only the chef understands, so it knows whether to add salt, stir, or call on a sous‑chef (a tool like search or email). **Prompt injection** is when someone sneaks a new line into the recipe that tricks the chef into doing something they weren’t meant to do—like ordering an extra dish from the wrong kitchen or sending a message without permission.

In our design, we treat every tool call as a separate “order” that must be approved by a safety guard. The guard checks the injected line before it reaches the chef’s kitchen. If the line tries to bypass the guard (e.g., telling the chef to send an email with hidden content), the guard stops it and logs the attempt. Thus, prompt injection is a way attackers try to rewrite the recipe to misuse tools; our system blocks that by validating every instruction before execution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
