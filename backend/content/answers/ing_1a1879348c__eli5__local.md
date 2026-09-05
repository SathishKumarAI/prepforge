---
qid: ing_1a1879348c__eli5__local
question: 'Explain: in the font size or the style — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 236
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:17:39-05:00'
sources: []
---

Imagine a group of friends each holding a copy of the same recipe book while cooking together in a kitchen that’s too big for them all at once. Every time someone adds an ingredient or changes a step, they write it on their own copy and whisper the change to everyone else.  

In Google Docs, **operational transformation** is like that whispered note: each user’s edit becomes an *operation* (add text, delete word). The system keeps a list of all operations and re‑orders them so every copy ends up with the same final book, no matter who typed first or last.

When two people type at the same time—say one deletes a line while another writes in it—the system uses **differential synchronization** to detect the conflict, then merges the changes intelligently (like keeping both edits but placing them side by side).  

So, operational transformation is the “whisper” that keeps all copies synced, and differential sync is the smart recipe for resolving simultaneous edits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
