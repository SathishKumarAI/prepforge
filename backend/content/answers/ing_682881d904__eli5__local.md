---
qid: ing_682881d904__eli5__local
question: 'Explain: go back and look at the followings — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 359
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:05-05:00'
sources: []
---

Imagine a group of friends working together on a single recipe card in Google Docs. Each friend can add, delete or edit ingredients at the same time, and everyone sees the changes instantly.

**1. Operational Transformation (OT)**  
Think of OT as a referee who watches each friend’s move. When one friend writes “add 2 cups of sugar,” the referee records that operation. If another friend deletes “sugar” right after, the referee rewrites the sequence so both actions make sense together: maybe the final card shows “add 1 cup of sugar.” OT keeps the recipe coherent no matter who typed first or last.

**2. Differential Synchronization (Δ-sync)**  
Now picture each friend has a copy of the recipe on their phone. Δ‑sync is like a messenger that only sends the *difference* between two copies—just the new line about “add 1 cup of sugar”—instead of sending the whole card again. This saves bandwidth and keeps all phones up to date quickly.

**3. Google Docs System Design (Part 1)**  
Putting it together, Google Docs is built on a layered architecture: a front‑end UI that shows the live recipe, a back‑end server that runs OT or Δ‑sync algorithms, and storage that keeps every version safely. The system constantly reconciles edits from all users, resolves conflicts via the referee (OT), and distributes only the changes (Δ‑sync) so everyone’s copy stays in sync.

So, OT is the smart rule‑book that makes simultaneous edits work; Δ‑sync is the efficient courier that sends only what changed; and Google Docs stitches these together into a smooth, real‑time collaborative experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
