---
qid: ing_c8ae0d5794__star__local
question: 'Explain: on the either side we arrive at — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 361
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:10:48-05:00'
sources: []
---

**Situation:**  
At a startup I helped build a real‑time collaborative text editor that was used by over 500,000 daily users. The latency on the client side had to stay below 50 ms, but we were seeing large “edit wars” where simultaneous edits from multiple devices caused frequent rollbacks and corrupted documents.

**Task:**  
I needed to design a synchronization layer that could handle concurrent edits from any device, preserve intent, and keep the UI responsive without overloading the backend.

**Action:**  
I chose Operational Transformation (OT) as the core algorithm. First, I defined a minimal set of operations—insert, delete, format—with unique operation IDs and timestamps. Each client maintained a local history stack and sent ops to the server via a WebSocket channel. On receipt, the server reordered incoming ops by their causal dependencies, transformed them against any concurrent ops using the classic “transform” matrix, and broadcast the resolved ops back. To reduce bandwidth I implemented delta compression and batched operations every 200 ms. For fault tolerance, I added an optimistic local apply that rolled back only if a conflict was detected after server acknowledgement. Finally, I integrated a per‑document undo/redo stack that could traverse the transformed operation history.

**Result:**  
Latency dropped from 120 ms to under 35 ms on average; edit‑conflict errors fell by 92 %. The system scaled to 10× our user base without additional servers. I learned how careful choice of data structures and batching can turn a theoretically sound algorithm into a production‑ready, low‑latency feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
