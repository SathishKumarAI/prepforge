---
qid: ing_33a2d3a5db__eli5__local
question: 'Why incremental VM snapshots? — Blockdiff: How we built our own file format
  for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 230
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:57:56-05:00'
sources: []
---

Think of a virtual machine (VM) as a huge photo album that keeps growing every time you add new pictures (files, programs, settings).  
An **incremental snapshot** is like making a copy of the album but only noting the *new* pages added since the last copy. If you want to see what changed after yesterday’s update, you just look at today’s “difference” page instead of re‑reading the whole album.

Why do this?  
1. **Speed** – Copying only new changes takes far less time than copying every page again.  
2. **Space** – You store only the differences, not duplicate data, so the archive stays small.  
3. **Recovery** – If you need to roll back, you can rebuild the whole album by stacking the old copy and all later difference pages.

So incremental snapshots are a clever way to keep track of changes quickly and cheaply, just like jotting down only what’s new in a notebook instead of rewriting everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
