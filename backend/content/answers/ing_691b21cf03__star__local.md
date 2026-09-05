---
qid: ing_691b21cf03__star__local
question: 'Explain: of process I''m just going to mention — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 391
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:32-05:00'
sources: []
---

**Situation:**  
I was part of a design sprint for an internal collaboration platform at my previous company. The product team wanted real‑time document editing similar to Google Docs, but we were limited by our existing infrastructure and budget.

**Task:**  
My job was to outline how we could achieve low‑latency, conflict‑free edits across multiple users without overhauling the backend. I had to explain two core concepts—Operational Transformation (OT) and Differential Synchronization (DiffSync)—and show which one fit best for our constraints.

**Action:**  
I started by mapping out the user flow: each keystroke should propagate to all peers within 200 ms, even on a flaky mobile network. I compared OT’s matrix‑based transform functions with DiffSync’s delta‑propagation model. For OT, I highlighted its ability to preserve intent across concurrent edits but noted the heavy metadata (operation IDs, timestamps) it requires. With DiffSync, I showed how sending only character ranges reduces bandwidth and simplifies conflict resolution at the cost of more complex merge logic on the client. I then prototyped a lightweight OT engine in Node.js that stored operation logs in Redis, achieving sub‑100 ms round‑trip latency for 10 concurrent users.

**Result:**  
The prototype demonstrated a 30 % lower bandwidth usage than a naive CRDT approach and maintained consistency even when a user’s connection dropped temporarily. The team adopted the OT‑based design, which later scaled to support 200 simultaneous editors with <250 ms latency. I learned that choosing between OT and DiffSync hinges on trade‑offs between network conditions, client complexity, and real‑time performance—insights that guided our next iteration of the collaborative editor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
