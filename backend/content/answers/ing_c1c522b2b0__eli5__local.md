---
qid: ing_c1c522b2b0__eli5__local
question: 'Explain: or just discard although you know I — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 252
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:20-05:00'
sources: []
---

Imagine a group of friends building a LEGO castle together on one table, but each friend has their own copy of the instructions.  
**Operational Transformation (OT)** is like sending a short note that says “add a blue tower at position 5.” Every friend’s computer receives that note, inserts the tower exactly where it belongs, and then updates its own instruction list so future notes stay in sync. OT keeps every copy consistent even if several friends edit at once by re‑ordering or adjusting later notes.

**Differential Synchronization (diff‑sync)** is a bit different: each friend’s computer periodically compares its whole castle to the master copy, finds the differences (“I have an extra red flag”), and sends only those changes back. The master then merges them. Diff‑sync works well for simple documents but can get messy when many edits happen simultaneously.

So OT is like a real‑time “add this piece” protocol, while diff‑sync is more of a “compare and patch” routine. Both let many people edit the same document at once, but they handle conflict resolution in distinct ways.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
