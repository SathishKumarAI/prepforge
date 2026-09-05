---
qid: ing_84a730904e__eli5__local
question: 'Explain: The Dual-LLM Defense Pattern — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 202
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:06-05:00'
sources: []
---

Imagine you’re a chef who can cook two dishes at once. One dish is the *recipe book* (the first LLM) that tells the kitchen what to do. The second dish is a *taste‑tester* (the second LLM) that watches the cooking and checks for any bad ingredients sneaked in by an impatient helper.

When someone tries to “inject” a harmful instruction—like telling the chef to add poison—the recipe book follows the instruction, but before it reaches the stove the taste‑tester reviews the entire plan. If the tester spots anything suspicious (the poison), it stops the dish and rewrites the instruction safely. By running the same request through two separate LLMs in sequence—first for generation, then for verification—you create a double safety net that catches prompt‑injection tricks before they cause harm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
