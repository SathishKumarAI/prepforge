---
qid: ing_1f10315933__faang__local
question: 'Q: How do you choose between a "Sequence of Chains" and a "Multi-Agent
  Graph"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 443
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:57:05-05:00'
sources: []
---

**Clarify**

We’re deciding whether to model a system as a *sequence of chains* (a linear pipeline of processing steps) or a *multi‑agent graph* (agents interacting over a network).  
Assumptions:  

1. The problem requires multiple distinct tasks that may be reusable across contexts.  
2. There’s potential for parallelism, dynamic routing, or bidirectional communication between tasks.  
3. Agents need autonomy (e.g., decision‑making, learning) rather than just data flow.

**Approach**

1. **Identify dependencies** – are steps strictly ordered?  
2. **Assess interaction complexity** – do later stages influence earlier ones?  
3. **Measure parallelism needs** – can tasks run concurrently or must they wait for each other?  
4. **Consider autonomy** – does each component need local state/learning?

If the answer is “yes” to 1, 2, and 4, a graph wins; otherwise, a chain suffices.

**Depth**

- *Sequence of Chains*: Simple DAG where nodes are deterministic transforms. Complexity O(n) per pass; easy to reason about latency and debugging.  
- *Multi‑Agent Graph*: Each node is an autonomous agent (stateful, possibly learning). Communication over edges can be asynchronous; overall complexity depends on message passing overhead but allows dynamic re‑routing and fault isolation.

**Edge Cases**

- Tight coupling or cyclic dependencies break a pure chain; graph handles cycles via state/history.  
- If agents share mutable global state, race conditions arise—need locking or CRDTs.  

**Optimize & Communicate**

Start with a minimal chain to prove concept. Once latency bottlenecks appear or tasks need mutual influence, refactor into a graph. Communicate this evolution: “We began with a linear pipeline; profiling revealed that the sentiment‑analysis step is both data‑heavy and requires feedback from downstream summarization, so we migrated those two stages into separate agents connected in a directed acyclic graph.” This shows iterative improvement and clear rationale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
