---
qid: ing_2f768cabcd__eli5__local
question: What is KV-cache quantization, and when is it the right lever?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 191
total_tokens: 353
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:51:14-05:00'
sources: []
---

Think of a big recipe book (the model) that remembers every flavor it’s ever seen. When you ask a new question, the book pulls out only the pages it needs right now—those “key‑value” pages are the KV cache.  
Quantization is like shrinking each page to use less ink: you replace full‑size numbers with smaller, approximate ones so the book fits on a lighter shelf and can be read faster.  

KV‑cache quantization means compressing those cached pages while keeping the recipe readable enough for the model to finish cooking the answer quickly. It’s best when you need real‑time responses or have limited memory—like serving a large crowd with a small kitchen. If accuracy must stay perfect, skip it; otherwise, it saves speed and space without losing much flavor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
