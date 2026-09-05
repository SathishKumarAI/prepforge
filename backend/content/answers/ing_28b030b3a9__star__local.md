---
qid: ing_28b030b3a9__star__local
question: 'Explain: override and delete one at position in — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 381
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:45-05:00'
sources: []
---

**Situation**  
In my last role I worked on an internal Google‑Docs clone used by a design team of 12. Our real‑time collaboration feature was lagging: when two users edited the same paragraph simultaneously, we saw duplicate inserts and occasional character swaps that broke document integrity.

**Task**  
I had to implement a robust operational transformation (OT) layer that could correctly handle *override* (a replace operation) and *delete at position* operations while preserving consistency across all clients, even under high latency.

**Action**  
First I mapped each edit to an OT operation: `Insert`, `DeleteAt(pos)` and `Replace(start,end,newText)`. For overrides I treated them as a delete of the target range followed by an insert at the same position. Using the classic transformation function, I wrote a pairwise transformer that reordered concurrent ops based on their positions and timestamps, ensuring that deletes never removed text already replaced. I also added a conflict‑resolution heuristic: when two users attempted to replace the same span, the one with the higher client ID won, preventing oscillation. The OT logic was wrapped in a lightweight C++ library called from our Node.js backend; we logged every transformation so we could replay failures.

**Result**  
After deployment, real‑time edit latency dropped from 350 ms to 90 ms and error rates for concurrent edits fell below 0.01%. The design team reported “instantaneous” collaboration, and the codebase gained a reusable OT module that reduced future feature development time by ~30 %. I learned how careful operator design and conflict heuristics are critical for scalable differential synchronization in collaborative editors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
