---
qid: ing_2d0a6a3643__fp__local
question: 'Explain: So for example, uh, the two A''s — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 422
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:40:07-05:00'
sources: []
---

## Why Google Wave mattered (and how it *worked*)

At its core, a *collaborative editor* must keep many users’ edits consistent **without locking** the document or forcing round‑trips to a central server for every keystroke.  
Google’s answer was a *conflict‑free replicated data type* (CRDT) that lives on each client and merges automatically with peers.  

1. **Problem:** In a network where latency is non‑zero, two users might edit the same paragraph simultaneously. A naïve “last writer wins” policy breaks the illusion of a single document; a naive lock blocks everyone else.  
2. **Principle:** *Eventual consistency* + *commutative operations*. If every operation can be applied in any order and still converge to the same state, no coordination is needed.  
3. **Implementation:** Wave’s *“op‑log”* stores edits as small, immutable operations (insert, delete, format). Each client maintains a local copy of the op‑log; when it receives new ops from peers, it simply appends them and replays locally. Because each operation is designed to commute, replay order doesn’t matter.  
4. **Deep insight:** The real novelty isn’t just CRDTs—it’s *treating the document as a stream of operations rather than an object*. This lets Google scale: every client can run a lightweight engine; bandwidth drops to only the diff of ops, not full snapshots. It also opens doors for offline editing—operations generated while disconnected are queued and merged on reconnection.

In short, Wave solved “how do many people edit one thing at once?” by turning edits into *commutative events* that can be replayed in any order, eliminating locks and keeping bandwidth low. The hidden gem: **representing state as an operation log** is the key to both scalability and consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
