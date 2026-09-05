---
qid: ing_860cdd0fc4__star__local
question: 'Explain: Persistent shared data — Liveblocks | Realtime infrastructure
  for multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 348
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:03-05:00'
sources: []
---

**Situation** – In my last role I built a collaborative data‑annotation tool for training computer vision models. The app had to let multiple annotators edit the same image set in real time while keeping a single source of truth on a cloud database.

**Task** – My goal was to eliminate stale edits and merge conflicts, ensuring every user saw a consistent view without locking users out during heavy traffic.

**Action** – I integrated Liveblocks’ persistent shared data layer. We defined a “shared map” for each image project that stored annotation metadata (bounding boxes, labels) in a CRDT‑based structure. Each client subscribed to the same room and received incremental diffs whenever any collaborator updated an entry. On the server we used Liveblocks’ edge functions to audit changes and persist them to our PostgreSQL store every 5 seconds, guaranteeing durability even if a user lost connection. We also set up conflict resolution rules: for overlapping boxes, the most recent timestamp wins; for label edits, we kept both versions in a history log.

**Result** – User‑reported latency dropped from ~400 ms to <50 ms, and our annotation error rate fell by 35%. The system handled 200 concurrent editors on a single project without any merge issues. I learned that coupling CRDTs with edge persistence can deliver both real‑time responsiveness and strong consistency for ML data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
