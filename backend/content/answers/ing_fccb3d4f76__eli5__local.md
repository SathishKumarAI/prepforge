---
qid: ing_fccb3d4f76__eli5__local
question: 'Explain: An LPU has no HBM at all, just on-die SRAM. Redo the decode roofline
  argument for that machine and tell me what changes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 268
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:15:09-05:00'
sources: []
---

Think of a computer as a kitchen where chefs (the CPU cores) make dishes (compute). In the usual “roofline” picture, we draw two limits: one from how fast the chefs can work together (compute peak), and another from how quickly ingredients can be delivered to them (memory bandwidth).  
When a chip has **HBM**—a high‑speed, wide pantry—ingredients rush in at a very large rate, so the roofline’s memory side is steep.  

If the chip uses only **on‑die SRAM** (tiny drawers inside each chef’s station) and no HBM, the pantry becomes narrow: ingredients can be fetched only from those small drawers or by shuttling them between chefs, which takes time. The memory bandwidth limit drops dramatically, flattening the roofline’s slope.  

Thus, for an LPU without HBM, the decode roofline shifts downward on the memory‑bandwidth side; performance becomes limited sooner by how fast data can be moved from SRAM rather than by raw compute power. This means more work must stay local to each core or be tightly reused, otherwise the chip stalls waiting for data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
