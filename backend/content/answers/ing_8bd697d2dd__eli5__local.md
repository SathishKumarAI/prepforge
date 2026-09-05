---
qid: ing_8bd697d2dd__eli5__local
question: 'Explain: Database Replication & Backups — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 203
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:18:13-05:00'
sources: []
---

Think of Instagram’s photo‑store as a library that keeps every picture and caption on a huge shelf (the primary database).  
**Replication** is like making copies of each book and placing them in satellite libraries around the world so readers can grab a copy locally instead of traveling to the main branch. If one branch goes down, users still find their photos right away because another branch has an identical copy.  
**Backups** are the safety vaults that periodically photograph every shelf and store those images on separate, highly secure servers. Even if all branches burn down, the vault can be opened to rebuild the entire library exactly as it was.  

Together, replication gives instant access and fault tolerance, while backups give long‑term protection against catastrophic loss. In Instagram’s design, we keep a few live replicas for speed and a nightly backup vault for recovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
