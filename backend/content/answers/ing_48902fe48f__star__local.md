---
qid: ing_48902fe48f__star__local
question: 'Explain: an end number of different copies of — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 320
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:37-05:00'
sources: []
---

**Situation:**  
While leading the real‑time collaboration feature for our internal document editor, we noticed that as the number of concurrent users grew from a few dozen to over a thousand per doc, latency spiked and conflicts were piling up in our logs.

**Task:**  
I had to redesign the synchronization layer so it could handle high concurrency with minimal lag, while keeping eventual consistency across all clients.

**Action:**  
I introduced an operational transformation (OT) core that transforms user edits into a linear sequence of operations. Each client sends its operation along with a base version; the server rebases it against concurrent ops before broadcasting back. To reduce bandwidth, I added differential synchronization: clients periodically send only the delta since their last sync checkpoint, and the server merges those deltas using OT rules. We also implemented a “shadow copy” on each client to roll back and reapply operations in case of conflicts, ensuring UI responsiveness. The stack was built with Node.js for the server, WebSocket for low‑latency transport, and protobufs for compact message encoding.

**Result:**  
After deployment, latency dropped from 350 ms average to under 80 ms for 1,000 concurrent users, and conflict rate fell by 92%. The system now scales linearly with user count. I learned that combining OT’s correctness guarantees with delta‑based sync’s efficiency is key to building robust real‑time apps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
