---
qid: ing_75ce6cb978__eli5__local
question: 'Explain: it back and forth so now this — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 228
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:43:32-05:00'
sources: []
---

Imagine a group of friends drawing on the same large poster at once.  
Each friend can scribble anywhere, but their lines must not erase each other’s work.  
**Operational Transformation (OT)** is like a magic copy‑paste system that watches every stroke. If two friends draw in the same spot, OT rewrites one line so it still shows up next to the other, keeping both visible and preventing overlap. It records *operations*—“draw from point A to B”—and transforms them when they arrive out of order.

**Differential Synchronisation** is a different trick: each friend keeps a tiny log of changes (the “difference”) since the last shared version. When a new change arrives, the system merges those differences, applying only what’s missing, so everyone’s poster stays identical without sending the whole picture again.

Both keep many people editing simultaneously, but OT focuses on *order* and conflict resolution, while differential sync focuses on *efficient data transfer*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
