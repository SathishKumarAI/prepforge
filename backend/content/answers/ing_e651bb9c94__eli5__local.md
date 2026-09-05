---
qid: ing_e651bb9c94__eli5__local
question: 'Why is this hard? — Blockdiff: How we built our own file format for VM
  disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 255
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:39:48-05:00'
sources: []
---

Imagine you’re trying to write a new recipe book that will let any chef instantly recreate a dish exactly as it was cooked yesterday, even if the kitchen has changed its layout or upgraded its appliances. In machine‑learning terms, the “dish” is a virtual‑machine snapshot, and the recipe book is your custom file format.

A good recipe must list every ingredient (the exact state of each disk block), describe how they were mixed (how blocks changed over time), and keep track of where each part goes in the final dish (the VM’s memory layout). But real kitchens are messy: ingredients can be missing, appliances change, or new ingredients appear. Likewise, a snapshot format must handle different hardware, file‑system quirks, and evolving VM features.

So building such a format is hard because you need to design a language that captures every nuance of the VM’s state, stays flexible enough for future changes, and still lets anyone read it quickly—just like creating a universal recipe book that works in any kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
