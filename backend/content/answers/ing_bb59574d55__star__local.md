---
qid: ing_bb59574d55__star__local
question: 'Explain: the same state now the diff is — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 344
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:47-05:00'
sources: []
---

**Situation** – While leading a feature‑flag rollout for our real‑time document editor at a startup, I noticed users were experiencing inconsistent cursor positions and lost edits when multiple collaborators worked simultaneously on the same section of a Google‑Docs‑style doc.

**Task** – My goal was to design an operational‑transform (OT) system that could maintain a consistent “state” across all clients while allowing each user to edit independently, without locking or heavy server coordination. I had to decide between classic OT and the newer differential synchronization approach and justify my choice to product and engineering leads.

**Action** – I first mapped out the shared state: a linear sequence of text tokens with metadata for formatting. Using OT, I implemented transform functions that merged concurrent insert/delete operations, preserving intent. To reduce latency, I introduced an optimistic local queue that applied changes immediately, then sent them to the server where they were broadcast back as transformed ops. For conflict resolution, I used “last‑write‑wins” on metadata but preserved text intent via transformation. I also built a lightweight diff‑sync fallback for clients with unstable connections, sending only changed ranges.

**Result** – The OT system cut average edit lag from 350 ms to 80 ms and reduced merge conflicts by 92%. User satisfaction scores rose from 4.1 to 4.7/5 on real‑time editing surveys. I learned that careful trade‑offs between consistency, latency, and complexity are crucial when scaling collaborative editors at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
