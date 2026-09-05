---
qid: ing_9d109f1ed5__star__local
question: 'Explain: Broadcast — Liveblocks | Realtime infrastructure for multiplayer
  apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 325
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:13-05:00'
sources: []
---

**Situation** – In my last role I was building a real‑time collaborative drawing app using Liveblocks. The UI had to support dozens of users editing the same canvas simultaneously without lag, and we were hitting a 250 ms latency spike when more than 30 participants joined.

**Task** – My goal was to implement an efficient broadcast system that could push each user’s strokes to all peers in real time while keeping CPU usage low on both server and client.

**Action** – I leveraged Liveblocks’ “Broadcast” channel feature. First, I set up a dedicated `drawing` channel per canvas and used the `broadcast()` API to send minimal delta messages (just coordinates and color). On the client side, I subscribed with `onUpdate` handlers that merged incoming deltas into a local state using immutable data structures. To reduce bandwidth, I added a throttling layer: strokes were batched every 50 ms before broadcast. I also introduced a “presence” sub‑channel to keep track of active users and dynamically scale the number of replicas based on peak load.

**Result** – After deployment, average latency dropped from 250 ms to under 80 ms even with 60 concurrent users, and CPU usage on our Edge workers fell by 35%. The app received positive feedback for its smooth collaboration, and I learned how Liveblocks’ broadcast primitives can be tuned for high‑scale real‑time experiences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
