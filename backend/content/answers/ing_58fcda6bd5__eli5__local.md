---
qid: ing_58fcda6bd5__eli5__local
question: What is chunked prefill and what scheduling problem does it fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 212
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:19-05:00'
sources: []
---

Imagine you’re baking a big cake that takes hours to bake, but the oven can only hold a few slices at once. If you put all slices in together (normal “prefill”), they crowd each other and the oven’s heat gets uneven—some parts finish early while others lag, wasting time.  

**Chunked prefill** is like baking the cake slice by slice: first bake one small section, let it cool a bit, then add the next. Each chunk uses the oven’s capacity efficiently, keeps the temperature stable, and lets you start serving slices sooner.  

The scheduling problem it fixes is the “resource‑contention bottleneck” in large language models: when many tokens are generated at once, GPU memory and compute get starved. By breaking the prefill into manageable chunks, the model can stream data to the GPU without stalling, improving throughput and reducing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
