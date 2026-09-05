---
qid: ing_6469920c19__eli5__local
question: 'Explain: Bottlenecks: Compute-Bound vs. Memory-Bound'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 240
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:11-05:00'
sources: []
---

Imagine a factory that makes custom cakes (the AI model). Two parts of the factory can slow it down:

**Compute‑bound** – The ovens are tiny and slow. Even if you have all the ingredients ready, the baking step itself is the bottleneck because each cake needs a lot of oven time. In AI terms, this happens when the processor has to do many arithmetic operations (flops) and its speed limits the overall performance.

**Memory‑bound** – The ovens are fine, but the pantry is cramped. Workers keep running back and forth to fetch ingredients, so the whole line stalls waiting for data. Here the bottleneck is the speed of moving information between memory and the processor, not how fast calculations can run.

So, a compute‑bound AI model struggles because its “oven” (CPU/GPU) can’t finish arithmetic quickly enough; a memory‑bound model struggles because it spends too much time shuffling data in and out of memory. Understanding which part is slower helps engineers decide whether to upgrade the processor or the memory bandwidth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
