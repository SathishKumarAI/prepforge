---
qid: ing_15812eeda7__eli5__local
question: 'Explain: Google Docs System design | Part 1| Operational transformation
  | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 221
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:09:29-05:00'
sources: []
---

Imagine a group of friends drawing the same picture on a big whiteboard that is split into tiny squares. Each friend can scribble on any square at the same time, but they only see their own changes instantly. When two friends touch the same square differently, Google Docs uses **Operational Transformation (OT)** to resolve it: each change is treated as an “operation” (draw a line, erase a shape). OT keeps a history of these operations and rewrites them so that every friend’s copy ends up with the same final picture, no matter who drew what first.

**Differential Synchronization** is like sending only the difference between your current drawing and the last version you shared. Instead of uploading the whole board, each client sends just the new strokes or erasures it made since the last sync. The server then merges those differences with others’ changes. Together, OT ensures consistency while differential sync keeps bandwidth light.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
