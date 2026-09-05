---
qid: ing_c07b5c2105__eli5__local
question: 'Explain: Notes — Which Latency Numbers Should You Know?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 191
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:46-05:00'
sources: []
---

Imagine you’re baking a cake and want to know how long it will take from start to finish. In machine learning the “latency” is that time—how fast your model can give an answer after you ask it. There are three key numbers:

1. **Inference latency** – the instant a single request (like classifying one image) finishes.  
2. **Batch latency** – how long a whole batch of requests takes when processed together; useful for servers that handle many users at once.  
3. **End‑to‑end latency** – everything from when you send the data, through any pre‑processing, the model’s calculation, to delivering the result.

Knowing all three lets you pick the right hardware and design so your app feels snappy to users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
