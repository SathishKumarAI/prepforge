---
qid: ing_abfe347b16__eli5__local
question: 'Q: What determines TTFT vs TPS? — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 296
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:10:17-05:00'
sources: []
---

Imagine a factory that makes pizzas.  
* **Time to First Token (TTFT)** is how long it takes from the moment you place an order until the first slice leaves the oven—think of it as “time‑to‑first bite.”  
* **Tokens Per Second (TPS)** is how many slices the factory can hand out each second once it’s running smoothly.

What decides TTFT? The length of the longest single step in the line: if the dough takes a long time to rise, that delays the first slice. In an AI model this is the slowest layer or the biggest input that must be processed before any output appears.

What decides TPS? How many workers (parallel processors) can work on different slices at once and how quickly each worker can finish its part. If you add more ovens (GPU cores) or streamline the toppings step, the factory can serve more slices per second.

So: **TTFT** is limited by the slowest single operation; **TPS** is limited by how many operations can run in parallel and how fast each runs. The same pipeline design that shortens the longest step also helps increase TPS, but they are distinct performance measures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
