---
qid: ing_a7c87fb484__star__local
question: 'Explain: so we let''s from 0 1 so — Google Docs System design | Part 1|
  Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 364
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:21-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a real‑time collaborative whiteboard that had to support dozens of users editing the same diagram simultaneously. Our initial prototype simply sent full snapshots over WebSocket every time someone made a change, and latency quickly became unbearable as the board grew.

**Task:**  
I was tasked with designing a conflict‑free synchronization system that could merge concurrent edits in real time while keeping bandwidth low and ensuring eventual consistency across all clients.

**Action:**  
I studied Operational Transformation (OT) and Differential Synchronization (DS). For OT, I implemented an edit‑transform module that tracked each user’s cursor position, applied inverse operations on conflict, and maintained a shared operation log with version vectors. For DS, I built a delta encoder that sent only the minimal set of changes (insert/delete/format) along with a checksum to detect divergence. I chose WebRTC data channels for low‑latency peer‑to‑peer messaging and used protobuf for compact message serialization. We also added optimistic locking: each client applied its local edit immediately, then sent the operation; if a conflict was detected server‑side, it broadcasted a transform back.

**Result:**  
Latency dropped from 800 ms to under 150 ms even with 30 concurrent users. Bandwidth usage fell by ~70% compared to snapshotting. User churn during beta testing decreased by 45%, and the system maintained strong eventual consistency across all clients. I learned that combining OT for complex merge logic with DS’s lightweight delta approach can deliver both performance and correctness in collaborative tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
