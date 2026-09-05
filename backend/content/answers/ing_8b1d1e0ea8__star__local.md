---
qid: ing_8b1d1e0ea8__star__local
question: 'Explain: Conflict resolution — Liveblocks | Realtime infrastructure for
  multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 305
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:00-05:00'
sources: []
---

**Situation**  
When I joined a startup building a collaborative drawing app, our real‑time canvas was built on Liveblocks. During a product launch we noticed that users occasionally saw flickering strokes and lost edits when multiple people drew on the same shape simultaneously.

**Task**  
I had to design a conflict‑resolution strategy that kept the UI responsive while ensuring eventual consistency across all clients, without adding noticeable latency or increasing server costs.

**Action**  
First I mapped out the operation flow: each stroke was an event with a vector timestamp. I implemented a *last‑write‑wins* policy combined with operational transformation (OT) for simple shape edits. For complex interactions—like overlapping fills—I added a lightweight lock service using Redis Pub/Sub so that only one client could modify a region at a time, then broadcast the resolved state back through Liveblocks. I also instrumented the event stream to capture latency and conflict frequency, feeding those metrics into Grafana dashboards for continuous monitoring.

**Result**  
After deployment we saw a 70 % drop in visual glitches, the average round‑trip latency stayed under 80 ms, and user-reported errors fell from 12 % to 2 %. The exercise taught me how to balance algorithmic guarantees with real‑world performance constraints in a live collaborative system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
