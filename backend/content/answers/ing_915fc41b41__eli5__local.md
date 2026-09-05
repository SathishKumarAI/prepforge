---
qid: ing_915fc41b41__eli5__local
question: 'Explain: Int8 — Inside Kaiju - building conversational models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 213
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:27:23-05:00'
sources: []
---

Imagine you’re baking a huge cake (the conversation model) that needs to be made quickly and in many flavors for different customers (users). **Int8** is like using a special, tiny cookie cutter that cuts the batter into 8‑bit pieces instead of full‑sized chunks. Those small pieces are lighter, so you can stack more of them on a tray at once and bake faster, without losing the cake’s taste.

In **Kaiju**, the team builds conversational models the size of a city’s data center. By converting all the model’s numbers from big 32‑bit floats to these compact 8‑bit integers (Int8), they shrink the “cake” dramatically—less memory, less power, and quicker training. The recipe stays the same, so the final cake still satisfies everyone’s appetite, but it can be produced at a massive scale without breaking the kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
