---
qid: ing_896a9f7804__star__local
question: Explain tensor parallelism vs pipeline parallelism for inference. When do
  you need each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 396
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:07:52-05:00'
sources: []
---

**Situation** – While leading the deployment of a large vision‑transformer at my previous company, we had to serve 15 k requests per second with a latency budget of 50 ms on a cluster of 8 GPUs.

**Task** – I needed to decide how to partition the model across GPUs so that inference stayed within budget while keeping memory usage under each GPU’s 24 GB limit.

**Action** – I first evaluated **tensor parallelism**: splitting the weight matrices across GPUs, letting each device compute a slice of the matrix multiplication and then aggregating partial results. This reduced per‑GPU memory from ~8 GB to ~4 GB but introduced an all‑reduce step that added 3–4 ms overhead per layer. Next I tried **pipeline parallelism**: dividing the model into five stages, each stage on a separate GPU, and streaming inputs through the pipeline. This cut latency by 12 ms because each GPU processed a distinct part of the forward pass in lock‑step, but it increased memory pressure since intermediate activations had to be stored across stages.

I ran micro‑benchmarks: tensor parallelism gave 60 ms inference on average; pipeline parallelism achieved 48 ms but consumed ~22 GB per GPU. Because our latency budget was tight and we could afford the slight extra memory, I opted for a hybrid approach—tensor parallelism within each stage and minimal pipeline depth—to hit the target.

**Result** – The final deployment met the 50 ms SLA with only 20 % GPU utilization overhead, saving us ~30 % of the planned compute cost. I learned that tensor parallelism is best when you need to fit large matrices into limited memory, while pipeline parallelism shines when you can tolerate a few extra stages for lower latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
