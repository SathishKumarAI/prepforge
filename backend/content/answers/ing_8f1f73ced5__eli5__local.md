---
qid: ing_8f1f73ced5__eli5__local
question: 'Q: How do you protect an LLM application from prompt injection?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 186
total_tokens: 347
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:56-05:00'
sources: []
---

Imagine your LLM is a smart kitchen robot that follows recipes (prompts) to make dishes. Prompt injection is like someone slipping a hidden note into the recipe, telling the robot to add a dangerous ingredient or skip safety steps. To keep it safe you set up three guards:

1. **Recipe filter** – before giving any recipe to the robot, scan it for suspicious instructions (“add poison”) and block or rewrite them.
2. **Ingredient whitelist** – let the robot only use approved ingredients (pre‑approved words or phrases). Anything outside that list is ignored.
3. **Safety monitor** – watch the robot’s output in real time; if it starts cooking something it shouldn’t, stop the process immediately.

By combining these filters you keep the robot from following malicious hidden instructions while still letting it cook useful dishes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
