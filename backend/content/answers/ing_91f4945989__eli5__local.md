---
qid: ing_91f4945989__eli5__local
question: 'Explain: Bandwidth — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 268
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:29:09-05:00'
sources: []
---

Think of a machine‑learning pipeline as a busy highway that carries data from sensors to a cloud “brain.”  
**Bandwidth** is the width of that highway – how many cars (bytes) can travel per second without piling up. In ML, it tells you whether your model can keep up with incoming images, text, or sensor streams.

A **back‑of‑the‑envelope estimate** is a quick, rough calculation to see if the highway will be wide enough. For example, if each image is 1 MB and your camera sends one every 0.5 seconds, you need at least  
\( \frac{1\,\text{MB}}{0.5\,\text{s}} = 2\,\text{MB/s} \) of bandwidth.  

If the network only offers 1 MB/s, data will queue and the model’s predictions lag behind—just like cars stuck in traffic.  
So, when designing an ML system, first sketch this simple math: data size × rate ÷ available bandwidth. If it doesn’t fit, you’ll need a faster link or to compress the data before sending.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
