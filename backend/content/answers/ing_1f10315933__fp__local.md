---
qid: ing_1f10315933__fp__local
question: 'Q: How do you choose between a "Sequence of Chains" and a "Multi-Agent
  Graph"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 425
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:12:15-05:00'
sources: []
---

Choosing between a *sequence of chains* (a linear pipeline of inference steps) and a *multi‑agent graph* (parallel, interacting modules) boils down to the **information flow** that the problem demands.

1. **Sequential chains** assume that each step’s output is the sole input for the next. This matches problems where data must be progressively refined—e.g., tokenization → parsing → semantic role labeling. The chain enforces a *Markov* property:  
   \[
   p(y\mid x)=\prod_{t}p(z_t\mid z_{t-1}) .
   \]
   Here, intermediate states \(z_t\) are deterministic transformations of the previous state; no back‑propagation of uncertainty is possible.

2. **Multi‑agent graphs** relax that constraint. Nodes can exchange messages, allowing *joint inference* over a joint distribution  
   \[
   p(\mathbf{y}\mid x)=\frac{1}{Z}\exp\!\Bigl(-\sum_{(i,j)}E_{ij}(y_i,y_j)\Bigr),
   \]
   where edges encode pairwise potentials. This captures *global consistency*—useful for coreference, scene understanding, or any task requiring reconciliation of conflicting local cues.

**Non‑obvious insight:** A chain can be embedded in a graph by making all but one edge negligible, but the reverse is impossible without losing parallelism. Thus, if your data exhibit *non‑local dependencies* (e.g., long‑range coreference), you must adopt a graph; otherwise, a chain suffices and is computationally cheaper.

**Rule of thumb:**  
- **Chain** when each step is a *deterministic refinement* and the cost of recomputation is low.  
- **Graph** when *mutual constraints* between modules drive the final answer or when latency can be amortized across parallel agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
