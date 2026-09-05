---
qid: ing_0100686d73__star__local
question: 'Explain: if you guys know that there was — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 359
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:34-05:00'
sources: []
---

**Situation**  
While leading the real‑time collaboration team at a fintech startup, we noticed that our document editor lagged by up to 800 ms when multiple users edited the same sheet simultaneously. The latency was caused by naive conflict resolution: each client sent full snapshots to the server, which then rebroadcasted them, leading to bandwidth waste and stutter.

**Task**  
Design an efficient concurrency control system that would allow low‑latency, consistent editing across thousands of concurrent users, while keeping network traffic minimal.

**Action**  
I introduced a differential synchronization protocol inspired by Google Docs’ Operational Transformation (OT). First, I defined an operation set for text insert/delete and cell edit events. Each client sent only the delta (the OP) to the server, which applied it in a linearized order using a transformation function that resolved concurrent edits. The server broadcasted transformed ops back to all clients, ensuring every replica converged without needing full snapshots. I implemented this in Go for the backend and used WebSocket streams with a small JSON payload (~50 bytes per edit). To handle large documents, we added a “snapshot” checkpoint every 100 operations so new clients could catch up quickly.

**Result**  
Latency dropped from ~800 ms to under 60 ms on average. Bandwidth usage fell by 70 %, and the system supported 10× more simultaneous users without degradation. I learned that careful abstraction of edit operations and incremental transformation is key to scalable real‑time collaboration, a pattern we now use across all our productivity tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
