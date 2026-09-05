---
qid: ing_04974e83fc__eli5__local
question: 'Explain: Um, it''s not-- but it''s not as — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 256
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:42:47-05:00'
sources: []
---

Imagine a big group chat where every person can type, draw, or drop files, and all changes appear instantly for everyone—no one has to hit “send” again. That’s what Google Wave tried to be: a real‑time collaboration platform built on top of the web.

**Under the hood**, Wave used a system called *Operational Transformation* (OT). Think of OT as a magic editor that keeps track of every tiny change (like typing a letter or moving a block) and automatically merges them with changes from other users, even if they happen at the same time. It’s like several people writing on a shared whiteboard: each stroke is recorded, then the system rewrites the strokes so everyone sees the same final picture, no matter who drew what first.

Key terms:  
- **Operational Transformation (OT)** – the algorithm that resolves simultaneous edits.  
- **State** – the current content of the Wave document.  

The result? A fluid, consistent experience where collaboration feels instantaneous and errors are avoided—just like a well‑coordinated team of artists on one canvas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
