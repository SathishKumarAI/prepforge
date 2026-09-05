---
qid: ing_8b6903db11__eli5__local
question: 'Explain: Continuous Batching (Iteration-level) — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 267
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:17:28-05:00'
sources: []
---

Imagine you’re a chef in a busy kitchen that must prepare many dishes every hour. Instead of cooking one dish at a time (which would waste prep time and slow down the whole shift), you gather all the ingredients for several orders and cook them together in one pot or pan. That’s *continuous batching*—you keep piling new “ingredients” (data samples) into a growing batch while the stove is still working on the previous ones.

In AI training, each “dish” is an input example, and the stove is your model’s learning step. The **iteration‑level** batch is the group of examples you feed to the model at once. By continuously adding new examples as soon as they arrive—without waiting for a fixed-sized queue—you keep the GPU busy, reduce idle time, and smooth out training speed.

Key terms:  
*Batch*: A set of data points processed together.  
*Iteration*: One update step where the model sees a batch and adjusts its weights.  

Like a chef who never stops chopping while simmering, continuous batching keeps the learning loop humming, improving efficiency without changing how the recipes (the model) are cooked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
