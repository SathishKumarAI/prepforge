---
qid: ing_5266a4d6ef__fp__local
question: 'Explain: No models selected — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 364
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:00:19-05:00'
sources: []
---

**Why “No models selected” appears on the SWE‑Bench leaderboard**

SWE‑Bench evaluates *software engineering* models by asking them to solve a set of coding tasks.  
The evaluation pipeline follows a classic **selection–ranking** scheme: for each task, every submitted model is run, its predictions are scored (e.g., accuracy or BLEU), and the top‑\(k\) performers are recorded on the leaderboard.

When a user sees *“No models selected”*, it means that the selection step failed to pick any model.  
This can happen only if **all** submitted models receive a score of 0, NaN, or fall below the cutoff threshold for every task. In mathematical terms:

\[
\forall m \in \mathcal{M},\; \forall t \in \mathcal{T}:\quad
\text{score}(m,t) < \tau
\]

where \(\tau\) is the minimum score required to be considered “selected.”  
The underlying principle is **threshold‑based filtering**, a simple form of *optimization*: we are implicitly maximizing the number of tasks for which a model attains at least \(\tau\). If none reach this level, the optimizer returns an empty set.

A non‑obvious insight: this warning also signals that the evaluation harness may be misconfigured (e.g., wrong task identifiers or corrupted checkpoints), because a genuine model rarely fails on *all* tasks. Thus “No models selected” is not just a performance warning—it’s a diagnostic for both the model and the benchmark infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
