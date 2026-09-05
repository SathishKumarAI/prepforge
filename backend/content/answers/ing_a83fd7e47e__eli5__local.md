---
qid: ing_a83fd7e47e__eli5__local
question: We set temperature to 0. The outputs are deterministic now, right?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 162
total_tokens: 324
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:42-05:00'
sources: []
---

Think of “temperature” as a spice rack that decides how much randomness you let into an AI’s answer. When the temperature is **0**, it’s like taking the recipe out of the kitchen entirely—every time you ask a question, the AI follows the exact same instructions and produces the very same response.

In this mode the model behaves deterministically: if you give it the same prompt again, it will always spit out the same text. The only thing that can change the answer is something outside the prompt itself (like a new version of the model). So setting temperature to 0 turns off any “creative” wiggle room and guarantees repeatable, predictable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
