---
qid: ing_1eb266ddfe__eli5__local
question: 'Explain: in you know plain English before that — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 218
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:24:56-05:00'
sources: []
---

Imagine a group of friends writing a story together on a single paper that can magically appear in each person’s notebook at the same time.  
**Operational Transformation (OT)** is like a referee who watches every change (add, delete, move) anyone makes and rewrites it so that all notebooks stay consistent. If two friends type “cat” and “dog” in different places at once, the referee rearranges the edits so neither person loses their contribution.

**Differential Synchronization** works differently: each notebook keeps a copy of the whole story and periodically sends only the *difference* (the changes) to everyone else, then merges those differences back into its own copy. Think of it as sending tiny mail‑boxes with just the new sentences instead of re‑sending the entire book.

Both keep all copies in sync, but OT is more like a live referee, while differential sync is like sending updates on paper notes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
