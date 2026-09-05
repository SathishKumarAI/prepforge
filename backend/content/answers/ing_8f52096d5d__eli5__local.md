---
qid: ing_8f52096d5d__eli5__local
question: 'Explain: Distributed Counter High-Level Design — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 259
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:24:14-05:00'
sources: []
---

Imagine you’re hosting a global “Like” button for a video that millions of viewers press at the same time.  
**Distributed Counter** is the invisible engine that keeps all those clicks in sync across every server.

1. **Local shards** – Each server holds its own tiny counter (a *shard*). When a user presses “Like,” the local shard updates instantly, like adding a stamp to a paper notebook on that desk.
2. **Periodic merge** – Every few seconds or minutes, all notebooks are brought together in a *coordinator*. The coordinator adds up the stamps from every notebook and writes the new total back to every server’s copy, just as you’d add all page totals into one master ledger.
3. **Conflict‑free design** – Because each shard only ever increases (no deletions), merging is simply addition; there’s no chance of two people writing conflicting numbers on the same page.

Thus, every viewer feels an instant response from their local server, while the system guarantees a correct global count by regularly reconciling all shards. This is the essence of a distributed counter: fast local updates plus periodic, simple aggregation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
