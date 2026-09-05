---
qid: ing_8e134376d4__eli5__local
question: 'Explain: Give me the intuition for how diffusion models generate images.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 199
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:22:00-05:00'
sources: []
---

Imagine you’re a painter who starts with a canvas covered in random splashes of paint—this is like a noisy image. A diffusion model learns two steps: first, it knows how to add those splashes (the “forward” process) until the picture looks just static; second, it learns how to carefully brush away the splashes one by one (the “reverse” process) so that at each step a little more of the intended image emerges.

Think of it as a game of undoing a messy doodle. The model has seen many examples of clean drawings and their noisy versions, so when you give it a new chaotic splash‑blank canvas, it gradually removes noise in small increments, guided by what a clear picture should look like at each level. By the end, those splashes have been turned into crisp shapes—an image that looks as if it were painted from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
