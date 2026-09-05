---
qid: ing_5fb9b30f49__eli5__local
question: 'Explain: Quantization choice — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 209
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:08:24-05:00'
sources: []
---

Imagine your AI model is a high‑resolution digital photo that’s too heavy for some phones to run quickly. **Quantization** is like converting that photo into a lower‑color palette—each pixel now uses fewer bits, so the file shrinks and loads faster. In a *Customer Distillation Pipeline*, you first train a big, powerful “teacher” model (the full‑resolution photo). Then you create a smaller “student” model that learns to mimic the teacher’s predictions, but it’s built with this lighter palette from quantization. The choice of how many bits to keep (e.g., 8‑bit vs 4‑bit) balances speed and accuracy: fewer bits mean faster inference on edge devices but may lose some detail. By tuning this setting, you let customers run advanced AI on modest hardware without a huge drop in performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
