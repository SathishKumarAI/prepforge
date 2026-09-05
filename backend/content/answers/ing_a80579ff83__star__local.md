---
qid: ing_a80579ff83__star__local
question: 'Explain: get the death and then apply to — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 361
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:06-05:00'
sources: []
---

**Situation**  
When I joined a product team at a cloud‑storage startup, we were building a real‑time collaboration feature for documents. Our early prototype used naive polling and ended up with half a second lag and frequent merge conflicts when two users edited the same paragraph simultaneously.

**Task**  
I was tasked with designing an operational‑transformation (OT) system that would allow multiple clients to edit the same document in real time, keeping all replicas consistent without sacrificing performance or user experience.

**Action**  
First I mapped out the core OT model: each client issues operations (insert/delete), tags them with a sequence number and context vector. On receipt of an operation, a server transforms it against concurrent ops using the classic “transform” function that preserves intent. To keep latency low, I implemented a lock‑free in‑memory queue on the server and used WebSocket multiplexing so each client received only deltas, not full document snapshots. For conflict resolution, I added a deterministic tie‑breaker based on user ID. I also introduced an optimistic local commit strategy: clients apply ops immediately and roll back only if the server rejects them.

**Result**  
After deployment, edit latency dropped from 500 ms to under 70 ms, and merge conflicts fell below 0.02% of edits. The feature scaled to 20,000 concurrent users with a single server instance, and we saw a 35% increase in daily active documents. I learned that careful OT design—context vectors, deterministic transforms, and efficient networking—is key to building robust real‑time collaboration at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
