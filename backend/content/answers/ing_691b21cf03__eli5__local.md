---
qid: ing_691b21cf03__eli5__local
question: 'Explain: of process I''m just going to mention — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 219
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:22:20-05:00'
sources: []
---

Imagine a group of friends drawing the same picture on a shared whiteboard that can be seen from anywhere.  
**Operational Transformation (OT)** is like each friend sending a tiny “move” to the board: “draw a line from here to there.” When two friends try to draw at the same time, OT rewrites one move so it still makes sense next to the other—just as if the whiteboard magically reordered the strokes so both lines appear correctly.  

**Differential Synchronization (Diff‑Sync)** works differently: each friend keeps a copy of the whole picture and periodically sends only the differences (the new line, the erased part) to everyone else. The board then merges those changes, like patching together two slightly different versions of a photo until all copies match again.

Both methods let many people edit the same document instantly, but OT focuses on tiny operations, while Diff‑Sync focuses on whole‑picture differences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
