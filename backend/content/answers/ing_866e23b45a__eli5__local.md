---
qid: ing_866e23b45a__eli5__local
question: 'Explain: How They Work — Diffusion Llms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 202
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:09:25-05:00'
sources: []
---

Imagine a blurry photograph that gradually becomes clear as you gently press a smooth stone across it. Each stroke removes one layer of fuzz until the picture’s details appear. A diffusion language model works in the same way, but with words instead of pixels.

At first the model starts with random noise—think of it as a completely scrambled sentence. It then “diffuses” this noise backwards: at each step it peeks at the current noisy text and predicts what a slightly cleaner version should look like. The model learns from millions of real sentences how to make those predictions, so over many tiny corrections the mess turns into a coherent paragraph that matches the prompt.

In short, diffusion LLMs slowly reverse random noise into meaningful language by learning the step‑by‑step cleanup process from large text collections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
