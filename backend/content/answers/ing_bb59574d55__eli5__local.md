---
qid: ing_bb59574d55__eli5__local
question: 'Explain: the same state now the diff is — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 278
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:34:13-05:00'
sources: []
---

Think of a shared Google Doc like a group of friends editing a recipe on a whiteboard at a kitchen table.

**Operational Transformation (OT)** is the “magic spell” that keeps everyone’s changes neat when they’re all writing at once. Each friend writes a word, and the spell records that word as an *operation*—“add ‘sugar’ after ‘flour’.” If two friends write different words at the same spot, the spell reorders or rewrites them so the final recipe is consistent for everyone. OT guarantees that no matter who types first, all copies will look the same.

**Differential Synchronization** is like a “copy‑and‑paste” routine. After each friend finishes their turn, they send a *diff*—the small changes (added or removed words) they made since the last time everyone saw the document. The server receives these diffs and merges them into the master copy, then pushes back any new changes to all friends.

So OT works by transforming operations on the fly to keep order, while differential sync works by exchanging incremental snapshots (diffs) after each edit session. Both aim for a single, consistent state, but they do it in different ways.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
