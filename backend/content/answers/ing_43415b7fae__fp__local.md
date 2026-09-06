---
qid: ing_43415b7fae__fp__local
question: 'Explain: And, um, it also has, um, the — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 407
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:28:44-05:00'
sources: []
---

## The “under‑the‑hood” of Google Wave (Google I/O 2009)

At its core, Wave is a *distributed, collaborative state machine*.  
The problem it solves: **many users must read and write the same data in real time, with low latency, without a central lock**.  
Traditional client–server models suffer from “last‑writer wins” or require long polling; they also break when the server crashes.

Wave’s design starts from the *operational transformation (OT)* principle of convergent replicated state machines: each user’s edits are local operations that are applied to a shared model and then sent to peers.  
Because OT guarantees *causal ordering* and *conflict resolution*, all replicas converge to the same final state even if operations arrive out of order.

The deeper insight is that **the data structure is not a simple document but a DAG of “blips”** (small, independently editable units).  
Each blip carries its own OT history; peers subscribe only to blips they care about.  
This locality reduces bandwidth: the network sees a stream of *operation diffs* rather than full documents.

Under the hood, Google used a **peer‑to‑peer overlay** built on top of XMPP, with each client acting as both producer and consumer of operations.  
Security is enforced by fine‑grained ACLs encoded in the blip metadata; every operation is signed so that malicious edits can be rejected before they reach other peers.

The non‑obvious payoff: because blips are small and self‑contained, the system can *partition* the data graph arbitrarily—e.g., keep a user’s own blips on their local device while still synchronizing with others.  
This hybrid approach gives Wave both the immediacy of instant messaging and the structure of collaborative editing, all without a single point of failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
