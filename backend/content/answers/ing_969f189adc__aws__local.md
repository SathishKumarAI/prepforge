---
qid: ing_969f189adc__aws__local
question: 'Explain: Multiplayer undo/redo — Liveblocks | Realtime infrastructure for
  multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 449
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:40-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the “Undo/Redo” feature for a real‑time multiplayer game using Liveblocks’ Realtime SDK. The product had 200k concurrent users, and we needed to guarantee *instant* state synchronization across players while keeping bandwidth low.

**Action – Technical Design**  
1. **Event Batching & Delta Compression** – Every player action is published as a lightweight delta (`{op:'move', dx:5}`) instead of full object snapshots. This reduces payloads from ~4 KB to <200 B, cutting network usage by 80%.  
2. **Operation‑based CRDT** – Each client maintains an *undo stack* of operations and sends a `redo` request as a new delta. Liveblocks’ `onMessage` hook streams these ops in order; the server applies them sequentially using an *operation log* stored in DynamoDB (partition key: sessionId).  
3. **Version Vector** – To resolve concurrent edits, we embed a Lamport timestamp (`version++`) with every op. Clients merge locally and replay only missing operations, guaranteeing eventual consistency.  
4. **Scalability & Cost** – Liveblocks scales automatically; our DynamoDB table uses on‑demand capacity (≈$0.25/mo per 1M ops). We capped the undo depth to 50 actions, limiting memory use to ~10 KB per session.

**Result**  
Within two sprints we reduced latency from 200 ms to <60 ms for undo/redo, increased user retention by **12%**, and cut bandwidth cost by **70%**. The feature was adopted across all titles and earned a “Customer Obsession” kudos.  

**Bar‑raiser Takeaway**  
I owned the end‑to‑end flow (from SDK to DB), dove deep into CRDT theory, quantified impact with real traffic metrics, and learned that batching + version vectors give the best trade‑off between consistency and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
