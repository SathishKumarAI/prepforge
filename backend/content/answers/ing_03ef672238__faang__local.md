---
qid: ing_03ef672238__faang__local
question: 'Explain: Eager Reliable Broadcast — Gossip Protocol\u00a0Explained - High
  Scalability -'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 490
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:24-05:00'
sources: []
---

**Eager Reliable Broadcast (ERB) – A Scalable Gossip Primitive**

| Step | What I’ll Cover |
|------|----------------|
| **Clarify** | *Goal:* Distribute a message to all nodes in a large, partially‑connected cluster with < O(n²) messages and bounded delay. <br>*Assumptions to confirm:* <ul><li>Reliable point‑to‑point links (no permanent failures).</li><li>Each node knows its neighbors or can discover them.</li><li>Message size is small relative to bandwidth.</li></ul> |
| **Approach** | 1. **Eager push:** On receipt, a node immediately forwards the message to all *unseen* neighbors (push phase). <br>2. **Pull‑back for missing pieces:** Periodically, nodes request missing messages from random peers (pull phase) to catch any lost pushes. <br>3. **Anti‑entropy rounds** keep the state consistent and reduce duplicates. |
| **Depth** | - *Complexity:* Each node sends O(d) pushes where d ≈ log n for a well‑connected graph, yielding total messages O(n log n). <br>- *Reliability:* Push guarantees delivery within O(log n) hops; pull ensures eventual consistency even with packet loss. <br>- *Implementation:* Use Bloom filters or vector clocks to track seen messages, minimizing per‑message metadata. |
| **Edge Cases** | - **Network partitions:** ERB may split; detect via heartbeat and re‑merge on reconnection.<br>- **High churn:** Nodes joining late must bootstrap by pulling from a seed node.<br>- **DoS attacks:** Rate‑limit pushes and use authentication tokens to avoid amplification. |
| **Optimize & Communicate** | *Improvements:* Adaptive fanout (fewer forwards as coverage grows) reduces traffic; compressing message IDs further cuts overhead. <br>To explain: “Think of ERB as a two‑stage gossip—first it spreads rapidly, then it self‑corrects. It’s the backbone for services like real‑time analytics or distributed consensus where you need both speed and fault tolerance.” |

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
