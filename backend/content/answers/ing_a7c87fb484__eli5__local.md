---
qid: ing_a7c87fb484__eli5__local
question: 'Explain: so we let''s from 0 1 so — Google Docs System design | Part 1|
  Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 261
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:03:50-05:00'
sources: []
---

Imagine a group of friends drawing on the same giant whiteboard over video‑chat.  
Each friend can write or erase anywhere at any time, but their changes must all end up looking the same to everyone.

**Operational Transformation (OT)** is like giving each friend a *magic pencil* that records every stroke as an “operation” (draw, delete). When two friends work on the same spot at once, the system rewrites one operation so it fits after the other—just like if you’re drawing over a line, the new line gets shifted or blended to keep both strokes visible. The board stays consistent without waiting for everyone to finish.

**Differential Synchronization** is a simpler cousin: each friend periodically sends just what’s changed (“the diff”) instead of every single stroke. The server merges these diffs, resolves tiny conflicts automatically, and pushes the updated picture back. Think of it as sending only the new doodles in an instant message rather than the whole page.

Both techniques let Google Docs keep multiple users’ edits together smoothly, even when they’re typing or editing at the same time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
