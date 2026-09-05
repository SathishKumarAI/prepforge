---
qid: ing_7c2ed89fbe__eli5__local
question: Explain arithmetic intensity and the roofline model as applied to LLM inference.
  Why does batching improve decode throughput so dramatically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 253
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:53:44-05:00'
sources: []
---

Think of a big factory that makes cookies (the LLM) and two machines: a mixer (CPU/GPU cores) and an oven (memory bus). **Arithmetic intensity** is how many mixing steps you do for each cookie before sending it to the oven—if you mix a lot with little transport, the factory uses the mixer’s power well. The **roofline model** draws a ceiling that shows the best possible speed: one side comes from how fast the mixer can work (compute peak), the other from how quickly cookies can get into the oven (memory bandwidth).  

When you **batch** several decoding requests together, it’s like mixing many cookie batches at once. The mixer uses its full capacity (high arithmetic intensity) while the same set of ingredients travels through the oven only a few times, so the memory bus isn’t the bottleneck. This shift from memory‑bound to compute‑bound operation lets throughput jump dramatically—like moving from a slow single‑handed chef to an efficient assembly line that keeps all stations busy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
