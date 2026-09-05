---
qid: vq_c8d44a8b04__eli5__local
question: what is MapReduce?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 239
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:33-05:00'
sources: []
---

Think of MapReduce like a big kitchen that cooks many orders at once.  
**Map** is the prep station: each cook takes a single order (a piece of data) and chops it into smaller, useful pieces—like turning a whole pizza into slices or a list of names into individual first‑names.  
**Shuffle** is the passing line where all the cooks hand their sliced items to the right stations based on a label (e.g., all “first‑name” slices go to the same station).  
**Reduce** is the plating station: each station takes its pile, adds up or combines them—like adding all the first‑names together to count how many times each appears.  

The result is one clean dish (the final output) made from countless small steps that can be done in parallel on a cluster of machines.  
*Unavoidable terms:* **Cluster** – a group of computers working together; **Parallel** – doing several tasks at the same time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
