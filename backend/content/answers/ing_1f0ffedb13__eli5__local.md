---
qid: ing_1f0ffedb13__eli5__local
question: 'Explain: Multimodal models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 255
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:25:28-05:00'
sources: []
---

Imagine you’re renting a smart kitchen that can cook, bake, and even brew coffee all at once. Each appliance (the stove, oven, espresso machine) is a *modal*—a different type of task the kitchen can do: text, images, audio, etc. A **multimodal model** in AI is like that kitchen; it can take any combination of inputs—pictures, words, sounds—and produce useful outputs.

When OpenAI sells access to this “smart kitchen” through its API, they charge by how many *appliance uses* you make. Think of each request as turning on one or more appliances for a short time. If you ask the model to read a photo and describe it in words, that’s two appliance uses at once: image‑to‑text and text‑generation. The price is simply the sum of those uses.

So, just like paying per minute per appliance in a rental kitchen, OpenAI charges per “modal use” (or token) you consume. The more modalities you mix—image + video + language—the higher the cost, because you’re using more of the model’s resources at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
