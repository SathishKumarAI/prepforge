---
qid: ing_1e794d9aed__eli5__local
question: 'Explain: Open Questions — Blockdiff: How we built our own file format for
  VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 213
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:24:39-05:00'
sources: []
---

Imagine your computer’s virtual hard drive is a giant Lego set that keeps changing every time you play. A “snapshot” is like taking a picture of the whole set so you can jump back to that exact moment later.  
Instead of copying every single brick (which would take forever), the team used a clever trick called **blockdiff**: they look at the set in chunks—say, 1‑kilobyte Lego blocks—and note only the parts that changed since the last snapshot. The new file format stores those “changed blocks” and points back to the earlier snapshot for everything else.  
So when you want to restore a snapshot, the system pulls the unchanged pieces from the old image and stitches in the few altered chunks it saved. It’s like having a scrapbook where each page only lists the differences from the previous one, saving space while keeping every detail retrievable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
