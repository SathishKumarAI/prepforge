---
qid: ing_71ad1d8672__star__local
question: 'Explain: a user has modified the client copy — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 322
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:35-05:00'
sources: []
---

**Situation**  
I was part of the core team that built a real‑time collaborative editor for our startup’s document platform. We had already deployed an Operational Transformation (OT) engine to keep multiple users’ cursors and edits in sync across thousands of concurrent sessions, but we noticed latency spikes when many collaborators edited the same paragraph simultaneously.

**Task**  
My goal was to redesign the synchronization layer so that it could handle high contention without sacrificing consistency or user experience, while keeping the existing OT logic intact.

**Action**  
I introduced a differential‑synchronization (diff‑sync) fallback: each client now periodically sends a lightweight diff of its local document state rather than every keystroke. On receipt, the server merges the diff with the current authoritative version using a custom “conflict‑free replicated data type” (CRDT) merge function that preserves intent and resolves simultaneous edits deterministically. I also added a priority queue to surface the most recent changes first, reducing perceived lag. The implementation used Node.js streams for incremental diff transmission and Redis pub/sub to broadcast updates in near real time.

**Result**  
After deployment, we reduced average edit‑to‑display latency from 350 ms to 120 ms under peak load, and the number of merge conflicts dropped by 70 %. I learned that combining OT with a lightweight diff‑sync layer can dramatically improve scalability while keeping consistency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
