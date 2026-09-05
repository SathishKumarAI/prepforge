---
qid: vq_3c84933dd6__fp__local
question: What are the three different types of Control Flow statements?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 377
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:45-05:00'
sources: []
---

In data‑engineering pipelines we constantly decide **what** data to process and **in what order**.  
That decision space is split into three fundamental *control‑flow* categories:

| Type | Core function | Why it exists |
|------|---------------|--------------|
| **Sequential** | Executes a fixed list of operations one after another. | Guarantees reproducibility; the state after step *i* depends only on its input, enabling deterministic data lineage. |
| **Conditional (branching)** | Chooses between alternative paths based on predicates (e.g., `if‑else`). | Allows the pipeline to adapt to heterogeneous schemas or quality flags, preserving correctness while avoiding unnecessary work. |
| **Iterative** | Repeats a sub‑graph until a convergence criterion is met (`while`, `repeat‑until`) or for fixed‑step loops. | Enables data‑driven refinement (e.g., iterative joins, model training) where the number of passes depends on the data itself rather than hard limits. |

**Deeper principle:** These three are the minimal operations needed to express any computable transformation under the Church–Turing thesis: a Turing machine’s *state transition* can be decomposed into sequential state updates, conditional jumps, and loops.

**Non‑obvious insight:** In large‑scale systems, the *granularity* of these control flows matters. A single “big loop” that scans millions of rows can be slower than many small, parallel conditional branches because each branch can be distributed independently. Thus, understanding when to refactor a loop into parallel branches is as crucial as choosing the right control flow construct itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
