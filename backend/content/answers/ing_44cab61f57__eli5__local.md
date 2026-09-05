---
qid: ing_44cab61f57__eli5__local
question: 'Explain: When is a workload compute-bound vs memory-bound on a GPU? Do
  the roofline math for transformer prefill vs decode.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 341
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:25:40-05:00'
sources: []
---

Think of a GPU like a kitchen where you can either cook many dishes (compute) or fetch ingredients from the pantry (memory).  
*Compute‑bound*: the stove burners are full and cooking time dominates; the pantry is fast enough that the only limit is how quickly the burners can work.  
*Memory‑bound*: the burners are idle because the chef keeps stopping to grab more spices; the kitchen’s speed is limited by how fast ingredients arrive.

**Roofline math (simplified)**  
- *Prefill*: a transformer layer does about 4 × 10⁹ floating‑point operations per token and needs ~0.5 GB of data. On an A100, compute peak ≈ 19 TFLOPs, memory bandwidth ≈ 1555 GB/s. Compute intensity ≈ 8 FLOP/byte → roofline shows a *compute‑bound* regime; speed is limited by the 19 TFLOPs ceiling.  
- *Decode*: each new token requires ~0.3 GB of data but only 1 × 10⁹ FLOPs. Intensity ≈ 3 FLOP/byte, so roofline hits the memory‑bandwidth limit (1555 GB/s). Here the GPU is *memory‑bound*; more bandwidth would speed up decoding.  

Thus prefill runs on the compute ceiling, decode on the memory ceiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
