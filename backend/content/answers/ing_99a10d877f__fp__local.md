---
qid: ing_99a10d877f__fp__local
question: 'Explain: Pattern: Critic/Verifier — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 526
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:32:42-05:00'
sources: []
---

**Pattern: Critic / Verifier – A Formal Proof of Correctness**

At the heart of every system that must *guarantee* a property is a **verification problem**: given a specification \(S\) and an implementation \(I\), does \(I\models S\)?  
The **Critic/Verifier pattern** abstracts this decision into two cooperating roles:

| Role | Function | Formal basis |
|------|----------|--------------|
| **Critic** | Generates *counter‑examples* or *proof sketches* that challenge a claim. | Counter‑example generation is the dual of proof search; it relies on negation normal form and SAT/SMT solving. |
| **Verifier** | Accepts a claim, runs a *verification engine* (model checker, theorem prover), and reports either success or a counter‑example supplied by the Critic. | Completeness guarantees: if the verifier finds no counter‑example after exhaustive search, it can assert \(I\models S\). |

### Why it must work this way
1. **Decidability vs. Expressiveness** – For rich specifications (e.g., temporal logic), full verification is undecidable. The Critic supplies *heuristics* or *bounded checks* that prune the state space, making the verifier tractable without sacrificing soundness.
2. **Modular reasoning** – By separating *generation* from *checking*, each component can evolve independently: new heuristics for the Critic or a more efficient solver for the Verifier.

### Deep principle
The pattern is an instance of **dual optimization**: the Critic searches for violations (minimizing correctness), while the Verifier seeks proofs (maximizing confidence). This duality mirrors *cutting‑plane* methods in integer programming, where a master problem proposes solutions and a subproblem verifies feasibility.

### Non‑obvious insight
The Critic’s counter‑examples are *not merely failures*; they are *learning signals*. In iterative refinement loops (e.g., CEGAR), each counter‑example guides the verifier to exclude large infeasible regions, turning verification into an **active learning** process. This perspective explains why adding a lightweight Critic can dramatically reduce verification time in practice.

In sum, the Critic/Verifier pattern formalizes the *exchange of evidence* between hypothesis generation and proof construction, grounding software correctness in algorithmic duality and active learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
