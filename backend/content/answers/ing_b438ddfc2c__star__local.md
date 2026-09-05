---
qid: ing_b438ddfc2c__star__local
question: 'Explain: it''s not possible at all now I — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 352
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:32:22-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time collaborative spreadsheet for finance teams. The prototype used simple polling, but latency grew as users joined from different time zones; edits would arrive out of order and users saw duplicate rows.

**Task:**  
I had to design an operational transformation (OT) layer that could merge concurrent edits without loss, while keeping the client UI responsive and preserving data consistency across thousands of simultaneous connections.

**Action:**  
First, I mapped each cell edit to a lightweight operation object (type: insert/delete/replace, coordinates, timestamp). I then implemented a transformation matrix based on the classic Google Docs algorithm, using an “intent” field so that conflicting inserts at the same cell were reordered deterministically. To reduce bandwidth, I added differential synchronization: clients send only the delta of operations since their last snapshot, and the server broadcasts aggregated deltas to peers. We used WebSocket for low‑latency transport and a Redis pub/sub channel to fan out updates to all shards. Finally, we built a conflict‑free replication log that persisted every operation with vector clocks for auditability.

**Result:**  
After deployment, edit latency dropped from ~1 s to <50 ms under peak load (200 concurrent users). The spreadsheet’s error rate fell below 0.02 %, and user satisfaction scores rose by 35 %. I learned that a well‑structured OT core combined with differential sync can deliver near‑instant collaboration at scale, but careful intent encoding is essential to avoid “lost updates” and maintain UX integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
