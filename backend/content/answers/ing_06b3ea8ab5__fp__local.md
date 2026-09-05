---
qid: ing_06b3ea8ab5__fp__local
question: 'Q: A vendor says their model scores 90% on SWE-bench Verified. What questions
  do you ask before believing it predicts your coding-agent quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 377
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:02-05:00'
sources: []
---

**Why a 90 % score may be deceptive**

The *SWE‑Bench* metric collapses many heterogeneous tasks—unit tests, style guidelines, documentation quality—into a single accuracy figure. That figure is only meaningful if the benchmark’s distribution matches yours.

| Question | Rationale |
|----------|-----------|
| **What proportion of the 90 % comes from “easy” versus “hard” sub‑tasks?** | A model can achieve high overall accuracy by excelling on trivial tests while failing on edge cases that matter in production. |
| **How were negative examples generated?** | Randomly mutated code often produces implausible bugs; a model trained on such data may not generalize to real-world errors. |
| **What is the variance across different programming languages and frameworks?** | A single‑language model can score 90 % on Python but drop sharply elsewhere, which matters if your stack is heterogeneous. |
| **Is there an “oracle” or human review for the gold standard?** | Benchmarks that rely solely on automated test suites may over‑reward passing tests while ignoring semantic correctness. |
| **How does the model handle unseen APIs or library versions?** | Real projects evolve; a model’s robustness to new dependencies is critical. |

### Non‑obvious insight

A high score can mask *model brittleness*: if the vendor tuned hyperparameters on a narrow distribution, the learned decision boundary may be highly non‑convex and overfit. In practice this manifests as “good on paper, bad in production.” Always probe the model’s *generalization* by feeding it *adversarial* or *domain‑shifted* code snippets before trusting the headline number.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
