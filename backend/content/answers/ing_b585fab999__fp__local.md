---
qid: ing_b585fab999__fp__local
question: 'Explain: Step 2: Review 100 Traces and Take Notes (Open Coding)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 408
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:30:18-05:00'
sources: []
---

### Why “Review 100 Traces & Take Notes” is the linchpin of open‑coding

At its core, open‑coding turns raw observation into a *formal language* that can be compared and recombined. The first step—examining a fixed number of traces (e.g., 100) before any categorisation—is not arbitrary; it emerges from information‑theoretic guarantees about representativeness.

1. **Sampling for entropy minimization**  
   By inspecting 100 independent traces, we approximate the *entropy* of the data distribution. If each trace contributes a new token (a concept or phrase), the cumulative vocabulary size follows the *Heaps’ law*: \(V(n) \approx K n^{\beta}\). When the curve flattens, additional traces add diminishing novel information—our sample has reached sufficient coverage.

2. **Avoiding premature abstraction**  
   Early notes are deliberately descriptive (labels like “user hesitates”) rather than prescriptive. This preserves *contextual fidelity* and prevents the researcher from imposing a pre‑existing taxonomy that could bias later clustering.

3. **Establishing a reference frame**  
   The first 100 traces become a *codebook seed*. Subsequent coding can be evaluated against this seed, ensuring inter‑coder reliability improves as the codebook stabilises rather than drifting arbitrarily.

#### Non‑obvious insight
The 100‑trace rule is not about numbers but about **rate of discovery**. In practice, you should monitor when the *new‑concept rate* falls below a threshold (e.g., < 1% per trace). If it does earlier, fewer traces suffice; if it remains high, keep coding longer. This dynamic stopping criterion guarantees that the open‑coding phase truly captures the data’s structure without unnecessary effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
