---
qid: ing_0c1b0ce824__eli5__local
question: 'Explain: Serializing the diff between two files — Blockdiff: How we built
  our own file format for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 211
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:54:40-05:00'
sources: []
---

Imagine a giant photo album where each page is a snapshot of your computer’s virtual disk. Every time you take a new snapshot, the whole page would be huge and wasteful to store again. Instead, think of “Blockdiff” as a clever photocopy machine that only prints the parts of the page that have changed—like highlighting the new doodles on an old drawing.

In practice, Blockdiff breaks each disk into equal‑sized blocks (think of them as small tiles). When you create a new snapshot, it scans each tile and compares it to the same tile in the previous snapshot. If a tile is unchanged, it simply points back to the older version; if it’s different, it stores the new data for that tile only. The result is a compact file format that keeps just the differences—much like keeping a list of edits instead of re‑printing the whole page. This saves space and speeds up restoring or transferring snapshots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
