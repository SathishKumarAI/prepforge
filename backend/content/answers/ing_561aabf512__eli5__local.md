---
qid: ing_561aabf512__eli5__local
question: 'Explain: Quantization — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 230
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:14-05:00'
sources: []
---

Think of an AI model as a high‑resolution photograph that you want to show on a phone screen. The full photo (the original weights) uses many colors, so it looks sharp but takes up a lot of memory and needs a powerful processor to display quickly. **Quantization** is like converting that photo into a compressed JPEG: we reduce the number of color shades from millions to just a few thousand or even hundreds. In AI terms, each weight in the model is rounded to a smaller set of possible values (for example, 8‑bit integers instead of 32‑bit floats).  

When the model runs on real devices—phones, cars, smart speakers—the lower‑precision numbers make calculations faster and use less battery. The image still looks good because the important patterns are preserved; the fine details that a human eye can’t notice are lost, but the AI’s predictions stay accurate enough for everyday tasks. This trade‑off lets us deploy powerful models on modest hardware while keeping performance high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
