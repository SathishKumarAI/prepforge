---
qid: ing_15812eeda7__fp__local
question: 'Explain: Google Docs System design | Part 1| Operational transformation
  | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 496
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:01-05:00'
sources: []
---

## Google Docs: Operational Transformation & Differential Synchronisation  

### The Core Problem  
Multiple users edit a shared document simultaneously. Each user sees a *local* copy that diverges from the server’s master. We must **merge** all edits into a single, causally‑consistent state while preserving every user’s intent and keeping latency low.

### Why Operational Transformation (OT) Works  
1. **Intent Preservation** – An edit is an *operation* (insert/delete at a position). OT defines how to transform one operation against another so that when applied in any order the final text reflects both users’ intentions.  
2. **Commutativity via Transformation** – The transformation function `T(opA, opB)` rewrites `opA` as if `opB` had already happened. Because `T` is designed to be *invertible* and *consistent*, applying transformed ops in any sequence yields the same state.  
3. **Optimised for Latency** – Users can continue editing locally; only operations are sent, not whole document snapshots. The server merely broadcasts transformed ops, keeping round‑trip time minimal.

### Differential Synchronisation (DiffSync)  
Rather than individual ops, DiffSync sends *state deltas* between client and server: a compact diff of the text plus metadata about edits. It is simpler to implement but requires more bandwidth and can suffer from “lost‑intent” when two large diffs overlap.  

### Non‑obvious Insight  
Most people think OT merely reorders operations, but its *real power* lies in **contextual transformation**: each operation carries a causal context (the list of ops it’s based on). This allows the system to detect and resolve conflicts that would otherwise require manual merging—essentially turning an inherently probabilistic problem into a deterministic one by encoding causality.

---  
In short, OT guarantees intent‑preserving convergence with low latency, while DiffSync trades bandwidth for simplicity. Both are rooted in the same principle: *transforming local changes so they become consistent global updates*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
