---
qid: ing_43dfcaa55a__fp__local
question: 'Q75: How do SWE-bench Verified and LiveCodeBench differ, and which matters
  more for evaluating a coding agent?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 336
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:30:19-05:00'
sources: []
---

**Fundamental problem:** A coding agent must *solve* real‑world programming tasks, not just pass syntactic tests.  
**SWE‑bench (Verified)** evaluates a candidate on **fixed test vectors** derived from open‑source projects. The verifier is deterministic: it runs the code against those inputs and checks outputs or assertions. This guarantees reproducibility but hides *generalization*—a model could overfit to the exact test cases.

**LiveCodeBench** pushes further by generating **new, unseen inputs** for each run (often via property‑based or fuzzing techniques). The verifier must be able to check correctness without knowing the input in advance. This aligns with *robustness*, mirroring how a human developer tests against edge cases and unknown scenarios.

**Why it matters:**  
- **Verified** is cheap, fast, and good for early‑stage sanity checks.  
- **LiveCodeBench** approximates real deployment conditions; an agent that passes here is more likely to handle arbitrary user code.

**Non‑obvious insight:** The *verification cost* itself becomes a metric. A model that can generate self‑contained, verifiable proofs (e.g., unit tests or formal specifications) reduces the need for exhaustive LiveCodeBench runs, turning verification from an external bottleneck into part of the agent’s reasoning pipeline. Thus, evaluating a coding agent should focus on *how well it can reason about and produce verifiable correctness*, not just whether it passes static test cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
