---
qid: ing_2479d22f8c__eli5__local
question: 'Explain: Design goals — Blockdiff: How we built our own file format for
  VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 259
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:34:14-05:00'
sources: []
---

Imagine a library that only keeps the newest edition of each book. When a reader wants to read an older version, the librarian must reconstruct it from scratch—slow and wasteful. BlockDiff is like a “quick‑copy” system for virtual machine (VM) disks: instead of saving the whole disk every time you take a snapshot, it records only the parts that actually changed since the last one.

**Design goals**

1. **Space efficiency** – Keep each snapshot tiny by storing only altered blocks, not the entire image.  
2. **Speed** – Build new snapshots in milliseconds; just write the small changes instead of rewriting gigabytes.  
3. **Simplicity for restoration** – Re‑assemble any point‑in‑time view by piecing together the base disk and the sequence of change files.  
4. **Reliability** – Use checksums so that corrupted blocks are detected early, preventing silent data loss.

Think of BlockDiff as a “difference book” that tells you exactly where to look in the original library to find every page you need, saving both space and time while staying trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
