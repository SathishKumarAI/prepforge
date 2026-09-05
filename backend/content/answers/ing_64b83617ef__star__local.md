---
qid: ing_64b83617ef__star__local
question: 'Explain: it''s that simple so whether we are — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 353
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:07-05:00'
sources: []
---

**Situation** – At my previous company, I was part of the real‑time collaboration team that built a lightweight spreadsheet editor for mobile. Users complained that when two people edited the same cell at once, one change would overwrite the other and the app would crash after sync.

**Task** – My job was to design an operational transformation (OT) system that could merge concurrent edits from multiple clients with minimal latency while keeping the data model consistent across all devices.

**Action** – I started by modeling each edit as a “transformable operation” (insert, delete, replace). Using the classic OT algorithm, I defined transformation functions for every pair of operations so that any two concurrent ops could be reordered without loss. To reduce bandwidth, I added differential synchronization: each client sent only the delta since its last known state, and the server applied the OT rules to merge these deltas before broadcasting back. I implemented the core in Rust for safety and performance, wrapped it in a Node.js microservice for easy integration, and used Redis Pub/Sub to push updates instantly to all peers.

**Result** – After deploying the new system, we saw a 60 % drop in edit conflicts and a 70 % improvement in perceived latency (average sync time went from 350 ms to 105 ms). Users reported smoother collaboration, and the engineering team noted that the OT layer added only ~15 KB of payload per operation. I learned that careful choice of data structures (e.g., CRDT‑style lists for cell references) and a well‑tested transformation matrix are key to building reliable real‑time editors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
