---
qid: ing_9a1a043168__eli5__local
question: 'Explain: Design the training setup for a model that doesn''t fit on one
  accelerator - say 70B parameters on a pod of accelerators.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 307
total_tokens: 482
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:12-05:00'
sources: []
---

Imagine the model as a gigantic library that can’t fit into one book‑case (accelerator). Instead of stuffing it all in one place, we spread the books across many shelves in a library building (a pod of accelerators).  

**Step 1 – Split the books by topic.**  
We divide the 70 B parameters into groups (“shards”) and put each group on its own shelf. Each shelf can read and write its own set of pages at the same time, so no shelf has to wait for another.

**Step 2 – Share the readers.**  
When a training batch arrives, many visitors (data replicas) come in. Every visitor reads the same set of pages from each shelf simultaneously—this is *data parallelism*. Each visitor writes back its own “thoughts” (gradients) to its copy of the shelves.

**Step 3 – Combine the thoughts.**  
After everyone has written, we gather all the “thoughts” from every shelf and average them so every shelf ends up with the same updated pages. That keeps the library coherent.

By sharding the parameters across many accelerators and letting many data copies work in parallel, we can train a 70‑B model even though no single accelerator can hold it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
